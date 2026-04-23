import { ThemeProvider } from './context/ThemeContext';

import Navbar      from './components/Navbar';
import Footer      from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Hero      from './sections/Hero';
import Skills    from './sections/Skills';
import Projects  from './sections/Projects';
import Education from './sections/Education';
import Contact   from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <style>{`
        /* ── Responsive breakpoints ── */
        @media(max-width:768px){
          .desk-nav  { display: none !important }
          .mob-btn   { display: flex !important }
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-right{ display: none !important }
          .proj-grid { grid-template-columns: 1fr !important }
          .contact-grid { grid-template-columns: 1fr !important }
        }
        @media(max-width:480px){
          .hero-grid { padding: 0 !important; }
        }

        input::placeholder, textarea::placeholder { opacity: 0.4 }

        /* ── Scroll reveal ── */
        .reveal { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease,transform 0.7s ease; }
        .reveal.visible { opacity:1; transform:none; }

        /* ── Global keyframes ── */
        @keyframes orb1 {
          0%,100% { transform:translate(0,0) scale(1); }
          50%      { transform:translate(40px,-30px) scale(1.08); }
        }
        @keyframes orb2 {
          0%,100% { transform:translate(0,0) scale(1); }
          50%      { transform:translate(-30px,20px) scale(0.94); }
        }
        @keyframes pulse {
          0%,100% { box-shadow:0 0 0 0 rgba(52,211,153,0.5); }
          50%      { box-shadow:0 0 0 6px rgba(52,211,153,0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50%      { opacity:0; }
        }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
