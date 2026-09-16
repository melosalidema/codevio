import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageShell from '../components/PageShell';
import { CASE_STUDIES } from '../data/site';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Work() {
  return (
    <PageShell title="Work" transitionLabel="Our Work">
      <section className="relative z-10 mx-auto max-w-6xl pt-28">
        <motion.span
          {...fadeUp()}
          className="block text-sm uppercase tracking-[0.3em] text-[#f5b8c4]"
        >
          Work
        </motion.span>

        <motion.h1
          {...fadeUp(0.05)}
          className="mt-6 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          Recent launches.
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-8 max-w-2xl text-lg text-white/75"
        >
          Every project below shipped inside a fixed sprint. Full case studies
          are being written up — ask us for a walkthrough of any recent launch.
        </motion.p>
      </section>

      <section className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((project, i) => (
          <motion.article
            key={project.name}
            {...fadeUp(i * 0.08)}
            className="liquid-glass group flex flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-colors duration-300 hover:border-[#b02a3d]/70"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-4 py-1.5 font-['Bebas_Neue'] text-xs uppercase tracking-[0.14em] text-[#fcdfe4] backdrop-blur-sm">
                {project.metric}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h2
                className="text-xl"
                style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {project.name}
              </h2>

              <p className="mt-4 flex-1 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/65">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 font-['Bebas_Neue'] text-xs uppercase tracking-[0.12em] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
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
            Want the full walkthrough of a launch like these?
          </p>

          <Link
            to="/contact"
            className="rounded-full border border-[#b02a3d] bg-[#b02a3d] px-6 py-3 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#922235]"
          >
            Ask for case studies
          </Link>
        </motion.div>
      </section>
    </PageShell>
  );
}
