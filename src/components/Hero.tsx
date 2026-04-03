import { useState, useEffect, useCallback } from 'react';
import FlipWords from './FlipWords';
import sceneBlack from '../assets/SceneBlack.mp4';
import sceneRed from '../assets/SceneRed.mp4';
import sceneBlue from '../assets/SceneBlue.mp4';

const colors = [
  { id: 'black', label: 'Midnight Black', color: '#1a1a1a', video: sceneBlack },
  { id: 'red', label: 'Signal Red', color: '#c0392b', video: sceneRed },
  { id: 'blue', label: 'Cobalt Blue', color: '#2c3e8c', video: sceneBlue },
] as const;

const CYCLE_MS = 5000;

interface HeroProps {
  onWatchFilm: () => void;
}

export default function Hero({ onWatchFilm }: HeroProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % colors.length);
  }, []);

  // Auto-cycle through colors
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#000',
      overflow: 'hidden',
    }}>
      {/* Text content */}
      <div style={{
        paddingTop: 'max(120px, 15vh)',
        textAlign: 'center',
        zIndex: 2,
        animation: 'heroFadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--color-accent)',
          fontWeight: 600,
          marginBottom: '0.75rem',
          letterSpacing: '0.02em',
          paddingTop: 'max(120px, 15vh)',
        }}>ZipIt</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 9vw, 5.5rem)',
          fontWeight: 700,
          color: 'var(--color-white)',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '1rem',
        }}>
          Stop <FlipWords words={['scrolling', 'doomscrolling', 'procrastinating', 'refreshing']} duration={2800} />.<br />Start <FlipWords words={['flinching', 'living', 'focusing', 'feeling']} duration={2800} />.
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2.2vw, 1.3125rem)',
          color: 'var(--color-gray)',
          maxWidth: 520,
          margin: '0 auto 2rem',
          lineHeight: 1.5,
        }}>
          The world's first shock therapy phone case.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <button className="btn-primary">Pre-order</button>
          <button className="btn-link" onClick={onWatchFilm} style={{ fontFamily: 'var(--font-body)' }}>
            Watch the film
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </div>
      </div>

      {/* Full-bleed video — gradient mask fades top and bottom edges */}
      <div style={{
        width: '100%',
        flex: 1,
        position: 'relative',
        minHeight: '40vh',
        marginTop: '2rem',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}>
        {colors.map((c, i) => (
          <video
            key={c.id}
            src={c.video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: i === active ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#000',
              opacity: i === active ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }}
          />
        ))}
      </div>

      {/* Color swatches + pause */}
      <div style={{
        display: 'flex',
        gap: '1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem 0 2rem',
        zIndex: 2,
      }}>
        {colors.map((c, i) => (
          <button
            key={c.id}
            onClick={() => { setActive(i); setPaused(true); }}
            aria-label={c.label}
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: c.color,
              border: i === active ? '2px solid var(--color-white)' : '2px solid rgba(255,255,255,0.3)',
              outline: i === active ? '2px solid var(--color-white)' : 'none',
              outlineOffset: 2,
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}

        {/* Pause/play toggle */}
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play' : 'Pause'}
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            marginLeft: '0.5rem',
            transition: 'border-color 0.2s',
          }}
        >
          {paused ? (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          )}
        </button>
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
