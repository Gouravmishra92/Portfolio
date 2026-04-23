import { useState, useEffect } from 'react';
import { useTheme, tk } from '../context/ThemeContext';
import { useTyping } from '../hooks';
import { ROLES } from '../constants/data';


/* ── Social link pill ── */
function SocialLink({ href, label, icon }) {
  const { dark } = useTheme();
  return (
    <a href={href} target="_blank" rel="noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '7px 16px', borderRadius: 100,
        background: tk.surface2(dark),
        border: `1px solid ${tk.border(dark)}`,
        textDecoration: 'none',
        fontFamily: 'Outfit', fontWeight: 600, fontSize: 13,
        color: tk.muted(dark),
        transition: 'all 0.22s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(232,121,249,0.45)';
        e.currentTarget.style.color = '#e879f9';
        e.currentTarget.style.background = 'rgba(232,121,249,0.08)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = tk.border(dark);
        e.currentTarget.style.color = tk.muted(dark);
        e.currentTarget.style.background = tk.surface2(dark);
        e.currentTarget.style.transform = '';
      }}>
      <span style={{ fontSize: 15 }}>{icon}</span>
      {label}
    </a>
  );
}

/* ── Stat badge ── */
function StatBadge({ value, label, dark }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '14px 20px',
      background: tk.surface(dark),
      border: `1px solid ${tk.border(dark)}`,
      borderRadius: 14,
      minWidth: 80,
      transition: 'all 0.3s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,121,249,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = tk.border(dark); e.currentTarget.style.transform = ''; }}>
      <span style={{
        fontFamily: 'Outfit', fontWeight: 800, fontSize: 22,
        background: 'linear-gradient(135deg,#e879f9,#38bdf8)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>{value}</span>
      <span style={{ fontFamily: 'Outfit', fontSize: 11, color: tk.muted2(dark), marginTop: 2, letterSpacing: 0.4, transition: 'color 0.3s' }}>{label}</span>
    </div>
  );
}

export default function Hero() {
  const { dark } = useTheme();
  const typing   = useTyping(ROLES);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  const termBg  = dark ? '#0d1117' : '#1a1f2e';
  const termBdr = dark ? 'rgba(232,121,249,0.2)' : 'rgba(232,121,249,0.35)';

  const fade = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(20px)',
    transition: `opacity 0.6s ${delay}, transform 0.6s ${delay}`,
  });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '7rem 1.5rem 5rem',
      background: tk.bg(dark), transition: 'background 0.4s',
    }}>

      {/* Orbs */}
      <div style={{ position: 'absolute', top: '-5%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: dark ? 'radial-gradient(circle,rgba(232,121,249,0.1),transparent 60%)' : 'radial-gradient(circle,rgba(139,92,246,0.1),transparent 60%)', animation: 'orb1 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: 520, height: 520, borderRadius: '50%', background: dark ? 'radial-gradient(circle,rgba(56,189,248,0.09),transparent 60%)' : 'radial-gradient(circle,rgba(59,130,246,0.08),transparent 60%)', animation: 'orb2 18s ease-in-out infinite', pointerEvents: 'none' }} />

      

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* ── Two-column grid ── */}
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* ════ LEFT COLUMN ════ */}
          <div>

            {/* Available badge */}
            <div style={{ ...fade('0.1s'), display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', marginBottom: '1.5rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'block', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: '#34d399', letterSpacing: 0.5 }}>Available for work</span>
            </div>

            {/* Name */}
            <h1 style={{ ...fade('0.2s'), fontFamily: 'Outfit', fontSize: 'clamp(2.6rem,5.5vw,5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1rem', color: tk.text(dark), transition: 'color 0.3s' }}>
              
              Hi, I'm{' '}
              <span style={{ background: 'linear-gradient(135deg,#e879f9 30%,#38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Gourav Mishra
              </span>
            </h1>

            {/* Typing role */}
            <div style={{ ...fade('0.35s'), fontFamily: 'Fira Code', fontSize: 'clamp(0.95rem,2vw,1.25rem)', color: '#38bdf8', marginBottom: '1.25rem', minHeight: '1.8rem' }}>
              &gt;&nbsp;{typing}<span style={{ animation: 'blink 1s infinite' }}>_</span>
            </div>

            {/* Bio */}
            <p style={{ ...fade('0.5s'), fontFamily: 'Outfit', fontSize: 15.5, color: tk.muted(dark), lineHeight: 1.85, maxWidth: 500, marginBottom: '1rem', transition: 'color 0.3s' }}>
Computer Science student with strong full-stack development skills in JavaScript, React, Node.js, Express, MongoDB, and Supabase. Experienced in building scalable applications, designing robust APIs, and managing databases efficiently.            </p>

            {/* Location chip */}
            <div style={{ ...fade('0.55s'), display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: '2rem', fontFamily: 'Outfit', fontSize: 13, color: tk.muted(dark), transition: 'color 0.3s' }}>
              <span>📍</span> Surat, India
            </div>

            {/* CTA buttons */}
            <div style={{ ...fade('0.65s'), display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="#projects" style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 15, color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, background: 'linear-gradient(135deg,#e879f9,#38bdf8)', boxShadow: '0 0 28px rgba(232,121,249,0.35)', transition: 'all 0.25s', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(232,121,249,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 28px rgba(232,121,249,0.35)'; }}>
                View Projects ↓
              </a>
              <a href="#contact"
                style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 15, color: tk.text(dark), textDecoration: 'none', padding: '12px 28px', borderRadius: 10, background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`, transition: 'all 0.25s', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'; e.currentTarget.style.color = '#38bdf8'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = tk.border(dark); e.currentTarget.style.color = tk.text(dark); }}>
                Contact Me
              </a>
            </div>
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <div className="hero-right" style={{ ...fade('0.3s'), display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Terminal card */}
            <div style={{ background: termBg, border: `1px solid ${termBdr}`, borderRadius: 20, overflow: 'hidden', boxShadow: dark ? '0 24px 80px rgba(0,0,0,0.55)' : '0 24px 60px rgba(0,0,0,0.2)', transition: 'all 0.4s' }}>

              {/* Title bar */}
              <div style={{ padding: '13px 18px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 8 }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                ))}
                <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginLeft: 8 }}>gourav.config.js</span>
                <span style={{ marginLeft: 'auto', fontFamily: 'Fira Code', fontSize: 11, color: 'rgba(52,211,153,0.8)', padding: '2px 8px', borderRadius: 4, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>● live</span>
              </div>

              {/* Code */}
              <div style={{ padding: '1.5rem 1.75rem', fontFamily: 'Fira Code', fontSize: 13.5, lineHeight: 2.1, background: termBg }}>
                {[
                  ['const',   ' developer', ' = ', '{'],
                  ['  name:',       ' "Gourav Mishra"',             ','],
                  ['  role:',       ' "Full Stack Dev"',             ','],
                  ['  stack:',      ' ["React", "Node", "MongoDB"]', ','],
                  ['  university:', ' "Uka Tarsadia"',               ','],
                  ['  location:',   ' "Gujarat, India"',             ','],
                  ['  openToWork:', ' true'],
                  ['}', ';'],
                ].map((line, i) => (
                  <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {line.map((tok, j) => {
                      let c;
                      if (tok.startsWith(' "') || tok.startsWith('"'))    c = '#34d399';
                      else if (tok === 'const')                            c = '#e879f9';
                      else if (tok.trim() === 'true')                      c = '#fb923c';
                      else if (['{','};',';',',','}'].includes(tok.trim()))c = 'rgba(255,255,255,0.25)';
                      else if (tok === ' = ')                              c = '#38bdf8';
                      else if (tok.trimStart().endsWith(':'))              c = '#38bdf8';
                      else                                                 c = 'rgba(255,255,255,0.75)';
                      return <span key={j} style={{ color: c }}>{tok}</span>;
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: mounted ? 0.55 : 0, transition: 'opacity 1s 1.2s',
        pointerEvents: 'none',
      }}>
      </div>

    </section>
  );
}
