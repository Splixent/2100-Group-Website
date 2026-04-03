import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: Props) {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setVideoError(false);
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Try to resolve the video URL — file may not exist on deployed builds
  let videoSrc: string;
  try {
    videoSrc = new URL('../assets/AdvertisementFinal.mp4', import.meta.url).href;
  } catch {
    videoSrc = '';
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: '#fff',
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!videoError && videoSrc ? (
          <video
            src={videoSrc}
            controls
            autoPlay
            onError={() => setVideoError(true)}
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 1100, maxHeight: '85vh', borderRadius: 12 }}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              textAlign: 'center',
              maxWidth: 420,
              padding: '3rem',
              background: 'var(--color-surface)',
              borderRadius: 'var(--card-radius)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(252,202,3,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-accent)">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}>Film coming soon</h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-gray)',
              lineHeight: 1.6,
            }}>The full ZipIt advertisement is being finalized. Check back for the premiere.</p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
