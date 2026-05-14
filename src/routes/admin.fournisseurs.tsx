import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard-shell";
import { formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/fournisseurs")({
  component: AdminVendors,
  head: () => ({ meta: [{ title: "Fournisseurs — Admin ShopLink" }] }),
});

const VENDORS = [
  {
    name: "Tech Store Douala",
    category: "Électronique",
    products: 24,
    sales: 4200000,
    status: "Actif",
  },
  {
    name: "Mode Akwa",
    category: "Mode",
    products: 58,
    sales: 1850000,
    status: "Actif",
  },
  {
    name: "Beauté Bonapriso",
    category: "Beauté",
    products: 32,
    sales: 980000,
    status: "En attente",
  },
  {
    name: "Maison & Décor",
    category: "Maison",
    products: 41,
    sales: 2100000,
    status: "Actif",
  },
  {
    name: "Sport Plus CM",
    category: "Sport",
    products: 19,
    sales: 540000,
    status: "Suspendu",
  },
];

function AdminVendors() {
  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Fournisseurs</h2>
            <p className="text-sm text-muted-foreground">
              {VENDORS.length} fournisseurs sur la plateforme
            </p>
          </div>
          <button className="inline-flex h-11 items-center rounded-xl bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-elegant">
            + Inviter un fournisseur
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Boutique</th>
                <th className="px-5 py-3">Catégorie</th>
                <th className="px-5 py-3">Produits</th>
                <th className="px-5 py-3">Ventes</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {VENDORS.map((v) => (
                <tr key={v.name} className="border-t border-border">
                  <td className="px-5 py-3 font-semibold">{v.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {v.category}
                  </td>
                  <td className="px-5 py-3">{v.products}</td>
                  <td className="px-5 py-3 font-semibold text-primary">
                    {formatFCFA(v.sales)}
                  </td>
                  <td className="px-5 py-3">
                    <Badge s={v.status} />
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-xs font-semibold text-primary hover:underline">
                      Gérer
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

function Badge({ s }: { s: string }) {
  const map: Record<string, string> = {
    Actif: "bg-success/15 text-success",
    "En attente": "bg-warning/15 text-warning",
    Suspendu: "bg-destructive/15 text-destructive",
  };
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${map[s]}`}>
      {s}
    </span>
  );
}
