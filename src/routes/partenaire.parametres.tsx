import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard-shell";

export const Route = createFileRoute("/partenaire/parametres")({
  component: PartnerSettings,
  head: () => ({ meta: [{ title: "Paramètres — ShopLink" }] }),
});

function PartnerSettings() {
  return (
    <DashboardShell role="partner">
      <div className="mx-auto max-w-3xl space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Paramètres</h2>
          <p className="text-sm text-muted-foreground">
            Gérez vos informations boutique et préférences.
          </p>
        </div>

        <section className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-bold">Profil de la boutique</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Nom de la boutique"
              defaultValue="Tech Store Douala"
            />
            <Field label="Téléphone" defaultValue="+237 6 99 99 99 99" />
            <Field label="Email" defaultValue="contact@techstore.cm" />
            <Field label="Adresse" defaultValue="Bonapriso, Douala" />
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-bold">Paiement</h3>
          <Field label="Numéro Mobile Money" defaultValue="6 99 99 99 99" />
          <Field label="Nom du compte" defaultValue="Tech Store Douala" />
        </section>

        <section className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-bold">Notifications</h3>
          {[
            {
              t: "Nouvelles commandes",
              d: "Recevoir une notification WhatsApp",
            },
            { t: "Promotions", d: "Recevoir les actualités ShopLink" },
          ].map((n) => (
            <div
              key={n.t}
              className="flex items-center justify-between rounded-xl border border-border p-4"
            >
              <div>
                <p className="text-sm font-semibold">{n.t}</p>
                <p className="text-xs text-muted-foreground">{n.d}</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-10" />
            </div>
          ))}
        </section>

        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant">
          Enregistrer les modifications
        </button>
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
