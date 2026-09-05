import { faqs } from '../../data/content.js';
import { ChevronIcon } from '../shared/InlineIcons.jsx';

function FaqSection() {
  return (
    <section className="sect faq-section" id="faq">
      <div className="wrap">
        <div className="sect-head faq-head">
          <span className="sect-kicker">Transparencia Total</span>
          <h2>Preguntas Frecuentes</h2>
          <p>Aclaramos todas las dudas habituales antes de agendar la visita de un técnico.</p>
        </div>

        <div className="faq-container">
          {faqs.map((item, index) => (
            <details key={index} className="faq-item" open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <ChevronIcon size={18} />
              </summary>
              <div className="faq-content">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
