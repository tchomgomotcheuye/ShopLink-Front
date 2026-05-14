import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
  Share2,
  Minus,
  Plus,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products, formatFCFA } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/produits/$id")({
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <p>Produit introuvable.</p>
      <Link to="/produits" className="text-primary">
        Retour
      </Link>
    </div>
  ),
});

function ProductDetail() {
  const { id } = Route.useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();
  const nav = useNavigate();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="container mx-auto flex-1 px-4 py-20 text-center">
          <p className="text-lg">Produit introuvable.</p>
          <Link
            to="/produits"
            className="mt-4 inline-block text-primary hover:underline"
          >
            ← Retour aux produits
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/produits"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" /> Retour
          </Link>
        </div>

        <section className="container mx-auto grid gap-10 px-4 pb-16 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-soft p-8">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="mx-auto max-h-[500px] w-auto object-contain"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {product.shop}
                </p>
                <h1 className="mt-1 text-3xl font-bold md:text-4xl">
                  {product.name}
                </h1>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} avis)
                  </span>
                  <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
                    En stock
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="text-3xl font-bold text-primary">
              {formatFCFA(product.price)}
            </p>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Description</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> 256 Go de stockage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> Batterie longue durée
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> Garantie 12 mois
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> Livraison 24h à Douala
              </li>
            </ul>

            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold">Quantité</span>
                <div className="flex items-center gap-2 rounded-xl border border-border">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-9 w-9 items-center justify-center hover:bg-muted"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-9 w-9 items-center justify-center hover:bg-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button
                  onClick={() => add(product.id, qty)}
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-primary bg-primary/5 text-sm font-semibold text-primary hover:bg-primary/10"
                >
                  Ajouter au panier
                </button>
                <button
                  onClick={() => {
                    add(product.id, qty);
                    nav({ to: "/panier" });
                  }}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant"
                >
                  Commander maintenant
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              {[
                { icon: Truck, t: "Livraison rapide" },
                { icon: ShieldCheck, t: "Vendeur vérifié" },
                { icon: RotateCcw, t: "Retour facile" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card p-3"
                >
                  <b.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
