import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/forums', label: 'Forums' },
  { path: '/about', label: 'About' },
  { path: '/news', label: 'News' },
  { path: '/faq', label: 'FAQ' },
  { path: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 3rem)',
        height: 52,
        background: scrolled || menuOpen ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'saturate(180%) blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'saturate(180%) blur(20px)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'var(--color-white)',
          letterSpacing: '-0.02em',
          textDecoration: 'none',
        }}>ZipIt</Link>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }} className="nav-desktop">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              style={{ textDecoration: 'none', position: 'relative', padding: '0.25rem 0' }}
            >
              {({ isActive }) => (
                <>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: isActive ? 'var(--color-white)' : 'var(--color-gray-light)',
                    transition: 'color 0.2s ease',
                    fontWeight: isActive ? 600 : 400,
                  }}>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--color-accent)',
                        borderRadius: 1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Link to="/login" className="nav-desktop" style={{ textDecoration: 'none' }}>
            <span className="btn-ghost" style={{
              padding: '0.35rem 1.25rem',
              fontSize: '0.8125rem',
            }}>Share Experience</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-white)',
              width: 32,
              height: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: menuOpen ? 0 : 5,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 18, height: 1.5, background: 'currentColor', borderRadius: 1 }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              style={{ display: 'block', width: 18, height: 1.5, background: 'currentColor', borderRadius: 1 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 18, height: 1.5, background: 'currentColor', borderRadius: 1 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              top: 52,
              zIndex: 99,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {[...links, { path: '/login', label: 'Share Experience' }].map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  {({ isActive }) => (
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--color-accent)' : 'var(--color-white)',
                      letterSpacing: '-0.02em',
                    }}>{link.label}</span>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
