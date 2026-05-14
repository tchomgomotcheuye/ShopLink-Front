import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Banknote, Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useCart } from "@/lib/cart-store";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/commande")({
  component: CheckoutPage,
  head: () => ({ meta: [{ title: "Commande — ShopLink" }] }),
});

const DELIVERY = 2000;

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const total = subtotal + (items.length > 0 ? DELIVERY : 0);
  const nav = useNavigate();
  const [pay, setPay] = useState<"cash" | "momo">("cash");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const ref = "SLK-2026-" + Math.floor(100000 + Math.random() * 900000);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "shoplink-last-order",
        JSON.stringify({ ref, total, pay }),
      );
    }
    clear();
    nav({ to: "/confirmation" });
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="container mx-auto flex-1 px-4 py-20 text-center">
          <p className="text-lg">Votre panier est vide.</p>
          <Link
            to="/produits"
            className="mt-4 inline-block text-primary hover:underline"
          >
            Retour aux produits
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
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Finaliser la commande
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Renseignez vos informations pour la livraison.
          </p>

          <form
            onSubmit={submit}
            className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]"
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h2 className="mb-4 text-lg font-bold">
                  Informations de livraison
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Nom complet"
                    placeholder="Jean Dupont"
                    required
                  />
                  <Field
                    label="Téléphone"
                    placeholder="6 99 99 99 99"
                    required
                  />
                  <Field
                    label="Quartier / Adresse"
                    placeholder="Bonamoussadi, Rue des Palmiers"
                    required
                    className="md:col-span-2"
                  />
                  <Field
                    label="Instructions (optionnel)"
                    placeholder="Note pour le livreur…"
                    className="md:col-span-2"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h2 className="mb-4 text-lg font-bold">Mode de paiement</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  <PayOption
                    icon={Banknote}
                    active={pay === "cash"}
                    onClick={() => setPay("cash")}
                    title="Paiement à la livraison"
                    desc="Payez en espèces à la réception"
                  />
                  <PayOption
                    icon={Smartphone}
                    active={pay === "momo"}
                    onClick={() => setPay("momo")}
                    title="Mobile Money"
                    desc="Orange Money, MTN MoMo"
                  />
                </div>
              </div>
            </div>

            <aside className="h-fit space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
              <h2 className="text-lg font-bold">Résumé de commande</h2>
              <ul className="space-y-2 text-sm">
                {items.map((it) => (
                  <li
                    key={it.productId}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="line-clamp-1 text-muted-foreground">
                      {it.product.name} × {it.qty}
                    </span>
                    <span className="font-semibold">
                      {formatFCFA(it.product.price * it.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 border-t border-border pt-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span>{formatFCFA(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span>{formatFCFA(DELIVERY)}</span>
                </div>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {formatFCFA(total)}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                Confirmer la commande
              </button>
            </aside>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold text-foreground/80">
        {label}
      </span>
      <input
        {...rest}
        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function PayOption({
  icon: Icon,
  active,
  onClick,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick: () => void;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
        active
          ? "border-primary bg-primary/5 shadow-card"
          : "border-border hover:border-primary/40"
      }`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${active ? "bg-gradient-hero text-primary-foreground" : "bg-muted text-foreground/70"}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </button>
  );
}
