import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

import Picture1 from '../assets/sidescroll3.jpg';
import Picture2 from '../assets/sidescroll4.jpg';
import Picture3 from '../assets/sidescroll5.jpg';

let lenisInstance = null;

export default function ScrollSides() {
  useEffect(() => {
    const lenis = new Lenis();
    lenisInstance = lenis;

    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <main style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{ height: 'clamp(4rem, 14vh, 20vh)' }} />

      <Slide src={Picture1} direction={-1} text="Web Development" />
      <Slide src={Picture2} direction={1} text="Digital Marketing" />
      <Slide src={Picture3} direction={-1} text="Brand Identity" />

      <div style={{ height: 'clamp(5rem, 18vh, 30vh)' }} />
    </main>
  );
}

const Slide = ({ src, direction, text }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getStrength = () => {
      if (window.innerWidth <= 480) return 0.22;
      if (window.innerWidth <= 768) return 0.28;
      if (window.innerWidth <= 1024) return 0.34;
      return 0.42;
    };

    const update = scroll => {
      const scrollY =
        typeof scroll === 'number'
          ? scroll
          : window.scrollY || document.documentElement.scrollTop || 0;

      const translateX = direction * scrollY * getStrength();
      el.style.transform = `translate3d(${translateX}px, 0, 0)`;
    };

    const handleNativeScroll = () => update();

    const attachLenis = () => {
      if (lenisInstance) {
        lenisInstance.on('scroll', e => update(e.scroll));
      }
    };

    attachLenis();
    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('resize', handleNativeScroll, { passive: true });

    update();

    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('resize', handleNativeScroll);
      if (lenisInstance) {
        lenisInstance.off('scroll', e => update(e.scroll));
      }
    };
  }, [direction]);

  const phrases = Array.from({ length: 12 });

  return (
    <section
      style={{
        overflow: 'hidden',
        width: '100%',
        padding: 'clamp(0.35rem, 1vw, 0.75rem) 0',
      }}
    >
      <div
        ref={ref}
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          willChange: 'transform',
          marginLeft: '-60%',
          width: 'max-content',
          alignItems: 'center',
        }}
      >
        {phrases.map((_, i) => (
          <Phrase key={i} src={src} text={text} />
        ))}
      </div>
    </section>
  );
};

const Phrase = ({ src, text }) => (
  <div
    style={{
      paddingLeft: 'clamp(0.5rem, 2vw, 1.25rem)',
      paddingRight: 'clamp(0.5rem, 2vw, 1.25rem)',
      display: 'flex',
      gap: 'clamp(0.5rem, 2vw, 1.25rem)',
      alignItems: 'center',
      flexShrink: 0,
    }}
  >
    <p
      style={{
        fontFamily: "'Dela Gothic One', sans-serif",
        fontSize: 'clamp(2rem, 6vw, 5rem)',
        margin: 0,
        color: '#fff',
        fontWeight: 600,
        lineHeight: 1.15,
        letterSpacing: 0,
      }}
    >
      {text}
    </p>

    <span
      style={{
        position: 'relative',
        height: 'clamp(2rem, 6vw, 5rem)',
        aspectRatio: '4 / 2',
        borderRadius: '9999px',
        overflow: 'hidden',
        display: 'inline-block',
        flexShrink: 0,
      }}
    >
      <img
        src={typeof src === 'string' ? src : src?.src ?? src}
        alt=""
        aria-hidden="true"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </span>
  </div>
);