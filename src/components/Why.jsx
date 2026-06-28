import { FEATURES } from '../data';

const ICONS = {
  home: <path d="M3 11.5 12 4l9 7.5M5 10v10h14V10M9.5 20v-6h5v6" />,
  leaf: <path d="M4 20c0-9 7-15 16-15 0 9-6 16-15 16-1 0-1-1-1-1zM9 15c2.5-3 5.5-5 9-6" />,
  truck: (
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  ),
  gift: (
    <path d="M4 11h16v9H4zM4 7h16v4H4zM12 7v13M12 7C12 7 10 3 8 4.5 6.5 5.6 9 7 12 7zM12 7C12 7 14 3 16 4.5 17.5 5.6 15 7 12 7z" />
  ),
};

export default function Why() {
  return (
    <section id="why" className="py-24 px-5 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-caramel text-2xl">Why you'll love us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-choco mt-1">The Ami's Promise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="reveal text-center" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-cream-deep flex items-center justify-center text-caramel">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[f.icon]}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-choco mb-2">{f.title}</h3>
              <p className="text-choco-mid text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
