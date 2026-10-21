import { useCallback, useState } from 'react';
import { ScrollTrigger, useGSAP } from '../lib/gsap.js';
import { bookingHref } from '../data/site.js';
import AnchorLink from './AnchorLink.jsx';
import Menu from './Menu.jsx';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Fondo sólido al pasar el hero.
  useGSAP(() => {
    ScrollTrigger.create({
      start: () => window.innerHeight * 0.85,
      end: 'max',
      onToggle: (self) => setSolid(self.isActive),
    });
  });

  return (
    <>
      <header className={`header ${solid ? 'is-solid' : ''} ${open ? 'is-menu-open' : ''}`}>
        <button
          type="button"
          className="header__menu"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="header__menu-label">{open ? 'Cerrar' : 'Menú'}</span>
        </button>

        <AnchorLink href="#inicio" className="header__brand" onNavigate={close}>
          Las Pestañas <em>de Julia</em>
        </AnchorLink>

        <AnchorLink href={bookingHref()} className="header__cta" onNavigate={close}>
          Reservar cita
        </AnchorLink>
      </header>
      <Menu open={open} onClose={close} />
    </>
  );
}
