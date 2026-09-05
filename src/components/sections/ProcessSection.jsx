import { processSteps } from '../../data/content.js';

function ProcessSection() {
  return (
    <div className="process" id="proceso">
      <div className="wrap sect">
        <div className="sect-head">
          <span className="sect-kicker">Metodología Clara</span>
          <h2>Cómo trabajamos</h2>
          <p>Cuatro pasos, desde tu primer mensaje hasta la reparación terminada y garantizada.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
