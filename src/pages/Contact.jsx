import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, OFFERS, SOCIAL_ITEMS, SITE } from '../data/site';
import SocialIcon from '../components/SocialIcon';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import '../components/Lanyard.css';

export default function Contact() {
  useDocumentTitle('Contact');

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

        <div className="lanyard-nav">
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

        <section className="relative z-10 mx-auto max-w-6xl pt-28">
          <h1 className="font-['Dela_Gothic_One'] text-[clamp(3rem,10vw,9rem)] uppercase leading-none">
            Contact
          </h1>

          <p className="mt-6 max-w-xl font-['Bebas_Neue'] text-2xl tracking-[0.06em] text-white/70 sm:text-3xl">
            Tell us the idea and the deadline. {SITE.responseTime}
          </p>

          <div className="mt-10 flex flex-col gap-4 font-['Bebas_Neue'] text-2xl tracking-[0.08em] text-white/75 sm:text-3xl">
            <a
              href={`mailto:${SITE.email}`}
              className="w-fit transition-colors duration-300 hover:text-[#db364e]"
            >
              {SITE.email}
            </a>

            <a
              href={`tel:${SITE.phoneHref}`}
              className="w-fit transition-colors duration-300 hover:text-[#db364e]"
            >
              {SITE.phone}
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="liquid-glass rounded-2xl border border-white/10 p-8">
              <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]">
                Helpful things to include
              </p>
              <ul className="mt-6 flex flex-col gap-3 font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white/70">
                <li>What you are building, in one sentence</li>
                <li>Your launch date or deadline</li>
                <li>
                  The package you have in mind — {OFFERS.map((offer) => offer.title).join(', ')}
                </li>
              </ul>
            </div>

            <div className="liquid-glass rounded-2xl border border-white/10 p-8">
              <p className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]">
                Elsewhere
              </p>
              <div className="mt-6 flex flex-col gap-3 font-['Bebas_Neue'] text-xl tracking-[0.08em] text-white/70">
                {SOCIAL_ITEMS.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-3 transition-colors duration-300 hover:text-[#db364e]"
                  >
                    <SocialIcon label={social.label} className="size-5 shrink-0" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}