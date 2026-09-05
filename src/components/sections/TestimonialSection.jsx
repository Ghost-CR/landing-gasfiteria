import { StarIcon } from '../shared/InlineIcons.jsx';

function TestimonialSection() {
  return (
    <section className="sect wrap">
      <div className="testimonial">
        <div className="stars" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <StarIcon key={index} />)}
        </div>
        <blockquote>"Llegaron el mismo día por una fuga bajo el lavaplatos y me explicaron cada peso de la boleta antes de cobrar."</blockquote>
        <cite>— Reseña de cliente, sector Miraflores, Viña del Mar</cite>
      </div>
    </section>
  );
}

export default TestimonialSection;
