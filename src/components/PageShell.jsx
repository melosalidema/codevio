import Footer from './Footer';
import Grainient from './Grainient';
import StaggeredMenu from './StaggeredMenu';
import PageTransition from './StackCard/PageTransition';

import useDocumentTitle from '../lib/useDocumentTitle';
import { NAV_ITEMS, SOCIAL_ITEMS } from '../data/site';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo_alt.png';

import './Lanyard.css';

export default function PageShell({ title, transitionLabel, children }) {
  useDocumentTitle(title);

  return (
    <>
      <main className="relative min-h-screen px-6 py-24 text-white">
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

        <PageTransition label={transitionLabel ?? title}>
          {children}
        </PageTransition>
      </main>

      <Footer />
    </>
  );
}
