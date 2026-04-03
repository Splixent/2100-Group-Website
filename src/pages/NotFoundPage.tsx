import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFoundPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 15vw, 10rem)',
          fontWeight: 700,
          color: 'var(--color-accent)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          marginBottom: '1rem',
        }}>404</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>Page not found.</h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.0625rem',
          color: 'var(--color-gray)',
          maxWidth: 420,
          margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          Looks like this page got zapped out of existence. Unlike your screen time, it's not coming back.
        </p>
        <Link to="/">
          <button className="btn-primary">Back to safety</button>
        </Link>
      </motion.div>
    </main>
  );
}
