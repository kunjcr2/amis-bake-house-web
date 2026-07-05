const POINTS = [
  {
    title: '100% Whole Wheat',
    text: 'Baked with whole-wheat flour — never maida or refined flour.',
    icon: <path d="M12 3v18M12 8c-2-3-5-3-7-3 0 3 2 6 5 6M12 8c2-3 5-3 7-3 0 3-2 6-5 6M12 14c-2-3-5-3-7-3 0 3 2 6 5 6M12 14c2-3 5-3 7-3 0 3-2 6-5 6" />,
  },
  {
    title: 'No Maida',
    text: 'All the indulgence of a classic bake, without the refined stuff.',
    icon: <path d="M4 20c0-9 7-15 16-15 0 9-6 16-15 16-1 0-1-1-1-1zM9 15c2.5-3 5.5-5 9-6" />,
  },
  {
    title: 'No Preservatives',
    text: 'Freshly baked in small batches — nothing artificial, ever.',
    icon: <path d="M12 3s7 3 7 8-3 10-7 10-7-5-7-10 7-8 7-8zM9 12l2 2 4-4" />,
  },
];

export default function Wholesome() {
  return (
    <section className="py-24 px-5 bg-blush">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal">
          <p className="font-script text-caramel text-2xl">Guilt-free indulgence</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-choco mt-1 mb-5">
            Wholesome by Nature
          </h2>
          <p className="text-choco-mid max-w-2xl mx-auto leading-relaxed">
            Every brownie and fudge is now completely <span className="font-semibold text-choco">whole-wheat</span> —
            no maida, no refined flour, and no preservatives. Just honest, home-made goodness you can feel
            good about eating.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mt-14">
          {POINTS.map((p, i) => (
            <div key={p.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-cream flex items-center justify-center text-caramel border border-gold/40">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-choco mb-2">{p.title}</h3>
              <p className="text-choco-mid text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
