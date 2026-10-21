import { useRef } from 'react';
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { useReady } from '../lib/ready.js';

// Texto que aparece línea a línea, subiendo desde una máscara, al entrar en pantalla.
export default function RevealText({ as: Tag = 'div', children, delay = 0, start = 'top 85%', ...rest }) {
  const ref = useRef(null);
  const ready = useReady();

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return undefined;
      const split = SplitText.create(ref.current, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.2,
            ease: 'expo.out',
            stagger: 0.09,
            delay,
            scrollTrigger: { trigger: ref.current, start, once: true },
          }),
      });
      return () => split.revert();
    },
    { dependencies: [ready], scope: ref },
  );

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
