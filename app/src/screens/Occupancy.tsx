import { useEffect, useState } from 'react';
import type { EmployeeStatus, Guest, Occupant } from '../types';
import { formatElapsed, formatTime } from '../lib/format';

interface Props {
  employees: EmployeeStatus[];
  guests: Guest[];
}

export function Occupancy({ employees, guests }: Props) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const signedInEmployees = employees.filter((e) => e.signedIn);

  const occupants: Occupant[] = [
    ...signedInEmployees.map((e) => ({
      id: e.id,
      kind: 'employee' as const,
      name: e.name,
      caption: e.role,
      signInAt: e.signInAt!,
    })),
    ...guests.map((g) => ({
      id: g.id,
      kind: 'guest' as const,
      name: g.name,
      caption: `Guest · visiting ${g.host}`,
      signInAt: g.signed_in_at,
    })),
  ].sort((a, b) => new Date(a.signInAt).getTime() - new Date(b.signInAt).getTime());

  return (
    <div>
      <div className="io-stat-row">
        <span className="io-stat-number">{occupants.length}</span>
        <span className="io-stat-of">in the building</span>
      </div>
      <div className="io-split-stats">
        <div className="io-split-card">
          <div className="io-split-count">{signedInEmployees.length}</div>
          <div className="io-split-label">Staff</div>
        </div>
        <div className="io-split-card">
          <div className="io-split-count">{guests.length}</div>
          <div className="io-split-label">Guests</div>
        </div>
      </div>
      <div className="io-section-label">In the building</div>
      {occupants.length > 0 ? (
        occupants.map((o) => (
          <div key={o.id} className="io-list-row">
            <div style={{ minWidth: 0 }}>
              <div className="io-list-name">{o.name}</div>
              <div className="io-row-caption">{o.caption}</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 13, color: 'var(--io-navy)' }}>
                since {formatTime(o.signInAt)}
              </div>
              <div style={{ fontSize: 12, color: 'var(--io-blue-grey)', marginTop: 2 }}>
                {formatElapsed(o.signInAt, now)}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="io-empty-state">No one is currently signed in.</div>
      )}
    </div>
  );
}
