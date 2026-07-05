export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-cream relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center reveal">
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

        <div className="flex flex-wrap justify-center gap-3">
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
    </section>
  );
}
