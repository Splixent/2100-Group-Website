export default function GridBackground() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'radial-gradient(circle, rgba(252,202,3,0.08) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      opacity: 0.6,
    }} />
  );
}
