import { motion } from 'motion/react';
import { useReveal } from '../hooks/useReveal';
import TiltCard from '../components/TiltCard';
import { newsArticles } from '../data/newsArticles';

export default function NewsPage() {
  const heroRef = useReveal({ threshold: 0.2 });

  return (
    <main style={{ minHeight: '100vh', background: '#000', paddingTop: 52 }}>
      {/* Hero */}
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
        }}>Newsroom</p>
        <h1 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
        }}>News & Updates.</h1>
        <p className="reveal" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.125rem',
          color: 'var(--color-gray)',
          maxWidth: 520,
          margin: '0 auto',
        }}>The latest from ZipIt HQ. Mostly product updates. Occasionally legal disclaimers.</p>
      </section>

      {/* Articles grid */}
      <section style={{
        padding: '0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vh, 8rem)',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {newsArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%' }}
            >
              <TiltCard style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
                {/* Category + date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    color: 'var(--color-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'rgba(252,202,3,0.08)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 6,
                  }}>{article.category}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    color: 'var(--color-gray-dark)',
                  }}>{article.readTime} read</span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}>{article.title}</h3>

                {/* Excerpt */}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-gray)',
                  lineHeight: 1.6,
                  flex: 1,
                }}>{article.excerpt}</p>

                {/* Date + link */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.04)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    color: 'var(--color-gray-dark)',
                  }}>{article.date}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                  }}>Read more →</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
