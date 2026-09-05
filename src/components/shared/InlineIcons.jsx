export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 30 30" fill="none">
      <path d="M6 22V13a3 3 0 0 1 3-3h6V6" stroke="#A8752E" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="9" cy="6" r="2.6" stroke="#0F3B3D" strokeWidth="2.2" />
      <path d="M15 10h6a3 3 0 0 1 3 3v9" stroke="#0F3B3D" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2.6" stroke="#A8752E" strokeWidth="2.2" />
    </svg>
  );
}

export function ServiceIcon({ name }) {
  const size = name === 'drop' ? 18 : 20;
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#A8752E',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />,
    drop: <path d="M12 2C9 6.5 6 10.8 6 14.5a6 6 0 0 0 12 0C18 10.8 15 6.5 12 2z" />,
    flame: <path d="M8 3c1 2-1 3-1 5a3 3 0 0 0 6 0c0-1-1-2-1-3 2 1 4 3.5 4 7a6 6 0 0 1-12 0c0-4 2-7 4-9z" />,
    tap: <path d="M4 12h11M11 8l4 4-4 4M15 6v2M18 6v2M18 6a2 2 0 1 0 0 4" />,
    home: <path d="M3 11l9-7 9 7M5 10v10h14V10" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#A8752E">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#FBFCFB" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.4.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
    </svg>
  );
}
