import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { D as DashboardShell } from "./dashboard-shell-CSKuqYnT.js";
import { p as products, f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
function PartnerProducts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "partner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Mes produits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          products.length,
          " produits en ligne"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partenaire/produits/nouveau", className: "inline-flex h-11 items-center rounded-xl bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-elegant", children: "+ Ajouter un produit" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Produit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Catégorie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Prix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "flex items-center gap-3 px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "", className: "h-10 w-10 rounded-lg bg-muted object-contain p-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: p.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 capitalize text-muted-foreground", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold text-primary", children: formatFCFA(p.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: "En stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success", children: "Actif" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm font-semibold text-primary hover:underline", children: "Modifier" }) })
      ] }, p.id)) })
    ] }) })
  ] }) });
}
export {
  PartnerProducts as component
};
