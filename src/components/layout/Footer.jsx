import { brandConfig, footerServices } from '../../data/content.js';

function Footer() {
  return (
    <footer id="contacto">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">{brandConfig.name}</div>
            <p className="foot-desc">
              Servicio de gasfitería residencial y comercial en Viña del Mar, Reñaca y Concón. Diagnóstico técnico, cotización cerrada y 6 meses de garantía por escrito.
            </p>
          </div>

          <div>
            <h4>Contacto & Urgencias</h4>
            <ul>
              <li>📞 {brandConfig.phoneDisplay} (Llamadas & WhatsApp)</li>
              <li>✉️ {brandConfig.email}</li>
              <li>🕒 {brandConfig.hours}</li>
              <li>📍 Atención en terreno en toda la V Región costa</li>
            </ul>
          </div>

          <div>
            <h4>Especialidades</h4>
            <ul>
              {footerServices.map((service, index) => (
                <li key={index}>
                  <a href="#servicios">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>{brandConfig.name} — Viña del Mar</span>
          <span>Plantilla de demostración · Diseño optimizado para portafolio comercial</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
