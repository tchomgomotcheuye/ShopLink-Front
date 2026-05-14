import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlus, ChevronLeft } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/partenaire/produits/nouveau")({
  component: NewProduct,
});

function NewProduct() {
  return (
    <DashboardShell role="partner">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link
          to="/partenaire/produits"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" /> Retour
        </Link>
        <h2 className="text-2xl font-bold">Ajouter un nouveau produit</h2>

        <form
          className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label="Nom du produit" placeholder="Ex: iPhone 13 Pro Max" />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold">
                Catégorie
              </span>
              <select className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
                <option>Sélectionner une catégorie</option>
                <option>Électronique</option>
                <option>Mode</option>
                <option>Beauté</option>
                <option>Maison</option>
              </select>
            </label>
            <Field label="Prix (FCFA)" type="number" placeholder="450000" />
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold">
              Description
            </span>
            <textarea
              rows={4}
              placeholder="Décrivez votre produit…"
              className="w-full rounded-xl border border-border bg-background p-3 text-sm"
            />
          </label>

          <div>
            <span className="mb-1.5 block text-xs font-semibold">
              Images du produit
            </span>
            <div className="flex h-32 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-border bg-gradient-soft text-sm text-muted-foreground hover:border-primary">
              <div className="flex flex-col items-center gap-1">
                <ImagePlus className="h-6 w-6" />
                <span>+ Ajouter des images</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <p className="text-sm font-semibold">Produit actif</p>
              <p className="text-xs text-muted-foreground">
                Visible dans la boutique
              </p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-10" />
          </div>

          <button className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant">
            Publier le produit
          </button>
        </form>
      </div>
    </DashboardShell>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold">{label}</span>
      <input
        {...rest}
        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
