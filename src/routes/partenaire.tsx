import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/partenaire")({
  component: () => <Outlet />,
  head: () => ({ meta: [{ title: "Espace Fournisseur — ShopLink" }] }),
});
