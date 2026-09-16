import { useState } from 'react';
import '@fontsource/dela-gothic-one';

import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import Lanyard from '../components/Lanyard';
import LogoLoop from '../components/LogoLoop';
import PositioningStrip from '@/components/PositioningStrip';
import OffersTeaser from '@/components/OffersTeaser';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiSupabase,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiFigma,
} from 'react-icons/si';

const IconWrapper = ({ children }) => (
  <span style={{ color: 'white', display: 'inline-flex', alignItems: 'center' }}>
    {children}
  </span>
);

const techLogos = [
  { node: <IconWrapper><SiReact /></IconWrapper>, title: 'React', href: 'https://react.dev' },
  { node: <IconWrapper><SiNextdotjs /></IconWrapper>, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <IconWrapper><SiTypescript /></IconWrapper>, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <IconWrapper><SiTailwindcss /></IconWrapper>, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <IconWrapper><SiMysql /></IconWrapper>, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <IconWrapper><SiSupabase /></IconWrapper>, title: 'Supabase', href: 'https://supabase.com' },
  { node: <IconWrapper><SiPython /></IconWrapper>, title: 'Python', href: 'https://www.python.org' },
  { node: <IconWrapper><SiJavascript /></IconWrapper>, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <IconWrapper><SiPostgresql /></IconWrapper>, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { node: <IconWrapper><SiNodedotjs /></IconWrapper>, title: 'Node.js', href: 'https://nodejs.org/en' },
  { node: <IconWrapper><SiFigma /></IconWrapper>, title: 'Figma', href: 'https://www.figma.com/' },
];

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        textVisible={splashDone}
      />

      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
        marginY="10rem"
      />

      <div className="relative z-10 mx-auto h-px w-full max-w-7xl bg-white/10" />

      <PositioningStrip />
      <OffersTeaser />

      {/* <ImagesParallax /> 
      <Gallery />
      */}
      


      <Footer />

      {!splashDone && (
        <SplashScreen onComplete={() => setSplashDone(true)} />
      )}
    </>
  );
}