import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/gsap.js';
import { setLenis, getLenis } from './lib/scroll.js';
import { ReadyContext } from './lib/ready.js';

import Preloader from './components/Preloader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Quote from './components/Quote.jsx';
import Arte from './components/Arte.jsx';
import ServiceSpots from './components/ServiceSpots.jsx';
import Services from './components/Services.jsx';
import Julia from './components/Julia.jsx';
import Reserva from './components/Reserva.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [reduced] = useState(prefersReducedMotion);
  const [ready, setReady] = useState(reduced);

  // Scroll suave (Lenis) sincronizado con GSAP ScrollTrigger.
  useEffect(() => {
    if (reduced) return undefined;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduced]);

  // Bloquea el scroll mientras se ve la pantalla de carga.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    if (ready) lenis.start();
    else lenis.stop();
  }, [ready]);

  // Recalcula posiciones cuando terminan de cargar fotos y fuentes.
  useEffect(() => {
    if (!ready) return undefined;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 400);
    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
    };
  }, [ready]);

  return (
    <ReadyContext.Provider value={ready}>
      {!reduced && <Preloader onDone={() => setReady(true)} />}
      <Header />
      <main>
        <Hero />
        <Quote />
        <Arte />
        <ServiceSpots />
        <Services />
        <Julia />
        <Reserva />
        <Faq />
      </main>
      <Footer />
    </ReadyContext.Provider>
  );
}
