import { useState } from 'react';
import type { EmployeeStatus } from '../types';
import { formatTime } from '../lib/format';

interface Props {
  employees: EmployeeStatus[];
  onSignInOrOut: (employeeId: string, signingIn: boolean) => Promise<void>;
  showToast: (msg: string) => void;
}

export function SignIn({ employees, onSignInOrOut, showToast }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleConfirm = async (emp: EmployeeStatus) => {
    setBusy(true);
    try {
      const signingIn = !emp.signedIn;
      await onSignInOrOut(emp.id, signingIn);
      setSelectedId(null);
      showToast(
        signingIn
          ? `${emp.name} signed in at ${formatTime(new Date().toISOString())}`
          : `${emp.name} signed out`,
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      {employees.map((emp) => (
        <div key={emp.id}>
          <div
            className={`io-row${selectedId === emp.id ? ' selected' : ''}`}
            onClick={() => setSelectedId((cur) => (cur === emp.id ? null : emp.id))}
          >
            <div className="io-row-left">
              <span className={`io-status-dot${emp.signedIn ? ' in' : ''}`} />
              <div style={{ minWidth: 0 }}>
                <div className="io-row-name">{emp.name}</div>
                <div className="io-row-caption">{emp.role}</div>
              </div>
            </div>
            <span className={`io-tag${emp.signedIn ? ' in' : ''}`}>{emp.signedIn ? 'In' : 'Out'}</span>
          </div>
          {selectedId === emp.id && (
            <div className="io-row-panel">
              <button
                className="io-btn-primary"
                disabled={busy}
                onClick={(e) => {
                  e.stopPropagation();
                  handleConfirm(emp);
                }}
              >
                {emp.signedIn ? 'Sign Out' : 'Sign In'}
              </button>
            </div>
          )}
        </div>
      ))}
      {employees.length === 0 && (
        <div className="io-empty-state">No employees yet. Add staff from the Admin tab.</div>
      )}
    </div>
  );
}
