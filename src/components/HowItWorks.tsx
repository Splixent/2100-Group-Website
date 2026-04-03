import { useReveal } from '../hooks/useReveal';
import SpotlightCard from './SpotlightCard';

const steps = [
  {
    number: '01',
    title: 'Install it.',
    desc: 'Eighteen Phillips-head screws. Good luck getting it off without the right tools.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    number: '02',
    title: 'Lock your apps.',
    desc: 'Connect via Bluetooth. Choose which apps trigger consequences.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    number: '03',
    title: 'Get zapped.',
    desc: 'Open a locked app. Feel instant regret. Repeat until reformed.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

export default function HowItWorks() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#0c0c10',
    }}>
      <div ref={ref} style={{ maxWidth: 980, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>How it works.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {steps.map((step, i) => (
            <div key={step.number} className="reveal" style={{ transitionDelay: `${i * 0.12}s`, height: '100%' }}>
              <SpotlightCard style={{ padding: 'clamp(2rem, 4vw, 2.5rem)', height: '100%' }}>
                {/* Subtle top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '2rem',
                  right: '2rem',
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                  opacity: 0.3,
                  zIndex: 2,
                }} />

                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                }}>{step.number}</span>

                <div style={{ margin: '1.25rem 0' }}>{step.icon}</div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}>{step.title}</h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-gray)',
                  lineHeight: 1.6,
                }}>{step.desc}</p>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
