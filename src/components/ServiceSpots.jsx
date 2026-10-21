import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';
import { images, services } from '../data/site.js';
import Media from './Media.jsx';
import AnchorLink from './AnchorLink.jsx';

const MARQUEE_TEXT = 'Belleza en cada pestaña · Belleza en cada pestaña · ';

// Cinta de texto infinita + foto de la modelo con puntos numerados que llevan a cada servicio.
export default function ServiceSpots() {
  const root = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return;

      // Cinta: avanza sola y acelera con la velocidad del scroll.
      const loop = gsap.to('.marquee__track', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = Math.min(Math.abs(self.getVelocity()) / 350, 5);
          gsap.to(loop, {
            timeScale: 1 + boost,
            duration: 0.2,
            overwrite: true,
            onComplete: () => gsap.to(loop, { timeScale: 1, duration: 1.2, overwrite: true }),
          });
        },
      });

      // Foto y puntos.
      const figure = root.current.querySelector('.spots__figure');
      gsap
        .timeline({ scrollTrigger: { trigger: figure, start: 'top 75%', once: true } })
        .fromTo(
          figure,
          { clipPath: 'inset(12% 12% 12% 12%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.out' },
        )
        .from(figure.querySelector('.media'), { scale: 1.2, duration: 2, ease: 'expo.out' }, 0)
        .from('.spot__dot', { scale: 0, duration: 0.8, ease: 'back.out(2)', stagger: 0.1 }, 0.6);
    },
    { dependencies: [ready], scope: root },
  );

  return (
    <section ref={root} className="spots">
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>{MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT}</span>
        </div>
      </div>
      <div className="spots__stage">
        <figure className="spots__figure">
          <Media image={images.modelo} tone="rosa" />
          {services
            .filter((s) => s.spot)
            .map((s) => (
              <AnchorLink
                key={s.n}
                href={`#servicio-${s.n}`}
                className={`spot ${s.spot.x > 50 ? 'spot--right' : ''}`}
                style={{ left: `${s.spot.x}%`, top: `${s.spot.y}%` }}
                aria-label={`${s.n} ${s.name}`}
              >
                <span className="spot__dot">{s.n}</span>
                <span className="spot__label" aria-hidden="true">
                  {s.name}
                </span>
              </AnchorLink>
            ))}
        </figure>
      </div>
    </section>
  );
}
