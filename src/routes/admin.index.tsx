import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Users, Package, TrendingUp } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
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
      status: "En livraison",
    },
    {
      ref: "SLK-2026-000122",
      client: "Sophie Leroy",
      total: 25000,
      status: "Livrée",
    },
  ];
  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Tableau de bord</h2>
          <p className="text-sm text-muted-foreground">
            Vue d'ensemble de la plateforme
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat
            icon={ShoppingBag}
            label="Commandes du jour"
            value="45"
            sub="+12% vs hier"
          />
          <Stat
            icon={TrendingUp}
            label="Chiffre d'affaires"
            value={formatFCFA(2450000)}
            sub="ce mois"
          />
          <Stat
            icon={Users}
            label="Fournisseurs actifs"
            value="18"
            sub="+2 cette semaine"
          />
          <Stat
            icon={Package}
            label="Clients"
            value="342"
            sub="+24 cette semaine"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Commandes (7 derniers jours)</h3>
            </div>
            <Chart />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Commandes récentes</h3>
              <Link
                to="/admin/commandes"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Voir tout →
              </Link>
            </div>
            <ul className="space-y-2 text-sm">
              {orders.map((o) => (
                <li
                  key={o.ref}
                  className="flex items-center justify-between rounded-xl border border-border p-3"
                >
                  <div>
                    <p className="font-semibold">#{o.ref}</p>
                    <p className="text-xs text-muted-foreground">{o.client}</p>
                  </div>
                  <p className="text-xs font-semibold text-primary">
                    {formatFCFA(o.total)}
                  </p>
                </li>
              ))}
            </ul>
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

function Chart() {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const values = [12, 18, 15, 22, 28, 35, 30];
  const max = Math.max(...values);
  return (
    <div className="flex h-48 items-end gap-3">
      {values.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full rounded-t-lg bg-gradient-hero"
            style={{ height: `${(v / max) * 100}%` }}
          />
          <span className="text-xs text-muted-foreground">{days[i]}</span>
        </div>
      ))}
    </div>
  );
}
