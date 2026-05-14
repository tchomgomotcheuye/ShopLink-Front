import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Clock,
  ClipboardList,
  PackageCheck,
  Search,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products, categories } from "@/lib/mock-data";
import heroImg from "@/assets/hero-shopper.png";
import scooterImg from "@/assets/delivery-scooter.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ShopLink — Tout acheter. Une seule livraison." },
      {
        name: "description",
        content:
          "Marketplace locale à Douala. Achetez chez plusieurs vendeurs et recevez en une seule livraison rapide.",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-soft">
          <div className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_20%_10%,oklch(0.85_0.08_290/.5),transparent_45%),radial-gradient(circle_at_80%_30%,oklch(0.85_0.08_265/.5),transparent_50%)]" />
          <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Nouveau
                à Douala
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                Tout acheter.
                <br />
                <span className="text-gradient-hero">Une seule livraison.</span>
              </h1>
              <p className="max-w-lg text-base text-muted-foreground md:text-lg">
                Commandez vos produits préférés chez plusieurs vendeurs et
                faites-vous livrer en toute simplicité à Douala.
              </p>

              <div className="flex max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="flex flex-1 items-center gap-2 px-4">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    placeholder="Rechercher un produit, une catégorie…"
                    className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <Link
                  to="/produits"
                  className="m-1.5 inline-flex items-center justify-center rounded-xl bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-elegant"
                >
                  Rechercher
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/produits"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-hero px-6 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95"
                >
                  Commander maintenant <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/237600000000"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-success/40 bg-success/10 px-6 text-sm font-semibold text-success transition hover:bg-success/20"
                >
                  Commander via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-6 -z-10 rounded-[3rem] bg-gradient-hero opacity-20 blur-3xl" />
              <img
                src={heroImg}
                alt="Cliente ShopLink à Douala"
                width={1024}
                height={1024}
                className="mx-auto max-h-[520px] w-auto"
              />
            </div>
          </div>

          <div className="container mx-auto grid gap-4 px-4 pb-16 md:grid-cols-4">
            {[
              {
                icon: Truck,
                t: "Paiement à la livraison",
                d: "Payez en espèces à la réception",
              },
              {
                icon: ShieldCheck,
                t: "Produits vérifiés",
                d: "Des vendeurs de confiance",
              },
              { icon: Clock, t: "Livraison rapide", d: "À Douala et environs" },
              {
                icon: Headphones,
                t: "Support 7/7",
                d: "Nous sommes là pour vous",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 shadow-card backdrop-blur"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{f.t}</p>
                  <p className="text-xs text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Catégories populaires
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Trouvez ce qu'il vous faut, par univers
              </p>
            </div>
            <Link
              to="/produits"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/produits"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-soft text-2xl font-bold text-primary transition group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                  {c.name[0]}
                </span>
                <span className="text-xs font-semibold">{c.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Produits populaires
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Sélection mise à jour chaque semaine
              </p>
            </div>
            <Link
              to="/produits"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gradient-premium py-20 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
              Comment ça marche ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/70">
              En trois étapes simples, vos achats arrivent chez vous.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Search,
                  n: "1",
                  t: "Choisissez",
                  d: "Parcourez et ajoutez vos produits au panier",
                },
                {
                  icon: ClipboardList,
                  n: "2",
                  t: "Commandez",
                  d: "Entrez vos informations et passez commande",
                },
                {
                  icon: PackageCheck,
                  n: "3",
                  t: "Recevez",
                  d: "Nous livrons rapidement à votre adresse",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-lg font-bold text-gold-foreground">
                      {s.n}
                    </span>
                    <s.icon className="h-5 w-5 text-white/60" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{s.t}</h3>
                  <p className="mt-1 text-sm text-white/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-14">
            <div className="absolute -right-10 bottom-0 hidden md:block">
              <img
                src={scooterImg}
                alt="Livraison"
                loading="lazy"
                width={1024}
                height={768}
                className="w-[420px]"
              />
            </div>
            <div className="relative max-w-xl">
              <h3 className="text-3xl font-bold md:text-4xl">
                Prêt à commander ?
              </h3>
              <p className="mt-3 text-white/80">
                Faites-vous livrer vos produits partout à Douala, rapidement et
                en toute sécurité.
              </p>
              <Link
                to="/produits"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-primary shadow-glow"
              >
                Commander maintenant <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
