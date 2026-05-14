import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/clients")({
  component: AdminClients,
  head: () => ({ meta: [{ title: "Clients — Admin ShopLink" }] }),
});

const CLIENTS = [
  {
    name: "Jean Dupont",
    phone: "+237 6 99 12 34 56",
    orders: 12,
    spent: 1240000,
    since: "Jan 2026",
  },
  {
    name: "Marie Claire",
    phone: "+237 6 77 88 99 00",
    orders: 8,
    spent: 480000,
    since: "Fév 2026",
  },
  {
    name: "Paul Martin",
    phone: "+237 6 55 44 33 22",
    orders: 5,
    spent: 320000,
    since: "Mar 2026",
  },
  {
    name: "Sophie Leroy",
    phone: "+237 6 11 22 33 44",
    orders: 3,
    spent: 95000,
    since: "Avr 2026",
  },
  {
    name: "Alain Blanc",
    phone: "+237 6 99 88 77 66",
    orders: 14,
    spent: 1820000,
    since: "Déc 2025",
  },
];

function AdminClients() {
  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Clients</h2>
          <p className="text-sm text-muted-foreground">
            {CLIENTS.length} clients enregistrés
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Téléphone</th>
                <th className="px-5 py-3">Commandes</th>
                <th className="px-5 py-3">Dépenses</th>
                <th className="px-5 py-3">Membre depuis</th>
              </tr>
            </thead>
            <tbody>
              {CLIENTS.map((c) => (
                <tr key={c.name} className="border-t border-border">
                  <td className="flex items-center gap-3 px-5 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-primary-foreground">
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="font-semibold">{c.name}</span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{c.phone}</td>
                  <td className="px-5 py-3">{c.orders}</td>
                  <td className="px-5 py-3 font-semibold text-primary">
                    {formatFCFA(c.spent)}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{c.since}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
