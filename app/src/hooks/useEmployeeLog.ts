import { useCallback, useState } from 'react';
import { supabase } from '../lib/supabase';
import { localDateKey } from '../lib/format';

const RETENTION_DAYS = 45;

export interface DailyRecord {
  dateKey: string;
  timeIn: string | null;
  timeOut: string | null;
}

export function useEmployeeLog(employeeId: string) {
  const [days, setDays] = useState<DailyRecord[] | null>(null);

  const load = useCallback(async () => {
    const cutoff = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await supabase
      .from('attendance_events')
      .select('event_type, created_at')
      .eq('employee_id', employeeId)
      .gte('created_at', cutoff)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Failed to load employee log', error);
      setDays([]);
      return;
    }

    const byDay = new Map<string, DailyRecord>();
    for (const e of data ?? []) {
      const key = localDateKey(e.created_at);
      const rec = byDay.get(key) ?? { dateKey: key, timeIn: null, timeOut: null };
      if (e.event_type === 'sign_in') {
        if (!rec.timeIn || e.created_at < rec.timeIn) rec.timeIn = e.created_at;
      } else {
        if (!rec.timeOut || e.created_at > rec.timeOut) rec.timeOut = e.created_at;
      }
      byDay.set(key, rec);
    }

    setDays(Array.from(byDay.values()).sort((a, b) => b.dateKey.localeCompare(a.dateKey)));
  }, [employeeId]);

  return { days, load };
}
