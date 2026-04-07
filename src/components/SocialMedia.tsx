import { useReveal } from '../hooks/useReveal';

const socials = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@ShopZipIt',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#000"/>
      </svg>
    ),
    color: '#FF0000',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/shop_zipit/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
    color: '#E4405F',
  },
];

export default function SocialMedia() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section style={{
      padding: 'var(--section-padding)',
      background: '#000',
      overflow: 'hidden',
    }}>
      <div ref={ref} style={{ maxWidth: 'var(--max-width-wide)', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>Follow the Movement</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>Watch. Share. Get shocked.</h2>
        </div>

        {/* YouTube embed */}
        <div className="reveal-scale" style={{ transitionDelay: '0.1s' }}>
          <div style={{
            maxWidth: 800,
            margin: '0 auto 3rem',
            borderRadius: 'var(--card-radius)',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            background: 'var(--color-surface)',
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
            }}>
              <iframe
                src="https://www.youtube.com/embed/nCGX-P_WtKc"
                title="ZipIt — Shock Therapy Phone Case"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Channel link + social buttons */}
        <div className="reveal" style={{
          transitionDelay: '0.2s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}>
          {/* Subscribe CTA */}
          <a
            href="https://www.youtube.com/@ShopZipIt"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 2rem',
              background: '#FF0000',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1.0625rem',
              borderRadius: 980,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 0 30px rgba(255,0,0,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(255,0,0,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,0,0,0.2)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#000"/>
            </svg>
            Subscribe on YouTube
          </a>

          {/* Social grid */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--color-surface)',
                  borderRadius: 980,
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color;
                  e.currentTarget.style.boxShadow = `0 0 20px ${s.color}33`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ color: s.color, display: 'flex' }}>{s.icon}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
