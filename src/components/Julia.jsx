import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';
import { images } from '../data/site.js';
import Media from './Media.jsx';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';

export default function Julia() {
  const root = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return;
      gsap.fromTo(
        '.julia__parallax',
        { yPercent: -8 },
        { yPercent: 8, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    },
    { dependencies: [ready], scope: root },
  );

  return (
    <section id="julia" ref={root} className="julia">
      <figure className="julia__figure">
        <div className="julia__parallax">
          <Media image={images.julia} tone="salvia" />
        </div>
      </figure>
      <div className="julia__text">
        <span className="eyebrow">La fundadora</span>
        <RevealText as="h2" className="display-serif">
          Las manos <em>detrás</em> de cada mirada
        </RevealText>
        <Reveal stagger={0.12} className="julia__body">
          <p className="body-text">
            Julia fundó el primer salón de Valencia especializado en extensiones de pestañas. Artista en pestañas y
            micropigmentación, recibe clientas de distintas partes del mundo que vienen para
            que sea ella quien perfeccione su mirada.
          </p>
          <p className="body-text">Los trabajos de micropigmentación solo pasan por sus manos.</p>
        </Reveal>
      </div>
    </section>
  );
}
