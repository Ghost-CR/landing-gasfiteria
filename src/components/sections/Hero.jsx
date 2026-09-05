function HeroDiagram() {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="420" height="420" fill="#E1EAE6" />
      <g stroke="#5C7B76" strokeWidth="1" opacity="0.4">
        <line x1="0" y1="60" x2="420" y2="60" /><line x1="0" y1="140" x2="420" y2="140" />
        <line x1="0" y1="220" x2="420" y2="220" /><line x1="0" y1="300" x2="420" y2="300" />
        <line x1="0" y1="380" x2="420" y2="380" />
        <line x1="60" y1="0" x2="60" y2="420" /><line x1="140" y1="0" x2="140" y2="420" />
        <line x1="220" y1="0" x2="220" y2="420" /><line x1="300" y1="0" x2="300" y2="420" />
        <line x1="380" y1="0" x2="380" y2="420" />
      </g>
      <path d="M60 340 V220 H180 V140 H300 V80" stroke="#0F3B3D" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M60 340 V220 H180 V140 H300 V80" stroke="#A8752E" strokeWidth="6" strokeLinecap="round" fill="none" strokeDasharray="1 26" />
      <circle cx="60" cy="340" r="9" fill="#0F3B3D" />
      <circle cx="180" cy="220" r="7" fill="#FBFCFB" stroke="#0F3B3D" strokeWidth="3" />
      <circle cx="300" cy="140" r="7" fill="#FBFCFB" stroke="#A8752E" strokeWidth="3" />
      <circle cx="300" cy="80" r="9" fill="#A8752E" />
      <text x="72" y="335" fontFamily="Space Grotesk" fontSize="12" fill="#5C7B76">Ø 20mm</text>
      <text x="192" y="215" fontFamily="Space Grotesk" fontSize="12" fill="#5C7B76">válvula</text>
      <text x="230" y="135" fontFamily="Space Grotesk" fontSize="12" fill="#5C7B76">Ø 32mm</text>
      <text x="310" y="76" fontFamily="Space Grotesk" fontSize="12" fill="#A8752E">calefont</text>
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero wrap">
      <div>
        <div className="kicker">Gasfitería en Viña del Mar</div>
        <h1>Cañerías, fugas y calefont, resueltos por alguien que conoce cada casa del plan y el cerro</h1>
        <p className="lead">Atendemos destapes, fugas y mantención de calefont en Viña del Mar, Reñaca y Concón. Diagnóstico claro antes de cotizar, sin sorpresas en la boleta.</p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#contacto">Solicitar visita técnica</a>
          <a className="btn-ghost" href="tel:+56900000000">Llamar ahora</a>
        </div>
        <div className="hero-stats">
          <div><span className="num">12 años</span><span className="lbl">atendiendo el plan y los cerros</span></div>
          <div><span className="num">40 min</span><span className="lbl">promedio de llegada en urgencias</span></div>
          <div><span className="num">3 comunas</span><span className="lbl">Viña, Reñaca y Concón</span></div>
        </div>
      </div>

      <div className="hero-art">
        <HeroDiagram />
      </div>
    </section>
  );
}

export default Hero;
