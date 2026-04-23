import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeCtx = createContext({ dark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeCtx);

// Design tokens — pass dark boolean to get the right value
export const tk = {
  bg:       d => d ? '#080c14'                       : '#f0f4f8',
  surface:  d => d ? 'rgba(255,255,255,0.03)'        : 'rgba(0,0,0,0.04)',
  surface2: d => d ? 'rgba(255,255,255,0.06)'        : 'rgba(0,0,0,0.07)',
  border:   d => d ? 'rgba(255,255,255,0.07)'        : 'rgba(0,0,0,0.1)',
  text:     d => d ? '#f1f5f9'                       : '#0f172a',
  muted:    d => d ? 'rgba(255,255,255,0.45)'        : 'rgba(0,0,0,0.5)',
  muted2:   d => d ? 'rgba(255,255,255,0.25)'        : 'rgba(0,0,0,0.35)',
  navBg:    d => d ? 'rgba(8,12,20,0.88)'            : 'rgba(240,244,248,0.92)',
  navBdr:   d => d ? 'rgba(255,255,255,0.06)'        : 'rgba(0,0,0,0.1)',
  cardBg:   d => d ? 'rgba(255,255,255,0.025)'       : '#ffffff',
  cardHov:  d => d ? 'rgba(255,255,255,0.05)'        : '#f8fafc',
  inputBg:  d => d ? 'rgba(255,255,255,0.04)'        : '#f8fafc',
  inputBdr: d => d ? 'rgba(255,255,255,0.1)'         : 'rgba(0,0,0,0.15)',
  codeBg:   d => d ? 'rgba(255,255,255,0.03)'        : '#1e293b',
  codeText: d => d ? 'rgba(255,255,255,0.8)'         : '#e2e8f0',
  gridLine: d => d ? 'rgba(255,255,255,0.025)'       : 'rgba(0,0,0,0.05)',
  altBg:    d => d ? 'rgba(255,255,255,0.01)'        : '#e8edf3',
};

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('gm-theme');
    if (saved !== null) setDark(saved === 'dark');
  }, []);

  const toggle = () => setDark(d => {
    const next = !d;
    localStorage.setItem('gm-theme', next ? 'dark' : 'light');
    return next;
  });

  useEffect(() => {
    document.body.style.background = dark ? '#080c14' : '#f0f4f8';
    document.body.style.transition = 'background 0.4s';
    document.body.style.color = dark ? '#f1f5f9' : '#0f172a';
  }, [dark]);

  return (
    <ThemeCtx.Provider value={{ dark, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}
