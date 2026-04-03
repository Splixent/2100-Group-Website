import { useReveal } from '../hooks/useReveal';
import { testimonials } from '../data/testimonials';

function TestimonialCard({ quote, author, rating }: { quote: string; author: string; rating: number }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 320,
      padding: '1.5rem',
      background: 'var(--color-surface)',
      borderRadius: 20,
      border: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ marginBottom: '0.75rem', color: 'var(--color-accent)', fontSize: '0.875rem', letterSpacing: 2 }}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9375rem',
        color: 'var(--color-gray-light)',
        lineHeight: 1.6,
        marginBottom: '1rem',
      }}>"{quote}"</p>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--color-gray-dark)',
      }}>— {author}</p>
    </div>
  );
}

export default function TestimonialMarquee() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section style={{
      padding: 'clamp(4rem, 10vh, 8rem) 0',
      background: '#000',
      overflow: 'hidden',
    }}>
      <div ref={ref}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 1.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>Testimonials</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>What survivors are saying.</h2>
        </div>

        {/* Marquee row 1 */}
        <div className="reveal" style={{
          transitionDelay: '0.1s',
          display: 'flex',
          gap: '1rem',
          animation: 'marqueeLeft 40s linear infinite',
          width: 'max-content',
          marginBottom: '1rem',
        }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`a-${i}`} {...t} />
          ))}
        </div>

        {/* Marquee row 2 — reverse */}
        <div className="reveal" style={{
          transitionDelay: '0.2s',
          display: 'flex',
          gap: '1rem',
          animation: 'marqueeRight 45s linear infinite',
          width: 'max-content',
        }}>
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
            <TestimonialCard key={`b-${i}`} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
