import { useRef } from 'react';
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';
import { images } from '../data/site.js';
import Media from './Media.jsx';
import { ArrowDown } from './Icons.jsx';

export default function Hero() {
  const root = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return undefined;
      const title = root.current.querySelector('.hero__title');
      const split = SplitText.create(title, { type: 'lines', mask: 'lines' });

      // Entrada: la foto se acerca y el titular sube línea a línea.
      gsap
        .timeline({ delay: 0.1 })
        .from('.hero__media .media', { scale: 1.2, duration: 2.4, ease: 'expo.out' }, 0)
        .from(split.lines, { yPercent: 110, duration: 1.4, ease: 'expo.out', stagger: 0.12 }, 0.2)
        .from('.hero__meta > *', { autoAlpha: 0, y: 20, duration: 1, ease: 'expo.out', stagger: 0.1 }, 0.7);

      // Al hacer scroll: la foto baja más lento (parallax) y el titular sube y se desenfoca.
      const scrub = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero__media', { yPercent: 18, ease: 'none', scrollTrigger: scrub });
      gsap.to(title, { yPercent: -35, autoAlpha: 0.15, filter: 'blur(10px)', ease: 'none', scrollTrigger: { ...scrub } });

      return () => split.revert();
    },
    { dependencies: [ready], scope: root },
  );

  return (
    <section id="inicio" ref={root} className="hero">
      <div className="hero__media">
        <Media image={images.hero} loading="eager" />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__title">
          Miradas
          <br />
          <em>a medida</em>
        </h1>
        <div className="hero__meta">
          <p>Primer salón especializado en extensiones de pestañas en Valencia.</p>
          <span className="eyebrow">
            Desliza para descubrir <ArrowDown />
          </span>
        </div>
      </div>
    </section>
  );
}
