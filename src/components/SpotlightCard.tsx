import { useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function SpotlightCard({ children, style, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      className={`card-interactive ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-surface)',
        borderRadius: 'var(--card-radius)',
        border: '1px solid rgba(255,255,255,0.04)',
        ...style,
      }}
    >
      {/* Spotlight glow that follows cursor */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: hovering ? 1 : 0,
        transition: 'opacity 0.4s ease',
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(252, 202, 3, 0.06), transparent 60%)`,
        zIndex: 0,
      }} />

      {/* Spotlight border glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: hovering ? 1 : 0,
        transition: 'opacity 0.4s ease',
        borderRadius: 'inherit',
        background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(252, 202, 3, 0.12), transparent 50%)`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
        padding: 1,
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}
