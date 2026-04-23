import { useState } from 'react';
import { useTheme, tk } from '../context/ThemeContext';
import { useReveal } from '../hooks';
import { SKILLS } from '../constants/data';

/* Icons that are black and invisible in dark mode need special handling */
const DARK_MODE_INVISIBLE_ICONS = ['github', 'express', 'nextjs'];

function SkillIcon({ item }) {
  const { dark } = useTheme();
  const [err, setErr] = useState(false);

  if (!item.icon || err)
    return (
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, transition: 'all 0.3s',
      }}>✦</div>
    );

  // Detect if this icon is inherently black (GitHub, Express, Next.js)
  const iconUrl = item.icon.toLowerCase();
  const isBlackIcon = DARK_MODE_INVISIBLE_ICONS.some(name => iconUrl.includes(name));

  // In dark mode: invert black icons to make them white/visible
  // In light mode: apply subtle drop shadow
  const imgFilter = dark
    ? isBlackIcon
      ? 'invert(1) brightness(1.1)'      // make black → white in dark mode
      : 'none'
    : 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))';

  return (
    <img
      src={item.icon}
      alt={item.name}
      onError={() => setErr(true)}
      style={{
        width: 44, height: 44, objectFit: 'contain', padding: 4,
        filter: imgFilter,
        transition: 'filter 0.3s',
      }}
    />
  );
}

export default function Skills() {
  const { dark } = useTheme();
  const ref = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="skills" style={{ padding: '7rem 1.5rem', background: tk.altBg(dark), transition: 'background 0.4s' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.75rem' }}>
          <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: '#38bdf8' }}>02.</span>
          <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: tk.muted2(dark), letterSpacing: 2, transition: 'color 0.3s' }}>TECH STACK</span>
          <div style={{ flex: 1, height: 1, background: tk.border(dark), transition: 'background 0.3s' }} />
        </div>
        <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem', color: tk.text(dark), transition: 'color 0.3s' }}>
          Tools I <span style={{ background: 'linear-gradient(135deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Work With</span>
        </h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: '2rem', flexWrap: 'wrap' }}>
          {SKILLS.map((cat, i) => (
            <button key={cat.category} onClick={() => setActive(i)}
              style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, padding: '8px 18px', borderRadius: 100, border: `1px solid ${active === i ? cat.accent : tk.border(dark)}`, background: active === i ? `${cat.accent}18` : 'transparent', color: active === i ? cat.accent : tk.muted(dark), cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat.category}
            </button>
          ))}
        </div>
        <div style={{ background: tk.cardBg(dark), border: `1px solid ${tk.border(dark)}`, borderRadius: 20, padding: '2rem', transition: 'all 0.3s', boxShadow: dark ? 'none' : '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: 16 }}>
            {SKILLS[active].items.map((item) => (
              <div key={item.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '1rem 0.5rem', borderRadius: 14, cursor: 'default', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${SKILLS[active].accent}10`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                <SkillIcon item={item} />
                <span style={{ fontFamily: 'Outfit', fontSize: 12, fontWeight: 600, color: tk.muted(dark), textAlign: 'center', lineHeight: 1.3, transition: 'color 0.3s' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14, marginTop: 20 }}>
          {SKILLS.map(cat => (
            <div key={cat.category} style={{ padding: '1rem 1.25rem', background: tk.cardBg(dark), border: `1px solid ${tk.border(dark)}`, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.3s', boxShadow: dark ? 'none' : '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: cat.accent, flexShrink: 0, boxShadow: `0 0 8px ${cat.accent}` }} />
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: tk.text(dark), transition: 'color 0.3s' }}>{cat.category}</div>
                <div style={{ fontFamily: 'Outfit', fontSize: 12, color: tk.muted2(dark), lineHeight: 1.5, transition: 'color 0.3s' }}>{cat.items.map(i => i.name).join(', ')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
