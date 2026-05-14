import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products, categories } from "@/lib/mock-data";

export const Route = createFileRoute("/produits/")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Produits — ShopLink" },
      {
        name: "description",
        content:
          "Parcourez le catalogue ShopLink: électronique, mode, beauté, maison et plus.",
      },
    ],
  }),
});

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const list = products.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      (q === "" || p.name.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-soft py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold md:text-4xl">
              Tous les produits
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {list.length} produit{list.length > 1 ? "s" : ""} disponible
              {list.length > 1 ? "s" : ""}
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-card px-4 shadow-card">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Rechercher un produit…"
                  className="h-11 w-full bg-transparent text-sm outline-none"
                />
              </div>
              <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium shadow-card">
                <SlidersHorizontal className="h-4 w-4" /> Filtrer
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Chip active={cat === "all"} onClick={() => setCat("all")}>
                Tout
              </Chip>
              {categories.map((c) => (
                <Chip
                  key={c.id}
                  active={cat === c.id}
                  onClick={() => setCat(c.id)}
                >
                  {c.name}
                </Chip>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-sm text-muted-foreground">
                Aucun produit ne correspond à votre recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
        active
          ? "border-primary bg-gradient-hero text-primary-foreground shadow-card"
          : "border-border bg-card text-foreground/80 hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}
