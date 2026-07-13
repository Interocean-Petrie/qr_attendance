interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function LogInIcon({ size = 21, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}

export function UsersIcon({ size = 21, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function AlertCircleIcon({ size = 21, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export function SlidersIcon({ size = 21, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <line x1="21" y1="4" x2="14" y2="4" />
      <line x1="10" y1="4" x2="3" y2="4" />
      <line x1="21" y1="12" x2="12" y2="12" />
      <line x1="8" y1="12" x2="3" y2="12" />
      <line x1="21" y1="20" x2="16" y2="20" />
      <line x1="12" y1="20" x2="3" y2="20" />
      <line x1="14" y1="2" x2="14" y2="6" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="16" y1="18" x2="16" y2="22" />
    </svg>
  );
}

export function CheckIcon({ size = 15, color = 'currentColor', strokeWidth = 2.5 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function PlusIcon({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function TrashIcon({ size = 17, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth={strokeWidth}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}
