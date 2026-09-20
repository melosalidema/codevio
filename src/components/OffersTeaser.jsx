import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { OFFERS } from '../data/site';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function OffersTeaser() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 text-white sm:px-10 md:px-12">
      <motion.h2
        {...fadeUp()}
        className="text-center text-3xl uppercase sm:text-4xl"
        style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
      >
        Launch sprints
      </motion.h2>

      <motion.p
        {...fadeUp(0.05)}
        className="mx-auto mt-4 max-w-2xl text-center font-['Bebas_Neue'] text-xl tracking-[0.05em] text-white/60"
      >
        Fixed scope, fixed timeline, a named ship date. Pick the sprint that
        matches where your idea is right now.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {OFFERS.map((offer, i) => (
          <motion.div
            key={offer.title}
            {...fadeUp(i * 0.06)}
            className="liquid-glass flex flex-col rounded-2xl border border-white/10 p-7 transition-colors duration-300 hover:border-[#b02a3d]/70"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.2em] text-[#f5b8c4]">
                {offer.timeline}
              </span>
              <span className="font-['Bebas_Neue'] text-xl leading-none text-white">
                {offer.price}
                <span className="ml-1 text-xs uppercase tracking-[0.12em] text-white/50">
                  {offer.priceNote}
                </span>
              </span>
            </div>

            <h3
              className="mt-3 text-xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {offer.title}
            </h3>

            <p className="mt-4 font-['Bebas_Neue'] text-lg tracking-[0.04em] text-white/75">
              {offer.headline}
            </p>

            <p className="mt-3 flex-1 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/60">
              {offer.description}
            </p>

            <Link
              to="/services"
              className="mt-6 w-fit font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-[#fcdfe4] transition-colors duration-300 hover:text-white"
            >
              What's included →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
