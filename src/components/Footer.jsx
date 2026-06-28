import { CONTACTS, waLink } from '../data';

const EXPLORE = [
  ['About', '#about'],
  ['Menu', '#menu'],
  ['Why Us', '#why'],
  ['Contact', '#contact'],
];

export default function Footer() {
  return (
    <footer className="bg-choco-dark text-cream/80 pt-14 pb-8 px-5">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/assets/7.jpeg" alt="Logo" className="h-12 w-12 rounded-full ring-2 ring-gold object-cover" />
            <div>
              <p className="font-display text-lg font-bold text-cream">Ami's Bake House</p>
              <p className="font-script text-gold">Home Made Happiness</p>
            </div>
          </div>
          <p className="text-sm text-cream/60 leading-relaxed">
            Small-batch brownies, fudge & treats, baked fresh with love since 2026.
          </p>
        </div>

        <div>
          <p className="font-display text-lg text-gold mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {EXPLORE.map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-gold transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg text-gold mb-3">Order & Reach Us</p>
          <ul className="space-y-2 text-sm">
            {CONTACTS.map((c) => (
              <li key={c.name}>
                <a href={waLink(c.phone)} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">
                  {c.name} · +91 {c.phone}
                </a>
              </li>
            ))}
            <li className="text-cream/60">Home bakery · Local delivery & pickup</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-cream/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-cream/50">
        <p>© 2026 Ami's Bake House. All rights reserved.</p>
        <p>Made with love & a lot of chocolate.</p>
      </div>
    </footer>
  );
}
