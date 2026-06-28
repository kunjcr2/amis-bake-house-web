export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal relative">
          <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-2 border-gold/50 -z-0" />
          <img
            src="/assets/5.jpeg"
            alt="Home-made brownie treats"
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] z-10"
          />
          <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-choco text-cream rounded-2xl px-6 py-4 shadow-xl z-20">
            <p className="font-display text-3xl font-bold text-gold">Est. 2026</p>
            <p className="text-xs tracking-widest uppercase">Made in our kitchen</p>
          </div>
        </div>

        <div className="reveal">
          <p className="font-script text-caramel text-2xl">Our little story</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-choco mt-1 mb-6">
            A pinch of love in <span className="text-caramel italic">every bite</span>
          </h2>
          <p className="text-choco-mid leading-relaxed mb-4">
            Ami's Bake House began with a simple belief — that the warmest happiness is the kind that's
            home-made. What started as weekend baking for family soon turned into boxes of brownies and
            fudge travelling across the neighbourhood. 🤎
          </p>
          <p className="text-choco-mid leading-relaxed mb-6">
            Run with love by <span className="font-semibold text-choco">Ami</span> &{' '}
            <span className="font-semibold text-choco">Rakhi</span>, every batch is baked fresh, by hand,
            in small quantities — so each piece reaches you as cozy and indulgent as if it came straight
            from a loved one's kitchen.
          </p>
          <div className="flex flex-wrap gap-3">
            {['100% Home-made', 'Fresh & Eggless options', 'No Preservatives'].map((t) => (
              <span
                key={t}
                className="bg-cream-deep text-choco px-4 py-2 rounded-full text-sm font-medium border border-gold/40"
              >
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
