import iphone from "@/assets/product-iphone.jpg";
import watch from "@/assets/product-watch.jpg";
import bag from "@/assets/product-bag.jpg";
import parfum from "@/assets/product-parfum.jpg";
import headphones from "@/assets/product-headphones.jpg";
import sneakers from "@/assets/product-sneakers.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  shop: string;
  category: string;
  description: string;
  inStock: boolean;
};

export const categories = [
  { id: "electronique", name: "Électronique", icon: "Smartphone" },
  { id: "mode", name: "Mode", icon: "Shirt" },
  { id: "beaute", name: "Beauté", icon: "Sparkles" },
  { id: "maison", name: "Maison", icon: "Home" },
  { id: "sport", name: "Sport", icon: "Dumbbell" },
  { id: "accessoires", name: "Accessoires", icon: "Watch" },
];

export const products: Product[] = [
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max 256 Go",
    price: 450000,
    rating: 4.8,
    reviews: 124,
    image: iphone,
    shop: "Tech Store Douala",
    category: "electronique",
    description:
      "iPhone 13 Pro Max avec écran Super Retina XDR de 6,7 pouces, puce A15 Bionic, système photo Pro 12 MP et 5G. 256 Go de stockage, batterie longue durée, garantie 12 mois.",
    inStock: true,
  },
  {
    id: "montre-series-8",
    name: "Montre connectée Series 8",
    price: 85000,
    rating: 4.6,
    reviews: 38,
    image: watch,
    shop: "Gadget World",
    category: "electronique",
    description:
      "Montre intelligente avec suivi de fréquence cardiaque, notifications, GPS et étanchéité. Bracelet sport noir inclus.",
    inStock: true,
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    price: 70000,
    rating: 4.7,
    reviews: 56,
    image: headphones,
    shop: "Tech Store Douala",
    category: "electronique",
    description:
      "Écouteurs sans fil avec réduction active du bruit, audio spatial et boîtier MagSafe.",
    inStock: true,
  },
  {
    id: "sac-cuir-elegant",
    name: "Sac à main élégant en cuir",
    price: 25000,
    rating: 4.7,
    reviews: 22,
    image: bag,
    shop: "Fashion Chic",
    category: "mode",
    description:
      "Sac à main en cuir véritable, finitions dorées, idéal pour le quotidien comme les sorties.",
    inStock: true,
  },
  {
    id: "parfum-bleu-100",
    name: "Parfum Bleu 100ml",
    price: 18000,
    rating: 4.5,
    reviews: 41,
    image: parfum,
    shop: "Beauté Premium",
    category: "beaute",
    description:
      "Eau de parfum boisée et fraîche, sillage longue tenue. Flacon collector 100ml.",
    inStock: true,
  },
  {
    id: "baskets-running-pro",
    name: "Baskets running Pro",
    price: 32000,
    rating: 4.6,
    reviews: 67,
    image: sneakers,
    shop: "Sport Hub",
    category: "sport",
    description:
      "Baskets de running légères avec amorti réactif et mesh respirant.",
    inStock: true,
  },
];

export const formatFCFA = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
