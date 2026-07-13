import { useEffect, useState } from 'react';

const TITLES: Record<string, [string, string]> = {
  signin: ['Sign in / out', 'Tap your name to update your status'],
  occupancy: ["Who's in", 'Live building occupancy'],
  muster: ['Muster roll call', 'For use by the Fire Warden'],
  admin: ['Manage staff', 'Add or remove employees'],
};

export function Header({ tab }: { tab: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const [title, subtitle] = TITLES[tab] ?? TITLES.signin;

  return (
    <div className="io-header">
      <div className="io-header-row">
        <div className="io-header-brand">Interocean</div>
        <div className="io-header-clock">
          {now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      <div className="io-header-title">{title}</div>
      <div className="io-header-subtitle">{subtitle}</div>
    </div>
  );
}
