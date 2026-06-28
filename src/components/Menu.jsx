import { PRODUCTS, FUDGE_FLAVOURS, CONTACTS, waLink } from '../data';

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-5 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-caramel text-2xl">Freshly baked</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-choco mt-1">Our Menu</h2>
          <p className="text-choco-mid mt-3 max-w-xl mx-auto">
            Baked fresh to order, sold by the kilo. Message us for custom boxes & bulk orders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="reveal group bg-cream rounded-2xl overflow-hidden border border-cream-deep shadow-[0_6px_24px_rgba(58,36,23,.07)] hover:shadow-[0_12px_32px_rgba(58,36,23,.13)] hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-choco">{p.name}</h3>
                <p className="text-choco-mid text-sm mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between mt-5">
                  <span className="font-semibold text-caramel text-lg">{p.price}</span>
                  <a
                    href={waLink(CONTACTS[0].phone, `Hi! I'd like to order: ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-choco text-cream text-sm px-4 py-2 rounded-full font-medium hover:bg-caramel hover:text-choco-dark transition"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fudge flavours */}
        <div className="reveal mt-16 text-center">
          <p className="font-script text-caramel text-2xl">Pick your flavour</p>
          <h3 className="font-display text-3xl font-semibold text-choco mt-1 mb-7">Fudge Flavours</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {FUDGE_FLAVOURS.map((f) => (
              <span
                key={f}
                className="bg-cream border border-gold/50 text-choco px-5 py-2.5 rounded-full text-sm font-medium tracking-wide"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
