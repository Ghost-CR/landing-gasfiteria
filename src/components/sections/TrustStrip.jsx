import { trustItems } from '../../data/content.js';

function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap">
        {trustItems.map(({ label, text }) => (
          <span key={label}><b>{label}</b> {text}</span>
        ))}
      </div>
    </div>
  );
}

export default TrustStrip;
