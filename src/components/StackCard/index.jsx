import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';

export default function StackCards({ items = [], heading = 'Our Services' }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>

      {heading ? (
        <section
          style={{
            minHeight: '28vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 20px 16px',
          }}
        >
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(54px, 13vw, 160px)',
              fontWeight: 400,
              letterSpacing: '0.03em',
              lineHeight: 0.9,
              textAlign: 'center',
              color: '#fff',
              margin: 0,
            }}
          >
            {heading}
          </h1>
        </section>
      ) : null}

      <div ref={container}>
        {items.map((project, i) => {
          const targetScale = 1 - (items.length - i) * 0.05;

          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i / items.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </>
  );
}