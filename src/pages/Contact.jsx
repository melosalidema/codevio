import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';
import ContactForm from '../components/ContactForm';
import { Clock3, Mail, Phone } from 'lucide-react';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, PAGE_THEME, SOCIAL_ITEMS, SITE } from '../data/site';

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
        <div className="relative z-10 mx-auto max-w-4xl pt-28 pb-8 min-[1025px]:pt-[84px]">
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

          <div className="contact-layout mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <section className="contact-panel liquid-glass rounded-2xl border border-white/10 p-6 text-left">
                <h2
                  className="text-2xl leading-tight text-white sm:text-3xl"
                  style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
                >
                  Contact Information
                </h2>

                <div className="mt-7 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#db364e]/20 bg-[#db364e]/10 text-[#f5b8c4]">
                      <Mail className="size-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.12em] text-white/45">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="mt-1 block break-all font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white transition-colors hover:text-[#db364e]"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#db364e]/20 bg-[#db364e]/10 text-[#f5b8c4]">
                      <Phone className="size-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.12em] text-white/45">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE.phoneHref}`}
                        className="mt-1 block font-['Bebas_Neue'] text-xl tracking-[0.04em] text-white transition-colors hover:text-[#db364e]"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#db364e]/20 bg-[#db364e]/10 text-[#f5b8c4]">
                      <Clock3 className="size-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-['Bebas_Neue'] text-sm uppercase tracking-[0.12em] text-white/45">
                        Business Hours
                      </p>
                      <p className="mt-1 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/80">
                        Mon – Fri: 9:00 AM – 8:00 PM
                        <br />
                        Sat: 10:00 AM – 4:00 PM
                      </p>
                      <p className="mt-1 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/50">
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="contact-panel liquid-glass rounded-2xl border border-white/10 p-6 text-left">
                <h2
                  className="text-2xl leading-tight text-white sm:text-3xl"
                  style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
                >
                  Response Time
                </h2>
                <p className="mt-4 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.04em] text-white/55">
                  We typically respond to all inquiries within{' '}
                  <span className="font-semibold text-[#f5b8c4]">one business day</span>.
                </p>
              </section>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
