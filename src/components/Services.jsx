import { useEffect, useState } from 'react';
import { ScrollTrigger } from '../lib/gsap.js';
import { onOpenService } from '../lib/events.js';
import { serviceGroups, site, bookingHref } from '../data/site.js';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';
import { ArrowRight } from './Icons.jsx';

function ServiceItem({ s, isOpen, onToggle }) {
  return (
    <li id={`servicio-${s.n}`} className={`service ${isOpen ? 'is-open' : ''}`}>
      <h4 className="service__heading">
        <button
          type="button"
          className="service-row"
          id={`servicio-${s.n}-btn`}
          aria-expanded={isOpen}
          aria-controls={`servicio-${s.n}-panel`}
          onClick={onToggle}
        >
          <span className="service-row__n">{s.n}</span>
          <span className="service-row__name">{s.name}</span>
          <span className="service-row__toggle" aria-hidden="true" />
        </button>
      </h4>

      <div
        className="service__panel"
        id={`servicio-${s.n}-panel`}
        role="region"
        aria-labelledby={`servicio-${s.n}-btn`}
        inert={!isOpen}
      >
        <div className="service__panel-clip">
          <div className="service__panel-inner">
            <div className="service__main">
              {s.intro.map((p) => (
                <p key={p.slice(0, 24)} className="body-text">
                  {p}
                </p>
              ))}
              {s.types && (
                <ul className="service__types">
                  {s.types.map((t) => (
                    <li key={t.title}>
                      <h5>{t.title}</h5>
                      <p>{t.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <aside className="service__aside">
              {s.facts && (
                <dl className="service__facts">
                  {s.facts.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {s.care && (
                <div className="service__care">
                  <span className="eyebrow">Cuidados</span>
                  <ul>
                    {s.care.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              {s.note && <p className="service__note">{s.note}</p>}
              <a
                className="button button--dark"
                href={bookingHref()}
                target={site.booksyUrl ? '_blank' : undefined}
                rel={site.booksyUrl ? 'noopener noreferrer' : undefined}
              >
                Reservar en Booksy <ArrowRight />
              </a>
            </aside>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Services() {
  const [open, setOpen] = useState(null);

  // Los puntos sobre la foto de la modelo abren su ficha.
  useEffect(() => onOpenService(setOpen), []);

  // Al abrir o cerrar una ficha cambia la altura de la página: recalcula los efectos de scroll.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <section id="servicios" className="services section">
      <div className="services__head">
        <RevealText as="h2" className="display-sans">
          Servicios
          <br />
          <span className="serif-italic">personalizados</span>
        </RevealText>
        <Reveal as="p" className="body-text">
          No todas las miradas son iguales ni necesitan lo mismo. Te asesoramos para sacar el máximo partido a tu
          rostro. Abre cada servicio para ver en qué consiste, cuánto dura y cómo cuidarlo.
        </Reveal>
      </div>

      <div className="services__groups">
        {serviceGroups.map((g) => (
          <div key={g.name} className="services__group">
            <h3 className="eyebrow services__group-title">{g.name}</h3>
            <Reveal as="ul" className="services__list" stagger={0.06} y={24}>
              {g.items.map((s) => (
                <ServiceItem
                  key={s.n}
                  s={s}
                  isOpen={open === s.n}
                  onToggle={() => setOpen(open === s.n ? null : s.n)}
                />
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
