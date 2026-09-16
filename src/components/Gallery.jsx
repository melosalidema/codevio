import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./Gallery.module.scss";

import img1 from "../assets/sidescroll1.jpg";
import img2 from "../assets/sidescroll2.jpg";
import img3 from "../assets/sidescroll3.jpg";
import img4 from "../assets/sidescroll.jpg";
import img5 from "../assets/sidescroll.jpg";
import img6 from "../assets/sidescroll.jpg";
import img7 from "../assets/sidescroll.jpg";
import img8 from "../assets/sidescroll.jpg";
import img9 from "../assets/sidescroll.jpg";
import img10 from "../assets/sidescroll.jpg";
import img11 from "../assets/sidescroll.jpg";
import img12 from "../assets/sidescroll.jpg";

export default function Gallery() {
  const galleryRef = useRef(null);

  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const images = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
    [img10, img11, img12],
  ];

  const yValues = [y, y2, y3, y4];

  return (
    <main className={styles.main}>
      <div className={styles.spacer} />

      <div ref={galleryRef} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          {images.map((group, i) => (
            <Column key={i} images={group} y={yValues[i]} />
          ))}
        </div>
      </div>

      <div className={styles.spacer} />
    </main>
  );
}

function Column({ images, y }) {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((img, i) => (
        <div key={i} className={styles.imageContainer}>
          <img src={img} alt={`gallery-${i}`} />
        </div>
      ))}
    </motion.div>
  );
}