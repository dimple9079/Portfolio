import { useState, useEffect, useRef } from 'react';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const metrics = [
  { value: 100, suffix: '+',   label: 'QR Codes Generated', desc: 'Across all test users and demo sessions',    icon: '📱', color: '#00F5FF' },
  { value: 10,  suffix: '+',   label: 'Test Users',         desc: 'Active beta testers during development',     icon: '👥', color: '#7B61FF' },
  { value: 1,    suffix: '.8s', label: 'Load Speed',         desc: 'Average page load time in production',       icon: '⚡', color: '#00FF85' },
  { value: 4,    suffix: ' wks',label: 'Build Time',         desc: 'From concept to deployed live product',      icon: '🏗️', color: '#FF6B6B' },
];

export default function Metrics() {
  return (
    <section id="metrics" style={{ padding: '100px 0', background: 'var(--surface)' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Numbers That Matter
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8 }}>
            Real outputs from a real product — not classroom projects.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }} className="metrics-grid">
          {metrics.map(({ value, suffix, label, desc, icon, color }) => (
            <div
              key={label}
              className="metric-card"
              style={{
                borderRadius: 22, padding: '32px 22px',
                textAlign: 'center',
                display: 'flex', flexDirection: 'column', gap: 14,
                background: 'var(--bg)',
                boxShadow: 'var(--neu-raised)',
                border: `1px solid ${color}18`,
                cursor: 'default',
              }}
            >
              {/* Big neumorphic icon circle */}
              <div style={{
                width: 60, height: 60, borderRadius: '50%', fontSize: 28,
                margin: '0 auto',
                background: 'var(--bg)',
                boxShadow: `6px 6px 14px var(--shadow-d), -6px -6px 14px var(--shadow-l), 0 0 20px ${color}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {icon}
              </div>

              {/* Count */}
              <div style={{
                fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 900,
                color, letterSpacing: '-0.05em', lineHeight: 1,
                textShadow: `0 0 18px ${color}55`,
              }}>
                <CountUp target={value} suffix={suffix} />
              </div>

              {/* Label */}
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text)' }}>{label}</div>

              {/* Desc — inset */}
              <div style={{
                borderRadius: 10, padding: '9px 12px',
                background: 'var(--bg)',
                boxShadow: 'inset 3px 3px 7px var(--shadow-d), inset -3px -3px 7px var(--shadow-l)',
                fontSize: 12, color: 'var(--muted)', lineHeight: 1.5,
              }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .metrics-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .metrics-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
