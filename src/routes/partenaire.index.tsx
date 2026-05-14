import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, ShoppingBag, TrendingUp, CheckCircle } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA, products } from "@/lib/mock-data";

export const Route = createFileRoute("/partenaire/")({
  component: PartnerDashboard,
});

function PartnerDashboard() {
  const orders = [
    {
      ref: "SLK-2026-000125",
      client: "Jean Dupont",
      total: 450000,
      status: "En attente",
    },
    {
      ref: "SLK-2026-000124",
      client: "Marie Claire",
      total: 85000,
      status: "Confirmée",
    },
    {
      ref: "SLK-2026-000123",
      client: "Paul Martin",
      total: 70000,
      status: "Livrée",
    },
  ];

  return (
    <DashboardShell role="partner">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Bonjour, Tech Store 👋</h2>
          <p className="text-sm text-muted-foreground">
            Voici un aperçu de votre activité.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat icon={ShoppingBag} label="Commandes" value="24" sub="ce mois" />
          <Stat
            icon={CheckCircle}
            label="En attente"
            value="8"
            sub="à traiter"
          />
          <Stat
            icon={Package}
            label="Produits actifs"
            value="12"
            sub="en ligne"
          />
          <Stat
            icon={TrendingUp}
            label="Ventes (mois)"
            value={formatFCFA(1250000)}
            sub="+18% vs M-1"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Commandes récentes</h3>
              <Link
                to="/partenaire/commandes"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Voir tout →
              </Link>
            </div>
            <div className="space-y-2">
              {orders.map((o) => (
                <div
                  key={o.ref}
                  className="flex items-center justify-between rounded-xl border border-border p-3 text-sm"
                >
                  <div>
                    <p className="font-semibold">#{o.ref}</p>
                    <p className="text-xs text-muted-foreground">{o.client}</p>
                  </div>
                  <p className="font-semibold text-primary">
                    {formatFCFA(o.total)}
                  </p>
                  <StatusBadge status={o.status} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="mb-4 font-bold">Produits en avant</h3>
            <div className="space-y-3">
              {products.slice(0, 3).map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-12 w-12 rounded-lg bg-muted object-contain p-1"
                  />
                  <div className="flex-1 text-sm">
                    <p className="line-clamp-1 font-semibold">{p.name}</p>
                    <p className="text-xs text-primary">
                      {formatFCFA(p.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/partenaire/produits/nouveau"
              className="mt-4 flex h-10 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground"
            >
              + Ajouter un produit
            </Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "En attente": "bg-warning/15 text-warning",
    Confirmée: "bg-primary/15 text-primary",
    Livrée: "bg-success/15 text-success",
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${map[status]}`}
    >
      {status}
    </span>
  );
}
