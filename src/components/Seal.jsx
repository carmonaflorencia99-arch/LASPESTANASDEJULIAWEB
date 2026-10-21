// Sello circular de la marca (inspirado en el sello «clásico beige»).
// El texto rodea todo el círculo y se ajusta con textLength, así nunca se corta
// aunque cambie la fuente.
const RADIUS = 72;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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
        {/* Círculo completo que empieza arriba y va en el sentido de las agujas del reloj */}
        <path
          id="seal-ring"
          d={`M 100 ${100 - RADIUS} a ${RADIUS} ${RADIUS} 0 1 1 0 ${RADIUS * 2} a ${RADIUS} ${RADIUS} 0 1 1 0 ${-RADIUS * 2}`}
        />
      </defs>
      <circle cx="100" cy="100" r="96" fill={fill} />
      <circle cx="100" cy="100" r="54" fill="none" stroke={ink} strokeWidth="0.8" opacity="0.6" />
      <text fill={ink} fontFamily="Cormorant Garamond, Georgia, serif" fontSize="15" fontWeight="500">
        <textPath href="#seal-ring" textLength={CIRCUMFERENCE - 6} lengthAdjust="spacing">
          LAS PESTAÑAS DE JULIA · VALENCIA ·
        </textPath>
      </text>
      <g fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round">
        <path d="M74 96 Q100 112 126 96" />
        <path d="M79 100.5 l-3 7M88 104 l-2 8M100 105.5 v8M112 104 l2 8M121 100.5 l3 7" />
      </g>
    </svg>
  );
}
