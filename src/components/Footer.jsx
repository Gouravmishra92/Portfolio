import { useTheme, tk } from '../context/ThemeContext';

export default function Footer() {
  const { dark } = useTheme();
  return (
    <footer style={{ borderTop: `1px solid ${tk.border(dark)}`, padding: '2.5rem 1.5rem', background: dark ? 'transparent' : '#ffffff', transition: 'all 0.3s' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <a href="#home" style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 18, color: tk.text(dark), textDecoration: 'none', letterSpacing: -0.5, transition: 'color 0.3s' }}>
          Gourav<span style={{ color: '#e879f9' }}>.</span>
        </a>
        <p style={{ fontFamily: 'Fira Code', fontSize: 12, color: tk.muted2(dark), transition: 'color 0.3s' }}>
          © 2024 Gourav Mishra — Built with React + Vite
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['🐙','https://github.com/Gouravmishra92'],['💼','https://linkedin.com/in/gourav-mishra-09372a2ab'],['✉️','https://mail.google.com/mail/?view=cm&to=gouravmishra872@gmail.com']].map(([ic, href]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, borderRadius: 8, background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,121,249,0.12)'; e.currentTarget.style.borderColor = 'rgba(232,121,249,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = tk.surface2(dark); e.currentTarget.style.borderColor = tk.border(dark); }}>
              {ic}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
