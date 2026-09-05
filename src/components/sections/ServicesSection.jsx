import { services, brandConfig } from '../../data/content.js';
import { ServiceIcon, CheckIcon } from '../shared/InlineIcons.jsx';
import destapeImage from '../../assets/services/destape-canerias.jpg';
import leakImage from '../../assets/services/deteccion-fugas.jpg';
import waterHeaterImage from '../../assets/services/calefont-agua-caliente.jpg';

const serviceImages = {
  '01': destapeImage,
  '02': leakImage,
  '03': waterHeaterImage,
};

function ServicesSection() {
  const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');

  return (
    <section className="sect services-section" id="servicios">
      <div className="wrap">
        <div className="services-head">
          <div className="sect-head">
            <span className="sect-kicker">Servicios residenciales</span>
            <h2>Soluciones definitivas y garantizadas</h2>
            <p>Cada visita comienza con un diagnóstico claro para ubicar la falla real antes de intervenir. Sin improvisaciones.</p>
          </div>
          <a className="services-head-link" href="#cotizador">
            Cotiza tu visita <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(service.waText)}`;
            return (
              <article key={service.code} className="svc-card">
                <div className="svc-card-media">
                  <img
                    src={serviceImages[service.code]}
                    alt={service.imageAlt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="svc-card-category">{service.category}</span>
                  <span className="svc-code-badge">{service.code}</span>
                </div>

                <div className="svc-card-body">
                  <div className="svc-card-icon" aria-hidden="true">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="svc-card-title">{service.title}</h3>
                  <p className="svc-card-desc">{service.description}</p>
                  <ul className="svc-card-bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckIcon />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-card-footer">
                    <div className="svc-card-price">
                      <small>Modalidad</small>
                      <strong>{service.tag}</strong>
                    </div>
                    <a
                      className="svc-btn-action"
                      href={waUrl}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Cotizar ${service.title}`}
                    >
                      Ver servicio <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
