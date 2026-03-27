const failures = [
  {
    emoji: '🔐',
    category: 'Auth Bugs',
    items: [
      'JWT refresh token caused infinite loop on expired session — fixed with silent token rotation and proper 401 interceptor.',
      'Cookie `httpOnly` + `SameSite=None` broke on localhost; solved with proxy config in Vite.',
    ],
  },
  {
    emoji: '🚀',
    category: 'Deployment Issues',
    items: [
      'Vercel build failed due to missing `NODE_ENV` env variable — missed in production dashboard.',
      'MongoDB Atlas IP whitelist blocked prod server; solved with `0.0.0.0/0` + network access audit.',
    ],
  },
  {
    emoji: '⚡',
    category: 'API Handling',
    items: [
      'Razorpay webhook signature mismatch — `raw body` was being parsed by Express JSON middleware first.',
      'Unhandled `async/await` rejection in QR generation route caused silent 500s — added global error handler.',
    ],
  },
];

export default function Failures() {
  return (
    <section id="failures" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            What Broke & What I Fixed
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8 }}>
            Real bugs. Real debugging. Not textbook examples.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="fail-grid">
          {failures.map(({ emoji, category, items }) => (
            <div key={category} style={{
              borderRadius: 22, padding: '28px 24px',
              display: 'flex', flexDirection: 'column', gap: 20,
              background: 'var(--bg)',
              boxShadow: 'var(--neu-raised)',
              border: '1px solid rgba(255,100,100,0.1)',
              transition: 'all 0.25s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '10px 10px 24px var(--shadow-d), -10px -10px 24px var(--shadow-l), 0 0 20px rgba(255,100,100,0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--neu-raised)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Neumorphic icon container */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14, fontSize: 22,
                  background: 'var(--bg)',
                  boxShadow: '4px 4px 10px var(--shadow-d), -4px -4px 10px var(--shadow-l)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {emoji}
                </div>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--text)' }}>{category}</div>
              </div>

              {/* Bug list — each item in its own inset pill */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((item, i) => (
                  <li key={i} style={{
                    borderRadius: 12, padding: '10px 14px',
                    background: 'var(--bg)',
                    boxShadow: 'inset 3px 3px 7px var(--shadow-d), inset -3px -3px 7px var(--shadow-l)',
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                  }}>
                    <span style={{ color: '#FF6B6B', fontWeight: 700, marginTop: 1, flexShrink: 0 }}>→</span>
                    <span style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .fail-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .fail-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
