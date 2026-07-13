import { useEffect, useState } from 'react';
import type { Muster } from '../types';
import { fetchMusterRoster, type MusterRosterRow } from '../hooks/useMuster';
import { useMusterHistory } from '../hooks/useMusterHistory';
import { formatDate, formatDuration, formatTime } from '../lib/format';
import { CheckIcon } from '../components/Icons';

export function MusterHistory({ onBack }: { onBack: () => void }) {
  const { pastMusters, load } = useMusterHistory();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [rosterCache, setRosterCache] = useState<Record<string, MusterRosterRow[]>>({});

  useEffect(() => {
    load();
  }, [load]);

  const toggleExpand = async (muster: Muster) => {
    if (expandedId === muster.id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(muster.id);
    if (!rosterCache[muster.id]) {
      const roster = await fetchMusterRoster(muster.id);
      setRosterCache((cur) => ({ ...cur, [muster.id]: roster }));
    }
  };

  return (
    <div>
      <div className="io-admin-section">
        <button className="io-reset-link" onClick={onBack}>
          ← Back
        </button>
      </div>
      <div className="io-section-label">Past musters</div>
      {pastMusters === null && <div className="io-empty-state">Loading…</div>}
      {pastMusters?.length === 0 && (
        <div className="io-empty-state">No completed musters yet.</div>
      )}
      {pastMusters?.map((muster) => {
        const roster = rosterCache[muster.id];
        const accountedCount = roster?.filter((r) => r.accounted).length;
        return (
          <div key={muster.id}>
            <div className="io-list-row" style={{ cursor: 'pointer' }} onClick={() => toggleExpand(muster)}>
              <div style={{ minWidth: 0 }}>
                <div className="io-list-name">{formatDate(muster.started_at)}</div>
                <div className="io-row-caption">
                  Started {formatTime(muster.started_at)} · lasted{' '}
                  {formatDuration(muster.started_at, muster.ended_at!)}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, fontSize: 13, color: 'var(--io-navy)' }}>
                {roster ? `${accountedCount} of ${roster.length} accounted` : 'View'}
              </div>
            </div>
            {expandedId === muster.id && (
              <div className="io-row-panel">
                {!roster && <div style={{ fontSize: 13, color: 'var(--io-blue-grey)' }}>Loading…</div>}
                {roster?.map((r) => (
                  <div
                    key={r.id}
                    className={`io-muster-row${r.accounted ? ' accounted' : ''}`}
                    style={{ cursor: 'default', padding: '10px 0' }}
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
                {muster.notes && (
                  <div style={{ marginTop: 12 }}>
                    <div className="io-admin-eyebrow" style={{ marginBottom: 6 }}>
                      Additional people present
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--io-navy)', whiteSpace: 'pre-wrap' }}>
                      {muster.notes}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
