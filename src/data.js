// ---- Brand & content data for Ami's Bake House ----

export const CONTACTS = [
  { name: 'Ami Shah', role: 'Founder & Head Baker', phone: '9825084665', img: '/assets/Ami.png' },
  { name: 'Rakhi Shah', role: 'Co-Founder & Baker', phone: '9824501720', img: '/assets/Rakhi.png' },
];

export const waLink = (phone, text) =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(
    text || "Hi! I'd love to order from Ami's Bake House 🤎"
  )}`;

export const HERO_IMAGES = ['/assets/1.jpeg', '/assets/4.jpeg', '/assets/2.jpeg', '/assets/3.jpeg'];

export const PRODUCTS = [
  {
    img: '/assets/1.jpeg',
    name: 'Walnut Fudge Brownie',
    tag: 'Bestseller',
    desc: 'Fudgy, rich centre loaded with toasted walnuts & chocolate chips.',
    price: '₹250 / box of 4',
  },
  {
    img: '/assets/2.jpeg',
    name: 'Choco-Drizzle Brownie',
    tag: 'Classic',
    desc: 'Gooey single-serve brownie finished with a silky chocolate drizzle.',
    price: '₹80 / piece',
  },
  {
    img: '/assets/3.jpeg',
    name: 'Orange Chocolate Fudge',
    tag: 'Seasonal',
    desc: 'Velvety chocolate fudge swirled with bright candied orange.',
    price: '₹320 / 250g',
  },
  {
    img: '/assets/4.jpeg',
    name: 'Classic Walnut Fudge',
    tag: 'Melt-in-mouth',
    desc: 'Dense, glossy dark-chocolate fudge crowned with crunchy walnuts.',
    price: '₹300 / 250g',
  },
  {
    img: '/assets/5.jpeg',
    name: 'Brownie Bites Cup',
    tag: 'Cute treat',
    desc: 'Bite-sized brownie pieces drizzled with molten chocolate, in a cup.',
    price: '₹120 / cup',
  },
  {
    img: '/assets/6.jpeg',
    name: 'Brownie-in-a-Tub',
    tag: 'Gifting',
    desc: 'Warm, melty walnut brownie packed in a tub — perfect to gift.',
    price: '₹180 / tub',
  },
];

export const FEATURES = [
  { icon: '🏡', title: 'Truly Home-Made', text: 'Baked fresh in small batches in our own kitchen — never mass-produced.' },
  { icon: '🌿', title: 'Quality Ingredients', text: 'Real butter, premium cocoa, fresh walnuts. No shortcuts, no preservatives.' },
  { icon: '🚚', title: 'Local Delivery', text: 'Fresh from our oven to your doorstep with safe, local delivery & pickup.' },
  { icon: '🎁', title: 'Made for Gifting', text: 'Beautifully packed boxes & tubs for birthdays, festivals & little joys.' },
];

export const GALLERY = [
  '/assets/1.jpeg',
  '/assets/4.jpeg',
  '/assets/6.jpeg',
  '/assets/2.jpeg',
  '/assets/5.jpeg',
  '/assets/3.jpeg',
];
