import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap.js';
import { priceGroups, site, bookingHref } from '../data/site.js';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';
import { ArrowRight } from './Icons.jsx';

// Lista de precios con pestañas por categoría (como en la web anterior).
export default function Prices() {
  const [active, setActive] = useState(priceGroups[0].id);
  const tabsRef = useRef([]);
  const panelRef = useRef(null);
  const first = useRef(true);

  // Al cambiar de categoría, las líneas entran escalonadas.
  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      if (!prefersReducedMotion()) {
        gsap.from(panelRef.current.querySelectorAll('.prices__block-title, .price-row'), {
          y: 16,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'expo.out',
          stagger: 0.025,
        });
      }
    },
    { dependencies: [active], scope: panelRef },
  );

  // La altura cambia con cada categoría: recalcula los efectos de scroll de abajo.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(t);
  }, [active]);

  // Navegación con flechas entre pestañas (patrón ARIA de pestañas).
  const onKeyDown = (e, i) => {
    const last = priceGroups.length - 1;
    let next = null;
    if (e.key === 'ArrowRight') next = i === last ? 0 : i + 1;
    if (e.key === 'ArrowLeft') next = i === 0 ? last : i - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(priceGroups[next].id);
    tabsRef.current[next]?.focus();
  };

  const group = priceGroups.find((g) => g.id === active);

  return (
    <section id="precios" className="prices section">
      <div className="prices__head">
        <RevealText as="h2" className="display-sans">
          Nuestros
          <br />
          <span className="serif-italic">precios</span>
        </RevealText>
        <Reveal className="prices__intro">
          <p className="body-text">Elige una categoría para ver sus tratamientos.</p>
          <a
            className="button button--light"
            href={bookingHref()}
            target={site.booksyUrl ? '_blank' : undefined}
            rel={site.booksyUrl ? 'noopener noreferrer' : undefined}
          >
            Reservar en Booksy <ArrowRight />
          </a>
        </Reveal>
      </div>

      <Reveal className="prices__tabs-wrap" y={20}>
        <div className="prices__tabs" role="tablist" aria-label="Categorías de precios">
          {priceGroups.map((g, i) => {
            const selected = g.id === active;
            return (
              <button
                key={g.id}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={selected}
                aria-controls={`panel-${g.id}`}
                tabIndex={selected ? 0 : -1}
                className={`prices__tab ${selected ? 'is-active' : ''}`}
                onClick={() => setActive(g.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {g.name}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        ref={panelRef}
        className="prices__panel"
        role="tabpanel"
        id={`panel-${group.id}`}
        aria-labelledby={`tab-${group.id}`}
        tabIndex={0}
      >
        {group.blocks.map((b) => (
          <div key={b.title} className="prices__block">
            <div className="prices__block-title">
              <h3>{b.title}</h3>
              {b.note && <span>{b.note}</span>}
            </div>
            <ul>
              {b.items.map((it) => (
                <li key={it.name + it.price + (it.note || '')} className="price-row">
                  <span className="price-row__name">
                    {it.name}
                    {it.note && <small>{it.note}</small>}
                  </span>
                  <span className="price-row__dots" aria-hidden="true" />
                  <span className="price-row__price">{it.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
