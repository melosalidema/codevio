import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function VideoShowcase({
  videoSrc = '/videos/showcase.mp4'
}) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.99]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.92, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] overflow-hidden py-10 text-black"
    >

      <motion.div
        style={{ y, scale, opacity }}
        className="sticky top-[4vh] z-10 mx-[2vw] h-[92vh] overflow-hidden rounded-md border border-white/10 bg-white shadow-2xl max-[640px]:mx-3 max-[640px]:h-[88vh]"
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/45 to-transparent p-5 font-['Bebas_Neue'] text-sm uppercase tracking-[0.18em] text-white sm:p-7">
          <p>We craft bold design and clean code.</p>
          <p className="hidden sm:block">Codevio Studio</p>
        </div>
      </motion.div>
    </section>
  );
}