import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Achetez · Connectez · Recevez. La marketplace locale de Douala.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Liens utiles</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/produits" className="hover:text-foreground">
                Catégories
              </Link>
            </li>
            <li>
              <Link to="/comment-ca-marche" className="hover:text-foreground">
                Comment ça marche
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-foreground">
                À propos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Aide</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>FAQ</li>
            <li>Livraison</li>
            <li>Paiement</li>
            <li>Retours</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+237 6 00 00 00 00</li>
            <li>contact@shoplink.cm</li>
            <li>Douala, Cameroun</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 ShopLink. Tous droits réservés.
      </div>
    </footer>
  );
}
