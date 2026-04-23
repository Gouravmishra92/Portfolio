import { useState, useEffect, useRef } from 'react';

export function useTyping(words, speed = 80, pause = 2000) {
  const [out, setOut] = useState('');
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[ti]; let tm;
    if (!del && ci < w.length)        tm = setTimeout(() => setCi(c => c + 1), speed);
    else if (!del && ci === w.length) tm = setTimeout(() => setDel(true), pause);
    else if (del && ci > 0)           tm = setTimeout(() => setCi(c => c - 1), speed / 2);
    else { setDel(false); setTi(i => (i + 1) % words.length); }
    setOut(w.slice(0, ci));
    return () => clearTimeout(tm);
  }, [ci, del, ti, words, speed, pause]);
  return out;
}

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, [threshold]);
  return scrolled;
}

export function useShowTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, []);
  return show;
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => { const d = document.documentElement; setP((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100 || 0); };
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, []);
  return p;
}
