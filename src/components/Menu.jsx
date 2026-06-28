import { PRODUCTS, FUDGE_FLAVOURS, CONTACTS, waLink } from '../data';

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-5 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-caramel text-2xl">Freshly baked</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-choco mt-1">Our Menu</h2>
          <p className="text-choco-mid mt-3 max-w-xl mx-auto">
            Baked fresh to order, sold by the kilo. Message us for custom boxes & bulk orders.
          </p>
        </div>

        <div className="space-y-5">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="reveal group flex items-center justify-between gap-6 bg-cream rounded-2xl p-6 sm:p-7 border border-gold/30 shadow-[0_8px_30px_rgba(58,36,23,.08)] hover:shadow-[0_14px_40px_rgba(58,36,23,.16)] hover:border-gold transition-all"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="min-w-0">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-choco">{p.name}</h3>
                <p className="text-choco-mid text-sm mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-2.5 shrink-0">
                <span className="font-semibold text-caramel text-lg sm:text-xl whitespace-nowrap">{p.price}</span>
                <a
                  href={waLink(CONTACTS[0].phone, `Hi! I'd like to order: ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-choco text-cream text-sm px-5 py-2 rounded-full font-medium hover:bg-caramel hover:text-choco-dark transition"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fudge flavours */}
        <div className="reveal mt-12 text-center bg-choco rounded-3xl px-6 py-10">
          <p className="font-script text-gold text-2xl">Pick your flavour</p>
          <h3 className="font-display text-3xl font-bold text-cream mt-1 mb-7">Fudge Flavours</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {FUDGE_FLAVOURS.map((f) => (
              <span
                key={f}
                className="bg-cream/10 border border-gold/40 text-cream px-5 py-2.5 rounded-full text-sm font-medium tracking-wide"
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
