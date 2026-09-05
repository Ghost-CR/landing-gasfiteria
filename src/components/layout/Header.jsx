import { BrandMark } from '../shared/InlineIcons.jsx';

function Header() {
  return (
    <header>
      <nav className="nav wrap">
        <div className="brand">
          <BrandMark />
          <span>Gasfitería Rioseco</span>
        </div>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href="#contacto">Pedir visita</a>
      </nav>
    </header>
  );
}

export default Header;
