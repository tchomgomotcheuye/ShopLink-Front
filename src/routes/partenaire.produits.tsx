import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard-shell";
import { products, formatFCFA } from "@/lib/mock-data";

export const Route = createFileRoute("/partenaire/produits")({
  component: PartnerProducts,
});

function PartnerProducts() {
  return (
    <DashboardShell role="partner">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Mes produits</h2>
            <p className="text-sm text-muted-foreground">
              {products.length} produits en ligne
            </p>
          </div>
          <Link
            to="/partenaire/produits/nouveau"
            className="inline-flex h-11 items-center rounded-xl bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-elegant"
          >
            + Ajouter un produit
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Produit</th>
                <th className="px-5 py-3">Catégorie</th>
                <th className="px-5 py-3">Prix</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-border">
                  <td className="flex items-center gap-3 px-5 py-3">
                    <img
                      src={p.image}
                      alt=""
                      className="h-10 w-10 rounded-lg bg-muted object-contain p-1"
                    />
                    <span className="font-semibold">{p.name}</span>
                  </td>
                  <td className="px-5 py-3 capitalize text-muted-foreground">
                    {p.category}
                  </td>
                  <td className="px-5 py-3 font-semibold text-primary">
                    {formatFCFA(p.price)}
                  </td>
                  <td className="px-5 py-3">En stock</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                      Actif
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-sm font-semibold text-primary hover:underline">
                      Modifier
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
