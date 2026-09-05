import { BrandMark, PhoneIcon } from '../shared/InlineIcons.jsx';
import { brandConfig } from '../../data/content.js';

function Header() {
  return (
    <header>
      <nav className="nav wrap">
        <a href="#" className="brand">
          <BrandMark />
          <div className="brand-text">
            <span>{brandConfig.name}</span>
            <small>{brandConfig.coverage}</small>
          </div>
        </a>

        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#garantia">Garantía</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#opiniones">Opiniones</a>
          <a href="#faq">Preguntas</a>
        </div>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${brandConfig.phoneCall}`}>
            <PhoneIcon size={16} />
            <span>{brandConfig.phoneDisplay}</span>
          </a>
          <a className="nav-cta" href="#cotizador">Pedir visita</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
