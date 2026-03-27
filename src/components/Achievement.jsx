import { Award } from 'lucide-react';

export default function Achievement() {
  return (
    <section id="achievement" style={{ padding: '100px 0', background: 'var(--surface)' }}>
      {/* Inset band illusion */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        height: '100%', pointerEvents: 'none',
        boxShadow: 'inset 0 8px 24px var(--shadow-d), inset 0 -8px 24px var(--shadow-l)',
      }} />

      <div className="section" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <div className="badge" style={{ margin: '0 auto 16px' }}><Award size={12} /> Proof of Validation</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginTop: 12 }}>
            Validated Thinking
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8 }}>
            Real-world validation beyond code — judged by people, not algorithms.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: 600, width: '100%' }}>
            {/* Neumorphic raised certificate card */}
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              background: 'var(--bg)',
              boxShadow: '14px 14px 32px var(--shadow-d), -14px -14px 32px var(--shadow-l), 0 0 40px rgba(255,215,0,0.06)',
              border: '1px solid rgba(255,215,0,0.12)',
              transition: 'box-shadow 0.35s, transform 0.35s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '18px 18px 40px var(--shadow-d), -18px -18px 40px var(--shadow-l), 0 0 52px rgba(255,215,0,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '14px 14px 32px var(--shadow-d), -14px -14px 32px var(--shadow-l), 0 0 40px rgba(255,215,0,0.06)';
              }}
            >
              {/* Gold header — neumorphic embossed bar */}
              <div style={{
                background: 'linear-gradient(135deg, #B8860B, #FFD700, #B8860B)',
                padding: '13px 24px',
                display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)',
              }}>
                <Award size={20} color="#000" fill="#000" />
                <span style={{ fontWeight: 900, color: '#000', fontSize: 13, letterSpacing: '0.06em' }}>
                  ACHIEVEMENT CERTIFICATE
                </span>
              </div>

              {/* Certificate image with neumorphic inset */}
              <div style={{
                boxShadow: 'inset 0 4px 14px rgba(0,0,0,0.4)',
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}certificate.png`}
                  alt="Best Business Idea Presentation Certificate"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 300 }}
                />
              </div>

              {/* Caption block */}
              <div style={{
                padding: '24px 28px',
                borderTop: '1px solid rgba(255,215,0,0.1)',
                background: 'var(--bg)',
                boxShadow: 'inset 0 4px 12px var(--shadow-d)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', background: '#FFD700',
                    boxShadow: '0 0 10px rgba(255,215,0,0.6)',
                  }} />
                  <span style={{ fontSize: 11, color: '#FFD700', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    College Level
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 8 }}>
                  🏆 Business Idea Presentation Winner
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
                  Won 1st Place at JASHN-E-THEEM (Feb 2026) for presenting innovative, 
                  scalable business solutions judged by industry professionals at Theem College of Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
