import { useState, type ReactNode, type CSSProperties } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  style?: CSSProperties;
  tiltAmount?: number;
}

export default function TiltCard({ children, style, tiltAmount = 8 }: TiltCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * tiltAmount, y: x * tiltAmount });
  };

  return (
    <div style={{ perspective: 800, height: '100%' }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => { setRotate({ x: 0, y: 0 }); setHovering(false); }}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: hovering ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--card-radius)',
          border: '1px solid rgba(255,255,255,0.04)',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          cursor: 'default',
          ...style,
        }}
      >
        <div style={{ transform: 'translateZ(0)', height: '100%' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
