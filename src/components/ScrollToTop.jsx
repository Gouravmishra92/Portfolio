import { useTheme } from '../context/ThemeContext';
import { useShowTop } from '../hooks';

export default function ScrollToTop() {
  const { dark } = useTheme();
  const show = useShowTop();
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ position: 'fixed', bottom: 80, right: 24, zIndex: 999, width: 44, height: 44, borderRadius: 12, border: '1px solid rgba(232,121,249,0.4)', background: dark ? 'rgba(8,12,20,0.9)' : 'rgba(240,244,248,0.9)', backdropFilter: 'blur(12px)', color: '#e879f9', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(12px)', transition: 'all 0.3s', pointerEvents: show ? 'auto' : 'none', boxShadow: '0 4px 20px rgba(232,121,249,0.2)' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,121,249,0.4)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,121,249,0.2)'}>
      ↑
    </button>
  );
}
