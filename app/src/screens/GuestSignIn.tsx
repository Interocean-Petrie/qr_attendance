import { useState } from 'react';
import type { Guest } from '../types';
import { formatTime } from '../lib/format';

interface Props {
  guests: Guest[];
  signInGuest: (name: string, company: string, host: string) => Promise<void>;
  signOutGuest: (id: string) => Promise<void>;
  showToast: (msg: string) => void;
}

export function GuestSignIn({ guests, signInGuest, signOutGuest, showToast }: Props) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [host, setHost] = useState('');
  const [busy, setBusy] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSignIn = async () => {
    const trimmedName = name.trim();
    const trimmedHost = host.trim();
    if (!trimmedName || !trimmedHost) return;
    setBusy(true);
    try {
      await signInGuest(trimmedName, company.trim(), trimmedHost);
      showToast(`${trimmedName} signed in at ${formatTime(new Date().toISOString())}`);
      setName('');
      setCompany('');
      setHost('');
    } finally {
      setBusy(false);
    }
  };

  const handleSignOut = async (guest: Guest) => {
    setBusy(true);
    try {
      await signOutGuest(guest.id);
      setSelectedId(null);
      showToast(`${guest.name} signed out`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <div className="io-admin-section">
        <div className="io-admin-eyebrow">Sign in a guest</div>
        <input
          className="io-input"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="io-input"
          placeholder="Company (optional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="io-input"
          placeholder="Person visiting"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />
        <button className="io-btn-primary" disabled={busy} onClick={handleSignIn}>
          Sign In
        </button>
      </div>
      <div className="io-section-label">On site ({guests.length})</div>
      {guests.length > 0 ? (
        guests.map((guest) => (
          <div key={guest.id}>
            <div
              className={`io-row${selectedId === guest.id ? ' selected' : ''}`}
              onClick={() => setSelectedId((cur) => (cur === guest.id ? null : guest.id))}
            >
              <div style={{ minWidth: 0 }}>
                <div className="io-row-name">{guest.name}</div>
                <div className="io-row-caption">
                  {guest.company ? `${guest.company} · ` : ''}Visiting {guest.host}
                </div>
              </div>
              <span className="io-tag in">Guest</span>
            </div>
            {selectedId === guest.id && (
              <div className="io-row-panel">
                <button
                  className="io-btn-primary"
                  disabled={busy}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSignOut(guest);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="io-empty-state">No guests currently on site.</div>
      )}
    </div>
  );
}
