const ITEMS = [
  'Fresh Brownies', '•', 'Hand-made Fudge', '•', 'No Preservatives', '•',
  'Local Delivery', '•', 'Baked with Love', '•', 'Small Batches', '•',
];

export default function Strip() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-choco py-3 overflow-hidden">
      <div className="flex gap-6 whitespace-nowrap marquee w-max">
        {row.map((t, i) => (
          <span key={i} className={`font-script text-xl ${t === '•' ? 'text-gold' : 'text-cream/90'}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
