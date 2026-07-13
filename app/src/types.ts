export interface Employee {
  id: string;
  name: string;
  role: string;
}

export interface EmployeeStatus extends Employee {
  signedIn: boolean;
  signInAt: string | null;
}

export interface Guest {
  id: string;
  name: string;
  company: string | null;
  host: string;
  signed_in_at: string;
  signed_out_at: string | null;
}

export interface Muster {
  id: string;
  started_at: string;
  ended_at: string | null;
  notes: string | null;
}

/** A person currently in the building — either staff or a guest, unified for Occupancy/Muster. */
export interface Occupant {
  id: string;
  kind: 'employee' | 'guest';
  name: string;
  caption: string;
  signInAt: string;
}
