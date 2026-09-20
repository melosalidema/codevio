import { useEffect, useRef, useState } from "react";

const NAV_BRAND = "CODEVIO.";

const LINES = [
  { text: "BUILD", outline: false },
  { text: "FULL-STACK", outline: false },
  { text: "APPLICATIONS", outline: true },
  { text: "FASTER.", outline: false },
];

const SUBTEXT = "WE TURN YOUR IDEAS INTO PRODUCTION-READY WEBSITES.\nFROM DESIGN TO DEPLOYMENT, WE HANDLE THE FULL STACK.";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → 1

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const totalScroll = el.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / totalScroll, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Each line reveals staggered based on scroll progress
  // Line i starts revealing at progress = i * 0.18, fully in at +0.18
  const getLineStyle = (i) => {
    const start = i * 0.07;
    const end = start + 0.1;
    const p = Math.min(Math.max((progress - start) / (end - start), 0), 1);
    const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    return {
      opacity: ease,
      transform: `translateY(${(1 - ease) * 40}px)`,
      filter: ease < 0.3 ? `blur(${(1 - ease) * 6}px)` : "none",
    };
  };

  const subtextStart = 0.35;
  const subtextP = Math.min(Math.max((progress - subtextStart) / 0.1, 0), 1);
  const subtextEase = subtextP < 0.5 ? 2 * subtextP * subtextP : 1 - Math.pow(-2 * subtextP + 2, 2) / 2;

  const ctaStart = 0.45;
  const ctaP = Math.min(Math.max((progress - ctaStart) / 0.1, 0), 1);
  const ctaEase = ctaP < 0.5 ? 2 * ctaP * ctaP : 1 - Math.pow(-2 * ctaP + 2, 2) / 2;

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: auto; }

        body {
          background: #5533FF;
          font-family: 'Bebas Neue', sans-serif;
          overflow-x: hidden;
        }

        .hero-scroll-section {
          height: 300vh;
          position: relative;
        }

        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #5533FF;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 40px;
          position: relative;
          z-index: 10;
        }

        .nav-brand {
          font-family: 'Dela Gothic One', sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #fff;
          letter-spacing: 0.08em;
        }

        .nav-menu {
          display: flex;
          gap: 6px;
          cursor: pointer;
        }

        .nav-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fff;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 36px 0 40px;
          position: relative;
        }

        .hero-lines {
          display: flex;
          flex-direction: column;
          line-height: 0.88;
          margin-bottom: 0;
        }

        .hero-line {
          display: block;
          font-family: 'Dela Gothic One', sans-serif;
          font-weight: 400;
          font-size: clamp(80px, 13vw, 200px);
          letter-spacing: -0.01em;
          color: #fff;
          will-change: opacity, transform;
          transition: none;
          user-select: none;
        }

        .hero-line.outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.5);
          text-stroke: 2px rgba(255,255,255,0.5);
        }

        .hero-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 40px 36px;
          gap: 40px;
        }

        .hero-subtext {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(14px, 1.4vw, 18px);
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.06em;
          line-height: 1.7;
          white-space: pre-line;
          max-width: 340px;
          will-change: opacity, transform;
        }

        .hero-cta {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          will-change: opacity, transform;
        }

        .hero-cta-text {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: 15px;
          letter-spacing: 0.14em;
          color: #fff;
          text-transform: uppercase;
        }

        .hero-cta-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s, border-color 0.25s;
        }

        .hero-cta:hover .hero-cta-circle {
          background: rgba(255,255,255,0.15);
          border-color: #fff;
        }

        .arrow-svg {
          width: 16px;
          height: 16px;
        }

        .scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: ${progress > 0.05 ? 0 : 1};
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .scroll-hint-text {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }

        .scroll-hint-line {
          width: 1px;
          height: 28px;
          background: rgba(255,255,255,0.3);
          animation: scrollPulse 1.8s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.2; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          z-index: 0;
        }

        .spacer-after {
          height: 100vh;
          background: #0d0b12;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Dela Gothic One', sans-serif;
          font-size: 32px;
          font-weight: 400;
          color: rgba(255,255,255,0.15);
          letter-spacing: 0.1em;
        }
      `}</style>

      <section className="hero-scroll-section" ref={sectionRef}>
        <div className="hero-sticky">
          <div className="grain-overlay" />

          <nav>
            <span className="nav-brand">{NAV_BRAND}</span>
            <div className="nav-menu">
              <div className="nav-dot" />
              <div className="nav-dot" />
              <div className="nav-dot" />
              <div className="nav-dot" />
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-lines">
              {LINES.map((line, i) => (
                <span
                  key={i}
                  className={`hero-line${line.outline ? " outline" : ""}`}
                  style={getLineStyle(i)}
                >
                  {line.text}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-bottom">
            <p
              className="hero-subtext"
              style={{
                opacity: subtextEase,
                transform: `translateY(${(1 - subtextEase) * 20}px)`,
              }}
            >
              {SUBTEXT}
            </p>

            <div
              className="hero-cta"
              style={{
                opacity: ctaEase,
                transform: `translateY(${(1 - ctaEase) * 20}px)`,
              }}
            >
              <span className="hero-cta-text">Start a project</span>
              <div className="hero-cta-circle">
                <svg className="arrow-svg" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div
            className="scroll-hint"
            style={{ opacity: progress > 0.04 ? 0 : 1, transition: "opacity 0.4s" }}
          >
            <span className="scroll-hint-text">SCROLL</span>
            <div className="scroll-hint-line" />
          </div>
        </div>
      </section>

    </>
  );
}