import { services } from '../../data/content.js';
import { ServiceIcon } from '../shared/InlineIcons.jsx';

function ServicesSection() {
  return (
    <section className="sect wrap" id="servicios">
      <div className="sect-head">
        <h2>Lo que resolvemos</h2>
        <p>Cada visita empieza con el mismo diagnóstico: identificar el punto exacto de la falla antes de tocar nada.</p>
      </div>
      <div className="services-list">
        {services.map(({ code, icon, title, description, tag }) => (
          <div className="svc-row" key={code}>
            <div className="svc-icon"><ServiceIcon name={icon} /></div>
            <div className="svc-code">{code}</div>
            <div><div className="svc-title">{title}</div><div className="svc-desc">{description}</div></div>
            <div className="svc-tag">{tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
