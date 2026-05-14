import { createFileRoute } from "@tanstack/react-router";
import { Search, ClipboardList, PackageCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/comment-ca-marche")({
  component: HowPage,
  head: () => ({ meta: [{ title: "Comment ça marche — ShopLink" }] }),
});

function HowPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-premium py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              Comment ça marche ?
            </h1>
            <p className="mt-4 text-white/70">
              Trois étapes simples pour acheter chez plusieurs vendeurs et
              recevoir tout en une seule livraison.
            </p>
          </div>
        </section>
        <section className="container mx-auto grid gap-6 px-4 py-16 md:grid-cols-3">
          {[
            {
              icon: Search,
              n: "1",
              t: "Choisissez",
              d: "Parcourez le catalogue, comparez et ajoutez vos produits préférés au panier.",
            },
            {
              icon: ClipboardList,
              n: "2",
              t: "Commandez",
              d: "Renseignez votre adresse à Douala et choisissez le mode de paiement.",
            },
            {
              icon: PackageCheck,
              n: "3",
              t: "Recevez",
              d: "Notre équipe collecte chez les vendeurs et vous livre rapidement.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-lg font-bold text-primary-foreground">
                {s.n}
              </span>
              <s.icon className="mt-4 h-6 w-6 text-primary" />
              <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
