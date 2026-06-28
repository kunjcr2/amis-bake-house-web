import { PRODUCTS, CONTACTS, waLink } from '../data';

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-5 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-caramel text-2xl">Freshly baked</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-choco mt-1">Our Sweet Menu</h2>
          <p className="text-choco-mid mt-3 max-w-xl mx-auto">
            Every treat is baked to order. Prices below are a starting point — message us for custom boxes,
            hampers & bulk orders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="reveal group bg-cream rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(58,36,23,.10)] hover:shadow-[0_20px_50px_rgba(58,36,23,.22)] hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-gold/95 text-choco-dark text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-choco">{p.name}</h3>
                <p className="text-choco-mid text-sm mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between mt-5">
                  <span className="font-semibold text-caramel text-lg">{p.price}</span>
                  <a
                    href={waLink(CONTACTS[0].phone, `Hi! I'd like to order: ${p.name} 🤎`)}
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

        <p className="text-center text-choco-mid/80 text-sm mt-10 reveal">
          * Placeholder prices — share your final rates and we'll update them instantly.
        </p>
      </div>
    </section>
  );
}
