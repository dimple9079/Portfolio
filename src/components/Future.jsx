const roadmap = [
  {
    phase: 'Scale', icon: '☁️', title: 'Scaling Strategy',
    items: [
      'Redis caching layer for QR metadata — reduce DB hits by ~80%.',
      'Horizontal scaling with load balancer — multiple Node instances.',
      'CDN-delivered static QR codes for instant global access.',
    ],
  },
  {
    phase: 'Performance', icon: '⚡', title: 'Performance Improvements',
    items: [
      'Edge functions for QR resolution — <50ms latency globally.',
      'Background job queue (BullMQ) for analytics aggregation.',
      'Gzip + Brotli compression on all API responses.',
    ],
  },
  {
    phase: 'Features', icon: '🗺️', title: 'Feature Roadmap',
    items: [
      'AI-generated QR design suggestions based on brand colors.',
      'Team workspaces with role-based access control.',
      'Zapier/Webhook integration for enterprise automation.',
    ],
  },
];

export default function Future() {
  return (
    <section id="future" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            If This Scales
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8 }}>
            I've already thought about v2. Here's the architecture.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="future-grid">
          {roadmap.map(({ phase, icon, title, items }, idx) => (
            <div
              key={phase}
              style={{
                borderRadius: 22, padding: '30px 26px',
                display: 'flex', flexDirection: 'column', gap: 22,
                background: 'var(--bg)',
                boxShadow: 'var(--neu-raised)',
                border: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s', cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = 'var(--neu-raised-lg)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--neu-raised)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Watermark number */}
              <div style={{
                position: 'absolute', top: -8, right: 14, fontSize: 88, fontWeight: 900,
                color: 'rgba(255,255,255,0.018)', lineHeight: 1, userSelect: 'none',
              }}>{idx + 1}</div>

              {/* Icon + title row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 14, fontSize: 24,
                  background: 'var(--bg)',
                  boxShadow: '5px 5px 12px var(--shadow-d), -5px -5px 12px var(--shadow-l)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--cyan)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Phase {phase}</div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--text)', marginTop: 2 }}>{title}</div>
                </div>
              </div>

              {/* Items — each in inset pill */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
                {items.map((item, i) => (
                  <li key={i} style={{
                    borderRadius: 12, padding: '10px 14px',
                    background: 'var(--bg)',
                    boxShadow: 'inset 3px 3px 7px var(--shadow-d), inset -3px -3px 7px var(--shadow-l)',
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                  }}>
                    <span style={{ color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, marginTop: 2, flexShrink: 0 }}>→</span>
                    <span style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Critical line — neumorphic quote container */}
        <div style={{
          marginTop: 72, textAlign: 'center',
          padding: '48px 32px',
          background: 'var(--bg)',
          boxShadow: 'var(--neu-raised-lg)',
          borderRadius: 28,
          border: '1px solid rgba(0,245,255,0.08)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Subtle inner glow */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.04) 0%, transparent 70%)',
          }} />
          {/* Left/right quotation marks — neumorphic raised */}
          {['left', 'right'].map(side => (
            <div key={side} style={{
              position: 'absolute', top: 20, [side]: 24, zIndex: 1,
              width: 40, height: 40, borderRadius: 10,
              background: 'var(--bg)',
              boxShadow: 'var(--neu-flat)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, color: 'var(--muted2)',
            }}>
              {side === 'left' ? '❝' : '❞'}
            </div>
          ))}
          <blockquote style={{
            position: 'relative', zIndex: 1,
            fontSize: 'clamp(17px, 2.5vw, 26px)', fontWeight: 800,
            color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.4,
            fontStyle: 'normal', maxWidth: 640, margin: '0 auto 16px',
          }}>
            This is not a portfolio. This is a system designed to prove{' '}
            <span className="gradient-text">how I think.</span>
          </blockquote>
          <p style={{ color: 'var(--muted)', fontSize: 14, position: 'relative', zIndex: 1 }}>
            — Built with intent, not templates.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .future-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .future-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
