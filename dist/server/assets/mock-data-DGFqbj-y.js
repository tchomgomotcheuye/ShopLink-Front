const iphone = "/assets/product-iphone-BGfw7uzO.jpg";
const watch = "/assets/product-watch-BtvKWhjS.jpg";
const bag = "/assets/product-bag-DaCqq3Nr.jpg";
const parfum = "/assets/product-parfum-CNux85vh.jpg";
const headphones = "/assets/product-headphones-vwFQZ6ZC.jpg";
const sneakers = "/assets/product-sneakers-C8QtDcJ-.jpg";
const categories = [
  { id: "electronique", name: "Électronique", icon: "Smartphone" },
  { id: "mode", name: "Mode", icon: "Shirt" },
  { id: "beaute", name: "Beauté", icon: "Sparkles" },
  { id: "maison", name: "Maison", icon: "Home" },
  { id: "sport", name: "Sport", icon: "Dumbbell" },
  { id: "accessoires", name: "Accessoires", icon: "Watch" }
];
const products = [
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max 256 Go",
    price: 45e4,
    rating: 4.8,
    reviews: 124,
    image: iphone,
    shop: "Tech Store Douala",
    category: "electronique",
    description: "iPhone 13 Pro Max avec écran Super Retina XDR de 6,7 pouces, puce A15 Bionic, système photo Pro 12 MP et 5G. 256 Go de stockage, batterie longue durée, garantie 12 mois.",
    inStock: true
  },
  {
    id: "montre-series-8",
    name: "Montre connectée Series 8",
    price: 85e3,
    rating: 4.6,
    reviews: 38,
    image: watch,
    shop: "Gadget World",
    category: "electronique",
    description: "Montre intelligente avec suivi de fréquence cardiaque, notifications, GPS et étanchéité. Bracelet sport noir inclus.",
    inStock: true
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    price: 7e4,
    rating: 4.7,
    reviews: 56,
    image: headphones,
    shop: "Tech Store Douala",
    category: "electronique",
    description: "Écouteurs sans fil avec réduction active du bruit, audio spatial et boîtier MagSafe.",
    inStock: true
  },
  {
    id: "sac-cuir-elegant",
    name: "Sac à main élégant en cuir",
    price: 25e3,
    rating: 4.7,
    reviews: 22,
    image: bag,
    shop: "Fashion Chic",
    category: "mode",
    description: "Sac à main en cuir véritable, finitions dorées, idéal pour le quotidien comme les sorties.",
    inStock: true
  },
  {
    id: "parfum-bleu-100",
    name: "Parfum Bleu 100ml",
    price: 18e3,
    rating: 4.5,
    reviews: 41,
    image: parfum,
    shop: "Beauté Premium",
    category: "beaute",
    description: "Eau de parfum boisée et fraîche, sillage longue tenue. Flacon collector 100ml.",
    inStock: true
  },
  {
    id: "baskets-running-pro",
    name: "Baskets running Pro",
    price: 32e3,
    rating: 4.6,
    reviews: 67,
    image: sneakers,
    shop: "Sport Hub",
    category: "sport",
    description: "Baskets de running légères avec amorti réactif et mesh respirant.",
    inStock: true
  }
];
const formatFCFA = (n) => new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
export {
  categories as c,
  formatFCFA as f,
  products as p
};
