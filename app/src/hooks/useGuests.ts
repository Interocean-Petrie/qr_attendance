import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Guest } from '../types';

export function useGuests() {
  const [guests, setGuests] = useState<Guest[]>([]);

  const refresh = useCallback(async () => {
    const { data, error } = await supabase
      .from('guest_visits')
      .select('*')
      .is('signed_out_at', null)
      .order('signed_in_at', { ascending: true });
    if (error) {
      console.error('Failed to load guest_visits', error);
      return;
    }
    setGuests(data ?? []);
  }, []);

  useEffect(() => {
    refresh();
    const channel = supabase
      .channel('guest-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'guest_visits' }, refresh)
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [refresh]);

  const signInGuest = useCallback(async (name: string, company: string, host: string) => {
    const { error } = await supabase
      .from('guest_visits')
      .insert({ name, company: company || null, host });
    if (error) throw error;
  }, []);

  const signOutGuest = useCallback(async (id: string) => {
    const { error } = await supabase
      .from('guest_visits')
      .update({ signed_out_at: new Date().toISOString() })
      .eq('id', id);
    if (error) throw error;
  }, []);

  return { guests, signInGuest, signOutGuest };
}
