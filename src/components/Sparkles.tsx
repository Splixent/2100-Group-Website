import { useEffect, useRef } from 'react';

interface SparklesProps {
  particleColor?: string;
  particleDensity?: number;
  speed?: number;
  minSize?: number;
  maxSize?: number;
}

export default function Sparkles({
  particleColor = 'rgba(252, 202, 3, 0.8)',
  particleDensity = 60,
  speed = 0.3,
  minSize = 0.5,
  maxSize = 1.5,
}: SparklesProps) {
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

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number;
      opacity: number;
      fadeSpeed: number;
      maxOpacity: number;
    }

    const particles: Particle[] = Array.from({ length: particleDensity }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed - 0.1,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random(),
      fadeSpeed: (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      maxOpacity: Math.random() * 0.6 + 0.3,
    }));

    let raf: number;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.fadeSpeed;

        if (p.opacity >= p.maxOpacity || p.opacity <= 0.05) p.fadeSpeed *= -1;
        p.opacity = Math.max(0, Math.min(p.maxOpacity, p.opacity));

        if (p.x < -5) p.x = canvas.offsetWidth + 5;
        if (p.x > canvas.offsetWidth + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.offsetHeight + 5;
        if (p.y > canvas.offsetHeight + 5) p.y = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [particleColor, particleDensity, speed, minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
