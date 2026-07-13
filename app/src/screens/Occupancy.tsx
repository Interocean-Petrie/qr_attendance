import { useEffect, useState } from 'react';
import type { EmployeeStatus } from '../types';
import { formatElapsed, formatTime } from '../lib/format';

export function Occupancy({ employees }: { employees: EmployeeStatus[] }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const signedIn = employees
    .filter((e) => e.signedIn)
    .sort((a, b) => new Date(a.signInAt!).getTime() - new Date(b.signInAt!).getTime());

  return (
    <div>
      <div className="io-stat-row">
        <span className="io-stat-number">{signedIn.length}</span>
        <span className="io-stat-of">of {employees.length} in the building</span>
      </div>
      <div className="io-section-label">In the building</div>
      {signedIn.length > 0 ? (
        signedIn.map((emp) => (
          <div key={emp.id} className="io-list-row">
            <div style={{ minWidth: 0 }}>
              <div className="io-list-name">{emp.name}</div>
              <div className="io-row-caption">{emp.role}</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 13, color: 'var(--io-navy)' }}>
                since {formatTime(emp.signInAt)}
              </div>
              <div style={{ fontSize: 12, color: 'var(--io-blue-grey)', marginTop: 2 }}>
                {formatElapsed(emp.signInAt, now)}
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
