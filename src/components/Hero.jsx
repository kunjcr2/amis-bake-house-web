import { useEffect, useState } from 'react';
import { HERO_IMAGES, CONTACTS, waLink } from '../data';

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ${
            i === idx ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt="Freshly baked treats"
            className={`w-full h-full object-cover ${i === idx ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-choco-dark/70 via-choco-dark/55 to-choco-dark/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(42,24,16,.6))]" />

      <div className="relative z-10 text-center px-5 max-w-3xl">
        <p className="reveal font-script text-gold text-2xl sm:text-3xl mb-3 animate-float">
          Home Made Happiness · Est. 2026
        </p>
        <h1 className="reveal font-display text-5xl sm:text-7xl font-bold text-cream text-shadow-soft leading-[1.05]">
          Baked Fresh,
          <br />
          <span className="text-gold italic">Made with Love</span>
        </h1>
        <p className="reveal mt-6 text-cream/90 text-base sm:text-xl max-w-xl mx-auto font-light">
          Indulgent brownies, melt-in-your-mouth fudge & little treats — handcrafted in small batches at{' '}
          <span className="font-medium text-gold">Ami's Bake House</span>.
        </p>
        <div className="reveal mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-gold text-choco-dark px-8 py-4 rounded-full font-semibold shadow-2xl hover:bg-cream hover:scale-105 transition-all"
          >
            View Our Menu
          </a>
          <a
            href={waLink(CONTACTS[0].phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream/10 backdrop-blur border border-cream/40 text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream/20 hover:scale-105 transition-all"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === idx ? 'w-8 bg-gold' : 'w-2.5 bg-cream/50 hover:bg-cream/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
