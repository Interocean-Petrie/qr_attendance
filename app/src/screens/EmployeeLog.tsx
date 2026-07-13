import { useEffect } from 'react';
import type { Employee } from '../types';
import { useEmployeeLog } from '../hooks/useEmployeeLog';
import { formatDayHeading, formatTime } from '../lib/format';

export function EmployeeLog({ employee, onBack }: { employee: Employee; onBack: () => void }) {
  const { days, load } = useEmployeeLog(employee.id);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <div className="io-admin-section">
        <button className="io-reset-link" onClick={onBack}>
          ← Back
        </button>
      </div>
      <div className="io-admin-section" style={{ borderBottom: '1px solid var(--io-border)' }}>
        <div className="io-list-name">{employee.name}</div>
        <div className="io-row-caption">{employee.role}</div>
      </div>
      <div className="io-section-label">Last 45 days</div>
      {days === null && <div className="io-empty-state">Loading…</div>}
      {days?.length === 0 && <div className="io-empty-state">No sign-ins recorded in the last 45 days.</div>}
      {days?.map((d) => (
        <div key={d.dateKey} className="io-list-row">
          <div className="io-list-name">{formatDayHeading(d.dateKey)}</div>
          <div style={{ textAlign: 'right', flexShrink: 0, fontSize: 13, color: 'var(--io-navy)' }}>
            In {d.timeIn ? formatTime(d.timeIn) : '—'} · Out {d.timeOut ? formatTime(d.timeOut) : '—'}
          </div>
        </div>
      ))}
    </div>
  );
}
