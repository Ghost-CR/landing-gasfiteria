import { brandConfig } from '../../data/content.js';
import { PhoneIcon, WhatsAppIcon } from '../shared/InlineIcons.jsx';

function MobileStickyBar() {
  const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola ${brandConfig.name}, necesito un gasfiter urgente en Viña del Mar.`)}`;

  return (
    <div className="sticky-mobile-bar" aria-label="Acciones rápidas móviles">
      <div className="mobile-bar-inner">
        <a className="mobile-bar-btn btn-mobile-call" href={`tel:${brandConfig.phoneCall}`}>
          <PhoneIcon size={17} />
          Llamar
        </a>
        <a className="mobile-bar-btn btn-mobile-wa" href={waUrl} target="_blank" rel="noopener">
          <WhatsAppIcon size={18} />
          WhatsApp Rápido
        </a>
      </div>
    </div>
  );
}

export default MobileStickyBar;
