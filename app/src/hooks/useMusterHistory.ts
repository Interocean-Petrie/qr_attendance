import { useCallback, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Muster } from '../types';

export function useMusterHistory() {
  const [pastMusters, setPastMusters] = useState<Muster[] | null>(null);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from('musters')
      .select('*')
      .not('ended_at', 'is', null)
      .order('started_at', { ascending: false })
      .limit(100);
    if (error) {
      console.error('Failed to load muster history', error);
      setPastMusters([]);
      return;
    }
    setPastMusters((data as Muster[]) ?? []);
  }, []);

  return { pastMusters, load };
}
