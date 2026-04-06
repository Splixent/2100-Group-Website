import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReveal } from '../hooks/useReveal';

import case1 from '../assets/Case1Blank.jpg';
import case2 from '../assets/Case2Blank.jpg';
import case3 from '../assets/Case3Blank.jpg';
import case4 from '../assets/Case4Blank.jpg';
import case5 from '../assets/Case5Blank.jpg';
import case6 from '../assets/Case6Blank.jpg';

const images = [
  { src: case1, alt: 'ZipIt Case — View 1' },
  { src: case2, alt: 'ZipIt Case — View 2' },
  { src: case3, alt: 'ZipIt Case — View 3' },
  { src: case4, alt: 'ZipIt Case — View 4' },
  { src: case5, alt: 'ZipIt Case — View 5' },
  { src: case6, alt: 'ZipIt Case — View 6' },
];

export default function ProductGallery() {
  const sectionRef = useReveal({ threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const next = () => go((active + 1) % images.length);
  const prev = () => go((active - 1 + images.length) % images.length);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.92 }),
  };

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#000',
      overflow: 'hidden',
    }}>
      <div ref={sectionRef} style={{ maxWidth: 'var(--max-width-wide)', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>Gallery</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>Built different. Literally.</h2>
        </div>

        {/* Main carousel */}
        <div className="reveal-scale" style={{ transitionDelay: '0.1s' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 600,
            aspectRatio: '3 / 4',
            margin: '0 auto',
            borderRadius: 'var(--card-radius)',
            overflow: 'hidden',
            background: 'var(--color-surface)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={active}
                src={images[active].src}
                alt={images[active].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                draggable={false}
              />
            </AnimatePresence>

            {/* Nav arrows */}
            <button onClick={prev} aria-label="Previous image" style={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              transition: 'background 0.2s',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} aria-label="Next image" style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              transition: 'background 0.2s',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Progress dots */}
            <div style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 8,
              zIndex: 2,
            }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`View image ${i + 1}`}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === active ? 'var(--color-accent)' : 'rgba(255,255,255,0.4)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-out-expo)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="reveal" style={{
          transitionDelay: '0.2s',
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          marginTop: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: 72,
                height: 96,
                borderRadius: 12,
                overflow: 'hidden',
                border: i === active
                  ? '2px solid var(--color-accent)'
                  : '2px solid rgba(255,255,255,0.08)',
                background: 'var(--color-surface)',
                cursor: 'pointer',
                opacity: i === active ? 1 : 0.5,
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
