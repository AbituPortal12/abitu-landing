export const Icon = ({ children, className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const ArrowRight = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

export const ArrowLeft = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </Icon>
);

export const Check = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="m5 12 4 4L19 6" />
  </Icon>
);

export const Chart = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3-4 3 2 5-7" />
  </Icon>
);

export const Calculator = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
  </Icon>
);

export const Menu = ({ className = "w-6 h-6" }) => (
  <Icon className={className}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Icon>
);

export const X = ({ className = "w-6 h-6" }) => (
  <Icon className={className}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </Icon>
);

export const Mail = ({ className = "w-4 h-4" }) => (
  <Icon className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

export const Phone = ({ className = "w-4 h-4" }) => (
  <Icon className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Icon>
);
