import { useState } from 'react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-24 px-5 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="font-script text-caramel text-2xl">A feast for the eyes</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-choco mt-1">Gallery</h2>
        </div>
        <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
          {GALLERY.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className="reveal block w-full overflow-hidden rounded-2xl shadow-lg group focus:outline-none"
            >
              <img
                src={src}
                alt="Bakery treat"
                className="w-full object-cover group-hover:scale-105 group-hover:brightness-105 transition duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-choco-dark/90 backdrop-blur flex items-center justify-center p-5 cursor-zoom-out"
        >
          <img src={active} alt="Treat" className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl" />
          <button className="absolute top-5 right-6 text-cream text-4xl" aria-label="Close">
            ×
          </button>
        </div>
      )}
    </section>
  );
}
