import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { D as DashboardShell, U as Users, P as Package } from "./dashboard-shell-CSKuqYnT.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { S as ShoppingBag } from "./shopping-bag-8FlRHQHp.js";
import { T as TrendingUp } from "./trending-up-DIzswKCo.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
function AdminDashboard() {
  const orders = [{
    ref: "SLK-2026-000125",
    client: "Jean Dupont",
    total: 45e4,
    status: "En attente"
  }, {
    ref: "SLK-2026-000124",
    client: "Marie Claire",
    total: 85e3,
    status: "Confirmée"
  }, {
    ref: "SLK-2026-000123",
    client: "Paul Martin",
    total: 7e4,
    status: "En livraison"
  }, {
    ref: "SLK-2026-000122",
    client: "Sophie Leroy",
    total: 25e3,
    status: "Livrée"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Tableau de bord" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Vue d'ensemble de la plateforme" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: ShoppingBag, label: "Commandes du jour", value: "45", sub: "+12% vs hier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: TrendingUp, label: "Chiffre d'affaires", value: formatFCFA(245e4), sub: "ce mois" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Users, label: "Fournisseurs actifs", value: "18", sub: "+2 cette semaine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Package, label: "Clients", value: "342", sub: "+24 cette semaine" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Commandes (7 derniers jours)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Commandes récentes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/commandes", className: "text-xs font-semibold text-primary hover:underline", children: "Voir tout →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-xl border border-border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
              "#",
              o.ref
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: o.client })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary", children: formatFCFA(o.total) })
        ] }, o.ref)) })
      ] })
    ] })
  ] }) });
}
function Stat({
  icon: Icon,
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold", children: value })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-success", children: sub })
  ] });
}
function Chart() {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const values = [12, 18, 15, 22, 28, 35, 30];
  const max = Math.max(...values);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-48 items-end gap-3", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-lg bg-gradient-hero", style: {
      height: `${v / max * 100}%`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: days[i] })
  ] }, i)) });
}
export {
  AdminDashboard as component
};
