import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';
import { images, site } from '../data/site.js';
import Media from './Media.jsx';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';

export default function Reserva() {
  const root = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return;
      gsap.fromTo(
        '.reserva__media',
        { yPercent: -10 },
        { yPercent: 10, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    },
    { dependencies: [ready], scope: root },
  );

  const hasBooksy = Boolean(site.booksyUrl);

  return (
    <section id="reserva" ref={root} className="reserva">
      <div className="reserva__media">
        <Media image={images.salon} />
      </div>
      <div className="reserva__scrim" aria-hidden="true" />
      <div className="reserva__content">
        <RevealText as="h2" className="display-sans reserva__title">
          Tu momento
          <br />
          <span className="serif-italic">empieza aquí</span>
        </RevealText>
        <Reveal stagger={0.1} className="reserva__body">
          <a className="reserva__address" href={site.mapsHref} target="_blank" rel="noopener noreferrer">
            {site.address.join(', ')}
          </a>
          <div className="button-row">
            {hasBooksy ? (
              <>
                <a className="button button--light" href={site.booksyUrl} target="_blank" rel="noopener noreferrer">
                  Reservar en Booksy
                </a>
                <a className="button button--outline" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.phone}
                </a>
              </>
            ) : (
              <>
                <a className="button button--light" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Reservar por WhatsApp
                </a>
                <a className="button button--outline" href={site.phoneHref}>
                  Llamar · {site.phone}
                </a>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
