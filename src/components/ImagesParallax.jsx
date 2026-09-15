import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./ImageParallax.module.scss";

import Picture1 from "../assets/sidescroll1.jpg";
import Picture2 from "../assets/sidescroll2.jpg";
import Picture3 from "../assets/sidescroll3.jpg";


const word = "with framer-motion";

export default function ImagesParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    { src: Picture1, y: 0 },
    { src: Picture2, y: lg },
    { src: Picture3, y: md },
  ];

  return (
    <section ref={ref} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>

        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.random() * -75 - 25]
              );

              return (
                <motion.span key={i} style={{ y }}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>

      <div className={styles.images}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={styles.imageContainer}
            style={{ y: img.y }}
          >
            <img src={img.src} alt={`parallax-${i}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}