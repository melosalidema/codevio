import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';
import SocialIcon from './SocialIcon';
import { NAV_ITEMS, SOCIAL_ITEMS, SITE } from '../data/site';

function MenuAnimation({ items }) {
  return (
    <div className="grid w-full grid-cols-2 gap-x-8 gap-y-3 overflow-visible md:flex md:w-auto md:min-w-fit md:flex-col md:items-end">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="group/menu flex items-center justify-center gap-2 no-underline md:justify-end"
        >
          <span className="z-10 translate-x-6 cursor-pointer font-['Dela_Gothic_One'] text-sm uppercase tracking-[0.08em] text-white/70 transition duration-300 ease-out group-hover/menu:translate-x-0 group-hover/menu:text-[#db364e] sm:text-base md:translate-x-7">
            {item.label}
          </span>

          <ArrowLeft className="size-4 translate-x-0 text-white opacity-0 transition duration-300 ease-out md:size-5 md:translate-x-full md:group-hover/menu:translate-x-0 md:group-hover/menu:text-[#db364e] md:group-hover/menu:opacity-100" />
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

      <div className="compact-footer mx-auto flex min-h-[500px] w-full max-w-7xl flex-col justify-between px-6 py-8 text-center sm:px-8 md:min-h-[560px] md:px-10 md:py-10 md:text-left lg:px-12">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-start md:justify-between">
          <Link to="/" className="inline-flex w-fit items-center">
            <img
              src={logo}
              alt="Codevio logo"
              className="h-8 w-auto object-contain"
              draggable={false}
            />
          </Link>

          <nav aria-label="Footer navigation" className="w-full max-w-[240px] -translate-x-4 self-center md:w-auto md:max-w-none md:translate-x-0 md:self-auto">
            <MenuAnimation items={links} />
          </nav>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="hidden md:block">
              <p className="max-w-4xl text-center font-['Dela_Gothic_One'] text-[clamp(1.7rem,5.5vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-left">
              <span className="whitespace-nowrap">Let&apos;s build</span>{' '}<br className="footer-desktop-break" />
              <Link to="/contact" className="footer-something">
                something
              </Link>{' '}<br className="footer-desktop-break" />
              <span className="whitespace-nowrap">that moves.</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 text-center font-['Bebas_Neue'] text-base tracking-[0.07em] sm:text-lg md:min-w-[360px] md:items-end md:text-right">
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

        <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center font-['Dela_Gothic_One'] text-xs uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Codevio</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
