import { trustItems } from '../../data/content.js';
import { TrustIcon } from '../shared/InlineIcons.jsx';

function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon-box">
                <TrustIcon name={item.icon} />
              </div>
              <div className="trust-text">
                <b>{item.label}</b>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustStrip;
