import { useState } from 'react';
import { Shield, BarChart2, CreditCard, Clock, ExternalLink, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  { icon: Shield,    label: 'Authentication', desc: 'JWT + OAuth2 secure auth flow' },
  { icon: BarChart2, label: 'Analytics',       desc: 'Real-time scan tracking dashboard' },
  { icon: CreditCard,label: 'Payments',        desc: 'Razorpay integration for Pro plan' },
  { icon: Clock,     label: 'History',         desc: 'Full QR generation history & logs' },
];

const screenshots = [
  { src: '/dashboard.png', label: 'Main Dashboard' },
  { src: '/dashboard.png', label: 'Analytics View' },
  { src: '/dashboard.png', label: 'QR Generator' },
];

export default function Project() {
  const [view, setView]   = useState('project');
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide(s => (s + 1) % screenshots.length);
  const prevSlide = () => setSlide(s => (s - 1 + screenshots.length) % screenshots.length);

  return (
    <section id="project" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="section">

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 64 }}>
          <div>
            <div className="divider" />
            <div className="badge" style={{ marginBottom: 16 }}>⚡ Deployed & Functional Product</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginTop: 12 }}>
              LinkForge — QR Code SaaS
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 8, maxWidth: 440 }}>
              A production-ready SaaS platform for generating, tracking, and monetizing smart QR codes.
            </p>
          </div>

          {/* View toggle — neumorphic pill switcher */}
          <div style={{
            display: 'flex', gap: 4,
            background: 'var(--bg)',
            boxShadow: 'var(--neu-inset)',
            borderRadius: 16, padding: 5,
            border: '1px solid var(--border)',
          }}>
            {['project', 'case_study'].map(v => (
              <button
                key={v}
                id={`view-toggle-${v}`}
                onClick={() => setView(v)}
                style={{
                  padding: '9px 18px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
                  transition: 'all 0.25s',
                  background: view === v ? 'linear-gradient(135deg, var(--cyan), #00C8D4)' : 'transparent',
                  color: view === v ? '#000' : 'var(--muted)',
                  boxShadow: view === v
                    ? '3px 3px 8px var(--shadow-d), -2px -2px 6px var(--shadow-l), 0 0 14px var(--cyan-dim)'
                    : 'none',
                }}
              >
                {v === 'project' ? '📦 Project' : '📊 Case Study'}
              </button>
            ))}
          </div>
        </div>

        {view === 'project' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 48 }} className="proj-grid">

            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

              {/* Problem / Solution — neumorphic inset blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Problem', accent: '#FF4D6D', text: 'Businesses need dynamic, trackable QR codes — without building costly custom tools.' },
                  { label: 'Solution', accent: 'var(--cyan)', text: 'A SaaS platform that generates QR codes with built-in analytics, history, and Pro tier payments.' },
                ].map(({ label, accent, text }) => (
                  <div key={label} style={{
                    borderRadius: 16, padding: '20px 22px',
                    background: 'var(--bg)',
                    boxShadow: 'inset 4px 4px 10px var(--shadow-d), inset -4px -4px 10px var(--shadow-l)',
                    border: `1px solid ${accent}22`,
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</span>
                    <p style={{ color: 'var(--text)', fontSize: 15, marginTop: 7, lineHeight: 1.65 }}>{text}</p>
                  </div>
                ))}
              </div>

              {/* Feature grid — neumorphic raised cards */}
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Core Features</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {features.map(({ icon: Icon, label, desc }) => (
                    <div key={label} style={{
                      borderRadius: 16, padding: '18px 16px',
                      display: 'flex', flexDirection: 'column', gap: 10,
                      background: 'var(--bg)',
                      boxShadow: 'var(--neu-raised)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.25s',
                      cursor: 'default',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--neu-cyan)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--neu-raised)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{
                        width: 38, height: 38, borderRadius: 12,
                        background: 'var(--bg)',
                        boxShadow: '3px 3px 8px var(--shadow-d), -3px -3px 8px var(--shadow-l)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={17} color="var(--cyan)" />
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text)' }}>{label}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Tech Stack</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Razorpay', 'Vite', 'Tailwind'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="https://linkforge-brown.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="btn-primary" id="proj-live-demo">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href="https://github.com/dimple9079" target="_blank" rel="noopener noreferrer"
                  className="btn-outline" id="proj-github">
                  <Code2 size={14} /> GitHub
                </a>
              </div>
            </div>

            {/* Right — Screenshot carousel — neumorphic raised frame */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                position: 'relative', borderRadius: 20, overflow: 'hidden',
                background: 'var(--bg)',
                boxShadow: 'var(--neu-raised-lg)',
                border: '1px solid var(--border)',
              }}>
                <img
                  src={screenshots[slide].src}
                  alt={screenshots[slide].label}
                  style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
                />
                {/* Label overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                  padding: '40px 18px 14px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>{screenshots[slide].label}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{slide + 1}/{screenshots.length}</span>
                </div>
                {/* Arrow buttons — neumorphic circles */}
                {[
                  { side: 'left',  onClick: prevSlide, Icon: ChevronLeft  },
                  { side: 'right', onClick: nextSlide, Icon: ChevronRight },
                ].map(({ side, onClick, Icon }) => (
                  <button key={side} onClick={onClick} style={{
                    position: 'absolute', top: '50%', [side]: 12,
                    transform: 'translateY(-50%)',
                    background: 'var(--bg)',
                    boxShadow: 'var(--neu-flat)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%', width: 36, height: 36,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text)',
                  }}>
                    <Icon size={17} />
                  </button>
                ))}
              </div>

              {/* Dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                {screenshots.map((_, i) => (
                  <div key={i} onClick={() => setSlide(i)}
                    className={`carousel-dot ${i === slide ? 'active' : ''}`} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* CASE STUDY */
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { title: '🎯 Goal',        content: 'Build a revenue-generating SaaS product end-to-end — from idea to deployed, paying product — as a solo developer in under 4 weeks.' },
              { title: '🧠 Key Decisions', content: 'Chose MongoDB over PostgreSQL for flexibility in QR metadata. Used JWT over sessions for stateless scalability. Picked Razorpay for Indian payment market compatibility.' },
              { title: '⚠️ Challenges',  content: 'Auth refresh token loop, Razorpay webhook signature mismatch in production, CORS headers with credential cookies — all debugged and resolved.' },
              { title: '📈 Outcome',     content: '2,400+ QR codes generated across test users. Sub-2s load time. Successfully demonstrated product at college-level business idea presentation, winning Best Idea award.' },
            ].map(({ title, content }) => (
              <div key={title} style={{
                borderRadius: 18, padding: '24px 28px',
                background: 'var(--bg)',
                boxShadow: 'var(--neu-raised)',
                border: '1px solid var(--border)',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--neu-raised-lg)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--neu-raised)'}
              >
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
