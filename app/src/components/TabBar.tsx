import { LogInIcon, UsersIcon, AlertCircleIcon, SlidersIcon } from './Icons';

export type Tab = 'signin' | 'occupancy' | 'muster' | 'admin';

const TABS: { key: Tab; label: string; Icon: typeof LogInIcon }[] = [
  { key: 'signin', label: 'Sign in/out', Icon: LogInIcon },
  { key: 'occupancy', label: 'Occupancy', Icon: UsersIcon },
  { key: 'muster', label: 'Muster', Icon: AlertCircleIcon },
  { key: 'admin', label: 'Admin', Icon: SlidersIcon },
];

export function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="io-tabbar">
      {TABS.map(({ key, label, Icon }) => (
        <button
          key={key}
          className={`io-tab${active === key ? ' active' : ''}`}
          onClick={() => onChange(key)}
        >
          <Icon />
          <span className="io-tab-label">{label}</span>
        </button>
      ))}
    </div>
  );
}
