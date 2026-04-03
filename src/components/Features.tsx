import { useReveal } from '../hooks/useReveal';
import SpotlightCard from './SpotlightCard';
import sceneRed from '../assets/SceneRed.mp4';
import techPackImg from '../assets/zipitTechPack.png';

const features = [
  {
    label: 'Contact Bearings',
    title: 'Your grip becomes\nthe circuit.',
    desc: '316L stainless steel micro-beads embedded across the back panel. When a locked app launches, every bearing activates.',
    video: sceneRed,
    image: null,
    invert: false,
  },
  {
    label: 'Screw-Mount System',
    title: 'Bolted on.\nNot clipped.',
    desc: 'Eighteen Phillips-head micro-screws. Removing it requires tools, a flat surface, and enough premeditation to question your life choices.',
    video: null,
    image: techPackImg,
    invert: true,
  },
];

const textFeatures = [
  {
    title: 'Because you will drop it.',
    desc: 'At 340g, the integrated wrist strap is less of a feature and more of an apology.',
    stat: '340%',
    statLabel: 'increase in phone-dropping',
  },
  {
    title: 'Fine-tune your suffering.',
    desc: 'Connect via Bluetooth. Adjust shock intensity from "gentle reminder" to "genuine regret."',
    stat: '3–15V',
    statLabel: 'micro-current range',
  },
];

function ImageFeature({ label, title, desc, video, image, invert }: typeof features[0]) {
  const ref = useReveal({ threshold: 0.15 });
  return (
    <SpotlightCard style={{ overflow: 'hidden' }}>
    <div ref={ref}>
      <div className="reveal" style={{
        padding: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBottom: '2rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--color-accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '0.75rem',
        }}>{label}</p>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          whiteSpace: 'pre-line',
          marginBottom: '1rem',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.0625rem',
          color: 'var(--color-gray)',
          lineHeight: 1.6,
          maxWidth: 520,
        }}>{desc}</p>
      </div>
      <div className="reveal-scale" style={{
        transitionDelay: '0.1s',
        padding: '0 clamp(1rem, 3vw, 2rem) clamp(1rem, 3vw, 2rem)',
      }}>
        {video ? (
          <video
            src={video}
            autoPlay muted loop playsInline
            style={{ width: '100%', borderRadius: 16, background: '#000' }}
          />
        ) : image ? (
          <img
            src={image}
            alt={label}
            style={{
              width: '100%',
              borderRadius: 16,
              ...(invert ? {
                filter: 'invert(1) hue-rotate(180deg)',
                opacity: 0.85,
              } : {}),
            }}
          />
        ) : null}
      </div>
    </div>
    </SpotlightCard>
  );
}

function StatFeature({ title, desc, stat, statLabel }: typeof textFeatures[0]) {
  const ref = useReveal({ threshold: 0.2 });
  return (
    <SpotlightCard style={{
      padding: 'clamp(2.5rem, 5vw, 3.5rem)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 320,
    }}>
    <div ref={ref} className="reveal">
      <div>
        <h3 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
        }}>{title}</h3>
        <p style={{
          fontSize: '1rem',
          color: 'var(--color-gray)',
          lineHeight: 1.6,
          maxWidth: 400,
        }}>{desc}</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <span style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: 'var(--color-accent)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>{stat}</span>
        <p style={{
          fontSize: '0.8125rem',
          color: 'var(--color-gray-dark)',
          marginTop: '0.25rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>{statLabel}</p>
      </div>
    </div>
    </SpotlightCard>
  );
}

export default function Features() {
  return (
    <section id="explore" style={{
      padding: 'var(--section-padding)',
      background: '#000',
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        {/* Image feature cards - full width */}
        <div style={{
          display: 'grid',
          gap: '1.25rem',
          marginBottom: '1.25rem',
        }}>
          {features.map((f) => (
            <ImageFeature key={f.label} {...f} />
          ))}
        </div>

        {/* Stat cards - 2 column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {textFeatures.map((f) => (
            <StatFeature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
