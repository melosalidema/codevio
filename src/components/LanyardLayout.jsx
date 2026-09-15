import { useEffect, useRef, useState } from 'react';
import Lanyard from './Lanyard';

const sections = [
  {
    eyebrow: '01',
    heading: 'Where ideas\nmeet identity.',
    body: 'Every badge tells a story. This one is yours — crafted with precision, worn with pride.',
  },
  {
    eyebrow: '02',
    heading: 'Built for the\nbold ones.',
    body: 'From the metal clip to the woven lanyard, every detail is intentional. Quality you feel before you read the name.',
  },
  {
    eyebrow: '03',
    heading: 'You belong\nhere.',
    body: 'More than a pass — it\'s a handshake, a nod, a signal. Wear it and join the room where things happen.',
  },
  {
    eyebrow: '04',
    heading: 'Leave a\nlasting mark.',
    body: 'Long after the last session ends, the lanyard stays. A reminder of the moment you showed up.',
  },
];

function useInView(ref, threshold = 0.35) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function TextSection({ eyebrow, heading, body, index }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const lines = heading.split('\n');

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(2.5rem, 7vw, 7rem)',
      }}
    >
      <div style={{ maxWidth: 480 }}>

        {/* counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: '2rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          transitionDelay: visible ? '0.05s' : '0s',
        }}>
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.25em',
            color: '#C4A96B',
          }}>{eyebrow}</span>
          <span style={{ flex: 1, height: 1, background: 'rgba(196,169,107,0.35)' }} />
        </div>

        {/* heading lines */}
        <h2 style={{ margin: '0 0 2rem', padding: 0 }}>
          {lines.map((line, i) => (
            <span
              key={i}
              style={{
                display: 'block',
                fontFamily: '"Syne", sans-serif',
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: i === 0 ? '#0D0D0D' : '#C4A96B',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) skewY(0deg)' : 'translateY(40px) skewY(2deg)',
                transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: visible ? `${0.15 + i * 0.12}s` : '0s',
              }}
            >
              {line}
            </span>
          ))}
        </h2>

        {/* body */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
          lineHeight: 1.85,
          color: '#5A5A5A',
          margin: 0,
          maxWidth: 380,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          transitionDelay: visible ? '0.42s' : '0s',
        }}>
          {body}
        </p>

        {/* accent dot row */}
        <div style={{
          display: 'flex',
          gap: 6,
          marginTop: '2.5rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
          transitionDelay: visible ? '0.55s' : '0s',
        }}>
          {sections.map((_, di) => (
            <div key={di} style={{
              width: di === index ? 28 : 6,
              height: 6,
              borderRadius: 99,
              background: di === index ? '#C4A96B' : 'rgba(196,169,107,0.25)',
              transition: 'width 0.4s ease',
            }} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function LanyardLayout() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans&family=Space+Grotesk:wght@600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ll-root {
          position: relative;
          background: #F7F3EC;
          overflow-x: hidden;
        }

        .ll-inner {
          display: flex;
          align-items: flex-start;
        }

        .ll-text-col {
          width: 50%;
          flex-shrink: 0;
        }

        .ll-sticky-right {
          width: 50%;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        .ll-sticky-right .lanyard-wrapper {
          width: 100% !important;
          height: 100% !important;
        }

        @media (max-width: 768px) {
          .ll-inner { flex-direction: column; }
          .ll-text-col { width: 100%; }
          .ll-sticky-right {
            width: 100%;
            height: 60vh;
            position: relative;
          }
        }
      `}</style>

      <div className="ll-root">
        <div className="ll-inner">
          <div className="ll-text-col">
            {sections.map((s, i) => (
              <TextSection key={i} {...s} index={i} />
            ))}
          </div>

          <div className="ll-sticky-right">
            <Lanyard
              position={[0, 0, 30]}
              gravity={[0, -40, 0]}
              fov={20}
              transparent={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}