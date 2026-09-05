import { coverageAreas } from '../../data/content.js';

function CoverageMap() {
  return (
    <svg viewBox="0 0 380 320" fill="none">
      <path d="M40 260 Q30 180 70 120 Q110 60 180 50 Q260 40 300 90 Q340 130 320 200 Q300 260 240 280 Q160 300 100 290 Q50 280 40 260Z" fill="#E1EAE6" stroke="#5C7B76" strokeWidth="1.5" />
      <circle cx="150" cy="150" r="6" fill="#A8752E" />
      <text x="162" y="154" fontFamily="Space Grotesk" fontSize="12" fill="#0F3B3D">Viña del Mar</text>
      <circle cx="230" cy="90" r="5" fill="#0F3B3D" />
      <text x="242" y="94" fontFamily="Space Grotesk" fontSize="11" fill="#5C7B76">Reñaca</text>
      <circle cx="280" cy="60" r="5" fill="#0F3B3D" />
      <text x="292" y="64" fontFamily="Space Grotesk" fontSize="11" fill="#5C7B76">Concón</text>
      <path d="M40 260 Q100 240 150 150 Q200 100 230 90" stroke="#A8752E" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />
    </svg>
  );
}

function CoverageSection() {
  return (
    <section className="sect wrap" id="cobertura">
      <div className="coverage">
        <div>
          <div className="sect-head" style={{ marginBottom: 0 }}>
            <h2>Cobertura</h2>
            <p>Trabajamos en Viña del Mar, Reñaca y Concón. Fuera de esa zona, consulta igual: a veces cubrimos comunas cercanas según la fecha.</p>
          </div>
          <div className="coverage-list">
            {coverageAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
        <div className="coverage-map">
          <CoverageMap />
        </div>
      </div>
    </section>
  );
}

export default CoverageSection;
