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
      <div className="absolute inset-0 bg-gradient-to-b from-choco-dark/45 via-choco-dark/35 to-choco-dark/65" />

      <div className="relative z-10 text-center px-5 max-w-2xl">
        <p className="reveal font-script text-gold text-2xl sm:text-3xl mb-3">
          Home Made Happiness
        </p>
        <h1 className="reveal font-display text-5xl sm:text-7xl font-semibold text-cream text-shadow-soft leading-[1.08]">
          Baked Fresh,
          <br />
          <span className="text-gold italic font-medium">Made with Love</span>
        </h1>
        <p className="reveal mt-6 text-cream/85 text-base sm:text-lg max-w-md mx-auto font-light">
          Small-batch brownies & fudge, handcrafted at Ami's Bake House.
        </p>
        <div className="reveal mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-gold text-choco-dark px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-cream transition-colors"
          >
            View Our Menu
          </a>
          <a
            href={waLink(CONTACTS[0].phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream/10 backdrop-blur border border-cream/40 text-cream px-8 py-3.5 rounded-full font-medium hover:bg-cream/20 transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>

        <a
          href="#about"
          className="reveal group mt-7 inline-flex items-center gap-2 text-cream/80 hover:text-gold text-sm font-medium tracking-wide transition-colors"
        >
          <span className="border-b border-cream/30 group-hover:border-gold transition-colors pb-0.5">
            Read our story
          </span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
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
