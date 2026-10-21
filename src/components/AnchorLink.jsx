import { scrollToTarget, unlockScroll } from '../lib/scroll.js';

// Enlace que hace scroll suave a una sección (#id) y abre fuera los externos.
export default function AnchorLink({ href, onNavigate, children, ...rest }) {
  const isHash = href?.startsWith('#');
  const isExternal = /^https?:/.test(href || '');

  const handleClick = (e) => {
    if (!isHash) return;
    e.preventDefault();
    if (onNavigate) {
      // Si se navega desde el menú abierto, el scroll está bloqueado: se libera antes.
      unlockScroll();
      onNavigate();
    }
    scrollToTarget(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
