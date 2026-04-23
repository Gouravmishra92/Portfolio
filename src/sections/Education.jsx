import { useTheme, tk } from '../context/ThemeContext';
import { useReveal } from '../hooks';
import { EDUCATION } from '../constants/data';

export default function Education() {
  const { dark } = useTheme();
  const ref = useReveal();
  return (
    <section id="education" style={{ padding: '7rem 1.5rem', background: tk.altBg(dark), transition: 'background 0.4s' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.75rem' }}>
          <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: '#fb923c' }}>04.</span>
          <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: tk.muted2(dark), letterSpacing: 2, transition: 'color 0.3s' }}>EDUCATION</span>
          <div style={{ flex: 1, height: 1, background: tk.border(dark), transition: 'background 0.3s' }} />
        </div>
        <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem', color: tk.text(dark), transition: 'color 0.3s' }}>
          Academic <span style={{ background: 'linear-gradient(135deg,#fb923c,#e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Journey</span>
        </h2>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          <div style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom,#e879f9,#38bdf8,transparent)', borderRadius: 2 }} />
          {EDUCATION.map((e, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < EDUCATION.length - 1 ? '3rem' : 0 }}>
              <div style={{ position: 'absolute', left: -37, top: 22, width: 14, height: 14, borderRadius: '50%', background: `linear-gradient(135deg,${e.accent},${e.accent}99)`, boxShadow: `0 0 16px ${e.accent}60`, border: `2px solid ${tk.bg(dark)}`, transition: 'border-color 0.3s' }} />
              <div style={{ padding: '1.75rem 2rem', background: tk.cardBg(dark), border: `1px solid ${tk.border(dark)}`, borderRadius: 18, transition: 'all 0.3s', boxShadow: dark ? 'none' : '0 4px 16px rgba(0,0,0,0.06)' }}
                onMouseEnter={el => { el.currentTarget.style.background = dark ? `${e.accent}08` : `${e.accent}05`; el.currentTarget.style.borderColor = `${e.accent}30`; el.currentTarget.style.transform = 'translateX(8px)'; }}
                onMouseLeave={el => { el.currentTarget.style.background = tk.cardBg(dark); el.currentTarget.style.borderColor = tk.border(dark); el.currentTarget.style.transform = ''; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 18, color: tk.text(dark), marginBottom: 4, transition: 'color 0.3s' }}>{e.degree}</h3>
                    <p style={{ fontFamily: 'Outfit', fontSize: 14, fontWeight: 600, color: e.accent }}>{e.school}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: tk.muted(dark), padding: '4px 12px', borderRadius: 100, background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`, transition: 'all 0.3s' }}>{e.period}</span>
                    {e.status === 'Ongoing' && <span style={{ fontFamily: 'Fira Code', fontSize: 11, color: '#34d399', padding: '3px 10px', borderRadius: 100, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)' }}>● Ongoing</span>}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'Outfit', fontSize: 13, color: tk.muted(dark), transition: 'color 0.3s' }}>📍 {e.location}</span>
                </div>
                <p style={{ fontFamily: 'Outfit', fontSize: 14, color: tk.muted(dark), lineHeight: 1.75, transition: 'color 0.3s' }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
