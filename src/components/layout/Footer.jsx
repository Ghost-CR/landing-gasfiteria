import { footerServices } from '../../data/content.js';

function Footer() {
  return (
    <footer id="contacto">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">Gasfitería Rioseco</div>
            <p>Servicio de gasfitería residencial en Viña del Mar, Reñaca y Concón. Diagnóstico, cotización y reparación en la misma visita cuando es posible.</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>+56 9 0000 0000 (demo)</li>
              <li>contacto@gasfiteriarioseco.cl</li>
              <li>Lunes a sábado, 8:00–20:00</li>
              <li>Urgencias fuera de horario</li>
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              {footerServices.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>Gasfitería Rioseco — Viña del Mar</span>
          <span>Landing de portafolio · datos de contacto de ejemplo</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
