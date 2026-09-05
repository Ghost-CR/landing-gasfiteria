import FastQuoteCard from './FastQuoteCard.jsx';
import { PhoneIcon, WhatsAppIcon } from '../shared/InlineIcons.jsx';
import { brandConfig } from '../../data/content.js';

function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          Técnicos de turno disponibles ahora en Viña y alrededores
        </div>

        <h1 className="hero-title">
          Gasfitería profesional y urgencias <span className="highlight">sin cobros sorpresa</span> en la boleta
        </h1>

        <p className="hero-lead">
          Destapes de cañerías, reparación de filtraciones ocultas y mantención de calefont con certificación SEC. Diagnóstico transparente antes de cotizar y 6 meses de garantía por escrito.
        </p>

        <div className="hero-ctas">
          <a className="btn-primary" href="#cotizador">
            <WhatsAppIcon size={19} color="currentColor" />
            Cotizar por WhatsApp
          </a>
          <a className="btn-ghost" href={`tel:${brandConfig.phoneCall}`}>
            <PhoneIcon size={18} />
            Llamar a Urgencias
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="num">40 min</span>
            <span className="lbl">promedio de llegada en urgencias</span>
          </div>
          <div className="stat-card">
            <span className="num">6 Meses</span>
            <span className="lbl">de garantía total en toda reparación</span>
          </div>
          <div className="stat-card">
            <span className="num">4.9 ★</span>
            <span className="lbl">calificación en más de 180 servicios</span>
          </div>
        </div>
      </div>

      <div className="hero-widget">
        <FastQuoteCard />
      </div>
    </section>
  );
}

export default Hero;
