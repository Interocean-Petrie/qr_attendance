import { useState } from 'react';
import type { EmployeeStatus, Guest } from '../types';
import { SignIn } from './SignIn';
import { GuestSignIn } from './GuestSignIn';

type Mode = '' | 'employee' | 'guest';

interface Props {
  employees: EmployeeStatus[];
  onSignInOrOut: (employeeId: string, signingIn: boolean) => Promise<void>;
  guests: Guest[];
  signInGuest: (name: string, company: string, host: string) => Promise<void>;
  signOutGuest: (id: string) => Promise<void>;
  showToast: (msg: string) => void;
}

export function SignInLanding({
  employees,
  onSignInOrOut,
  guests,
  signInGuest,
  signOutGuest,
  showToast,
}: Props) {
  const [mode, setMode] = useState<Mode>('');

  return (
    <div>
      <div className="io-landing-picker">
        <select
          className="io-input"
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
        >
          <option value="" disabled>
            I am a...
          </option>
          <option value="employee">Employee</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      {mode === 'employee' && (
        <SignIn employees={employees} onSignInOrOut={onSignInOrOut} showToast={showToast} />
      )}
      {mode === 'guest' && (
        <GuestSignIn
          guests={guests}
          signInGuest={signInGuest}
          signOutGuest={signOutGuest}
          showToast={showToast}
        />
      )}
    </div>
  );
}
