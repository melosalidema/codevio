import { motion } from 'framer-motion';

const curtainVariants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
    },
  },
};

const contentVariants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
};

export default function PageTransition({
  label = 'Our Services',
  background = 'linear-gradient(135deg, #0a0a0f 0%, #7b2233 52%, #db364e 100%)',
  textColor = '#ffffff',
  children,
}) {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/dela-gothic-one@5.0.19/index.min.css');
      `}</style>

      <div style={{ position: 'relative' }}>
        <motion.div
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'fixed',
            inset: 0,
            background,
            transformOrigin: 'top',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.p
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.3, delay: 0.1 },
            }}
            style={{
              fontFamily: "'Dela Gothic One', sans-serif",
              fontSize: 'clamp(32px, 6vw, 80px)',
              fontWeight: 400,
              color: textColor,
              letterSpacing: 0,
              margin: 0,
            }}
          >
            {label}
          </motion.p>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}