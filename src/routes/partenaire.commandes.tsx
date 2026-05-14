import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/partenaire/commandes")({
  component: PartnerOrders,
});

const ALL = [
  {
    ref: "SLK-2026-000125",
    client: "Jean Dupont",
    date: "Aujourd'hui 10:30",
    total: 450000,
    status: "En attente",
  },
  {
    ref: "SLK-2026-000124",
    client: "Marie Claire",
    date: "Aujourd'hui 09:15",
    total: 85000,
    status: "Confirmée",
  },
  {
    ref: "SLK-2026-000123",
    client: "Paul Martin",
    date: "Hier 16:45",
    total: 70000,
    status: "Livrée",
  },
  {
    ref: "SLK-2026-000122",
    client: "Sophie Leroy",
    date: "Hier 11:20",
    total: 25000,
    status: "Confirmée",
  },
  {
    ref: "SLK-2026-000121",
    client: "Alain Blanc",
    date: "23 Mai",
    total: 18000,
    status: "Livrée",
  },
];

const TABS = ["Toutes", "En attente", "Confirmées", "Livrées"] as const;

function PartnerOrders() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Toutes");
  const list = ALL.filter((o) =>
    tab === "Toutes"
      ? true
      : tab === "En attente"
        ? o.status === "En attente"
        : tab === "Confirmées"
          ? o.status === "Confirmée"
          : o.status === "Livrée",
  );
  return (
    <DashboardShell role="partner">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Commandes reçues</h2>

        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                tab === t
                  ? "bg-gradient-hero text-primary-foreground shadow-card"
                  : "border border-border bg-card hover:border-primary/40"
              }`}
            >
              {t}{" "}
              <span className="ml-1 opacity-60">
                (
                {t === "Toutes"
                  ? ALL.length
                  : ALL.filter((o) =>
                      t === "En attente"
                        ? o.status === "En attente"
                        : t === "Confirmées"
                          ? o.status === "Confirmée"
                          : o.status === "Livrée",
                    ).length}
                )
              </span>
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Référence</th>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((o) => (
                <tr key={o.ref} className="border-t border-border">
                  <td className="px-5 py-3 font-semibold">#{o.ref}</td>
                  <td className="px-5 py-3">{o.client}</td>
                  <td className="px-5 py-3 text-muted-foreground">{o.date}</td>
                  <td className="px-5 py-3 font-semibold text-primary">
                    {formatFCFA(o.total)}
                  </td>
                  <td className="px-5 py-3">
                    <Status s={o.status} />
                  </td>
                  <td className="px-5 py-3 text-right">
                    {o.status === "En attente" ? (
                      <div className="inline-flex gap-2">
                        <button className="rounded-lg bg-success/15 px-3 py-1.5 text-xs font-semibold text-success">
                          Confirmer
                        </button>
                        <button className="rounded-lg bg-destructive/15 px-3 py-1.5 text-xs font-semibold text-destructive">
                          Refuser
                        </button>
                      </div>
                    ) : (
                      <button className="text-xs font-semibold text-primary hover:underline">
                        Voir
                      </button>
                    )}
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
    Livrée: "bg-success/15 text-success",
  };
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${map[s]}`}>
      {s}
    </span>
  );
}
