import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { D as DashboardShell, U as Users, P as Package } from "./dashboard-shell-CSKuqYnT.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { T as TrendingUp } from "./trending-up-DIzswKCo.js";
import { S as ShoppingBag } from "./shopping-bag-8FlRHQHp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./logo-DkWl1J3M.js";
function AdminStats() {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];
  const revenue = [820, 1100, 1450, 1700, 2100, 2450];
  const max = Math.max(...revenue);
  const top = [{
    name: "iPhone 13 Pro Max",
    sales: 38,
    total: 171e5
  }, {
    name: "Sneakers Premium",
    sales: 64,
    total: 448e4
  }, {
    name: "Sac à main cuir",
    sales: 42,
    total: 189e4
  }, {
    name: "Casque sans fil",
    sales: 51,
    total: 2295e3
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Statistiques" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Performance globale de la plateforme" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: TrendingUp, label: "CA total", value: formatFCFA(962e4), sub: "6 derniers mois" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: ShoppingBag, label: "Commandes", value: "412", sub: "+24% YoY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Users, label: "Nouveaux clients", value: "186", sub: "ce trimestre" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Package, label: "Produits vendus", value: "1 248", sub: "toutes catégories" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 font-bold", children: "Chiffre d'affaires (en milliers FCFA)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-64 items-end gap-4", children: revenue.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-lg bg-gradient-hero transition-all", style: {
          height: `${v / max * 100}%`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: months[i] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold", children: "Top produits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: top.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-xl border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-sm font-bold text-primary-foreground", children: [
          "#",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            p.sales,
            " ventes"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-primary", children: formatFCFA(p.total) })
      ] }, p.name)) })
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
export {
  AdminStats as component
};
