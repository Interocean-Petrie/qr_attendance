import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TabBar, type Tab } from './components/TabBar';
import { Toast } from './components/Toast';
import { PasscodeGate } from './components/PasscodeGate';
import { SignIn } from './screens/SignIn';
import { Occupancy } from './screens/Occupancy';
import { Muster } from './screens/Muster';
import { Admin } from './screens/Admin';
import { useAttendance } from './hooks/useAttendance';
import { useMuster } from './hooks/useMuster';
import { useToast } from './hooks/useToast';
import { useAdminGate } from './hooks/useAdminGate';

function App() {
  const [tab, setTab] = useState<Tab>('signin');
  const { employees, signInOrOut, addEmployee, removeEmployee } = useAttendance();
  const signedInEmployees = employees.filter((e) => e.signedIn);
  const { muster, roster, startMuster, endMuster, toggleAccounted } = useMuster(signedInEmployees);
  const { toastMessage, showToast } = useToast();
  const { unlocked, tryUnlock } = useAdminGate();

  const restricted = tab === 'muster' || tab === 'admin';
  const showGate = restricted && !unlocked;

  return (
    <div className="app-shell">
      <Header tab={tab} />
      <div className="io-content">
        {showGate ? (
          <PasscodeGate onUnlock={tryUnlock} />
        ) : (
          <>
            {tab === 'signin' && (
              <SignIn employees={employees} onSignInOrOut={signInOrOut} showToast={showToast} />
            )}
            {tab === 'occupancy' && <Occupancy employees={employees} />}
            {tab === 'muster' && (
              <Muster
                signedInEmployees={signedInEmployees}
                muster={muster}
                roster={roster}
                startMuster={startMuster}
                endMuster={endMuster}
                toggleAccounted={toggleAccounted}
              />
            )}
            {tab === 'admin' && (
              <Admin employees={employees} addEmployee={addEmployee} removeEmployee={removeEmployee} />
            )}
          </>
        )}
      </div>
      <Toast message={toastMessage} />
      <TabBar active={tab} onChange={setTab} />
    </div>
  );
}

export default App;
