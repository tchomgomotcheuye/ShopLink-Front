import { Link, useLocation } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  BarChart3,
} from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./logo";

type Item = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const partnerItems: Item[] = [
  { to: "/partenaire", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/partenaire/produits", label: "Produits", icon: Package },
  { to: "/partenaire/commandes", label: "Commandes", icon: ShoppingBag },
  { to: "/partenaire/parametres", label: "Paramètres", icon: Settings },
];

const adminItems: Item[] = [
  { to: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/admin/commandes", label: "Commandes", icon: ShoppingBag },
  { to: "/admin/fournisseurs", label: "Fournisseurs", icon: Users },
  { to: "/admin/clients", label: "Clients", icon: Users },
  { to: "/admin/statistiques", label: "Statistiques", icon: BarChart3 },
];

export function DashboardShell({
  role,
  children,
}: {
  role: "partner" | "admin";
  children: ReactNode;
}) {
  const items = role === "partner" ? partnerItems : adminItems;
  const loc = useLocation();
  const title = role === "partner" ? "Espace Fournisseur" : "Espace Admin";

  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground md:flex">
        <div className="border-b border-sidebar-border p-5">
          <Logo variant="light" />
          <p className="mt-1 text-xs text-sidebar-foreground/60">{title}</p>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {items.map((it) => {
            const active = loc.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                }`}
              >
                <it.icon className="h-4 w-4" />
                {it.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/60"
          >
            <LogOut className="h-4 w-4" /> Déconnexion
          </Link>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h1 className="text-base font-semibold">{title}</h1>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              Bonjour, {role === "partner" ? "Tech Store" : "Admin"} 👋
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground">
              {role === "partner" ? "TS" : "AD"}
            </span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
