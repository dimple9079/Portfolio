import { useEffect, useRef } from 'react';
import { Rocket, Code2, BarChart2, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: 80, paddingBottom: 64, position: 'relative', overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Subtle ambient radial glows */}
      <div style={{
        position: 'absolute', top: '8%', left: '-8%', width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 65%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', right: '-6%', width: 440, height: 440,
        background: 'radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 65%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />

      <div className="section" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 64, alignItems: 'center',
        }} className="hero-grid">

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* Status badge */}
            <div>
              <span className="badge">
                <span style={{
                  width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)',
                  display: 'inline-block', animation: 'pulseGlow 2.2s infinite',
                }} />
                Available for Opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(34px, 5vw, 54px)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
            }}>
              I build{' '}
              <span className="gradient-text">real-world</span>
              <br />
              AI-powered products
              <br />
              <span style={{
                color: 'var(--muted)', fontWeight: 500,
                fontSize: '0.54em', letterSpacing: '-0.01em',
                display: 'block', marginTop: 6,
              }}>
                — not just websites.
              </span>
            </h1>

            {/* Subtext */}
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, maxWidth: 430 }}>
              Focused on solving practical problems with scalable systems.
              I ship products that users actually need — from architecture to deployment.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="https://linkforge-brown.vercel.app" target="_blank" rel="noopener noreferrer"
                className="btn-primary" id="hero-live-demo">
                <Rocket size={16} /> Live Demo
              </a>
              <a href="https://github.com/dimple9079" target="_blank" rel="noopener noreferrer"
                className="btn-outline" id="hero-github">
                <Code2 size={16} /> GitHub
              </a>
              <a href="#project" className="btn-outline" id="hero-case-study"
                onClick={e => { e.preventDefault(); document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <BarChart2 size={16} /> Case Study
              </a>
            </div>

            {/* Profile chip — neumorphic pill */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 18px', borderRadius: 18, width: 'fit-content',
              background: 'var(--bg)',
              boxShadow: 'var(--neu-raised)',
              border: '1px solid var(--border)',
              marginTop: 4,
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                boxShadow: '3px 3px 8px var(--shadow-d), -3px -3px 8px var(--shadow-l), 0 0 16px var(--cyan-glow)',
                border: '2px solid var(--cyan)',
              }}>
                <img src="profile.png" alt="Developer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text)' }}>Shelvi Dingle</div>
                <div style={{ fontSize: 11, color: 'var(--cyan)', fontWeight: 700, letterSpacing: '0.07em' }}>
                  Aspirining Software Engineer
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Product Mockup ── */}
          <div style={{ position: 'relative' }} className="animate-float">
            {/* Neumorphic raised frame */}
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 24, overflow: 'hidden',
              background: 'var(--bg)',
              boxShadow: '16px 16px 36px var(--shadow-d), -16px -16px 36px var(--shadow-l), 0 0 48px rgba(0,245,255,0.06)',
              border: '1px solid rgba(0,245,255,0.12)',
            }}>
              {/* Browser chrome bar */}
              <div style={{
                background: 'var(--surface)',
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                borderBottom: '1px solid var(--border)',
                boxShadow: 'inset 0 -2px 6px var(--shadow-d)',
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                    <div key={c} style={{
                      width: 10, height: 10, borderRadius: '50%', background: c,
                      boxShadow: `0 0 6px ${c}55`,
                    }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, background: 'var(--bg)',
                  borderRadius: 7, padding: '4px 12px',
                  fontSize: 11, color: 'var(--muted)',
                  fontFamily: 'JetBrains Mono, monospace',
                  boxShadow: 'inset 2px 2px 5px var(--shadow-d), inset -2px -2px 5px var(--shadow-l)',
                }}>
                  
                </div>
              </div>

              <img
                src="dashboard.png"
                alt="LinkForge QR Generator Dashboard"
                style={{ width: '100%', display: 'block', maxHeight: 400, objectFit: 'cover' }}
              />
            </div>

            {/* Float badge — LIVE */}
            <div style={{
              position: 'absolute', top: 20, right: -18, zIndex: 2,
              background: 'var(--bg)',
              boxShadow: '4px 4px 12px var(--shadow-d), -4px -4px 12px var(--shadow-l), 0 0 16px var(--cyan-dim)',
              border: '1px solid rgba(0,245,255,0.18)',
              borderRadius: 12, padding: '8px 14px',
              display: 'flex', alignItems: 'center', gap: 7,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FF85', boxShadow: '0 0 8px #00ff8588', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>Live</span>
            </div>

            {/* Float badge — QR count */}
            <div style={{
              position: 'absolute', bottom: 20, left: -18, zIndex: 2,
              background: 'var(--bg)',
              boxShadow: '6px 6px 16px var(--shadow-d), -6px -6px 16px var(--shadow-l)',
              border: '1px solid var(--border)',
              borderRadius: 16, padding: '12px 18px',
            }}>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>QR Codes Generated</div>
              <div style={{
                fontSize: 26, fontWeight: 900, color: 'var(--cyan)', letterSpacing: '-0.04em',
                textShadow: '0 0 16px var(--cyan-glow)',
              }}></div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 8, marginTop: 72, opacity: 0.35,
        }}>
          <span style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll to explore</span>
          <ArrowDown size={15} color="var(--muted)" style={{ animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .animate-float { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
