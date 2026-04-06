import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface ResearchCard {
  category: string;
  title: string;
  summary: string;
  points: string[];
  source: string;
  sourceUrl: string;
}

const research: ResearchCard[] = [
  {
    category: 'Clinical Overview',
    title: 'ECT: When other treatments fall short',
    summary: 'Cleveland Clinic outlines electroconvulsive therapy as a well-established medical procedure with clear benefits.',
    points: [
      'Provides relief when medication or therapy haven\'t worked',
      'Faster than other treatments — critical in emergencies',
      'An option when certain medications can\'t be tolerated',
      'Often paired with medication to enhance effectiveness',
    ],
    source: 'Cleveland Clinic',
    sourceUrl: 'https://my.clevelandclinic.org/health/treatments/9302-ect-electroconvulsive-therapy',
  },
  {
    category: 'Efficacy Study',
    title: 'Effective for treatment-resistant depression',
    summary: 'PubMed research confirms ECT\'s effectiveness for patients who do not respond to standard medication.',
    points: [
      'Effective for extreme, treatment-resistant depression',
      'Beneficial when patients show no response to medication',
      'Demonstrated clinical improvement in controlled studies',
    ],
    source: 'PubMed — NIH',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/12642045/',
  },
  {
    category: 'Cognitive Research',
    title: 'Processing speed & attention improve post-ECT',
    summary: 'Multiple studies show that cognitive function not only recovers but can improve following ECT treatment.',
    points: [
      'Improvement in processing speed and attention after treatment',
      'Indirectly improves attention by treating underlying mental illness',
      'Long-term attention performance recovers or even improves',
    ],
    source: 'PMC — NIH',
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11577909/',
  },
  {
    category: 'Peer-Reviewed',
    title: 'Cognitive outcomes in modern ECT protocols',
    summary: 'Research from Medicine Science and ScienceDirect investigating cognitive outcomes and attention metrics.',
    points: [
      'Modern ECT protocols show improved cognitive safety profiles',
      'Attention metrics show recovery trajectories post-treatment',
      'Supports ECT as a viable option with manageable cognitive effects',
    ],
    source: 'ScienceDirect / Medicine Science',
    sourceUrl: 'https://www.sciencedirect.com/science/article/pii/S0165178123005619',
  },
];

function Card({ card, index }: { card: ResearchCard; index: number }) {
  const ref = useReveal({ threshold: 0.15 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          background: 'var(--color-surface)',
          borderRadius: 'var(--card-radius)',
          border: `1px solid ${hovered ? 'rgba(252,202,3,0.25)' : 'rgba(255,255,255,0.04)'}`,
          transition: 'all 0.4s var(--ease-out-expo)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered
            ? '0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(252,202,3,0.06)'
            : 'none',
          height: '100%',
          display: 'flex',
          flexDirection: 'column' as const,
        }}
      >
        {/* Category pill */}
        <span style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          padding: '0.25rem 0.75rem',
          background: 'rgba(252,202,3,0.1)',
          color: 'var(--color-accent)',
          fontSize: '0.6875rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          borderRadius: 980,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
        }}>{card.category}</span>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: '0.75rem',
        }}>{card.title}</h3>

        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--color-gray)',
          lineHeight: 1.6,
          marginBottom: '1.25rem',
        }}>{card.summary}</p>

        {/* Key points */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          flex: 1,
        }}>
          {card.points.map((point, i) => (
            <li key={i} style={{
              display: 'flex',
              gap: '0.625rem',
              fontSize: '0.875rem',
              color: 'var(--color-gray-light)',
              lineHeight: 1.5,
            }}>
              <span style={{
                color: 'var(--color-accent)',
                flexShrink: 0,
                marginTop: 2,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </span>
              {point}
            </li>
          ))}
        </ul>

        {/* Source link */}
        <a
          href={card.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8125rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            transition: 'gap 0.3s ease',
            marginTop: 'auto',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = '0.6rem'; }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = '0.4rem'; }}
        >
          {card.source}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Research() {
  const sectionRef = useReveal({ threshold: 0.05 });

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#000',
    }}>
      <div ref={sectionRef} style={{ maxWidth: 'var(--max-width-wide)', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>The Science</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>Backed by research. Not just vibes.</h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--color-gray)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Electroconvulsive therapy has decades of peer-reviewed evidence supporting its efficacy
            for treatment-resistant conditions and cognitive improvement.
          </p>
        </div>

        {/* Research cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {research.map((card, i) => (
            <Card key={i} card={card} index={i} />
          ))}
        </div>

        {/* Additional sources */}
        <div className="reveal" style={{
          marginTop: '2.5rem',
          padding: '1.5rem 2rem',
          background: 'var(--color-surface)',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.04)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontSize: '0.8125rem',
            color: 'var(--color-gray)',
            fontWeight: 500,
          }}>Additional sources:</span>
          {[
            { label: 'Medicine Science', url: 'https://www.medicinescience.org/article/2675' },
            { label: 'ScienceDirect', url: 'https://www.sciencedirect.com/science/article/pii/S0165178123005619' },
            { label: 'PMC / NIH', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11577909/' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-accent)',
                fontWeight: 500,
                padding: '0.25rem 0.75rem',
                border: '1px solid rgba(252,202,3,0.2)',
                borderRadius: 980,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(252,202,3,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
