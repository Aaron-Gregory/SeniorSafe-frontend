// Simple line-style icon set — single-stroke, 24px viewBox, currentColor
const Icon = ({ children, size = 24, stroke = 1.75, ...rest }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke}
    strokeLinecap="round" strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

const IconShield = (p) => (
  <Icon {...p}>
    <path d="M12 3l8 3v5c0 4.6-3.2 8.7-8 10-4.8-1.3-8-5.4-8-10V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

const IconAlert = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5" />
    <circle cx="12" cy="16.2" r=".6" fill="currentColor" stroke="none" />
  </Icon>
);

const IconPill = (p) => (
  <Icon {...p}>
    <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" />
    <path d="M9.5 8L14.5 16" transform="rotate(-30 12 12)" />
  </Icon>
);

const IconMap = (p) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);

const IconHeart = (p) => (
  <Icon {...p}>
    <path d="M20.4 7.4a5 5 0 0 0-8.4-1.7 5 5 0 0 0-8.4 1.7c-1 3.1 1.1 6.1 3.5 8.3l4.9 4.5 4.9-4.5c2.4-2.2 4.5-5.2 3.5-8.3z" />
  </Icon>
);

const IconPhone = (p) => (
  <Icon {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Icon>
);

const IconChat = (p) => (
  <Icon {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.8A8 8 0 1 1 21 12z" />
    <path d="M9 11h6M9 14h4" />
  </Icon>
);

const IconUsers = (p) => (
  <Icon {...p}>
    <circle cx="9" cy="9" r="3.2" />
    <path d="M3 19c.6-3 3-5 6-5s5.4 2 6 5" />
    <circle cx="17" cy="8.5" r="2.5" />
    <path d="M21 17c-.4-2-1.8-3.4-4-3.8" />
  </Icon>
);

const IconWatch = (p) => (
  <Icon {...p}>
    <rect x="6" y="6" width="12" height="12" rx="3.5" />
    <path d="M9 6V3h6v3M9 18v3h6v-3M12 9v3l2 1.5" />
  </Icon>
);

const IconCheck = (p) => (
  <Icon {...p}>
    <path d="M4 12l5 5L20 6" />
  </Icon>
);

const IconArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

const IconPlus = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

const IconStar = (p) => (
  <Icon {...p} stroke={0}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.5 1.2 6.5L12 17.3 6.1 20.4l1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor" />
  </Icon>
);

const IconMail = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7l8 6 8-6" />
  </Icon>
);

const IconPin = (p) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);

const IconBell = (p) => (
  <Icon {...p}>
    <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Icon>
);

const IconFall = (p) => (
  <Icon {...p}>
    <circle cx="9" cy="5" r="2" />
    <path d="M3 19l5-6 3 3 5-3M14 14l4 5" />
  </Icon>
);

const IconCalendar = (p) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Icon>
);

const IconLock = (p) => (
  <Icon {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Icon>
);

const IconHome = (p) => (
  <Icon {...p}>
    <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  </Icon>
);

// Brand mark — original shield with heart pulse line
const BrandLogo = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <defs>
      <linearGradient id="bgrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--teal-400)" />
        <stop offset="1" stopColor="var(--teal-600)" />
      </linearGradient>
    </defs>
    <path d="M20 3l13 5v9c0 8-5.4 14.5-13 16.5C12.4 31.5 7 25 7 17V8l13-5z"
          fill="url(#bgrad)" />
    <path d="M11.5 19h3l2-3 3 7 2-4h6.5"
          stroke="#ffffff" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

Object.assign(window, {
  Icon,
  IconShield, IconAlert, IconPill, IconMap, IconHeart, IconPhone, IconChat,
  IconUsers, IconWatch, IconCheck, IconArrowRight, IconPlus, IconStar,
  IconMail, IconPin, IconBell, IconFall, IconCalendar, IconLock, IconHome,
  BrandLogo,
});
