import { useReveal } from '../hooks/useReveal';
import { motion } from 'motion/react';

const rows = [
  { feature: 'Blocks apps', zipit: true, others: true },
  { feature: 'You can bypass it in 3 seconds', zipit: false, others: true },
  { feature: 'Physical consequence', zipit: true, others: false },
  { feature: 'Requires tools to remove', zipit: true, others: false },
  { feature: 'Monthly subscription', zipit: false, others: true },
  { feature: 'Actually changes behavior', zipit: true, others: false },
  { feature: 'Survives being run over by a Honda Civic', zipit: true, others: false },
  { feature: 'Makes you question your life choices', zipit: true, others: true },
];

export default function Comparison() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#0c0c10',
    }}>
      <div ref={ref} style={{ maxWidth: 720, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>Compare</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>ZipIt vs. the competition.</h2>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 100px 100px',
            gap: 0,
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', fontWeight: 600 }}>ZipIt</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center' }}>Others</span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 100px 100px',
                gap: 0,
                padding: '1rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-gray-light)',
              }}>{row.feature}</span>
              <span style={{ textAlign: 'center', fontSize: '1rem' }}>
                {row.zipit ? (
                  <span style={{ color: 'var(--color-accent)' }}>&#10003;</span>
                ) : (
                  <span style={{ color: 'var(--color-gray-dark)' }}>&#10005;</span>
                )}
              </span>
              <span style={{ textAlign: 'center', fontSize: '1rem' }}>
                {row.others ? (
                  <span style={{ color: 'var(--color-gray)' }}>&#10003;</span>
                ) : (
                  <span style={{ color: 'var(--color-gray-dark)' }}>&#10005;</span>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
