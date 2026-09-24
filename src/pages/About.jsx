import { Fragment } from 'react';
import '@fontsource/dela-gothic-one';

import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, PAGE_THEME, SOCIAL_ITEMS, STATS } from '../data/site';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import '../components/Lanyard.css';

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
          width: 0.75rem;
          height: 0.75rem;
          place-items: center;
          border-radius: 9999px;
          transform: translateY(0) scale(1);
          transition:
            transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 180ms ease;
          will-change: transform;
        }

        .mac-window-control--close {
          background: #ff5f56;
        }

        .mac-window-control--minimize {
          background: #ffbd2e;
        }

        .mac-window-control--maximize {
          background: #28c840;
        }

        .mac-window-control:hover {
          filter: brightness(1.06);
          transform: translateY(-1px) scale(1.18);
        }

        .mac-window-control__symbol {
          color: rgba(25, 0, 0, 0.62);
          font-family: Arial, sans-serif;
          font-size: 0.56rem;
          font-weight: 600;
          line-height: 1;
          opacity: 0;
          transform: translateY(1px) scale(0.82);
          transition:
            opacity 180ms ease,
            transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .mac-window-control--close .mac-window-control__symbol {
          font-size: 0.62rem;
          font-weight: 400;
        }

        .mac-window-control--minimize .mac-window-control__symbol {
          font-size: 0.62rem;
        }

        .mac-window-control--maximize .mac-window-control__symbol {
          font-size: 0.55rem;
        }

        .mac-window-control:hover .mac-window-control__symbol {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .mac-window-control,
          .mac-window-control__symbol {
            transition: none;
          }
        }
      `}</style>

      <div className="mac-window-controls" aria-hidden="true">
        {[
          ['close', '×'],
          ['minimize', '−'],
          ['maximize', '+'],
        ].map(([variant, symbol]) => (
          <span
            className={`mac-window-control mac-window-control--${variant}`}
            key={variant}
          >
            <span className="mac-window-control__symbol">{symbol}</span>
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
  useDocumentTitle('About');

  return (
    <>
      <main className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
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

        <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 pt-32 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-[0.3em] text-[#f5b8c4]">
              About Codevio
            </span>

            <h1
              className="text-4xl leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              We design, build, and ship products people actually enjoy using.
            </h1>

            <p className="max-w-xl text-lg text-white/80 sm:text-xl">
              Codevio is a two-to-three person studio of senior designers and
              engineers. We help early-stage founders turn ideas into launched,
              well-crafted digital products — brand, website, and working
              software shipped in fixed sprints, weeks not quarters.
            </p>

            <p className="max-w-xl text-base text-white/60 sm:text-lg">
              We work end to end: product strategy, interface design, and
              full-stack development, so nothing gets lost between the people
              designing the experience and the people shipping it. Fixed scope,
              a named ship date, and no handoffs.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#db364e]/10 blur-2xl" />
            <div className="liquid-glass overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <MacWindowControls />
                <span className="ml-3 text-xs text-white/40">studio.js</span>
              </div>

              <pre className="flex overflow-x-auto bg-black/55 p-6 text-left font-['Bebas_Neue'] text-sm leading-relaxed tracking-[0.04em]">
                <code className="mr-4 select-none whitespace-pre text-white/30">
                  {CODE_LINES.map((_, i) => `${i + 1}\n`).join('')}
                </code>
                <code className="whitespace-pre">
                  {CODE_LINES.map((line, i) => (
                    <Fragment key={i}>
                      {line.length === 0
                        ? '\u00A0'
                        : line.map((token, j) => (
                            <span key={j} className={token.c}>
                              {token.t}
                            </span>
                          ))}
                      {'\n'}
                    </Fragment>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}