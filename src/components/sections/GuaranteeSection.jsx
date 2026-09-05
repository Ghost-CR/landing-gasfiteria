import { guaranteePillars, brandConfig } from '../../data/content.js';
import { TrustIcon, WhatsAppIcon } from '../shared/InlineIcons.jsx';

function GuaranteeSection() {
  const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hola, quisiera consultar por una reparación garantizada.')}`;

  return (
    <section className="promise-section" id="garantia">
      <div className="wrap">
        <div className="promise-grid">
          <div>
            <div className="promise-badge">
              <TrustIcon name="shield" />
              <span>La Promesa de Servicio {brandConfig.name}</span>
            </div>
            <h2 className="promise-title">
              Si no queda resuelto como acordamos, lo reparamos sin costo adicional
            </h2>
            <p className="promise-text">
              Sabemos lo frustrante que es contratar a un maestro y quedar con dudas o con la misma fuga al día siguiente. Respaldamos cada trabajo con nuestra garantía escrita de 6 meses y boleta oficial.
            </p>
            <a className="btn-primary" href={waUrl} target="_blank" rel="noopener">
              <WhatsAppIcon size={19} color="currentColor" />
              Consultar con un técnico
            </a>
          </div>

          <div className="promise-card">
            <div className="promise-pillars">
              {guaranteePillars.map((pillar) => (
                <div key={pillar.number} className="pillar-item">
                  <div className="pillar-num">{pillar.number}</div>
                  <div className="pillar-content">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuaranteeSection;
