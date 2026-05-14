import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { D as DashboardShell } from "./dashboard-shell-CSKuqYnT.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
const VENDORS = [{
  name: "Tech Store Douala",
  category: "Électronique",
  products: 24,
  sales: 42e5,
  status: "Actif"
}, {
  name: "Mode Akwa",
  category: "Mode",
  products: 58,
  sales: 185e4,
  status: "Actif"
}, {
  name: "Beauté Bonapriso",
  category: "Beauté",
  products: 32,
  sales: 98e4,
  status: "En attente"
}, {
  name: "Maison & Décor",
  category: "Maison",
  products: 41,
  sales: 21e5,
  status: "Actif"
}, {
  name: "Sport Plus CM",
  category: "Sport",
  products: 19,
  sales: 54e4,
  status: "Suspendu"
}];
function AdminVendors() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Fournisseurs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          VENDORS.length,
          " fournisseurs sur la plateforme"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "inline-flex h-11 items-center rounded-xl bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-elegant", children: "+ Inviter un fournisseur" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Boutique" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Catégorie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Produits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Ventes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: VENDORS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold", children: v.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: v.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: v.products }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold text-primary", children: formatFCFA(v.sales) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { s: v.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs font-semibold text-primary hover:underline", children: "Gérer" }) })
      ] }, v.name)) })
    ] }) })
  ] }) });
}
function Badge({
  s
}) {
  const map = {
    Actif: "bg-success/15 text-success",
    "En attente": "bg-warning/15 text-warning",
    Suspendu: "bg-destructive/15 text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${map[s]}`, children: s });
}
export {
  AdminVendors as component
};
