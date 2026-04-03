import { useState } from 'react';

interface GlowInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GlowInput({ label, type = 'text', placeholder, value, onChange }: GlowInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <label style={{
        display: 'block',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: focused ? 'var(--color-accent)' : 'var(--color-gray-dark)',
        marginBottom: '0.375rem',
        transition: 'color 0.3s ease',
      }}>{label}</label>
      <div style={{
        position: 'relative',
        borderRadius: 12,
        padding: 1,
        background: focused
          ? 'linear-gradient(135deg, var(--color-accent), rgba(252,202,3,0.3), var(--color-accent))'
          : 'rgba(255,255,255,0.06)',
        transition: 'background 0.3s ease',
        boxShadow: focused ? '0 0 20px rgba(252,202,3,0.1)' : 'none',
      }}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            background: 'var(--color-surface)',
            border: 'none',
            borderRadius: 11,
            color: 'var(--color-white)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </div>
  );
}
