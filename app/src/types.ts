export interface Employee {
  id: string;
  name: string;
  role: string;
}

export interface EmployeeStatus extends Employee {
  signedIn: boolean;
  signInAt: string | null;
}

export interface Muster {
  id: string;
  started_at: string;
  ended_at: string | null;
}

export interface MusterRosterEntry {
  id: string;
  muster_id: string;
  employee_id: string;
  accounted: boolean;
  accounted_at: string | null;
}
