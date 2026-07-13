import { useCallback, useState } from 'react';
import { supabase } from '../lib/supabase';

const SESSION_KEY = 'io-admin-unlocked';

export function useAdminGate() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');

  const tryUnlock = useCallback(async (passcode: string) => {
    const { data, error } = await supabase
      .from('app_settings')
      .select('value')
      .eq('key', 'admin_passcode')
      .single();
    if (error || !data) return false;
    const ok = data.value === passcode;
    if (ok) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
    }
    return ok;
  }, []);

  return { unlocked, tryUnlock };
}
