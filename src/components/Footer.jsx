import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';
import SocialIcon from './SocialIcon';
import { NAV_ITEMS, SOCIAL_ITEMS, SITE } from '../data/site';

function MenuAnimation({ items }) {
  return (
    <div className="flex min-w-fit flex-col items-start gap-3 overflow-hidden md:items-end">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="group/menu flex items-center justify-end gap-2 no-underline"
        >
          <span className="z-10 translate-x-6 cursor-pointer font-['Dela_Gothic_One'] text-sm uppercase tracking-[0.08em] text-white/70 transition duration-300 ease-out group-hover/menu:translate-x-0 group-hover/menu:text-[#db364e] sm:text-base md:translate-x-7">
            {item.label}
          </span>

          <ArrowLeft className="size-4 translate-x-full text-white opacity-0 transition duration-300 ease-out group-hover/menu:translate-x-0 group-hover/menu:text-[#db364e] group-hover/menu:opacity-100 md:size-5" />
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  const links = NAV_ITEMS.map(({ label, link }) => ({ label, to: link }));

  const socials = SOCIAL_ITEMS.map(({ label, link }) => ({ label, href: link }));

  return (
    <footer
      className="relative overflow-hidden bg-black text-white"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <style>{`
        .footer-something {
          position: relative;
          display: inline-block;
          color: #fff;
          -webkit-text-stroke: 1px #fff;
          text-shadow:
            -4px 4px 0 #1a1a2e,
            -5px 5px 0 #fff;
          transition:
            color 0.25s ease,
            text-shadow 0.25s ease,
            -webkit-text-stroke 0.25s ease;
        }

        .footer-something:hover {
          color: #db364e;
          -webkit-text-stroke: 1px #fff;
          text-shadow:
            -4px 4px 0 #1a1a2e,
            -5px 5px 0 #fff;
        }
      `}</style>

      <div className="compact-footer mx-auto flex min-h-[500px] w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-8 md:min-h-[560px] md:px-10 md:py-10 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Link to="/" className="inline-flex w-fit items-center">
            <img
              src={logo}
              alt="Codevio logo"
              className="h-10 w-auto object-contain sm:h-12"
              draggable={false}
            />
          </Link>

          <nav aria-label="Footer navigation">
            <MenuAnimation items={links} />
          </nav>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
              <p className="max-w-4xl font-['Dela_Gothic_One'] text-[clamp(1.7rem,5.5vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white">
              Let&apos;s build{' '}<br className="footer-desktop-break" />
              <Link to="/contact" className="footer-something">
                something
              </Link>{' '}<br className="footer-desktop-break" />
              that{' '}<br className="footer-desktop-break" />moves.
            </p>
          </div>

          <div className="flex flex-col gap-5 font-['Bebas_Neue'] text-base tracking-[0.07em] sm:text-lg md:min-w-[360px] md:items-end md:text-right">
            <div className="flex flex-col gap-2 text-white/60">
              <a
                href={`mailto:${SITE.email}`}
                className="whitespace-nowrap transition-colors duration-300 hover:text-[#db364e]"
              >
                {SITE.email}
              </a>

              <a
                href={`tel:${SITE.phoneHref}`}
                className="whitespace-nowrap transition-colors duration-300 hover:text-[#db364e]"
              >
                {SITE.phone}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-white/50 md:flex-nowrap md:justify-end">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap uppercase transition-colors duration-300 hover:text-[#db364e]"
                >
                  <SocialIcon label={social.label} className="size-4 shrink-0" />
                  {social.label}
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 font-['Dela_Gothic_One'] text-xs uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codevio</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
