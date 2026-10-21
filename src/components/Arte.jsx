import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';
import { images } from '../data/site.js';
import Media from './Media.jsx';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';

export default function Arte() {
  const root = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return;
      const figure = root.current.querySelector('.arte__figure');
      // La foto se descubre de abajo arriba mientras se aleja.
      gsap
        .timeline({ scrollTrigger: { trigger: figure, start: 'top 80%', once: true } })
        .fromTo(
          figure,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.out' },
        )
        .from(figure.querySelector('.media'), { scale: 1.3, duration: 2, ease: 'expo.out' }, 0);
    },
    { dependencies: [ready], scope: root },
  );

  return (
    <section ref={root} className="arte section">
      <RevealText as="h2" className="display-sans">
        El arte de
        <br />
        una mirada
        <br />
        <span className="serif-italic">natural</span>
      </RevealText>
      <div className="arte__aside">
        <figure className="arte__figure">
          <Media image={images.detalle} />
        </figure>
        <Reveal as="p" className="body-text">
          Especialistas en embellecer y realzar miradas: extensiones, lifting y tinte de pestañas, y tratamientos
          específicos de cejas. Un diseño exclusivo para cada rostro.
        </Reveal>
      </div>
    </section>
  );
}
