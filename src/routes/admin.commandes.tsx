import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/commandes")({
  component: AdminOrders,
});

const ALL = [
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
  {
    ref: "SLK-2026-000121",
    client: "Alain Blanc",
    total: 18000,
    status: "Annulée",
  },
  {
    ref: "SLK-2026-000120",
    client: "Lucie Mbarga",
    total: 32000,
    status: "Livrée",
  },
];

const TABS = [
  "Toutes",
  "En attente",
  "Confirmées",
  "En livraison",
  "Livrées",
] as const;

function AdminOrders() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Toutes");
  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Toutes les commandes</h2>

        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                tab === t
                  ? "bg-gradient-hero text-primary-foreground"
                  : "border border-border bg-card hover:border-primary/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Référence</th>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ALL.map((o) => (
                <tr key={o.ref} className="border-t border-border">
                  <td className="px-5 py-3 font-semibold">#{o.ref}</td>
                  <td className="px-5 py-3">{o.client}</td>
                  <td className="px-5 py-3">
                    <Status s={o.status} />
                  </td>
                  <td className="px-5 py-3 font-semibold text-primary">
                    {formatFCFA(o.total)}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-xs font-semibold text-primary hover:underline">
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}

function Status({ s }: { s: string }) {
  const map: Record<string, string> = {
    "En attente": "bg-warning/15 text-warning",
    Confirmée: "bg-primary/15 text-primary",
    "En livraison": "bg-accent/15 text-accent",
    Livrée: "bg-success/15 text-success",
    Annulée: "bg-destructive/15 text-destructive",
  };
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${map[s]}`}>
      {s}
    </span>
  );
}
