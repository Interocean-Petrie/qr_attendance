import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { EmployeeStatus } from '../types';

export function useAttendance() {
  const [employees, setEmployees] = useState<EmployeeStatus[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const { data, error } = await supabase
      .from('employee_status')
      .select('*')
      .order('name', { ascending: true });
    if (error) {
      console.error('Failed to load employee_status', error);
      return;
    }
    setEmployees(
      (data ?? []).map((row) => ({
        id: row.id,
        name: row.name,
        role: row.role,
        signedIn: row.last_event_type === 'sign_in',
        signInAt: row.last_event_type === 'sign_in' ? row.last_event_at : null,
      })),
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const channel = supabase
      .channel('attendance-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'employees' }, refresh)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'attendance_events' }, refresh)
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [refresh]);

  const signInOrOut = useCallback(async (employeeId: string, signingIn: boolean) => {
    const { error } = await supabase
      .from('attendance_events')
      .insert({ employee_id: employeeId, event_type: signingIn ? 'sign_in' : 'sign_out' });
    if (error) throw error;
  }, []);

  const addEmployee = useCallback(async (name: string, role: string) => {
    const { error } = await supabase.from('employees').insert({ name, role });
    if (error) throw error;
  }, []);

  const removeEmployee = useCallback(async (id: string) => {
    const { error } = await supabase.from('employees').delete().eq('id', id);
    if (error) throw error;
  }, []);

  return { employees, loading, signInOrOut, addEmployee, removeEmployee };
}
