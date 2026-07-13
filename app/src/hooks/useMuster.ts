import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Muster, EmployeeStatus, Guest } from '../types';

export interface MusterRosterRow {
  id: string;
  accounted: boolean;
  name: string;
  caption: string;
}

export function useMuster(signedInEmployees: EmployeeStatus[], onSiteGuests: Guest[]) {
  const [muster, setMuster] = useState<Muster | null>(null);
  const [roster, setRoster] = useState<MusterRosterRow[]>([]);

  const refresh = useCallback(async () => {
    const { data: activeMuster, error: musterError } = await supabase
      .from('musters')
      .select('*')
      .is('ended_at', null)
      .order('started_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (musterError) {
      console.error('Failed to load muster', musterError);
      return;
    }

    setMuster(activeMuster ?? null);

    if (!activeMuster) {
      setRoster([]);
      return;
    }

    const { data: rosterRows, error: rosterError } = await supabase
      .from('muster_roster')
      .select('id, accounted, employees(name, role), guest_visits(name, company, host)')
      .eq('muster_id', activeMuster.id);

    if (rosterError) {
      console.error('Failed to load muster roster', rosterError);
      return;
    }

    setRoster(
      (rosterRows ?? []).map((r: any) => {
        if (r.employees) {
          return { id: r.id, accounted: r.accounted, name: r.employees.name, caption: r.employees.role };
        }
        const guest = r.guest_visits;
        return {
          id: r.id,
          accounted: r.accounted,
          name: guest?.name ?? 'Unknown guest',
          caption: guest ? `Guest · visiting ${guest.host}` : 'Guest',
        };
      }),
    );
  }, []);

  useEffect(() => {
    refresh();
    const channel = supabase
      .channel('muster-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'musters' }, refresh)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'muster_roster' }, refresh)
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [refresh]);

  const startMuster = useCallback(async () => {
    const { data: newMuster, error } = await supabase
      .from('musters')
      .insert({})
      .select()
      .single();
    if (error || !newMuster) throw error;

    const rows = [
      ...signedInEmployees.map((e) => ({ muster_id: newMuster.id, employee_id: e.id })),
      ...onSiteGuests.map((g) => ({ muster_id: newMuster.id, guest_visit_id: g.id })),
    ];
    if (rows.length > 0) {
      const { error: rosterError } = await supabase.from('muster_roster').insert(rows);
      if (rosterError) throw rosterError;
    }
  }, [signedInEmployees, onSiteGuests]);

  const endMuster = useCallback(async () => {
    if (!muster) return;
    const { error } = await supabase
      .from('musters')
      .update({ ended_at: new Date().toISOString() })
      .eq('id', muster.id);
    if (error) throw error;
  }, [muster]);

  const toggleAccounted = useCallback(async (rosterId: string, accounted: boolean) => {
    const { error } = await supabase
      .from('muster_roster')
      .update({ accounted: !accounted, accounted_at: !accounted ? new Date().toISOString() : null })
      .eq('id', rosterId);
    if (error) throw error;
  }, []);

  return { muster, roster, startMuster, endMuster, toggleAccounted };
}
