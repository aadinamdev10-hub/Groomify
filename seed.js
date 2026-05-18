require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: 'Beard & Moustache Oil',
    brand: 'Beardo',
    description: 'Argan & almond oil blend that softens beard, reduces itch and adds a healthy shine.',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/71RoGR5tjaL.jpg',
    category: 'beard',
    externalLink: 'https://www.beardo.in/collections/beard-oils',
    externalSite: 'beardo.in'
  },
  {
    name: 'Activated Charcoal Face Wash',
    brand: 'Bombay Shaving Company',
    description: 'Deep-cleansing charcoal formula that removes impurities and unclogs pores.',
    price: 349,
    image: 'https://m.media-amazon.com/images/I/51pZOVwEaaL.jpg',
    category: 'skin',
    externalLink: 'https://www.bombayshavingcompany.com/collections/face-wash',
    externalSite: 'bombayshavingcompany.com'
  },
  {
    name: 'Hair Wax — Strong Hold',
    brand: 'Ustraa',
    description: 'Strong-hold matte clay wax for a natural, no-shine textured look all day.',
    price: 399,
    image: 'https://m.media-amazon.com/images/I/41i7I1UR8TL.jpg',
    category: 'hair',
    externalLink: 'https://www.ustraa.com/collections/hair-care',
    externalSite: 'ustraa.com'
  },
  {
    name: 'Cedarwood Body Wash',
    brand: 'The Man Company',
    description: 'Luxury body wash with cedarwood & aloe vera — refreshing and skin-nourishing.',
    price: 299,
    image: 'https://m.media-amazon.com/images/I/41tsB-cOqzL.jpg',
    category: 'skin',
    externalLink: 'https://www.themancompany.com/collections/body-wash',
    externalSite: 'themancompany.com'
  },
  {
    name: 'Beard Growth Serum',
    brand: 'Beardo',
    description: 'Biotin & caffeine-powered serum that stimulates follicles for a fuller, thicker beard.',
    price: 699,
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71nRo24vVCL._SL1000_.jpg',
    category: 'beard',
    externalLink: 'https://www.beardo.in/collections/beard-growth',
    externalSite: 'beardo.in'
  },
  {
    name: 'Anti-Dandruff Shampoo',
    brand: 'Ustraa',
    description: 'Zinc pyrithione formula that eliminates dandruff and soothes a dry, itchy scalp.',
    price: 349,
    image: 'https://cdn01.pharmeasy.in/dam/products_otc/B48307/ustraa-anti-dandruff-shampoo-250-ml-6.4-1671742244.jpg',
    category: 'hair',
    externalLink: 'https://www.ustraa.com/collections/shampoo',
    externalSite: 'ustraa.com'
  },
  {
    name: 'Mach3 Razor + Gel Combo',
    brand: 'Gillette',
    description: 'Three-blade precision razor + Fusion shave gel for an ultra-smooth, irritation-free shave.',
    price: 549,
    image: 'https://m.media-amazon.com/images/I/61t0CajUBdL.jpg',
    category: 'beard',
    externalLink: 'https://gillette.in/collections/razors',
    externalSite: 'gillette.in'
  },
  {
    name: 'Men Expert Hydra-Power Moisturiser',
    brand: "L'Oreal Paris",
    description: 'Lightweight non-greasy SPF 20 face moisturiser with micro-minerals and volcanic rock extract.',
    price: 449,
    image: 'https://m.media-amazon.com/images/I/61-+3Ps1lsL.jpg',
    category: 'skin',
    externalLink: 'https://www.lorealparis.co.in/men-expert',
    externalSite: 'lorealparis.co.in'
  },
  {
    name: 'Hair Serum — Frizz Control',
    brand: 'Livon',
    description: 'Silicone-based serum that tames frizz, adds shine and makes hair soft to the touch.',
    price: 199,
    image: 'https://5.imimg.com/data5/ANDROID/Default/2023/2/MV/CW/TX/185085351/product-jpeg-1000x1000.jpg',
    category: 'hair',
    externalLink: 'https://www.amazon.in/s?k=livon+hair+serum',
    externalSite: 'amazon.in'
  },
  {
    name: 'DE Shaving Safety Razor',
    brand: 'Bombay Shaving Company',
    description: 'Precision-engineered double-edge safety razor with chrome finish — built to last a lifetime.',
    price: 999,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81BlDXtFvHL.jpg',
    category: 'beard',
    externalLink: 'https://www.bombayshavingcompany.com/collections/razors',
    externalSite: 'bombayshavingcompany.com'
  },
  {
    name: 'Ayurvedic Scalp & Hair Oil',
    brand: 'Kesh King',
    description: 'Ayurvedic 21-herb hair oil that reduces hairfall, nourishes roots and promotes growth.',
    price: 249,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71ZKLI829-L.jpg',
    category: 'hair',
    externalLink: 'https://www.amazon.in/s?k=kesh+king+hair+oil',
    externalSite: 'amazon.in'
  },
  {
    name: 'Neem Face Scrub',
    brand: 'The Man Company',
    description: 'Walnut granule scrub with neem and tea tree for deep exfoliation and clear skin.',
    price: 299,
    image: 'https://m.media-amazon.com/images/I/41K0ci5kjbL.jpg',
    category: 'skin',
    externalLink: 'https://www.themancompany.com/collections/face-scrub',
    externalSite: 'themancompany.com'
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    console.log('Cleared old products');
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} real products with actual images`);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
