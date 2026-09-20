import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import styles from './Card.module.scss';

const headlines = [
  'Built to convert.',
  'Right people, right time.',
  'Impossible to ignore.',
];

const Card = ({ i, title, description, headline, price, priceNote, src, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ scale, top: `calc(-2vh + ${i * 18}px)` }}
        className={styles.card}
      >
        <h2>{title}</h2>

        <div className={styles.body}>
          <div className={styles.description}>
            {price ? (
              <p className={styles.price}>
                {price}
                {priceNote ? (
                  <span className={styles.priceNote}>{priceNote}</span>
                ) : null}
              </p>
            ) : null}
            <p className={styles.headline}>{headline ?? headlines[i]}</p>
            <p>{description}</p>

          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <img src={src} alt={title} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;