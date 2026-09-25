import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';
import ContactForm from '../components/ContactForm';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, OFFERS, PAGE_THEME, SOCIAL_ITEMS, SITE } from '../data/site';
import SocialIcon from '../components/SocialIcon';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import '../components/Lanyard.css';

export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <>
        <main className="compact-layout relative min-h-screen overflow-hidden px-6 py-24 text-white">
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

        {/* A div, not a section: index.css forces `section` to 1080px on desktop. */}
        <div className="relative z-10 mx-auto max-w-4xl pt-28">
          <div className="text-center">
            <span className="block text-sm uppercase tracking-[0.3em] text-[#f5b8c4]">
              Get in touch
            </span>

            <h1
              className="mt-4 text-3xl leading-tight text-white sm:text-4xl"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              We&rsquo;d love to hear from you
            </h1>

            <p className="mx-auto mt-3 max-w-lg font-['Bebas_Neue'] text-xl leading-snug tracking-[0.04em] text-white/65">
              Tell us the idea and the deadline. {SITE.responseTime}
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            <ContactForm />

            <div className="liquid-glass rounded-2xl border border-white/10 p-6">
              <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]">
                Direct
              </p>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 block break-all font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white transition-colors duration-300 hover:text-[#db364e]"
              >
                {SITE.email}
              </a>

              <a
                href={`tel:${SITE.phoneHref}`}
                className="mt-1 block w-fit font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white/80 transition-colors duration-300 hover:text-[#db364e]"
              >
                {SITE.phone}
              </a>

              <p className="mt-3 font-['Bebas_Neue'] text-lg tracking-[0.04em] text-white/55">
                {SITE.responseTime}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {SOCIAL_ITEMS.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#db364e] hover:text-[#db364e]"
                  >
                    <SocialIcon label={social.label} className="size-4 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="liquid-glass mt-6 rounded-2xl border border-white/10 p-6">
            <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]">
              Helpful things to include
            </p>

            <ul className="mt-4 flex flex-col gap-2 font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white/70">
              <li>What you are building, in one sentence</li>
              <li>Your launch date or deadline</li>
              <li>
                The package you have in mind — {OFFERS.map((offer) => offer.title).join(', ')}
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
