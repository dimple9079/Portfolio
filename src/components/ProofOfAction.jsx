const proofs = [
  {
    emoji: '🎤',
    title: 'Event Coordinator',
    subtitle: 'Technical Execution',
    desc: 'Handled end-to-end operations for college tech events — scheduling, logistics, and live coordination under pressure.',
    accent: '#FF6B6B',
  },
  {
    emoji: '⚡',
    title: 'Hackathons',
    subtitle: 'Fast Shipping',
    desc: 'Competed in multiple hackathons — turning vague problem statements into working demos in under 24 hours.',
    accent: '#00F5FF',
  },
  {
    emoji: '🌍',
    title: 'Open Source',
    subtitle: 'GirlScript Summer of Code',
    desc: 'Contributing meaningful PRs to open-source repositories as part of GSSoC — code reviewed and merged.',
    accent: '#7B61FF',
  },
];

export default function ProofOfAction() {
  return (
    <section id="proof" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Proof of Action
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8 }}>
            I don't just write code — I operate, compete, and contribute.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="proof-grid">
          {proofs.map(({ emoji, title, subtitle, desc, accent }) => (
            <div
              key={title}
              style={{
                borderRadius: 22, padding: '30px 26px',
                display: 'flex', flexDirection: 'column', gap: 18,
                background: 'var(--bg)',
                boxShadow: 'var(--neu-raised)',
                border: `1px solid ${accent}18`,
                cursor: 'default',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `10px 10px 24px var(--shadow-d), -10px -10px 24px var(--shadow-l), 0 0 24px ${accent}22`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--neu-raised)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon — neumorphic raised circle */}
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'var(--bg)',
                boxShadow: `5px 5px 12px var(--shadow-d), -5px -5px 12px var(--shadow-l), 0 0 16px ${accent}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26,
              }}>
                {emoji}
              </div>

              <div>
                <div style={{ fontWeight: 800, fontSize: 17, color: 'var(--text)', marginBottom: 4 }}>{title}</div>
                <div style={{
                  fontSize: 11, color: accent, fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12,
                }}>
                  {subtitle}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .proof-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .proof-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
