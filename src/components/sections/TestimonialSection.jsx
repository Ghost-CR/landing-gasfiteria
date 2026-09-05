import { reviews } from '../../data/content.js';
import { StarIcon, GoogleIcon } from '../shared/InlineIcons.jsx';

function TestimonialSection() {
  return (
    <section className="sect wrap" id="opiniones">
      <div className="reviews-header-wrap">
        <div>
          <span className="sect-kicker">Prueba Social Auténtica</span>
          <h2 className="sect-title">Lo que dicen nuestros clientes</h2>
          <p className="sect-desc">Reseñas de vecinos en Viña del Mar, Reñaca y Concón.</p>
        </div>

        <div className="google-badge">
          <GoogleIcon size={24} />
          <div>
            <div className="google-stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} fill="#E8A838" size={15} />
              ))}
            </div>
            <small className="google-rating-text">4.9 de 5 en Google Reviews</small>
          </div>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <div>
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <StarIcon key={i} fill="#E8A838" size={16} />
                ))}
              </div>
              <p className="review-quote">"{rev.text}"</p>
            </div>

            <div className="reviewer-meta">
              <div className="reviewer-avatar">{rev.initials}</div>
              <div className="reviewer-info">
                <strong>{rev.name}</strong>
                <small>{rev.location} · {rev.service}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
