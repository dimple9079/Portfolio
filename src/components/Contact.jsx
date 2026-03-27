import { Mail, Phone, Link, Code2, Send, ArrowUpRight } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'sirvidimple483@gmail.com', href: 'sirvidimple483@gmail.com', color: '#00F5FF' },
  { icon: Phone, label: 'Phone', value: '+91 8767197982', href: 'tel:+918767197982', color: '#00FF85' },
  { icon: Link, label: 'LinkedIn', value: 'https://www.linkedin.com/in/dimple-s-10a660379/linkedin', href: 'https://www.linkedin.com/in/dimple-s-10a660379/ ', external: true, color: '#0A66C2' },
  { icon: Code2, label: 'GitHub', value: 'github.com/dimple9079', href: 'https://github.com/dimple9079', external: true, color: '#C0C0E0' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--surface)' }}>
      <div className="section">
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 64, alignItems: 'center',
        }} className="contact-grid">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <div className="divider" />
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900,
              letterSpacing: '-0.04em', color: 'var(--text)', lineHeight: 1.1,
            }}>
              Let's build something<br />
              <span className="gradient-text">worth shipping.</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, maxWidth: 360 }}>
              I'm open to full-time roles, freelance projects, and interesting collaborations.
              If you have a real problem to solve — I'm your guy.
            </p>

            {/* Email CTA */}
            <a href="mailto:you@example.com" className="btn-primary" id="contact-email-cta"
              style={{ width: 'fit-content', fontSize: 15, padding: '13px 28px' }}>
              <Send size={16} /> Send a message
            </a>

            {/* Availability chip — neumorphic raised */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, width: 'fit-content',
              padding: '12px 18px', borderRadius: 16,
              background: 'var(--bg)',
              boxShadow: 'var(--neu-raised)',
              border: '1px solid rgba(0,245,255,0.15)',
            }}>
              <div style={{
                width: 9, height: 9, borderRadius: '50%', background: '#00FF85',
                boxShadow: '0 0 10px #00ff8577', animation: 'pulseGlow 2s infinite',
              }} />
              <span style={{ fontSize: 13, color: 'var(--cyan)', fontWeight: 700 }}>
                Open to opportunities — March 2026
              </span>
            </div>
          </div>

          {/* Right — contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {contacts.map(({ icon: Icon, label, value, href, color, external }) => (
              <a key={label} href={href} id={`contact-${label.toLowerCase()}`}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  borderRadius: 18, padding: '18px 22px',
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: 'var(--bg)',
                  boxShadow: 'var(--neu-raised)',
                  border: `1px solid ${color}18`,
                  transition: 'all 0.25s', cursor: 'pointer',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateX(5px)';
                    e.currentTarget.style.boxShadow = `8px 8px 20px var(--shadow-d), -8px -8px 20px var(--shadow-l), 0 0 20px ${color}22`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'var(--neu-raised)';
                  }}
                >
                  {/* Icon — neumorphic raised circle */}
                  <div style={{
                    width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                    background: 'var(--bg)',
                    boxShadow: `4px 4px 10px var(--shadow-d), -4px -4px 10px var(--shadow-l), 0 0 14px ${color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color={color} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 700 }}>{value}</div>
                  </div>

                  {external && <ArrowUpRight size={16} color="var(--muted2)" />}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 80, paddingTop: 32,
          borderTop: '1px solid var(--border)',
          boxShadow: 'inset 0 1px 0 var(--shadow-l)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <span style={{ color: 'var(--muted)', fontSize: 13 }}>
            Built with React + Tailwind. Designed with intent. © 2026
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['GitHub', 'LinkedIn', 'Email'].map((item, i) => {
              const hrefs = ['https://github.com/dimple9079', 'https://www.linkedin.com/in/dimple-s-10a660379/', 'mailto:sirvidimple483@gmail.com'];
              return (
                <a key={item} href={hrefs[i]}
                  style={{ color: 'var(--muted)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >{item}</a>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
