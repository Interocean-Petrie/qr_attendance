import { useState } from 'react';
import type { MusterRosterRow } from '../hooks/useMuster';
import type { Muster as MusterType } from '../types';
import { formatTime } from '../lib/format';
import { AlertCircleIcon, CheckIcon } from '../components/Icons';

interface Props {
  occupancyCount: number;
  muster: MusterType | null;
  roster: MusterRosterRow[];
  startMuster: () => Promise<void>;
  endMuster: () => Promise<void>;
  toggleAccounted: (rosterId: string, accounted: boolean) => Promise<void>;
}

export function Muster({
  occupancyCount,
  muster,
  roster,
  startMuster,
  endMuster,
  toggleAccounted,
}: Props) {
  const [busy, setBusy] = useState(false);

  if (!muster) {
    return (
      <div className="io-muster-idle">
        <div className="io-muster-badge">
          <AlertCircleIcon size={26} color="var(--io-navy)" />
        </div>
        <div className="io-muster-heading">Start a muster</div>
        <div className="io-muster-body">
          Creates a roll call of everyone currently signed in. Use this during a fire drill or
          emergency evacuation.
        </div>
        <div className="io-muster-count">{occupancyCount} people currently signed in</div>
        <button
          className="io-btn-primary"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              await startMuster();
            } finally {
              setBusy(false);
            }
          }}
        >
          Start Muster
        </button>
      </div>
    );
  }

  const accountedCount = roster.filter((r) => r.accounted).length;
  const total = roster.length;
  const allAccounted = total > 0 && accountedCount === total;
  const progressPct = total === 0 ? 0 : Math.round((accountedCount / total) * 100);

  return (
    <div>
      <div className="io-muster-progress-wrap">
        <div className="io-muster-started">Roll call started at {formatTime(muster.started_at)}</div>
        <div className="io-muster-accounted-row">
          <span className="io-muster-accounted-label">
            {accountedCount} of {total} accounted for
          </span>
        </div>
        <div className="io-progress-track">
          <div className="io-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>
      {allAccounted && (
        <div className="io-all-accounted-banner">
          <CheckIcon size={20} color="var(--io-white)" strokeWidth={2} />
          <span style={{ color: 'var(--io-white)', fontSize: 14, fontWeight: 500 }}>
            All accounted for
          </span>
        </div>
      )}
      {roster.map((r) => (
        <div
          key={r.id}
          className={`io-muster-row${r.accounted ? ' accounted' : ''}`}
          onClick={() => toggleAccounted(r.id, r.accounted)}
        >
          <div style={{ minWidth: 0 }}>
            <div className="io-list-name">{r.name}</div>
            <div className="io-row-caption">{r.caption}</div>
          </div>
          <span className={`io-muster-circle${r.accounted ? ' accounted' : ''}`}>
            {r.accounted && <CheckIcon size={15} color="var(--io-white)" />}
          </span>
        </div>
      ))}
      <div className="io-muster-footer">
        <button
          className="io-btn-outline"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              await endMuster();
            } finally {
              setBusy(false);
            }
          }}
        >
          End Muster
        </button>
      </div>
    </div>
  );
}
