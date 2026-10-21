import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';

// Bloque que aparece con un fundido hacia arriba. Con `stagger`, anima sus hijos uno a uno.
export default function Reveal({ as: Tag = 'div', children, delay = 0, stagger = 0, y = 40, start = 'top 85%', ...rest }) {
  const ref = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return;
      const targets = stagger ? ref.current.children : ref.current;
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'expo.out',
        delay,
        stagger,
        scrollTrigger: { trigger: ref.current, start, once: true },
      });
    },
    { dependencies: [ready], scope: ref },
  );

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
