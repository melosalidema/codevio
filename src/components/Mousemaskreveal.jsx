import { useState, useEffect, useRef, useCallback } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: -200, y: -200 });
  const targetRef = useRef({ x: -200, y: -200 });
  const hoveredRef = useRef(false);

  useEffect(() => {
    hoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (x !== null && y !== null) {
      targetRef.current = { x, y };
    }
  }, [x, y]);

  const lerp = (a, b, t) => a + (b - a) * t;

  const animate = useCallback(() => {
    const mask = maskRef.current;
    const container = containerRef.current;
    if (!mask || !container) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const size = hoveredRef.current ? 420 : 40;
    const ease = hoveredRef.current ? 0.15 : 0.25;

    posRef.current.x = lerp(posRef.current.x, targetRef.current.x, ease);
    posRef.current.y = lerp(posRef.current.y, targetRef.current.y, ease);

    const rect = container.getBoundingClientRect();
    const relX = posRef.current.x - rect.left;
    const relY = posRef.current.y - rect.top;

    const pos = `${relX - size / 2}px ${relY - size / 2}px`;
    const sz = `${size}px ${size}px`;

    mask.style.webkitMaskPosition = pos;
    mask.style.maskPosition = pos;
    mask.style.webkitMaskSize = sz;
    mask.style.maskSize = sz;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handleMouseLeave = () => {
    targetRef.current = { x: -200, y: -200 };
    setIsHovered(false);
  };

  return (
    <main style={styles.main} ref={containerRef} onMouseLeave={handleMouseLeave}>
      {/* Red revealed layer */}
      <div ref={maskRef} style={styles.maskLayer}>
        <p style={styles.text}>
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={styles.hoverTarget}
          >
            A visual designer — with skills that haven't been replaced by A.I
            (yet) — making good shit only if the paycheck is equally good.
          </span>
        </p>
      </div>

      {/* Base layer */}
      <div style={styles.bodyLayer}>
        <p style={styles.text}>
          I'm a{" "}
          <span style={styles.accent}>selectively skilled</span> product
          designer with strong focus on producing high quality & impactful
          digital experience.
        </p>
      </div>
    </main>
  );
}

const styles = {
 
  bodyLayer: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#afa18f",
  },
  maskLayer: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ec4e39",
    color: "#1a1a1a",
    WebkitMaskImage:
      "radial-gradient(circle, black 50%, transparent 70%)",
    maskImage:
      "radial-gradient(circle, black 50%, transparent 70%)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "40px 40px",
    maskSize: "40px 40px",
    WebkitMaskPosition: "-200px -200px",
    maskPosition: "-200px -200px",
    transition:
      "mask-size 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), -webkit-mask-size 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    zIndex: 1,
  },
  text: {
    width: "900px",
    maxWidth: "90vw",
    padding: "40px",
    fontSize: "clamp(28px, 4vw, 56px)",
    lineHeight: 1.15,
    margin: 0,
    fontWeight: 400,
  },
  hoverTarget: {
    cursor: "pointer",
  },
  accent: {
    color: "#ec4e39",
  },
};