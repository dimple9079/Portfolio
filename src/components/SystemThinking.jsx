const steps = [
  { num: '01', label: 'Problem Breakdown', desc: 'Define the exact pain. Who has it? How often? What exists? What fails?', icon: '🎯' },
  { num: '02', label: 'User Flow',          desc: 'Map the full journey end-to-end before touching code.',                  icon: '🔀' },
  { num: '03', label: 'Tech Decisions',     desc: 'Choose tools that fit the problem — not just the trend.',               icon: '⚙️' },
  { num: '04', label: 'Build',             desc: 'Ship incrementally. Validate fast. Iterate even faster.',               icon: '🏗️' },
  { num: '05', label: 'Improve',           desc: 'Measure real usage. Identify bottlenecks. Fix what matters.',           icon: '📈' },
];

const tradeoffs = [
  {
    decision: 'Core features over complexity',
    rationale: 'Shipped a tight, working product instead of a bloated one with half-baked features.',
    impact:    'Faster iteration, cleaner UX, easier bug tracking.',
  },
  {
    decision: 'Performance over unnecessary UI',
    rationale: 'Prioritized sub-2s load times over flashy animations that hurt LCP.',
    impact:    'Better user retention and mobile experience.',
  },
  {
    decision: 'MongoDB over PostgreSQL',
    rationale: 'QR metadata is schema-flexible — NoSQL was the right fit without premature normalization.',
    impact:    'Rapid development without schema migrations.',
  },
];

export default function SystemThinking() {
  return (
    <section id="system" style={{ padding: '100px 0', background: 'var(--surface)' }}>
      <div className="section">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            How I Build Systems
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8, maxWidth: 420, margin: '8px auto 0' }}>
            A repeatable mental model — not just coding patterns.
          </p>
        </div>

        {/* Steps — neumorphic timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 660, margin: '0 auto 80px' }}>
          {steps.map(({ num, label, desc, icon }, i) => (
            <div key={num} style={{ display: 'flex', gap: 0 }}>
              {/* Left rail */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 64 }}>
                {/* Step bubble — neumorphic raised + cyan ring */}
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'var(--bg)',
                  boxShadow: '5px 5px 12px var(--shadow-d), -5px -5px 12px var(--shadow-l), 0 0 18px var(--cyan-dim)',
                  border: '2px solid rgba(0,245,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {icon}
                </div>
                {i < steps.length - 1 && <div className="step-line" />}
              </div>

              {/* Right content — neumorphic flat label */}
              <div style={{ flex: 1, paddingLeft: 22, paddingBottom: i < steps.length - 1 ? 32 : 0 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
                }}>
                  <span style={{ fontSize: 11, color: 'var(--cyan)', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>{num}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>{label}</h3>
                </div>
                <div style={{
                  borderRadius: 12, padding: '12px 16px',
                  background: 'var(--bg)',
                  boxShadow: 'inset 3px 3px 8px var(--shadow-d), inset -3px -3px 8px var(--shadow-l)',
                }}>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tradeoffs */}
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', textAlign: 'center', marginBottom: 12 }}>
          Smart Decisions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: 14, textAlign: 'center', marginBottom: 40 }}>
          Every architecture decision has a reason. Here's mine.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tradeoffs-grid">
          {tradeoffs.map(({ decision, rationale, impact }) => (
            <div key={decision} style={{
              borderRadius: 20, padding: '24px 22px',
              display: 'flex', flexDirection: 'column', gap: 16,
              background: 'var(--bg)',
              boxShadow: 'var(--neu-raised)',
              border: '1px solid var(--border)',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--neu-raised-lg)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--neu-raised)'}
            >
              <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', lineHeight: 1.35 }}>✅ {decision}</div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>Why</div>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{rationale}</p>
              </div>
              <div style={{
                borderRadius: 10, padding: '10px 14px',
                background: 'var(--bg)',
                boxShadow: 'inset 3px 3px 7px var(--shadow-d), inset -3px -3px 7px var(--shadow-l)',
              }}>
                <div style={{ fontSize: 10, color: 'var(--cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Impact</div>
                <p style={{ color: 'var(--text)', fontSize: 13, lineHeight: 1.6, fontWeight: 600 }}>{impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .tradeoffs-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .tradeoffs-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
