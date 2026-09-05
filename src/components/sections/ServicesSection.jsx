import { services, brandConfig } from '../../data/content.js';
import { ServiceIcon, CheckIcon } from '../shared/InlineIcons.jsx';

function ServicesSection() {
  const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');

  return (
    <section className="sect wrap" id="servicios">
      <div className="sect-head">
        <span className="sect-kicker">Nuestras Especialidades</span>
        <h2>Soluciones definitivas y garantizadas</h2>
        <p>Cada visita comienza con un diagnóstico claro para ubicar la falla real antes de intervenir. Sin improvisaciones.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(service.waText)}`;
          return (
            <div key={service.code} className="svc-card">
              <div className="svc-card-top">
                <div className="svc-icon-wrapper">
                  <ServiceIcon name={service.icon} />
                </div>
                <span className="svc-code-badge">Servicio {service.code}</span>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-desc">{service.description}</p>
                {service.bullets && (
                  <ul className="svc-card-bullets">
                    {service.bullets.map((b, i) => (
                      <li key={i}>
                        <CheckIcon />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="svc-card-bottom">
                <div className="svc-card-price">
                  <small>Modalidad</small>
                  <strong>{service.tag}</strong>
                </div>
                <a
                  className="svc-btn-action"
                  href={waUrl}
                  target="_blank"
                  rel="noopener"
                >
                  Pedir servicio →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
