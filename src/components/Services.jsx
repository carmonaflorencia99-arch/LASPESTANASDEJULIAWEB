import { services, bookingHref } from '../data/site.js';
import AnchorLink from './AnchorLink.jsx';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';
import { ArrowRight } from './Icons.jsx';

export default function Services() {
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
          rostro.
        </Reveal>
      </div>

      <Reveal as="ul" className="services__list" stagger={0.08} y={30}>
        {services.map((s) => (
          <li key={s.n} id={`servicio-${s.n}`}>
            <AnchorLink href={bookingHref()} className="service-row">
              <span className="service-row__n">{s.n}</span>
              <span className="service-row__name">{s.name}</span>
              <span className="service-row__cta">
                Reservar <ArrowRight />
              </span>
            </AnchorLink>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
