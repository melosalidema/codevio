import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import PageShell from '../components/PageShell';

export default function NotFound() {
  return (
    <PageShell
      title="Page not found"
      description="The page you are looking for does not exist. Head back to the Codevio home page."
    >
      <section className="relative z-10 mx-auto max-w-3xl pt-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="block font-['Bebas_Neue'] text-sm uppercase tracking-[0.3em] text-[#f5b8c4]"
        >
          Error 404
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-4xl leading-tight sm:text-5xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          This page doesn&rsquo;t exist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/70"
        >
          The link may be broken or the page may have moved. Head back home and
          pick up where you left off.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#fcdfe4]/40 px-6 py-3 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-[#fcdfe4] transition-colors duration-300 hover:border-[#fcdfe4] hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Back home
          </Link>
        </motion.div>
      </section>
    </PageShell>
  );
}
