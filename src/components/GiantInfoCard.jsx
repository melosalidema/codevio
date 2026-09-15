import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GiantInfoCard() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] px-[5cm] py-24 max-[900px]:px-6"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="sticky top-10 flex min-h-[calc(100vh-5rem)] w-full flex-col justify-between rounded-[32px] bg-white p-10 text-black shadow-2xl md:p-16"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <p className="font-['Bebas_Neue'] text-xl uppercase tracking-[0.12em] text-black/45">
            Codevio Studio
          </p>

          <p className="max-w-md font-['Bebas_Neue'] text-xl tracking-[0.06em] text-black/60 md:text-right">
            Websites. Marketing. Branding. Strategy. Built for brands that want to move.
          </p>
        </div>

        <div>
          <h2 className="max-w-6xl font-['Dela_Gothic_One'] text-[clamp(2.4rem,7vw,7rem)] uppercase leading-[0.95] tracking-[-0.03em]">
            We turn ideas into digital systems that look sharp and work hard.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-['Dela_Gothic_One'] text-sm uppercase tracking-[0.08em]">
                Web Development
              </h3>
              <p className="mt-3 font-['Bebas_Neue'] text-xl tracking-[0.05em] text-black/55">
                Fast, modern, responsive websites built to convert visitors into customers.
              </p>
            </div>

            <div>
              <h3 className="font-['Dela_Gothic_One'] text-sm uppercase tracking-[0.08em]">
                Digital Marketing
              </h3>
              <p className="mt-3 font-['Bebas_Neue'] text-xl tracking-[0.05em] text-black/55">
                Campaigns, content, and strategy that put your brand in front of the right people.
              </p>
            </div>

            <div>
              <h3 className="font-['Dela_Gothic_One'] text-sm uppercase tracking-[0.08em]">
                Branding
              </h3>
              <p className="mt-3 font-['Bebas_Neue'] text-xl tracking-[0.05em] text-black/55">
                Visual identity systems with logos, colors, typography, and direction that lasts.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}