import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MISSION, SITE, STATS } from '../data/site';
import SpecularButton from './SpecularButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PositioningStrip() {
  const navigate = useNavigate();

  return (
    <section className="home-positioning relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center-safe px-6 py-12 text-center text-white sm:px-10 md:px-12">
      <motion.span
        {...fadeUp()}
        className="block font-['Bebas_Neue'] text-lg uppercase tracking-[0.24em] text-[#f5b8c4]"
      >
        Codevio
      </motion.span>

      <motion.h1
        {...fadeUp(0.05)}
        className="mx-auto mt-6 mb-2 max-w-5xl text-center text-5xl leading-tight sm:text-6xl md:text-7xl"
        style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
      >
        {SITE.tagline}
      </motion.h1>

      <motion.p
        {...fadeUp(0.1)}
        className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl"
      >
        {MISSION.body}
      </motion.p>

      <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-wrap justify-center gap-4">
        <SpecularButton onClick={() => navigate('/services')}>
          See the sprints
        </SpecularButton>
        <SpecularButton onClick={() => navigate('/work')}>
          Recent launches
        </SpecularButton>
      </motion.div>

      <motion.div
        {...fadeUp(0.2)}
        className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p
              className="text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {stat.value}
            </p>
            <p className="mt-2 font-['Bebas_Neue'] text-base uppercase tracking-[0.1em] text-white/65">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
