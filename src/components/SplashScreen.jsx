import { useState, useEffect } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState(() => (prefersReducedMotion() ? "done" : "hidden")); // hidden -> reveal -> hold -> fadeout -> done

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete?.();
      return undefined;
    }

    const t1 = setTimeout(() => setPhase("reveal"), 300);
    const t2 = setTimeout(() => setPhase("hold"), 1200);
    const t3 = setTimeout(() => setPhase("fadeout"), 2800);
    const t4 = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 3600);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div style={styles.container(phase)}>
      <span style={styles.text(phase)}>codevio</span>
      <div style={styles.grain} />
    </div>
  );
}

const styles = {
  container: (phase) => ({
    position: "fixed",
    inset: 0,
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    opacity: phase === "fadeout" ? 0 : 1,
    transition: phase === "fadeout" ? "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
    overflow: "hidden",
  }),

  text: (phase) => ({
    fontFamily: "'Dela Gothic One', Helvetica, Arial, sans-serif",
    fontSize: "clamp(30px, 1.5vw, 18px)",
    fontWeight: 500,
    letterSpacing: "0.01em",
    color: "#fcdfe4",
    opacity: phase === "reveal" || phase === "hold" ? 1 : 0,
    transform: phase === "reveal" || phase === "hold" ? "translateY(0)" : "translateY(4px)",
    transition:
      phase === "reveal"
        ? "opacity 0.9s ease, transform 0.9s ease"
        : phase === "fadeout"
        ? "opacity 0.4s ease, transform 0.4s ease"
        : "none",
    userSelect: "none",
    position: "relative",
    zIndex: 1,
  }),

  grain: {
    position: "absolute",
    inset: "-50%",
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
    backgroundSize: "128px 128px",
    opacity: 0.6,
    pointerEvents: "none",
    zIndex: 0,
  },
};
