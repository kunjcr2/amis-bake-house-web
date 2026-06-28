import { CONTACTS } from '../data';

const fmt = (p) => `${p.slice(0, 5)} ${p.slice(5)}`;

export default function CallBar() {
  return (
    <section className="bg-cream px-5 py-12 border-b border-cream-deep">
      <div className="max-w-4xl mx-auto text-center reveal">
        <p className="font-script text-caramel text-2xl">Hungry already?</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-choco mt-1 mb-7">
          Call us for orders or anything sweet
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {CONTACTS.map((c) => (
            <a
              key={c.phone}
              href={`tel:+91${c.phone}`}
              className="group flex items-center justify-center gap-3 bg-cream border border-gold/50 rounded-full pl-5 pr-6 py-3 hover:bg-choco hover:border-choco transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-cream-deep group-hover:bg-gold flex items-center justify-center text-choco transition-colors">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <span className="text-left leading-tight">
                <span className="block text-xs uppercase tracking-wider text-caramel group-hover:text-gold transition-colors">{c.name}</span>
                <span className="block font-medium text-choco group-hover:text-cream transition-colors">+91 {fmt(c.phone)}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
