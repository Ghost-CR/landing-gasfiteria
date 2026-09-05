import { brandConfig } from '../../data/content.js';
import { PhoneIcon } from '../shared/InlineIcons.jsx';

function UrgencyBanner() {
  return (
    <div className="urgency">
      <div className="wrap urgency-inner">
        <div>
          <h2>¿Fuga activa, matriz rota o sin agua caliente ahora?</h2>
          <p>Móviles de turno para urgencias 24/7. El recargo fuera de horario se informa antes de acudir, nunca después.</p>
        </div>
        <a className="btn-on-copper" href={`tel:${brandConfig.phoneCall}`}>
          <PhoneIcon size={18} />
          Llamar a Urgencias ({brandConfig.phoneDisplay})
        </a>
      </div>
    </div>
  );
}

export default UrgencyBanner;
