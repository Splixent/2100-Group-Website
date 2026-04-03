import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Forums', path: '/forums' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Pricing', path: '/pricing' },
];

export default function Footer() {
  return (
    <footer style={{
      padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#000',
    }}>
      <div style={{
        maxWidth: 980,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-dark)' }}>
          &copy; 2026 ZipIt. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {footerLinks.map((link) => (
            <Link key={link.path} to={link.path} style={{
              fontSize: '0.75rem',
              color: 'var(--color-gray)',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
