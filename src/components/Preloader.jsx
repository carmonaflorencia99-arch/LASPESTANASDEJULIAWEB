import { useRef, useState } from 'react';
import { gsap, useGSAP } from '../lib/gsap.js';
import { LashMark } from './Icons.jsx';

// Pantalla de carga: se dibujan las pestañas, aparece el nombre y la cortina sube.
export default function Preloader({ onDone }) {
  const root = useRef(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const paths = root.current.querySelectorAll('.preloader__lash path');
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({ paused: true });
      tl.to(paths[0], { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' })
        .to([...paths].slice(1), { strokeDashoffset: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }, '-=0.35')
        .from('.preloader__word', { yPercent: 110, duration: 1, ease: 'expo.out' }, '-=0.25')
        .to({}, { duration: 0.35 })
        .add(() => onDone())
        .to(root.current, { yPercent: -100, duration: 1.15, ease: 'expo.inOut' })
        .add(() => setGone(true));

      // Espera a las fuentes (máx. 2,5 s) para que los textos se partan bien en líneas.
      let cancelled = false;
      const fonts = document.fonts?.ready ?? Promise.resolve();
      const timeout = new Promise((resolve) => setTimeout(resolve, 2500));
      Promise.race([fonts, timeout]).then(() => {
        if (!cancelled) tl.play();
      });
      return () => {
        cancelled = true;
      };
    },
    { scope: root },
  );

  if (gone) return null;

  return (
    <div ref={root} className="preloader" aria-hidden="true">
      <LashMark className="preloader__lash" width={180} />
      <div className="preloader__mask">
        <span className="preloader__word">
          Las Pestañas <em>de Julia</em>
        </span>
      </div>
    </div>
  );
}
