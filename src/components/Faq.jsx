import { useState } from 'react';
import { faqs } from '../data/site.js';
import RevealText from './RevealText.jsx';
import Reveal from './Reveal.jsx';

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq section">
      <RevealText as="h2" className="display-serif">
        Preguntas
        <br />
        <em>frecuentes</em>
      </RevealText>
      <Reveal className="faq__list" stagger={0.08} y={24}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
              <h3 className="faq__q">
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
              </h3>
              <div className="faq__panel" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                <div className="faq__panel-inner">
                  <p className="body-text">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
