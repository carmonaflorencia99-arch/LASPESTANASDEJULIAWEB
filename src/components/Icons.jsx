export function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" />
    </svg>
  );
}

export function ArrowDown({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M8 1v13M3 9l5 5 5-5" />
    </svg>
  );
}

// Mano que pulsa: invita a tocar los puntos de la foto.
export function TapHand({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 10.5V9.5a1.5 1.5 0 0 1 3 0v1.5" />
      <path d="M15 11a1.5 1.5 0 0 1 3 0v3.5a6 6 0 0 1-6 6h-1a6 6 0 0 1-4.6-2.2L4 15.5a1.5 1.5 0 0 1 2.3-1.9L9 16" />
      <path d="M5.5 4.5 4 3M10.5 1.5V0.5M15.5 4.5 17 3" />
    </svg>
  );
}

// Pestañas cerradas: el motivo de los sellos.
export function LashMark({ width = 220, className = '' }) {
  return (
    <svg className={className} width={width} viewBox="0 0 220 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M10 14 Q110 62 210 14" />
      <path d="M30 24 l-6 14" />
      <path d="M50 31 l-4 16" />
      <path d="M70 36 l-3 17" />
      <path d="M90 39 l-1 17" />
      <path d="M110 40 v17" />
      <path d="M130 39 l1 17" />
      <path d="M150 36 l3 17" />
      <path d="M170 31 l4 16" />
      <path d="M190 24 l6 14" />
    </svg>
  );
}
