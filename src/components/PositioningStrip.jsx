import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MISSION, SITE, STATS } from '../data/site';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PositioningStrip() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-white sm:px-10 md:px-12">
      <motion.span
        {...fadeUp()}
        className="block font-['Bebas_Neue'] text-lg uppercase tracking-[0.24em] text-[#f5b8c4]"
      >
        Codevio
      </motion.span>

      <motion.h2
        {...fadeUp(0.05)}
        className="mt-6 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
      >
        {SITE.tagline}
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="mt-8 max-w-2xl font-['Bebas_Neue'] text-xl tracking-[0.05em] text-white/65 sm:text-2xl"
      >
        {MISSION.body}
      </motion.p>

      <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/services"
          className="rounded-full border border-[#b02a3d] bg-[#b02a3d] px-6 py-3 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#922235]"
        >
          See the sprints
        </Link>
        <Link
          to="/work"
          className="rounded-full border border-white/40 px-6 py-3 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
        >
          Recent launches
        </Link>
      </motion.div>

      <motion.div
        {...fadeUp(0.2)}
        className="mt-16 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p
              className="text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {stat.value}
            </p>
            <p className="mt-2 font-['Bebas_Neue'] text-base uppercase tracking-[0.1em] text-white/50">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
