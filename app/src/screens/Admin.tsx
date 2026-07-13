import { useState } from 'react';
import type { EmployeeStatus } from '../types';
import { PlusIcon, TrashIcon } from '../components/Icons';
import { EmployeeLog } from './EmployeeLog';

interface Props {
  employees: EmployeeStatus[];
  addEmployee: (name: string, role: string) => Promise<void>;
  removeEmployee: (id: string) => Promise<void>;
}

export function Admin({ employees, addEmployee, removeEmployee }: Props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [busy, setBusy] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [viewingLog, setViewingLog] = useState<EmployeeStatus | null>(null);

  const handleAdd = async () => {
    const trimmedName = name.trim();
    const trimmedRole = role.trim();
    if (!trimmedName || !trimmedRole) return;
    setBusy(true);
    try {
      await addEmployee(trimmedName, trimmedRole);
      setName('');
      setRole('');
    } finally {
      setBusy(false);
    }
  };

  const handleRemove = async (id: string) => {
    setRemovingId(id);
    try {
      await removeEmployee(id);
    } finally {
      setRemovingId(null);
    }
  };

  if (viewingLog) {
    return <EmployeeLog employee={viewingLog} onBack={() => setViewingLog(null)} />;
  }

  return (
    <div>
      <div className="io-admin-section">
        <div className="io-admin-eyebrow">Add employee</div>
        <input
          className="io-input"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="io-input"
          placeholder="Job title"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button className="io-btn-primary with-icon" disabled={busy} onClick={handleAdd}>
          <PlusIcon />
          Add Employee
        </button>
      </div>
      <div className="io-section-label">Staff ({employees.length})</div>
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="io-list-row"
          style={{ cursor: 'pointer' }}
          onClick={() => setViewingLog(emp)}
        >
          <div style={{ minWidth: 0 }}>
            <div className="io-list-name">{emp.name}</div>
            <div className="io-row-caption">{emp.role}</div>
          </div>
          <button
            className="io-remove-btn"
            disabled={removingId === emp.id}
            onClick={(e) => {
              e.stopPropagation();
              handleRemove(emp.id);
            }}
          >
            <TrashIcon />
          </button>
        </div>
      ))}
    </div>
  );
}
