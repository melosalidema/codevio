import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CycleText() {
  const words = ['Hello', 'World', 'Ciaoo', 'World'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(current => (current + 1) % words.length);
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="font-mono text-xl text-pink-600">
        System.out.println(
        <AnimatePresence mode="wait">
          <motion.span
            key={`word-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.08 }}
            className="inline-block font-mono text-xl text-blue-700"
          >
            &quot;{words[index]}&quot;
          </motion.span>
        </AnimatePresence>
        )
      </span>
    </div>
  );
}