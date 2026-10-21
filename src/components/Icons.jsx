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
