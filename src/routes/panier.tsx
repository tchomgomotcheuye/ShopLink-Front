import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useCart } from "@/lib/cart-store";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/panier")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Mon panier — ShopLink" }] }),
});

const DELIVERY = 2000;

function CartPage() {
  const { items, subtotal, update, remove } = useCart();
  const total = subtotal + (items.length > 0 ? DELIVERY : 0);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Mon panier ({items.length})
          </h1>

          {items.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-16 text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-lg font-semibold">
                Votre panier est vide
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Découvrez nos produits et ajoutez-en à votre panier.
              </p>
              <Link
                to="/produits"
                className="mt-6 inline-flex h-11 items-center rounded-xl bg-gradient-hero px-6 text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                Voir les produits
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
              <div className="space-y-3">
                {items.map((it) => (
                  <div
                    key={it.productId}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card"
                  >
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-soft">
                      <img
                        src={it.product.image}
                        alt={it.product.name}
                        className="h-full w-full object-contain p-2"
                        loading="lazy"
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to="/produits/$id"
                            params={{ id: it.product.id }}
                            className="text-sm font-semibold hover:text-primary"
                          >
                            {it.product.name}
                          </Link>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {it.product.shop}
                          </p>
                        </div>
                        <button
                          onClick={() => remove(it.productId)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center gap-1 rounded-xl border border-border">
                          <button
                            onClick={() => update(it.productId, it.qty - 1)}
                            className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold">
                            {it.qty}
                          </span>
                          <button
                            onClick={() => update(it.productId, it.qty + 1)}
                            className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-base font-bold text-primary">
                          {formatFCFA(it.product.price * it.qty)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="h-fit space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
                <h2 className="text-lg font-bold">Résumé</h2>
                <div className="space-y-2 text-sm">
                  <Row label="Sous-total" value={formatFCFA(subtotal)} />
                  <Row label="Livraison" value={formatFCFA(DELIVERY)} />
                </div>
                <div className="rounded-xl bg-success/10 p-3 text-xs text-success">
                  🚚 Livraison rapide — Recevez vos produits en 24h à Douala
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-primary">
                      {formatFCFA(total)}
                    </span>
                  </div>
                </div>
                <Link
                  to="/commande"
                  className="flex h-12 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant"
                >
                  Passer commande
                </Link>
              </aside>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
