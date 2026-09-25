import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Services from './pages/Services';
import Work from './pages/Work';

const SCROLL_INDICATOR_PADDING = 16;
const SCROLL_INDICATOR_MIN_HEIGHT = 56;

function ScrollIndicator() {
  const indicatorRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const indicator = indicatorRef.current;
      if (!indicator) return;

      const doc = document.documentElement;
      const viewportHeight = window.innerHeight;
      const pageHeight = doc.scrollHeight;
      const scrollRange = pageHeight - viewportHeight;

      if (scrollRange <= 1) {
        indicator.style.opacity = '0';
        return;
      }

      const availableHeight = viewportHeight - SCROLL_INDICATOR_PADDING * 2;
      const proportionalHeight = viewportHeight * (viewportHeight / pageHeight);
      const thumbHeight = Math.min(
        availableHeight,
        Math.max(SCROLL_INDICATOR_MIN_HEIGHT, proportionalHeight)
      );
      const travel = Math.max(0, availableHeight - thumbHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
      const offset = SCROLL_INDICATOR_PADDING + progress * travel;

      indicator.style.height = `${thumbHeight}px`;
      indicator.style.transform = `translate3d(0, ${offset}px, 0)`;
      indicator.style.opacity = '1';
    };

    const requestUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    const resizeObserver =
      typeof ResizeObserver === 'function' ? new ResizeObserver(requestUpdate) : null;
    const root = document.getElementById('root');

    resizeObserver?.observe(document.body);
    if (root) resizeObserver?.observe(root);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 right-0 z-30 hidden w-[3px] rounded-full opacity-0 transition-opacity duration-200 will-change-transform md:block"
      style={{ backgroundColor: 'var(--scrollbar-thumb)' }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollIndicator />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
