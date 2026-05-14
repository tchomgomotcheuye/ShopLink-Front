import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export const Route = createFileRoute("/partenaire/connexion")({
  component: PartnerLogin,
  head: () => ({ meta: [{ title: "Connexion fournisseur — ShopLink" }] }),
});

function PartnerLogin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-soft p-4">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-elegant">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Espace Fournisseur
        </p>
        <h1 className="mt-6 text-center text-2xl font-bold">Bienvenue !</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Connectez-vous à votre compte fournisseur.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/partenaire";
          }}
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold">
              Téléphone
            </span>
            <input
              type="tel"
              placeholder="6 99 99 99 99"
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold">
              Mot de passe
            </span>
            <input
              type="password"
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <div className="text-right">
            <a href="#" className="text-xs text-primary hover:underline">
              Mot de passe oublié ?
            </a>
          </div>
          <button className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant">
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Pas encore de compte ?{" "}
          <a href="#" className="font-semibold text-primary hover:underline">
            S'inscrire
          </a>
        </p>
        <p className="mt-3 text-center text-xs">
          <Link
            to="/admin"
            className="text-muted-foreground hover:text-foreground"
          >
            Accès admin →
          </Link>
        </p>
      </div>
    </div>
  );
}
