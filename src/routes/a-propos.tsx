import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "À propos — ShopLink" }] }),
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-4xl font-bold md:text-5xl">
            À propos de ShopLink
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            ShopLink est la marketplace locale de Douala qui connecte les
            acheteurs aux meilleurs vendeurs de la ville. Nous centralisons les
            commandes, validons avec les fournisseurs et nous occupons de la
            livraison — pour que vous puissiez tout acheter en une seule
            commande.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Stat n="50+" t="Fournisseurs partenaires" />
            <Stat n="2 500+" t="Produits disponibles" />
            <Stat n="24h" t="Livraison à Douala" />
          </div>
          <div className="mt-12 rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-elegant">
            <h2 className="text-2xl font-bold">Notre mission</h2>
            <p className="mt-3 text-white/80">
              Construire un pont moderne et premium entre les fournisseurs
              locaux et les clients, avec une expérience d'achat fluide et une
              livraison fiable.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Stat({ n, t }: { n: string; t: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
      <p className="text-3xl font-bold text-gradient-hero">{n}</p>
      <p className="mt-1 text-sm text-muted-foreground">{t}</p>
    </div>
  );
}
