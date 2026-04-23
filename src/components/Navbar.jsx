import { useState } from 'react';
import { useTheme, tk } from '../context/ThemeContext';
import { useScrolled, useScrollProgress } from '../hooks';
import { NAV_LINKS } from '../constants/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { dark } = useTheme();
  const scrolled = useScrolled();
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, height: 2, width: `${progress}%`, background: 'linear-gradient(90deg,#e879f9,#38bdf8)', zIndex: 10000, transition: 'width 0.1s' }} />
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? tk.navBg(dark) : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? `1px solid ${tk.navBdr(dark)}` : 'none',
        transition: 'all 0.4s',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,#e879f9,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit', fontWeight: 900, fontSize: 18, color: '#fff' }}>G</div>
            <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 18, color: tk.text(dark), letterSpacing: -0.5, transition: 'color 0.3s' }}>
              Gourav<span style={{ color: '#e879f9' }}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desk-nav">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                style={{ fontFamily: 'Outfit', fontSize: 14, fontWeight: 500, color: tk.muted(dark), textDecoration: 'none', padding: '6px 14px', borderRadius: 8, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.color = '#e879f9'; e.target.style.background = 'rgba(232,121,249,0.1)'; }}
                onMouseLeave={e => { e.target.style.color = tk.muted(dark); e.target.style.background = 'transparent'; }}>
                {l.label}
              </a>
            ))}
            <a href="/Gourav_Mishra_Resume.pdf" target="_blank" rel="noreferrer"
              style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: '#fff', textDecoration: 'none', padding: '8px 20px', borderRadius: 8, background: 'linear-gradient(135deg,#e879f9,#38bdf8)', marginLeft: 8, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Resume
            </a>
            <div style={{ marginLeft: 10 }}><ThemeToggle /></div>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div style={{ display: 'none', alignItems: 'center', gap: 10 }} className="mob-btn">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)}
              style={{ background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`, borderRadius: 8, padding: '8px 10px', cursor: 'pointer', color: tk.text(dark), fontSize: 20, lineHeight: 1, transition: 'all 0.3s' }}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: dark ? 'rgba(8,12,20,0.97)' : 'rgba(240,244,248,0.97)', backdropFilter: 'blur(20px)', padding: '1rem 1.5rem 1.5rem', borderTop: `1px solid ${tk.border(dark)}`, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ fontFamily: 'Outfit', fontSize: 17, fontWeight: 500, color: tk.text(dark), textDecoration: 'none', padding: '12px 0', borderBottom: `1px solid ${tk.border(dark)}`, transition: 'color 0.3s' }}>
                {l.label}
              </a>
            ))}
            <a href="/Gourav_Mishra_Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
              style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 15, color: '#e879f9', textDecoration: 'none', padding: '12px 0', marginTop: 4 }}>
              ↗ View Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
