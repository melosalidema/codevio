import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, Compass, PenTool, CodeXml, Rocket } from 'lucide-react';

import PageShell from '../components/PageShell';
import SpecularButton from '../components/SpecularButton';
import { CORE_SERVICES, ICP, OFFERS, PACKAGE_RULES, PRICING_PROMISE } from '../data/site';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CORE_SERVICE_ICONS = [Compass, PenTool, CodeXml, Rocket];

export default function Services() {
  const navigate = useNavigate();

  return (
    <PageShell title="Services">
      <section className="relative z-10 mx-auto max-w-6xl pt-28 pb-8">
        <motion.span
          {...fadeUp()}
          className="block text-center text-sm uppercase tracking-[0.3em] text-[#f5b8c4]"
        >
          Services
        </motion.span>

        <motion.h1
          {...fadeUp(0.05)}
          className="mx-auto mt-6 max-w-4xl text-center text-4xl leading-tight sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          Websites, products, brands, and ongoing support.
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-8 max-w-2xl text-center text-lg text-white/75"
        >
          Starting-from pricing for websites, SaaS, AI automation, branding,
          graphic design, and monthly support. Final scope is defined around
          your functionality, integrations, users, and technical requirements.
        </motion.p>
      </section>

      <section className="services-core-section relative z-10 mx-auto mt-24 max-w-6xl">
        <motion.h2
          {...fadeUp()}
          className="text-center text-3xl uppercase sm:text-4xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          What we do
        </motion.h2>

        <motion.p
          {...fadeUp(0.05)}
          className="mx-auto mt-4 max-w-2xl text-center font-['Bebas_Neue'] text-xl tracking-[0.05em] text-white/60"
        >
          Choose the service that matches what you need now. We define the
          exact scope, timeline, and deliverables before work begins.
        </motion.p>

        <div className="services-core-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_SERVICES.map((service, i) => {
            const Icon = CORE_SERVICE_ICONS[i] ?? Compass;

            return (
              <motion.div
                key={service.title}
                {...fadeUp(i * 0.05)}
                className="liquid-glass flex flex-col rounded-2xl border border-white/10 p-7 transition-colors duration-300 hover:border-[#b02a3d]/70"
              >
                <Icon className="size-6 text-[#f5b8c4]" strokeWidth={1.6} />

                <h3
                  className="mt-5 text-lg leading-snug"
                  style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
                >
                  {service.title}
                </h3>

                <p className="mt-4 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/60">
                  {service.summary}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-['Bebas_Neue'] text-base leading-snug tracking-[0.03em] text-white/50"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#db364e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <motion.h2
          {...fadeUp()}
          className="text-center text-3xl uppercase sm:text-4xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          Pricing
        </motion.h2>

        <motion.p
          {...fadeUp(0.05)}
          className="mx-auto mt-4 max-w-2xl text-center font-['Bebas_Neue'] text-xl tracking-[0.05em] text-white/60"
        >
          All prices are starting points. Additional scope is defined in the proposal.
        </motion.p>

        <div className="pricing-grid mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.title}
              {...fadeUp(i * 0.06)}
              className="pricing-card liquid-glass flex flex-col rounded-2xl border border-white/10 p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">
                  {offer.category}
                </span>
                <span className="font-['Bebas_Neue'] text-lg leading-none text-white">
                  {offer.price}
                  <span className="ml-1 text-xs uppercase tracking-[0.12em] text-white/50">
                    {offer.priceNote}
                  </span>
                </span>
              </div>

              <h3
                className="mt-2 text-lg"
                style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {offer.title}
              </h3>

              <p className="mt-2 font-['Bebas_Neue'] text-base tracking-[0.04em] text-white/70">
                {offer.headline}
              </p>

              <p className="mt-5 font-['Bebas_Neue'] text-xs uppercase tracking-[0.18em] text-white/40">
                 What&apos;s included
              </p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {offer.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-['Bebas_Neue'] text-base leading-snug tracking-[0.03em] text-white/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#db364e]" />
                    {item}
                  </li>
                ))}
              </ul>

               <div className="mt-auto pt-6">
                <p className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.06em] text-white/45">
                  {offer.forWho}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            {...fadeUp(OFFERS.length * 0.06)}
            className="pricing-card liquid-glass flex flex-col rounded-2xl border border-white/10 p-4 transition-colors duration-300 hover:border-[#b02a3d]/70"
          >
            <span className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">
              {PRICING_PROMISE.eyebrow}
            </span>

            <h3
              className="mt-2 text-lg"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {PRICING_PROMISE.quote}
            </h3>

            <p className="mt-2 font-['Bebas_Neue'] text-base tracking-[0.04em] text-white/70">
              {PRICING_PROMISE.support}
            </p>

            <p className="mt-5 font-['Bebas_Neue'] text-xs uppercase tracking-[0.18em] text-white/40">
              What you always get
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {PRICING_PROMISE.points.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 font-['Bebas_Neue'] text-base leading-snug tracking-[0.03em] text-white/70"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#db364e]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <motion.h2
          {...fadeUp()}
          className="text-center text-3xl uppercase sm:text-4xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          How packages work
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGE_RULES.map((rule, i) => (
            <motion.div
              key={rule.title}
              {...fadeUp(i * 0.05)}
              className="liquid-glass flex flex-col rounded-2xl border border-white/10 p-5 transition-colors duration-300 hover:border-[#b02a3d]/70"
            >
              <span className="font-['Bebas_Neue'] text-xs uppercase tracking-[0.2em] text-[#f5b8c4]">
                0{i + 1}
              </span>

              <h3
                className="mt-2 text-lg"
                style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {rule.title}
              </h3>

              <p className="mt-2 font-['Bebas_Neue'] text-base leading-snug tracking-[0.03em] text-white/60">
                {rule.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <motion.h2
          {...fadeUp()}
          className="text-center text-3xl uppercase sm:text-4xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          Who this is for
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp()}
            className="liquid-glass rounded-2xl border border-white/10 p-8"
          >
            <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]">
              A great fit
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {ICP.builtFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/80"
                >
                  <Check className="mt-1 size-4 shrink-0 text-[#27c93f]" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(0.06)}
            className="liquid-glass rounded-2xl border border-white/10 p-8"
          >
            <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-white/45">
              Probably not a fit
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {ICP.notFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/50"
                >
                  <X className="mt-1 size-4 shrink-0 text-[#b02a3d]" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
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
            Tell us the idea and the deadline. We will tell you what is possible
            in a sprint.
          </p>

          <SpecularButton onClick={() => navigate('/contact')}>
            Request a quote
          </SpecularButton>
        </motion.div>
      </section>
    </PageShell>
  );
}
