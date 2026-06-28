import { CONTACTS, waLink } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 bg-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-caramel text-2xl">Let's bake your order</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-choco mt-1">Get in Touch</h2>
          <p className="text-choco-mid mt-3 max-w-xl mx-auto">
            We're a home bakery offering local delivery & pickup. Message either of us on WhatsApp or call —
            we'd love to bake something special for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {CONTACTS.map((c) => (
            <div
              key={c.name}
              className="reveal bg-gradient-to-b from-cream to-cream-deep rounded-3xl p-8 text-center shadow-[0_10px_40px_rgba(58,36,23,.12)] border border-gold/30 hover:-translate-y-1.5 transition"
            >
              <div className="relative inline-block">
                <img
                  src={c.img}
                  alt={c.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      c.name
                    )}&background=8a5a3c&color=fbf3e9&size=160&bold=true`;
                  }}
                  className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-gold shadow-lg"
                />
                <span
                  className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full ring-2 ring-cream"
                  title="Available on WhatsApp"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-choco mt-4">{c.name}</h3>
              <p className="text-caramel text-sm font-medium">{c.role}</p>
              <p className="text-choco-mid mt-3 tracking-wide">+91 {c.phone}</p>
              <div className="flex gap-3 justify-center mt-5">
                <a
                  href={waLink(c.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:+91${c.phone}`}
                  className="flex-1 bg-choco text-cream px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-caramel hover:text-choco-dark transition"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center bg-choco rounded-3xl p-8 max-w-3xl mx-auto">
          <p className="font-display text-2xl text-cream">Got a custom order or a celebration coming up?</p>
          <p className="text-cream/70 mt-2 mb-5">
            Hampers, bulk boxes, festive specials & gifting — we love a happy occasion.
          </p>
          <a
            href={waLink(CONTACTS[0].phone, "Hi Ami's Bake House! I'd like to place a custom order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-choco-dark px-8 py-3.5 rounded-full font-semibold hover:bg-cream hover:scale-105 transition"
          >
            Start a WhatsApp Order →
          </a>
        </div>
      </div>
    </section>
  );
}
