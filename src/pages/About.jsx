import { Fragment } from 'react';
import '@fontsource/dela-gothic-one';

import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, SOCIAL_ITEMS, STATS } from '../data/site';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import '../components/Lanyard.css';

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
            color1="#0a0a0f"
            color2="#db364e"
            color3="#7b2233"
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
            colors={['#fcdfe4', '#f5b8c4']}
            menuButtonColor="#fcdfe4"
            openMenuButtonColor="#fcdfe4"
            accentColor="#db364e"
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
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
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