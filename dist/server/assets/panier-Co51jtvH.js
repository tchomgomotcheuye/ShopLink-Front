import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { u as useCart, S as SiteHeader, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { c as createLucideIcon, S as ShoppingBag } from "./shopping-bag-8FlRHQHp.js";
import { M as Minus, P as Plus } from "./plus-BVBF_Un5.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const DELIVERY = 2e3;
function CartPage() {
  const {
    items,
    subtotal,
    update,
    remove
  } = useCart();
  const total = subtotal + (items.length > 0 ? DELIVERY : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold md:text-4xl", children: [
        "Mon panier (",
        items.length,
        ")"
      ] }),
      items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-dashed border-border bg-card p-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "mx-auto h-12 w-12 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg font-semibold", children: "Votre panier est vide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Découvrez nos produits et ajoutez-en à votre panier." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "mt-6 inline-flex h-11 items-center rounded-xl bg-gradient-hero px-6 text-sm font-semibold text-primary-foreground shadow-elegant", children: "Voir les produits" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-[1fr_360px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.product.image, alt: it.product.name, className: "h-full w-full object-contain p-2", loading: "lazy", width: 96, height: 96 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits/$id", params: {
                  id: it.product.id
                }, className: "text-sm font-semibold hover:text-primary", children: it.product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: it.product.shop })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(it.productId), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded-xl border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => update(it.productId, it.qty - 1), className: "flex h-8 w-8 items-center justify-center hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 text-center text-sm font-semibold", children: it.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => update(it.productId, it.qty + 1), className: "flex h-8 w-8 items-center justify-center hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-primary", children: formatFCFA(it.product.price * it.qty) })
            ] })
          ] })
        ] }, it.productId)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "Résumé" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Sous-total", value: formatFCFA(subtotal) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Livraison", value: formatFCFA(DELIVERY) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-success/10 p-3 text-xs text-success", children: "🚚 Livraison rapide — Recevez vos produits en 24h à Douala" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-primary", children: formatFCFA(total) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/commande", className: "flex h-12 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Passer commande" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: value })
  ] });
}
export {
  CartPage as component
};
