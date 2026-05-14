import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, User } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { Logo } from "./logo";

export function SiteHeader() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-foreground/80 hover:text-foreground"
            activeProps={{ className: "text-primary" }}
          >
            Accueil
          </Link>
          <Link
            to="/produits"
            className="text-foreground/80 hover:text-foreground"
            activeProps={{ className: "text-primary" }}
          >
            Catégories
          </Link>
          <Link
            to="/comment-ca-marche"
            className="text-foreground/80 hover:text-foreground"
            activeProps={{ className: "text-primary" }}
          >
            Comment ça marche
          </Link>
          <Link
            to="/a-propos"
            className="text-foreground/80 hover:text-foreground"
            activeProps={{ className: "text-primary" }}
          >
            À propos
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/produits"
            aria-label="Rechercher"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-muted md:inline-flex"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            to="/partenaire/connexion"
            aria-label="Compte"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-muted md:inline-flex"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            to="/panier"
            aria-label="Panier"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-muted"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
