import { useReveal } from '../hooks/useReveal';
import sceneAll from '../assets/SceneAll.mp4';

const swatches = [
  { label: 'Signal Red', color: '#c0392b' },
  { label: 'Midnight Black', color: '#1a1a1a' },
  { label: 'Cobalt Blue', color: '#2c3e8c' },
];

export default function ColorOptions() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#000',
    }}>
      <div ref={ref} style={{ maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal">
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>Finishes</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>Pick your poison.</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            color: 'var(--color-gray)',
            maxWidth: 480,
            margin: '0 auto 3rem',
          }}>Three colors. One consequence.</p>
        </div>

        {/* Video — black bg, seamless */}
        <div className="reveal-scale" style={{
          transitionDelay: '0.1s',
          borderRadius: 'var(--card-radius)',
          overflow: 'hidden',
          background: '#000',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '2.5rem',
        }}>
          <video autoPlay muted loop playsInline style={{ width: '100%', display: 'block' }}>
            <source src={sceneAll} type="video/mp4" />
          </video>
        </div>

        {/* Color swatches */}
        <div className="reveal" style={{
          transitionDelay: '0.2s',
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
        }}>
          {swatches.map((s) => (
            <div key={s.label} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: s.color,
                border: '3px solid rgba(255,255,255,0.1)',
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--color-gray)',
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
