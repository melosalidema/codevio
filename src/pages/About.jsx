import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, PAGE_THEME, SOCIAL_ITEMS, STATS } from '../data/site';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import '../components/Lanyard.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

function MacWindowControls() {
  return (
    <>
      <style>{`
        .mac-window-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mac-window-control {
          position: relative;
          display: grid;
          width: 1.25rem;
          height: 1.25rem;
          margin: -0.25rem;
          place-items: center;
          border-radius: 9999px;
        }

        .mac-window-control__surface {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: inherit;
          box-shadow:
            inset 0 0 0 0.5px rgba(35, 0, 0, 0.12),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -1px 1px rgba(0, 0, 0, 0.12);
          transition: filter 160ms ease-out;
        }

        .mac-window-control--close .mac-window-control__surface {
          background:
            radial-gradient(circle at 32% 24%, rgba(255, 255, 255, 0.16), transparent 58%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.035)),
            #ff5f56;
        }

        .mac-window-control--minimize .mac-window-control__surface {
          background:
            radial-gradient(circle at 32% 24%, rgba(255, 255, 255, 0.2), transparent 58%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.045)),
            #ffbd2e;
        }

        .mac-window-control--maximize .mac-window-control__surface {
          background:
            radial-gradient(circle at 32% 24%, rgba(255, 255, 255, 0.18), transparent 58%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.04)),
            #28c840;
        }

        .mac-window-control--close:hover .mac-window-control__surface {
          filter: brightness(1.08);
        }

        .mac-window-control--minimize:hover .mac-window-control__surface {
          filter: brightness(1.07);
        }

        .mac-window-control--maximize:hover .mac-window-control__surface {
          filter: brightness(1.08);
        }

        .mac-window-control__symbol {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 7px;
          height: 7px;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.85);
          transform-origin: center;
          transition:
            opacity 160ms ease-out,
            transform 160ms ease-out;
          pointer-events: none;
        }

        .mac-window-control__symbol path {
          vector-effect: non-scaling-stroke;
        }

        .mac-window-control:hover .mac-window-control__symbol {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .code-line {
          display: block;
          clip-path: inset(0 100% 0 0);
          animation: code-type 500ms steps(28, end) forwards;
          animation-delay: var(--code-line-delay);
        }

        .code-line--number {
          opacity: 0;
          animation: code-number-in 220ms ease forwards;
          animation-delay: var(--code-line-delay);
        }

        @keyframes code-type {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes code-number-in {
          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mac-window-control__surface,
          .mac-window-control__symbol,
          .code-line {
            transition: none;
          }

          .mac-window-control__symbol {
            transform: translate(-50%, -50%);
          }

          .code-line,
          .code-line--number {
            animation: none;
            clip-path: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="mac-window-controls" aria-hidden="true">
        {['close', 'minimize', 'maximize'].map((variant) => (
          <span
            className={`mac-window-control mac-window-control--${variant}`}
            key={variant}
          >
            <span className="mac-window-control__surface" />
            <svg
              className="mac-window-control__symbol"
              viewBox="0 0 8 8"
              fill="none"
              aria-hidden="true"
            >
              {variant === 'close' && (
                <path
                  d="M1.25 1.25 6.75 6.75M6.75 1.25 1.25 6.75"
                  stroke="white"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              )}
              {variant === 'minimize' && (
                <path
                  d="M1.25 3.75h5.5"
                  stroke="#674600"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              )}
              {variant === 'maximize' && (
                <path
                  d="M3.3 3.3 1.25 1.25M1.25 2.45v-1.2h1.2M4.7 3.3l2.05-2.05m-1.2 0h1.2v1.2M3.3 4.7l-2.05 2.05m0-1.2v1.2h1.2M4.7 4.7l2.05 2.05m-1.2 0h1.2v-1.2"
                  stroke="#176026"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </span>
        ))}
      </div>
    </>
  );
}

// Purely decorative snippet rendered in the "studio.js" panel.
// Each line is a list of { text, colorClass } tokens.
const KEYWORD = 'text-[#f5b8c4]';
const PROP = 'text-[#db364e]';
const STRING = 'text-[#f5b8c4]';
const PLAIN = 'text-white';
const MUTED = 'text-white/60';
const COMMENT = 'text-white/40';

const CODE_LINES = [
  [{ t: '// this is how we work', c: COMMENT }],
  [
    { t: 'const ', c: KEYWORD },
    { t: 'codevio', c: PLAIN },
    { t: ' = {', c: MUTED },
  ],
  [
    { t: '  crafts', c: PROP },
    { t: ': [', c: MUTED },
    { t: "'ideas'", c: STRING },
    { t: ', ', c: MUTED },
    { t: "'interfaces'", c: STRING },
    { t: ', ', c: MUTED },
    { t: "'systems'", c: STRING },
    { t: '],', c: MUTED },
  ],
  [
    { t: '  cares', c: PROP },
    { t: ': ', c: MUTED },
    { t: "'about the details',", c: STRING },
  ],
  [{ t: '};', c: MUTED }],
  [],
  [
    { t: 'function ', c: KEYWORD },
    { t: 'ship', c: PLAIN },
    { t: '(idea) {', c: MUTED },
  ],
  [
    { t: '  const ', c: KEYWORD },
    { t: 'design', c: PLAIN },
    { t: ' = ', c: MUTED },
    { t: 'craft', c: PLAIN },
    { t: '(idea);', c: MUTED },
  ],
  [
    { t: '  const ', c: KEYWORD },
    { t: 'code', c: PLAIN },
    { t: ' = ', c: MUTED },
    { t: 'engineer', c: PLAIN },
    { t: '(design);', c: MUTED },
  ],
  [
    { t: '  return ', c: KEYWORD },
    { t: 'polish', c: PLAIN },
    { t: '(code);', c: MUTED },
  ],
  [{ t: '}', c: MUTED }],
  [],
  [
    { t: 'export default ', c: KEYWORD },
    { t: 'ship', c: PLAIN },
    { t: '(', c: MUTED },
    { t: "'your next idea'", c: STRING },
    { t: ');', c: MUTED },
  ],
];

export default function About() {
  useDocumentTitle(
    'About',
    'Codevio is a two-to-three person studio of senior designers and engineers shipping early-stage products in fixed sprints.'
  );

  return (
    <>
      <main id="main" tabIndex={-1} className="compact-layout relative min-h-screen overflow-hidden px-6 py-24 text-white">
        <div className="pixelblast-bg">
          <Grainient
            color1={PAGE_THEME.backgroundColor}
            color2={PAGE_THEME.gradientColors[1]}
            color3={PAGE_THEME.gradientColors[2]}
            timeSpeed={0.2}
            warpStrength={1.2}
            warpFrequency={4.5}
            warpSpeed={1.8}
            warpAmplitude={60}
            blendAngle={15}
            blendSoftness={0.08}
            rotationAmount={400}
            noiseScale={2.5}
            grainAmount={0.08}
            grainAnimated={true}
            contrast={1.4}
            saturation={1.1}
            zoom={0.9}
          />
        </div>

        <div className="lanyard-nav lanyard-nav--fixed">
          <StaggeredMenu
            position="right"
            items={NAV_ITEMS}
            socialItems={SOCIAL_ITEMS}
            displaySocials={true}
            logoUrl={logo}
            logoOpenUrl={logoAlt}
            displayItemNumbering={true}
            colors={PAGE_THEME.menuColors}
            menuButtonColor={PAGE_THEME.menuButtonColor}
            openMenuButtonColor={PAGE_THEME.openMenuButtonColor}
            menuTextColor={PAGE_THEME.menuTextColor}
            menuHoverColor={PAGE_THEME.menuHoverColor}
            accentColor={PAGE_THEME.accentColor}
            closeOnClickAway={true}
            isFixed={false}
          />
        </div>

        <section className="about-layout relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 pt-28 lg:gap-40 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <motion.span
              {...fadeUp()}
              className="text-sm uppercase tracking-[0.3em] text-[#f5b8c4]"
            >
              About Codevio
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="text-4xl leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              We design, build, and ship products people actually enjoy using.
            </motion.h1>

            <motion.p {...fadeUp(0.1)} className="max-w-xl text-lg text-white/80 sm:text-xl">
              Codevio is a two-to-three person studio of senior designers and
              engineers. We help early-stage founders turn ideas into launched,
              well-crafted digital products — brand, website, and working
              software shipped in fixed sprints, weeks not quarters.
            </motion.p>

            <motion.p {...fadeUp(0.15)} className="max-w-xl text-base text-white/60 sm:text-lg">
              We work end to end: product strategy, interface design, and
              full-stack development, so nothing gets lost between the people
              designing the experience and the people shipping it. Fixed scope,
              a named ship date, and no handoffs.
            </motion.p>

            <motion.div
              {...fadeUp(0.2)}
              className="mt-4 grid grid-cols-3 gap-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#db364e]/10 blur-2xl" />
            <div className="liquid-glass overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <MacWindowControls />
                <span className="ml-3 text-xs text-white/40">studio.js</span>
              </div>

              <pre className="flex overflow-x-auto bg-black/55 p-6 text-left font-['Bebas_Neue'] text-sm leading-relaxed tracking-[0.04em]">
                <code className="mr-4 select-none whitespace-pre text-white/30">
                  {CODE_LINES.map((_, i) => (
                    <span
                      key={i}
                      className="code-line code-line--number"
                      style={{ '--code-line-delay': `${i * 500}ms` }}
                    >
                      {i + 1}
                    </span>
                  ))}
                </code>
                <code className="whitespace-pre">
                  {CODE_LINES.map((line, i) => (
                    <span
                      key={i}
                      className="code-line"
                      style={{ '--code-line-delay': `${i * 500}ms` }}
                    >
                      {line.length === 0
                        ? '\u00A0'
                        : line.map((token, j) => (
                            <span key={j} className={token.c}>
                              {token.t}
                            </span>
                          ))}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
