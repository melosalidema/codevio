import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import PageShell from '../components/PageShell';
import { CASE_STUDIES } from '../data/site';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudy() {
  const { slug } = useParams();
  const project = CASE_STUDIES.find((study) => study.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <PageShell title={project.name}>
      <article className="relative z-10 mx-auto max-w-6xl pt-16">
        <motion.div {...fadeUp()}>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-[#f5b8c4] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back to work
          </Link>
        </motion.div>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_0.8fr]">
          <motion.div {...fadeUp(0.05)}>
            <span className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.2em] text-[#f5b8c4]">
              Case study
            </span>
            <h1
              className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {project.name}
            </h1>
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="font-['Bebas_Neue'] text-2xl leading-snug tracking-[0.03em] text-white/70"
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.name}
            className="aspect-[16/7] w-full object-cover"
          />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/60 px-4 py-2 font-['Bebas_Neue'] text-sm uppercase tracking-[0.14em] text-[#fcdfe4] backdrop-blur-sm">
            {project.metric}
          </span>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.aside {...fadeUp(0.2)} className="lg:sticky lg:top-10 lg:self-start">
            <p className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-white/45">
              What we shipped
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {project.deliverables.map((item) => (
                <li key={item} className="border-b border-white/10 pb-3 font-['Bebas_Neue'] text-lg text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 px-3 py-1 font-['Bebas_Neue'] text-xs uppercase tracking-[0.12em] text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.aside>

          <motion.div {...fadeUp(0.25)} className="flex flex-col gap-10">
            <section>
              <p className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">The challenge</p>
              <p className="mt-3 text-2xl leading-snug text-white/85">{project.challenge}</p>
            </section>
            <section>
              <p className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">Our approach</p>
              <p className="mt-3 text-2xl leading-snug text-white/85">{project.approach}</p>
            </section>
            <section className="rounded-2xl border border-[#db364e]/40 bg-[#db364e]/10 p-7">
              <p className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">The outcome</p>
              <p className="mt-3 text-2xl leading-snug" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
                {project.outcome}
              </p>
            </section>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.3)} className="mt-20 flex justify-between border-t border-white/10 pt-8">
          <Link to="/work" className="inline-flex items-center gap-2 font-['Bebas_Neue'] uppercase tracking-[0.16em] text-white/60 hover:text-white">
            <ArrowLeft className="size-4" /> All work
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 font-['Bebas_Neue'] uppercase tracking-[0.16em] text-[#f5b8c4] hover:text-white">
            Start a project <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>
      </article>
    </PageShell>
  );
}
