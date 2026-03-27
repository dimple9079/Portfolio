import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Zap } from 'lucide-react';

const links = [
  { label: 'Project', href: '#project' },
  { label: 'Proof', href: '#proof' },
  { label: 'System', href: '#system' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--bg)',
        boxShadow: scrolled ? '0 4px 24px var(--shadow-d), 0 -2px 8px var(--shadow-l)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div className="section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg)',
            boxShadow: '4px 4px 10px var(--shadow-d), -4px -4px 10px var(--shadow-l), 0 0 16px var(--cyan-dim)',
            border: '1px solid rgba(0,245,255,0.15)',
          }}>
            <Zap size={18} color="var(--cyan)" fill="var(--cyan)" />
          </div>
          <span style={{ color: 'var(--text)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.03em' }}>
            <span style={{ color: 'var(--cyan)' }}>Dev</span>Portfolio
          </span>
        </a>

        {/* Desktop links */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{
                background: 'var(--bg)',
                border: '1px solid transparent',
                borderRadius: 10,
                cursor: 'pointer',
                color: 'var(--muted)', fontSize: 14, fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                padding: '6px 14px',
                transition: 'all 0.22s',
                boxShadow: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--cyan)';
                e.currentTarget.style.boxShadow = 'var(--neu-flat)';
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--muted)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Theme toggle — neumorphic circle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: 38, height: 38,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)',
              boxShadow: 'var(--neu-flat)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = 'var(--neu-cyan)';
              e.currentTarget.style.color = 'var(--cyan)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'var(--neu-flat)';
              e.currentTarget.style.color = 'var(--muted)';
            }}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 10, width: 38, height: 38, cursor: 'pointer',
              color: 'var(--text)', display: 'none',
              alignItems: 'center', justifyContent: 'center',
              boxShadow: 'var(--neu-flat)',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — neumorphic inset panel */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg)',
          boxShadow: 'inset 0 4px 16px var(--shadow-d)',
          borderTop: '1px solid var(--border)',
          padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--muted)', fontSize: 15, fontWeight: 500,
                fontFamily: 'Inter, sans-serif', textAlign: 'left',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
