import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/confirmation")({
  component: Confirmation,
  head: () => ({ meta: [{ title: "Commande confirmée — ShopLink" }] }),
});

function Confirmation() {
  const [order, setOrder] = useState<{
    ref: string;
    total: number;
    pay: string;
  } | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = sessionStorage.getItem("shoplink-last-order");
    if (raw) setOrder(JSON.parse(raw));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-elegant">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 className="h-12 w-12 text-success" />
          </div>
          <h1 className="mt-6 text-2xl font-bold md:text-3xl">
            Commande reçue !
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Merci pour votre confiance. Votre commande a bien été reçue.
            <br /> Vous recevrez une confirmation sur WhatsApp et par email.
          </p>

          <div className="mt-6 space-y-3 rounded-2xl bg-gradient-soft p-5 text-left text-sm">
            <Row
              label="N° de commande"
              value={`#${order?.ref ?? "SLK-2026-000123"}`}
            />
            <Row
              label="Date"
              value={new Date().toLocaleString("fr-FR", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            />
            <Row label="Total" value={formatFCFA(order?.total ?? 0) || "—"} />
            <Row label="Livraison" value="En 24h à Douala" />
            <Row
              label="Paiement"
              value={order?.pay === "momo" ? "Mobile Money" : "À la livraison"}
            />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/"
              className="flex h-12 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant"
            >
              Suivre ma commande
            </Link>
            <Link
              to="/produits"
              className="flex h-12 items-center justify-center rounded-xl border border-border text-sm font-semibold"
            >
              Retour à l'accueil
            </Link>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-success/10 p-3 text-xs text-success">
            ✓ Vous serez notifié sur WhatsApp · +237 6 99 99 99 99
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
