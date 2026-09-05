import FastQuoteCard from './FastQuoteCard.jsx';
import { CalendarIcon, CheckIcon } from '../shared/InlineIcons.jsx';
import heroImage from '../../assets/hero/tecnico-casa-costa.jpg';

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-visual">
        <img
          className="hero-image"
          src={heroImage}
          alt="Técnico de gasfitería trabajando en una cocina con vista a la costa"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <div className="hero-image-overlay" aria-hidden="true" />

        <div className="hero-content">
          <div className="status-badge" role="status">
            <span className="status-dot" aria-hidden="true"></span>
            <span className="status-copy">
              <b>Disponible hoy</b>
              <small>Viña del Mar y alrededores</small>
            </span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Tu casa vuelve a estar en <span className="highlight">orden.</span>
          </h1>

          <p className="hero-lead">
            Soluciones claras, atención cercana y trabajo bien hecho para tu hogar en la costa.
          </p>

          <div className="hero-ctas">
            <a className="btn-primary" href="#cotizador">
              <CalendarIcon />
              Pedir una visita
            </a>
            <a className="btn-ghost hero-services-link" href="#servicios">
              Ver servicios <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-proof-line" aria-label="Compromisos de servicio">
            <span><CheckIcon />Respuesta rápida</span>
            <span><CheckIcon />Precio claro</span>
            <span><CheckIcon />Garantía por escrito</span>
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
      </div>

      <div className="hero-widget">
        <FastQuoteCard />
      </div>
    </section>
  );
}

export default Hero;
