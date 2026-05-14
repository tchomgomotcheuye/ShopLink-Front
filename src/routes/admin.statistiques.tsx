import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, ShoppingBag, Users, Package } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/statistiques")({
  component: AdminStats,
  head: () => ({ meta: [{ title: "Statistiques — Admin ShopLink" }] }),
});

function AdminStats() {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];
  const revenue = [820, 1100, 1450, 1700, 2100, 2450];
  const max = Math.max(...revenue);
  const top = [
    { name: "iPhone 13 Pro Max", sales: 38, total: 17100000 },
    { name: "Sneakers Premium", sales: 64, total: 4480000 },
    { name: "Sac à main cuir", sales: 42, total: 1890000 },
    { name: "Casque sans fil", sales: 51, total: 2295000 },
  ];

  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Statistiques</h2>
          <p className="text-sm text-muted-foreground">
            Performance globale de la plateforme
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat
            icon={TrendingUp}
            label="CA total"
            value={formatFCFA(9620000)}
            sub="6 derniers mois"
          />
          <Stat
            icon={ShoppingBag}
            label="Commandes"
            value="412"
            sub="+24% YoY"
          />
          <Stat
            icon={Users}
            label="Nouveaux clients"
            value="186"
            sub="ce trimestre"
          />
          <Stat
            icon={Package}
            label="Produits vendus"
            value="1 248"
            sub="toutes catégories"
          />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-6 font-bold">
            Chiffre d'affaires (en milliers FCFA)
          </h3>
          <div className="flex h-64 items-end gap-4">
            {revenue.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-primary">{v}</span>
                <div
                  className="w-full rounded-t-lg bg-gradient-hero transition-all"
                  style={{ height: `${(v / max) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {months[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-bold">Top produits</h3>
          <div className="space-y-3">
            {top.map((p, i) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-xl border border-border p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-sm font-bold text-primary-foreground">
                  #{i + 1}
                </span>
                <div className="flex-1">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.sales} ventes
                  </p>
                </div>
                <p className="font-semibold text-primary">
                  {formatFCFA(p.total)}
                </p>
              </div>
            ))}
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
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-success">{sub}</p>
    </div>
  );
}
