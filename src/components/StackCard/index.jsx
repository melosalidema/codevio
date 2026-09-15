import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';
import webImg from '../../assets/web.png'
import marketingImg from '../../assets/marketing.png'
import brandingImg from '../../assets/branding.png'

const projects = [
  {
    title: 'Web Development',
    description:
      'We design and build fast, modern websites that look stunning and actually convert. From landing pages to full web applications — every pixel is intentional.',
    src: webImg,
    url: '#contact',
    color: '#db364e',
  },
  {
    title: 'Digital Marketing',
    description:
      'We put your brand in front of the right people at the right time. SEO, paid ads, social media strategy, and content that drives real traffic.',
    src: marketingImg,
    url: '#contact',
    color: '#1a1a2e',
  },
  {
    title: 'Branding',
    description:
      'Every business has a story worth telling. We craft visual identities that are impossible to ignore — logos, color systems, and brand guidelines built to last.',
    src: brandingImg,
    url: '#contact',
    color: '#fcdfe4',
  },
];

export default function StackCards() {
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
          Our<br />Services
        </h1>
      </section>

      <main ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i / projects.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}