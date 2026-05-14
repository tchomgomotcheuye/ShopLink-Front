import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { D as DashboardShell, P as Package } from "./dashboard-shell-CSKuqYnT.js";
import { f as formatFCFA, p as products } from "./mock-data-DGFqbj-y.js";
import { c as createLucideIcon, S as ShoppingBag } from "./shopping-bag-8FlRHQHp.js";
import { T as TrendingUp } from "./trending-up-DIzswKCo.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode);
function PartnerDashboard() {
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
    status: "Livrée"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "partner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Bonjour, Tech Store 👋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Voici un aperçu de votre activité." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: ShoppingBag, label: "Commandes", value: "24", sub: "ce mois" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: CircleCheckBig, label: "En attente", value: "8", sub: "à traiter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Package, label: "Produits actifs", value: "12", sub: "en ligne" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: TrendingUp, label: "Ventes (mois)", value: formatFCFA(125e4), sub: "+18% vs M-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Commandes récentes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partenaire/commandes", className: "text-sm font-semibold text-primary hover:underline", children: "Voir tout →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border p-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
              "#",
              o.ref
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: o.client })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-primary", children: formatFCFA(o.total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status })
        ] }, o.ref)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold", children: "Produits en avant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: products.slice(0, 3).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "h-12 w-12 rounded-lg bg-muted object-contain p-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-1 font-semibold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary", children: formatFCFA(p.price) })
          ] })
        ] }, p.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partenaire/produits/nouveau", className: "mt-4 flex h-10 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground", children: "+ Ajouter un produit" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold", children: value })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: sub })
  ] });
}
function StatusBadge({
  status
}) {
  const map = {
    "En attente": "bg-warning/15 text-warning",
    Confirmée: "bg-primary/15 text-primary",
    Livrée: "bg-success/15 text-success"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${map[status]}`, children: status });
}
export {
  PartnerDashboard as component
};
