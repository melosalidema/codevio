import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageShell from '../components/PageShell';
import SpecularButton from '../components/SpecularButton';
import { MISSION, VALUES, PROCESS } from '../data/site';

import logo from '../assets/logo.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Mission() {
  const navigate = useNavigate();

  return (
    <PageShell title="Mission">
      <section className="relative z-10 mx-auto max-w-6xl pt-28">
        <motion.span
          {...fadeUp()}
          className="block text-center text-sm uppercase tracking-[0.3em] text-[#f5b8c4]"
        >
          {MISSION.eyebrow}
        </motion.span>

        <motion.h1
          {...fadeUp(0.05)}
          className="mx-auto mt-6 max-w-4xl text-center text-4xl leading-tight sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          {MISSION.statement}
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-8 max-w-3xl text-center text-lg text-white/80 sm:text-xl"
        >
          {MISSION.body}
        </motion.p>

        <motion.div
          {...fadeUp(0.15)}
          className="liquid-glass mt-14 overflow-hidden rounded-2xl border border-white/10 p-8 shadow-2xl md:p-10"
        >
          <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]">
            What the mission commits us to
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {MISSION.commitments.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white/80"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#db364e]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <motion.h2
          {...fadeUp()}
          className="text-center text-3xl uppercase sm:text-4xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          How we think
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              {...fadeUp(i * 0.05)}
              className="liquid-glass rounded-2xl border border-white/10 p-7 transition-colors duration-300 hover:border-[#b02a3d]/70"
            >
              <h3
                className="text-lg"
                style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {value.title}
              </h3>
              <p className="mt-4 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/65">
                {value.body}
              </p>
            </motion.div>
          ))}

          <motion.div
            {...fadeUp(VALUES.length * 0.05)}
            className="liquid-glass flex items-center justify-center rounded-2xl border border-white/10 p-7 transition-colors duration-300 hover:border-[#b02a3d]/70"
          >
            <img
              src={logo}
              alt="Codevio logo"
              className="h-9 w-auto object-contain opacity-90 sm:h-11"
              draggable={false}
            />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <motion.h2
          {...fadeUp()}
          className="text-center text-3xl uppercase sm:text-4xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          How we work
        </motion.h2>

        <div className="mt-10 flex flex-col">
          {PROCESS.map((phase, i) => (
            <motion.div
              key={phase.title}
              {...fadeUp(i * 0.04)}
              className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-[140px_1fr_1fr] md:gap-8"
            >
              <span className="font-['Bebas_Neue'] text-xl uppercase tracking-[0.14em] text-[#f5b8c4]">
                {phase.step}
              </span>
              <span
                className="text-lg text-white"
                style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {phase.title}
              </span>
              <span className="font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/60">
                {phase.body}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#db364e]/40 bg-[#db364e]/10 p-10 backdrop-blur-md md:flex-row md:items-center"
        >
          <p
            className="max-w-2xl text-2xl leading-snug sm:text-3xl"
            style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            Have an idea with a deadline? That is exactly what we are built for.
          </p>

          <div className="flex flex-wrap gap-4">
            <SpecularButton onClick={() => navigate('/contact')}>
              Start a project
            </SpecularButton>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
