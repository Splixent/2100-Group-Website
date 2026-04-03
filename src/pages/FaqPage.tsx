import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReveal } from '../hooks/useReveal';
import { faqItems } from '../data/faqItems';

function FaqAccordion({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          color: 'var(--color-white)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          fontWeight: 600,
          textAlign: 'left',
          cursor: 'pointer',
          gap: '1rem',
          letterSpacing: '-0.01em',
        }}
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-accent)',
            fontSize: '1.5rem',
            fontWeight: 300,
          }}
        >+</motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-gray)',
              lineHeight: 1.7,
              paddingBottom: '1.5rem',
              maxWidth: 680,
            }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
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
        }}>FAQ</p>
        <h1 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
        }}>Questions we get asked.<br />Frequently.</h1>
        <p className="reveal" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.125rem',
          color: 'var(--color-gray)',
          maxWidth: 520,
          margin: '0 auto',
        }}>Mostly by lawyers. But also by customers.</p>
      </section>

      <section style={{
        padding: '0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vh, 8rem)',
        maxWidth: 760,
        margin: '0 auto',
      }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {faqItems.map((item, i) => (
            <FaqAccordion key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
