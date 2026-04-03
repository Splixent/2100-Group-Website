import { useReveal } from '../hooks/useReveal';
import techPackImg from '../assets/zipitTechPack.png';

const specs = [
  { label: 'Frame', value: 'Aluminum Alloy' },
  { label: 'Body', value: 'TPU / Rubber' },
  { label: 'Bearings', value: 'SS 316L' },
  { label: 'Shock', value: '3–15V' },
  { label: 'Weight', value: '340g' },
  { label: 'Connect', value: 'BT 5.0' },
  { label: 'Mount', value: '18× Phillips' },
  { label: 'Lanyard', value: 'Nylon Web' },
];

export default function TechSpecs() {
  const ref = useReveal({ threshold: 0.08 });

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#111114',
    }}>
      <div ref={ref} style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>Under the hood.</h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-gray)',
            maxWidth: 520,
            margin: '0 auto',
          }}>
            Every component engineered for one purpose: making you think twice before opening that app.
          </p>
        </div>

        {/* Tech pack diagram */}
        <div className="reveal-scale" style={{
          transitionDelay: '0.1s',
          borderRadius: 'var(--card-radius)',
          overflow: 'hidden',
          background: '#000',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '3rem',
        }}>
          <img
            src={techPackImg}
            alt="ZipIt Technical Data Sheet"
            style={{
              width: '100%',
              filter: 'invert(1) hue-rotate(180deg)',
              opacity: 0.85,
            }}
          />
        </div>

        {/* Spec grid */}
        <div className="reveal" style={{
          transitionDelay: '0.2s',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {specs.map((s, i) => (
            <div key={s.label} style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              borderRight: (i % 4 !== 3) ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                color: 'var(--color-gray-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.25rem',
              }}>{s.label}</div>
              <div style={{
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: 'var(--color-white)',
              }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
