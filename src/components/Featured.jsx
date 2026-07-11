import { FEATURED, CONTACTS, waLink } from '../data';

export default function Featured() {
  const f = FEATURED;

  return (
    <section id="featured" className="py-24 px-5 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-caramel text-2xl">The one everyone asks for</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-choco mt-1">Featured</h2>
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-cream-dark rounded-3xl border border-cream-deep shadow-[0_10px_40px_rgba(58,36,23,.09)] overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
            <img
              src={f.img}
              alt={f.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-4 left-4 bg-choco text-cream text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
              Bestseller
            </span>
          </div>

          <div>
            <p className="font-script text-caramel text-xl">{f.tagline}</p>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-choco mt-1">{f.name}</h3>
            <p className="text-choco-mid mt-4 leading-relaxed">{f.desc}</p>

            <ul className="mt-6 space-y-3">
              {f.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-choco-mid text-sm">
                  <svg
                    className="w-5 h-5 text-caramel shrink-0 mt-px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-5 mt-8">
              <span className="font-semibold text-caramel text-2xl">{f.price}</span>
              <a
                href={waLink(CONTACTS[0].phone, `Hi! I'd like to order the ${f.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-choco text-cream px-7 py-3 rounded-full font-medium hover:bg-caramel hover:text-choco-dark transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
