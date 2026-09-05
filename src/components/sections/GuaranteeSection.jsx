import { guaranteePillars, brandConfig } from '../../data/content.js';
import { TrustIcon, WhatsAppIcon } from '../shared/InlineIcons.jsx';

function GuaranteeSection() {
  const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hola, quisiera consultar por una reparación garantizada.')}`;

  return (
    <section className="promise-section" id="garantia" aria-labelledby="promise-title">
      <div className="promise-decoration" aria-hidden="true">
        <svg viewBox="0 0 420 620" fill="none">
          <path d="M72-30v130c0 22 18 40 40 40h54v88c0 22 18 40 40 40h92" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
          <path d="M318-24v108c0 22-18 40-40 40h-38v82c0 22-18 40-40 40h-68" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
          <path d="M196 368c0-34 26-62 58-62s58 28 58 62c0 40-58 95-58 95s-58-55-58-95Z" stroke="currentColor" strokeWidth="8" />
          <path d="M254 337v54M234 364h40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="wrap">
        <div className="promise-grid">
          <div>
            <div className="promise-badge">
              <TrustIcon name="shield" />
              <span>La Promesa de Servicio {brandConfig.name}</span>
            </div>
            <h2 id="promise-title" className="promise-title">
              Si no queda resuelto como acordamos, lo reparamos sin costo adicional
            </h2>
            <p className="promise-text">
              Respaldamos cada trabajo con garantía escrita de 6 meses y boleta oficial.
            </p>
            <a className="btn-primary" href={waUrl} target="_blank" rel="noopener">
              <WhatsAppIcon size={19} color="currentColor" />
              Consultar con un técnico
            </a>
          </div>

          <div className="promise-card">
            <div className="promise-card-heading">
              <div className="promise-card-icon" aria-hidden="true">
                <TrustIcon name="shield" color="#A8752E" size={23} />
              </div>
              <div>
                <span className="promise-card-kicker">Nuestro respaldo</span>
                <h3>Así cuidamos tu hogar</h3>
              </div>
            </div>

            <div className="promise-pillars">
              {guaranteePillars.map((pillar) => (
                <div key={pillar.number} className="pillar-item">
                  <div className="pillar-num">{pillar.number}</div>
                  <div className="pillar-content">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>
                  <div className="pillar-icon" aria-hidden="true">
                    <TrustIcon name={pillar.icon} color="#A8752E" size={22} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="promise-next-cue" aria-hidden="true">
        <span>A continuación</span>
        <b>Cómo trabajamos</b>
        <span>↓</span>
      </div>
    </section>
  );
}

export default GuaranteeSection;
