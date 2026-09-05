import { processSteps } from '../../data/content.js';

function ProcessSection() {
  return (
    <div className="process" id="proceso">
      <div className="wrap sect">
        <div className="sect-head">
          <h2>Cómo trabajamos</h2>
          <p>Cuatro pasos, del primer mensaje a la reparación terminada.</p>
        </div>
        <div className="process-grid">
          {processSteps.map(({ number, title, description }) => (
            <div className="step" key={number}>
              <div className="step-num">{number}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
