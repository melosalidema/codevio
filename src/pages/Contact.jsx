import Footer from '../components/Footer';
import Grainient from '../components/Grainient';
import StaggeredMenu from '../components/StaggeredMenu';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import '../components/Lanyard.css';

const NAV_ITEMS = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

const SOCIAL_ITEMS = [
  { label: 'Instagram', link: 'https://www.instagram.com/codev.io/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/codevio00/' },
];

export default function Contact() {
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

          <div className="mt-10 flex flex-col gap-4 font-['Bebas_Neue'] text-2xl tracking-[0.08em] text-white/75 sm:text-3xl">
            <a
              href="mailto:hello@codevio.com"
              className="w-fit transition-colors duration-300 hover:text-[#db364e]"
            >
              hello@codevio.com
            </a>

            <a
              href="tel:+36123456789"
              className="w-fit transition-colors duration-300 hover:text-[#db364e]"
            >
              +36 12 345 6789
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}