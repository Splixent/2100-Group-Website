import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReveal } from '../hooks/useReveal';

/* ── Shooting Stars Canvas ── */
function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    interface Star { x: number; y: number; len: number; speed: number; angle: number; opacity: number; active: boolean; delay: number; timer: number; }
    const stars: Star[] = Array.from({ length: 5 }, () => ({
      x: 0, y: 0, len: 0, speed: 0, angle: 0, opacity: 0, active: false,
      delay: Math.random() * 6000 + 2000, timer: 0,
    }));

    const spawn = (s: Star) => {
      s.x = Math.random() * canvas.offsetWidth;
      s.y = Math.random() * canvas.offsetHeight * 0.5;
      s.len = Math.random() * 80 + 30;
      s.speed = Math.random() * 4 + 2;
      s.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      s.opacity = 1;
      s.active = true;
    };

    let raf: number;
    let lastTime = 0;
    const loop = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const s of stars) {
        if (!s.active) {
          s.timer += dt;
          if (s.timer >= s.delay) { spawn(s); s.timer = 0; s.delay = Math.random() * 8000 + 3000; }
          continue;
        }
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.008;
        if (s.opacity <= 0 || s.x > canvas.offsetWidth || s.y > canvas.offsetHeight) { s.active = false; continue; }

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len,
        );
        grad.addColorStop(0, `rgba(252, 202, 3, ${s.opacity})`);
        grad.addColorStop(1, 'rgba(252, 202, 3, 0)');
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

/* ── Twinkling Stars ── */
function StarField({ count = 80 }: { count?: number }) {
  const stars = useRef(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }))
  ).current;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.8)',
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Moving Border Button ── */
function GlowButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      setAngle((a) => (a + 1.5) % 360);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <button
      ref={btnRef}
      style={{
        position: 'relative',
        padding: '1rem 3rem',
        fontSize: '1.125rem',
        fontWeight: 600,
        fontFamily: 'var(--font-body)',
        color: '#000',
        background: 'var(--color-accent)',
        border: 'none',
        borderRadius: 980,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        zIndex: 1,
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Animated glow ring behind the button */}
      <span style={{
        position: 'absolute',
        inset: -3,
        borderRadius: 980,
        background: `conic-gradient(from ${angle}deg, var(--color-accent), rgba(252,202,3,0.1), var(--color-accent), rgba(252,202,3,0.1), var(--color-accent))`,
        zIndex: -1,
        filter: 'blur(6px)',
        opacity: 0.7,
      }} />
      {children}
    </button>
  );
}

/* ── Needed import for GlowButton ── */
import { useState } from 'react';

/* ── Main CTA Section ── */
export default function CallToAction() {
  const ref = useReveal({ threshold: 0.15 });
  const words = 'Ready to commit?'.split(' ');

  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(6rem, 15vh, 12rem) clamp(1.5rem, 5vw, 4rem)',
      background: 'radial-gradient(ellipse at 50% 40%, #0d0b00 0%, #000 60%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: 500,
        background: 'radial-gradient(ellipse, rgba(252,202,3,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <StarField />
      <ShootingStars />

      <div ref={ref} style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
        {/* Word-by-word text reveal */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 700,
          color: 'var(--color-accent)',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '1.25rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0 0.35em',
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            color: 'var(--color-gray)',
            marginBottom: '2.5rem',
          }}
        >
          ZipIt. Starting at $49.99.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <GlowButton>Pre-order Now</GlowButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-gray-dark)',
            marginTop: '2rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          Ships Q3 2026. Tools not included.
        </motion.p>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
