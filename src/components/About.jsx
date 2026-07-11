import { CONTACTS } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photos */}
        <div className="reveal grid grid-cols-2 gap-5">
          {CONTACTS.map((c, i) => (
            <div key={c.name} className={i % 2 === 1 ? 'mt-10' : ''}>
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-[0_10px_36px_rgba(58,36,23,.14)] border border-cream-deep">
                <img
                  src={c.img}
                  alt={c.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      c.name
                    )}&background=8a5a3c&color=fbf3e9&size=400&bold=true`;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-display text-lg font-semibold text-choco mt-3 text-center">{c.name}</p>
              <p className="text-caramel text-xs font-medium text-center">{c.role}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="reveal">
          <p className="font-script text-caramel text-2xl">Our little story</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-choco mt-1 mb-8">
            A pinch of love in <span className="text-caramel italic">every bite</span>
          </h2>

          <p className="text-choco-mid leading-relaxed mb-5">
            Ami's Bake House began with a simple belief — that the warmest happiness is the kind that's
            home-made. What started as weekend baking for family soon turned into boxes of brownies and
            fudge travelling across the neighbourhood.
          </p>
          <p className="text-choco-mid leading-relaxed mb-9">
            Run with love by <span className="font-semibold text-choco">Ami</span> &{' '}
            <span className="font-semibold text-choco">Rakhi</span>, every batch is baked fresh, by hand,
            in small quantities — so each piece reaches you as cozy and indulgent as if it came straight
            from a loved one's kitchen.
          </p>

          <div className="flex flex-wrap gap-3">
            {['100% Home-made', 'Whole Wheat · No Maida', 'No Preservatives'].map((t) => (
              <span
                key={t}
                className="bg-cream-deep text-choco px-4 py-2 rounded-full text-sm font-medium border border-gold/40"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="font-display text-2xl text-gold mt-10 tracking-wide">Est. 2026</p>
        </div>
      </div>
    </section>
  );
}
