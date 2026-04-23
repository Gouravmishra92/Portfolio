import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
      style={{
        width: 52, height: 28, borderRadius: 100, border: 'none', cursor: 'pointer',
        background: dark ? 'rgba(232,121,249,0.18)' : 'rgba(14,165,233,0.15)',
        padding: 3, display: 'flex', alignItems: 'center', flexShrink: 0,
        justifyContent: dark ? 'flex-end' : 'flex-start',
        outline: 'none', transition: 'all 0.35s ease',
        boxShadow: dark
          ? 'inset 0 0 0 1px rgba(232,121,249,0.4)'
          : 'inset 0 0 0 1px rgba(14,165,233,0.4)',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = dark
        ? 'inset 0 0 0 1px rgba(232,121,249,0.7), 0 0 14px rgba(232,121,249,0.25)'
        : 'inset 0 0 0 1px rgba(14,165,233,0.7), 0 0 14px rgba(14,165,233,0.25)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = dark
        ? 'inset 0 0 0 1px rgba(232,121,249,0.4)'
        : 'inset 0 0 0 1px rgba(14,165,233,0.4)'}
    >
      <div style={{
        width: 22, height: 22, borderRadius: '50%',
        background: dark ? 'linear-gradient(135deg,#e879f9,#38bdf8)' : 'linear-gradient(135deg,#f59e0b,#f97316)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, transition: 'all 0.35s ease',
        boxShadow: dark ? '0 2px 8px rgba(232,121,249,0.5)' : '0 2px 8px rgba(245,158,11,0.5)',
      }}>
        {dark ? '🌙' : '☀️'}
      </div>
    </button>
  );
}
