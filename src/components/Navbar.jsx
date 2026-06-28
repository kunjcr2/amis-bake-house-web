import { useEffect, useState } from 'react';

const LINKS = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Menu', '#menu'],
  ['Why Us', '#why'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur shadow-[0_8px_30px_rgba(58,36,23,.12)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/assets/7.jpeg"
            alt="Ami's Bake House logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-gold shadow-md group-hover:scale-105 transition"
          />
          <div className="leading-tight">
            <p
              className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                scrolled ? 'text-choco' : 'text-cream'
              }`}
            >
              Ami's Bake House
            </p>
            <p className={`font-script text-sm -mt-1 ${scrolled ? 'text-caramel' : 'text-gold'}`}>
              Home Made Happiness
            </p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map(([l, h]) => (
            <li key={l}>
              <a
                href={h}
                className={`text-sm font-medium tracking-wide relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold after:transition-all ${
                  scrolled ? 'text-choco hover:text-caramel' : 'text-cream/90 hover:text-white'
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-choco text-cream px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-caramel hover:text-choco-dark hover:scale-105 transition-all"
        >
          Order Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-choco' : 'text-cream'}`}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="bg-cream/95 backdrop-blur mx-4 mt-2 rounded-2xl shadow-xl p-3 space-y-1">
          {LINKS.map(([l, h]) => (
            <li key={l}>
              <a
                onClick={() => setOpen(false)}
                href={h}
                className="block px-4 py-3 rounded-xl text-choco font-medium hover:bg-cream-deep transition"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="block text-center bg-choco text-cream px-4 py-3 rounded-xl font-semibold mt-1"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
