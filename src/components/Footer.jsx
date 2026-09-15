import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';

function MenuAnimation({ items }) {
  return (
    <div className="flex min-w-fit flex-col items-start gap-3 overflow-hidden md:items-end">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group/menu flex items-center justify-end gap-2 no-underline"
        >
          <span className="z-10 translate-x-6 cursor-pointer font-['Dela_Gothic_One'] text-sm uppercase tracking-[0.08em] text-white/70 transition duration-300 ease-out group-hover/menu:translate-x-0 group-hover/menu:text-[#db364e] sm:text-base md:translate-x-7">
            {item.label}
          </span>

          <ArrowLeft className="size-4 translate-x-full text-white opacity-0 transition duration-300 ease-out group-hover/menu:translate-x-0 group-hover/menu:text-[#db364e] group-hover/menu:opacity-100 md:size-5" />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/codev.io/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/codevio00/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
  ];

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

      <div className="mx-auto flex min-h-[620px] w-full max-w-7xl flex-col justify-between px-6 py-10 sm:px-8 md:min-h-[700px] md:px-12 md:py-14 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <a href="#home" className="inline-flex w-fit items-center">
            <img
              src={logo}
              alt="Codevio logo"
              className="h-10 w-auto object-contain sm:h-12"
              draggable={false}
            />
          </a>

          <nav aria-label="Footer navigation">
            <MenuAnimation items={links} />
          </nav>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="max-w-4xl font-['Dela_Gothic_One'] text-[clamp(1.7rem,5.5vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white">
              Let&apos;s build{' '}
              <span className="footer-something">
                something
              </span>{' '}
              that moves.
            </p>
          </div>

          <div className="flex flex-col gap-5 font-['Bebas_Neue'] text-base tracking-[0.07em] sm:text-lg md:min-w-[360px] md:items-end md:text-right">
            <div className="flex flex-col gap-2 text-white/60">
              <a
                href="mailto:hello@codevio.com"
                className="whitespace-nowrap transition-colors duration-300 hover:text-[#db364e]"
              >
                info.codevio@gmail.com
              </a>

              <a
                href="tel:+36123456789"
                className="whitespace-nowrap transition-colors duration-300 hover:text-[#db364e]"
              >
                +383 45 420 977
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-white/50 md:flex-nowrap md:justify-end">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap uppercase transition-colors duration-300 hover:text-[#db364e]"
                >
                  {social.label}
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 font-['Dela_Gothic_One'] text-xs uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codevio</p>
          <p>Digital experiences built to last</p>
        </div>
      </div>
    </footer>
  );
}