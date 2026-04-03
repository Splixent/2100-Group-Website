import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LensProps {
  children: ReactNode;
  zoomFactor?: number;
  lensSize?: number;
}

export default function Lens({ children, zoomFactor = 1.8, lensSize = 180 }: LensProps) {
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'zoom-in',
      }}
    >
      {/* Main content — blurs when hovering */}
      <motion.div
        animate={{ filter: hovering ? 'blur(3px)' : 'blur(0px)' }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Magnifying lens */}
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: pos.x - lensSize / 2,
              top: pos.y - lensSize / 2,
              width: lensSize,
              height: lensSize,
              borderRadius: '50%',
              border: '1.5px solid rgba(252, 202, 3, 0.3)',
              boxShadow: '0 0 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.2)',
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            {/* Zoomed clone of content */}
            <div style={{
              position: 'absolute',
              width: `${100 * zoomFactor}%`,
              height: `${100 * zoomFactor}%`,
              left: `${-pos.x * zoomFactor + lensSize / 2}px`,
              top: `${-pos.y * zoomFactor + lensSize / 2}px`,
              transformOrigin: '0 0',
            }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
