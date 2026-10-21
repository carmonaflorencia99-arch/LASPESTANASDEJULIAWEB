import { useRef } from 'react';
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';

// Cita fijada en pantalla que se ilumina palabra a palabra con el scroll.
export default function Quote() {
  const root = useRef(null);
  const text = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return undefined;
      const split = SplitText.create(text.current, { type: 'words' });
      gsap
        .timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: '+=120%', scrub: 0.6, pin: true },
        })
        .fromTo(split.words, { opacity: 0.14 }, { opacity: 1, stagger: 0.12, ease: 'none' })
        .from('.quote__author', { autoAlpha: 0, y: 16, duration: 0.6 }, '-=0.3');
      return () => split.revert();
    },
    { dependencies: [ready], scope: root },
  );

  return (
    <section ref={root} className="quote" aria-label="Filosofía del salón">
      <div className="quote__inner">
        <span className="quote__mark" aria-hidden="true">
          “
        </span>
        <p ref={text} className="quote__text">
          Trabajamos cada mirada como un <em>traje a medida</em>: natural o intensa, siempre tuya.
        </p>
        <span className="eyebrow quote__author">Julia · fundadora</span>
      </div>
    </section>
  );
}
