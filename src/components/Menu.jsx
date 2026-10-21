import { useEffect, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap.js';
import { lockScroll, unlockScroll } from '../lib/scroll.js';
import { navLinks, site } from '../data/site.js';
import AnchorLink from './AnchorLink.jsx';

// Menú a pantalla completa: cortina que baja y enlaces grandes que suben.
export default function Menu({ open, onClose }) {
  const root = useRef(null);
  const tl = useRef(null);
  const wasOpen = useRef(false);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(root.current, { visibility: 'visible' })
        .fromTo(
          root.current,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' },
        )
        .fromTo('.menu__link', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 0.9, stagger: 0.06, ease: 'expo.out' }, '-=0.35')
        .from('.menu__aside', { autoAlpha: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.6');
    },
    { scope: root },
  );

  useEffect(() => {
    const t = tl.current;
    if (!t) return undefined;
    if (open) {
      wasOpen.current = true;
      lockScroll();
      t.timeScale(1).play();
      root.current.querySelector('a')?.focus({ preventScroll: true });
      const onKey = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
    if (wasOpen.current) {
      t.timeScale(1.7).reverse();
      unlockScroll();
    }
    return undefined;
  }, [open, onClose]);

  const navigate = () => {
    unlockScroll();
    onClose();
  };

  return (
    <div ref={root} id="menu" className="menu" aria-hidden={!open} inert={!open}>
      <nav className="menu__nav" aria-label="Principal">
        <ul>
          {navLinks.map((l) => (
            <li key={l.href} className="menu__mask">
              <AnchorLink href={l.href} className="menu__link" onNavigate={navigate}>
                <span>{l.label}</span>
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu__aside">
        <p>
          {site.address[0]}
          <br />
          {site.address[1]}
        </p>
        <a href={site.phoneHref}>{site.phone}</a>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
