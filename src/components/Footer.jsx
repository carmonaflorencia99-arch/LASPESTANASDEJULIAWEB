import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';
import { navLinks, site } from '../data/site.js';
import AnchorLink from './AnchorLink.jsx';
import Seal from './Seal.jsx';

export default function Footer() {
  const root = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return;
      // El sello gira despacio con el scroll y el nombre grande sube al final.
      gsap.to('.footer__seal', {
        rotate: 120,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
      });
      gsap.from('.footer__wordmark', {
        yPercent: 60,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top 80%', end: 'bottom bottom', scrub: true },
      });
    },
    { dependencies: [ready], scope: root },
  );

  const social = site.social.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer ref={root} className="footer">
      <div className="footer__grid">
        <Seal className="footer__seal" />
        <div className="footer__col">
          <span className="eyebrow">Estudio</span>
          {navLinks.map((l) => (
            <AnchorLink key={l.href} href={l.href}>
              {l.label}
            </AnchorLink>
          ))}
        </div>
        <div className="footer__col">
          <span className="eyebrow">Contacto</span>
          <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
            {site.address[0]}
            <br />
            {site.address[1]}
          </a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="footer__col">
          <span className="eyebrow">Horario</span>
          {site.schedule.map((line) => (
            <span key={line}>{line}</span>
          ))}
          {social.length > 0 && (
            <>
              <span className="eyebrow footer__eyebrow-gap">Síguenos</span>
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </>
          )}
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        Las Pestañas <em>de Julia</em>
      </div>

      <div className="footer__bottom">
        <span>© {year} Las Pestañas de Julia</span>
        <span className="footer__legal">
          {/* TODO: enlazar a las páginas legales reales */}
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
        </span>
      </div>
    </footer>
  );
}
