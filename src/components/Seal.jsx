// Sello circular de la marca (versión «clásico beige» de los sellos).
export default function Seal({ size = 148, fill = '#DED0BD', ink = '#5E4431', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Sello Las Pestañas de Julia, Valencia"
    >
      <defs>
        <path id="seal-arc-top" d="M 30 100 A 70 70 0 0 1 170 100" />
        <path id="seal-arc-bottom" d="M 40 112 A 62 62 0 0 0 160 112" />
      </defs>
      <circle cx="100" cy="100" r="96" fill={fill} />
      <text fill={ink} fontFamily="Cormorant Garamond, serif" fontSize="17" letterSpacing="4">
        <textPath href="#seal-arc-top" startOffset="50%" textAnchor="middle">
          LAS PESTAÑAS DE JULIA
        </textPath>
      </text>
      <text fill={ink} fontFamily="Jost, sans-serif" fontSize="9" letterSpacing="4">
        <textPath href="#seal-arc-bottom" startOffset="50%" textAnchor="middle">
          VALENCIA
        </textPath>
      </text>
      <g fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round">
        <path d="M70 96 Q100 114 130 96" />
        <path d="M76 101 l-3 7M86 105 l-2 8M100 107 v8M114 105 l2 8M124 101 l3 7" />
      </g>
    </svg>
  );
}
