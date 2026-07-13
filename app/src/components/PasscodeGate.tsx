import { useState } from 'react';
import { AlertCircleIcon } from './Icons';

export function PasscodeGate({
  onUnlock,
}: {
  onUnlock: (code: string) => Promise<boolean>;
}) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!code.trim()) return;
    setBusy(true);
    setError(false);
    try {
      const ok = await onUnlock(code.trim());
      if (!ok) {
        setError(true);
        setCode('');
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="io-gate">
      <div className="io-muster-badge">
        <AlertCircleIcon size={26} color="var(--io-navy)" />
      </div>
      <div className="io-muster-heading">Restricted</div>
      <div className="io-muster-body">
        This screen is limited to Fire Wardens and admins. Enter the shared passcode to continue.
      </div>
      <input
        className="io-input"
        type="password"
        inputMode="numeric"
        placeholder="Passcode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        autoFocus
      />
      {error && <div className="io-gate-error">Incorrect passcode, try again.</div>}
      <div style={{ height: 16 }} />
      <button className="io-btn-primary" disabled={busy} onClick={submit}>
        Unlock
      </button>
    </div>
  );
}
