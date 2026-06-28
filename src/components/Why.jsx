import { FEATURES } from '../data';

export default function Why() {
  return (
    <section id="why" className="py-24 px-5 bg-choco relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/3.jpeg')" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-gold text-2xl">Why you'll love us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mt-1">The Ami's Promise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal bg-cream/5 backdrop-blur border border-cream/15 rounded-3xl p-7 text-center hover:bg-cream/10 hover:-translate-y-1.5 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="font-display text-xl font-bold text-gold mb-2">{f.title}</h3>
              <p className="text-cream/75 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
