import { useState, useCallback, useEffect } from 'react';
import { useTheme, tk } from '../context/ThemeContext';
import { useReveal } from '../hooks';
import { PROJECTS } from '../constants/data';

/* ─── Image Carousel ─────────────────────────────────────────────── */
function ImageCarousel({ images, accent, category }) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = useCallback((idx) => {
    if (transitioning || idx === current) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 220);
  }, [current, transitioning]);

  const prev = (e) => {
    e.stopPropagation();
    goTo((current - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    goTo((current + 1) % images.length);
  };

  /* 🚀 AUTO SLIDE */
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(135deg,${accent}18,${accent}06)`,
        border: `1px solid ${accent}30`
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`screenshot ${i + 1}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            borderRadius: 16,
            opacity: i === current ? (transitioning ? 0 : 1) : 0,
            transition: 'opacity 0.4s ease-in-out',
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
      }} />

      {/* Dots */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 6,
          zIndex: 2
        }}>
          {images.map((_, i) => (
            <button key={i}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              style={{
                width: i === current ? 20 : 7,
                height: 7,
                borderRadius: 4,
                background: i === current ? accent : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      )}

      {/* Category */}
      <div style={{
        position: 'absolute',
        top: 12,
        right: 12,
        padding: '4px 12px',
        borderRadius: 100,
        background: 'rgba(0,0,0,0.55)',
        border: `1px solid ${accent}60`,
        fontSize: 11,
        color: accent
      }}>
        {category}
      </div>
    </div>
  );
}

/* ─── Project Card ───────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const { dark } = useTheme();
  const [hov, setHov] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(1.5rem, 3vw, 3rem)',
        alignItems: 'center',
        padding: 'clamp(1.25rem, 3vw, 2.5rem)',
        borderRadius: 24,
        background: hov ? tk.cardHov(dark) : tk.surface(dark),
        border: `1px solid ${hov ? project.accent + '40' : tk.border(dark)}`,
        transition: 'all 0.35s',
        marginBottom: 24,
        boxShadow: hov ? (dark ? '0 20px 60px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.1)') : 'none',
      }}>

      {/* Media column */}
      <div style={{ order: isEven ? 0 : 1 }}>
        <ImageCarousel images={project.images} accent={project.accent} category={project.category} />

        {/* CTA buttons below carousel */}
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{ flex: 1, padding: '10px 0', borderRadius: 10, background: `linear-gradient(135deg,${project.accent},${project.accent}99)`, color: '#fff', textDecoration: 'none', fontFamily: 'Outfit', fontWeight: 700, fontSize: 13, textAlign: 'center', transition: 'all 0.2s', display: 'block', boxShadow: `0 4px 16px ${project.accent}30` }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}>🌐 Live Demo</a>
          <a href={project.repo} target="_blank" rel="noreferrer"
            style={{ flex: 1, padding: '10px 0', borderRadius: 10, background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`, color: tk.text(dark), textDecoration: 'none', fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, textAlign: 'center', transition: 'all 0.2s', display: 'block' }}
            onMouseEnter={e => { e.currentTarget.style.background = tk.cardHov(dark); }}
            onMouseLeave={e => { e.currentTarget.style.background = tk.surface2(dark); }}>🐙 GitHub</a>
        </div>
      </div>

      {/* Info column */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <div style={{ fontFamily: 'Fira Code', fontSize: 12, color: project.accent, marginBottom: 8 }}>{'// project_0' + (index + 1)}</div>
        <h3 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: tk.text(dark), marginBottom: 4, transition: 'color 0.3s' }}>{project.title}</h3>
        <p style={{ fontFamily: 'Outfit', fontSize: 13, color: project.accent, fontWeight: 600, marginBottom: '1rem' }}>{project.subtitle}</p>
        <p style={{ fontFamily: 'Outfit', fontSize: 14.5, color: tk.muted(dark), lineHeight: 1.8, marginBottom: '1.5rem', transition: 'color 0.3s' }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tech.map(tt => (
            <span key={tt} style={{ fontFamily: 'Fira Code', fontSize: 11, padding: '4px 12px', borderRadius: 100, background: tk.surface2(dark), border: `1px solid ${tk.border(dark)}`, color: tk.muted(dark), transition: 'all 0.3s' }}>{tt}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────── */
export default function Projects() {
  const { dark } = useTheme();
  const ref = useReveal();
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Frontend', 'Full Stack'];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '7rem 1.5rem', background: tk.bg(dark), transition: 'background 0.4s' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.75rem' }}>
          <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: '#34d399' }}>03.</span>
          <span style={{ fontFamily: 'Fira Code', fontSize: 12, color: tk.muted2(dark), letterSpacing: 2, transition: 'color 0.3s' }}>PROJECTS</span>
          <div style={{ flex: 1, height: 1, background: tk.border(dark), transition: 'background 0.3s' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: tk.text(dark), transition: 'color 0.3s' }}>
            Things I've <span style={{ background: 'linear-gradient(135deg,#34d399,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Built</span>
          </h2>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, padding: '7px 18px', borderRadius: 100, border: `1px solid ${filter === f ? '#34d399' : tk.border(dark)}`, background: filter === f ? 'rgba(52,211,153,0.12)' : 'transparent', color: filter === f ? '#34d399' : tk.muted(dark), cursor: 'pointer', transition: 'all 0.2s' }}>
                {f}
              </button>
            ))}
          </div>
        </div>
        {filtered.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
    </section>
  );
}
