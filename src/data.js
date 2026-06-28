// ---- Brand & content data for Ami's Bake House ----

export const CONTACTS = [
  { name: 'Ami', role: 'Founder & Baker', phone: '9825084665', img: '/assets/Ami.jpeg' },
  { name: 'Rakhi', role: 'Co-Founder & Baker', phone: '9824501720', img: '/assets/Rakhi.jpeg' },
];

export const waLink = (phone, text) =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(
    text || "Hi! I'd love to order from Ami's Bake House."
  )}`;

export const HERO_IMAGES = ['/assets/1.jpeg', '/assets/4.jpeg', '/assets/2.jpeg', '/assets/3.jpeg'];

export const PRODUCTS = [
  {
    img: '/assets/4.jpeg',
    name: 'Walnut Fudge',
    desc: 'Dense, glossy dark-chocolate fudge crowned with crunchy walnuts.',
    price: '₹1200 / kg',
  },
  {
    img: '/assets/1.jpeg',
    name: 'Walnut Brownie',
    desc: 'Fudgy, rich brownie loaded with toasted walnuts.',
    price: '₹1300 / kg',
  },
  {
    img: '/assets/2.jpeg',
    name: 'Fudge Brownie',
    desc: 'Our most indulgent — a brownie with a molten fudge heart.',
    price: '₹1600 / kg',
  },
];

export const FUDGE_FLAVOURS = ['Orange', 'Cashew / Almond', 'Oreo', 'Pan'];

export const FEATURES = [
  { icon: 'home', title: 'Truly Home-Made', text: 'Baked fresh in small batches in our own kitchen — never mass-produced.' },
  { icon: 'leaf', title: 'Quality Ingredients', text: 'Real butter, premium cocoa, fresh walnuts. No shortcuts, no preservatives.' },
  { icon: 'truck', title: 'Local Delivery', text: 'Fresh from our oven to your doorstep with safe, local delivery & pickup.' },
  { icon: 'gift', title: 'Made for Gifting', text: 'Beautifully packed boxes for birthdays, festivals & little joys.' },
];
