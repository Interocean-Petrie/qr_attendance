import { QRCodeSVG } from 'qrcode.react';
import logo from '../assets/logo-full.png';
import './Poster.css';

export function Poster() {
  const signInUrl = `${window.location.origin}${window.location.pathname}`;

  return (
    <div className="poster-page">
      <div className="poster-sheet">
        <img src={logo} alt="Interocean" className="poster-logo" />
        <div className="poster-eyebrow">Site attendance</div>
        <h1 className="poster-heading">Sign in / sign out</h1>
        <p className="poster-copy">
          Scan the code below with your phone camera to sign in or out of the building.
        </p>

        <div className="poster-qr-card">
          <QRCodeSVG value={signInUrl} size={360} fgColor="#2A4066" bgColor="#FFFFFF" level="M" />
        </div>
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <div style={{ fontSize: 14, color: 'var(--io-blue-grey)' }}>Or visit</div>
          <div className="poster-url" style={{ marginTop: 4 }}>
            {signInUrl.replace(/^https?:\/\//, '')}
          </div>
        </div>

        <div className="poster-divider" />

        <div className="poster-fire-warden">
          <strong>For Fire Wardens</strong>
          During a muster, open the same address and select the Muster tab to run a roll call of
          everyone signed in.
        </div>

        <div className="poster-footer">Interocean Marine Services &middot; Office Attendance System</div>
      </div>
    </div>
  );
}
