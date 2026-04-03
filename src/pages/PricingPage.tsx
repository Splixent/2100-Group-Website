import { motion } from 'motion/react';
import { useReveal } from '../hooks/useReveal';
import SpotlightCard from '../components/SpotlightCard';
import { pricingPlans } from '../data/pricingPlans';

export default function PricingPage() {
  const heroRef = useReveal({ threshold: 0.2 });

  return (
    <main style={{ minHeight: '100vh', background: '#000', paddingTop: 52 }}>
      <section ref={heroRef} style={{
        padding: 'clamp(5rem, 12vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        textAlign: 'center',
      }}>
        <p className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          color: 'var(--color-accent)',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}>Pricing</p>
        <h1 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
        }}>Choose your level<br />of commitment.</h1>
        <p className="reveal" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.125rem',
          color: 'var(--color-gray)',
          maxWidth: 480,
          margin: '0 auto',
        }}>All plans include the case, the screws, and the existential reckoning. No subscriptions. One-time payment. Lifetime consequences.</p>
      </section>

      <section style={{
        padding: '0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vh, 8rem)',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}>
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%' }}
            >
              <SpotlightCard style={{
                padding: 'clamp(2rem, 4vw, 2.5rem)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                ...(plan.highlighted ? {
                  border: '1.5px solid var(--color-accent)',
                  boxShadow: '0 0 40px rgba(252,202,3,0.08)',
                } : {}),
              }}>
                {plan.highlighted && (
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    color: '#000',
                    background: 'var(--color-accent)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 980,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    alignSelf: 'flex-start',
                    marginBottom: '1.25rem',
                  }}>Most popular</div>
                )}

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                }}>{plan.name}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-gray)',
                  marginBottom: '1.5rem',
                }}>{plan.tagline}</p>

                <div style={{ marginBottom: '2rem' }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                    }}>{plan.priceUSD}</span>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-gray-dark)',
                      marginLeft: '0.5rem',
                    }}>one-time</span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-gray-dark)',
                    marginTop: '0.25rem',
                  }}>{plan.priceCAD}</p>
                </div>

                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                  flex: 1,
                }}>
                  {plan.features.map((feat) => (
                    <li key={feat} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-gray-light)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}>
                      <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }}>&#10003;</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  className={plan.highlighted ? 'btn-primary' : 'btn-ghost'}
                  style={{ width: '100%' }}
                >{plan.cta}</button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          color: 'var(--color-gray-dark)',
          textAlign: 'center',
          marginTop: '3rem',
          display: 'none',
        }}>All prices in USD. Shipping not included. Regret included at no extra charge.</p>
      </section>
    </main>
  );
}
