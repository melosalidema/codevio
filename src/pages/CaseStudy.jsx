import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import PageShell from '../components/PageShell';
import SafeImage from '../components/SafeImage';
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
    <PageShell title={project.name} description={project.description}>
      <article className="relative z-10 mx-auto max-w-5xl pt-12">
        <motion.div {...fadeUp()}>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 py-2 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-[#f5b8c4] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back to work
          </Link>
        </motion.div>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
          <motion.div {...fadeUp(0.05)}>
            <span className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.2em] text-[#f5b8c4]">
              Case study
            </span>
            <h1
              className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {project.name}
            </h1>
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="text-xl leading-snug text-white/70"
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <SafeImage
            src={project.image}
            srcSet={project.imageSrcSet}
            sizes="(min-width: 1024px) 1024px, 100vw"
            alt={project.name}
            className="aspect-[16/6] w-full object-cover"
            fallbackClassName="aspect-[16/6] w-full"
          />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/60 px-4 py-2 font-['Bebas_Neue'] text-sm uppercase tracking-[0.14em] text-[#fcdfe4] backdrop-blur-sm">
            {project.metric}
          </span>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.aside {...fadeUp(0.2)} className="lg:sticky lg:top-10 lg:self-start">
            <p className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-white/45">
              What we shipped
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {project.deliverables.map((item) => (
                <li key={item} className="border-b border-white/10 pb-2.5 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 px-3 py-1 font-['Bebas_Neue'] text-xs uppercase tracking-[0.12em] text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.aside>

          <motion.div {...fadeUp(0.25)} className="flex flex-col gap-8">
            <section>
              <h2 className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">The challenge</h2>
              <p className="mt-3 text-xl leading-snug text-white/85">{project.challenge}</p>
            </section>
            <section>
              <h2 className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">Our approach</h2>
              <p className="mt-3 text-xl leading-snug text-white/85">{project.approach}</p>
            </section>
            <section className="rounded-2xl border border-[#db364e]/40 bg-[#db364e]/10 p-6">
              <h2 className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">The outcome</h2>
              <p className="mt-3 text-xl leading-snug" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
                {project.outcome}
              </p>
            </section>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link to="/work" className="inline-flex items-center gap-2 py-2 font-['Bebas_Neue'] uppercase tracking-[0.16em] text-white/60 hover:text-white">
            <ArrowLeft className="size-4" /> All work
          </Link>
          <div className="flex flex-wrap items-center gap-6">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-['Bebas_Neue'] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
              >
                Visit live site <ArrowUpRight className="size-4" />
              </a>
            )}
            <Link to="/contact" className="inline-flex items-center gap-2 font-['Bebas_Neue'] uppercase tracking-[0.16em] text-[#f5b8c4] hover:text-white">
              Start a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </article>
    </PageShell>
  );
}
