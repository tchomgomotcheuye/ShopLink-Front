import { r as reactExports, V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { R as Route, u as useNavigate, L as Link } from "./router-D-PMddka.js";
import { u as useCart, S as SiteHeader, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { p as products, f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { C as ChevronLeft } from "./chevron-left-Brb6A4yt.js";
import { S as Star } from "./star-1yo9RYTJ.js";
import { c as createLucideIcon } from "./shopping-bag-8FlRHQHp.js";
import { M as Minus, P as Plus } from "./plus-BVBF_Un5.js";
import { T as Truck, S as ShieldCheck } from "./truck-jcOOdKLf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function ProductDetail() {
  const {
    id
  } = Route.useParams();
  const product = products.find((p) => p.id === id);
  const {
    add
  } = useCart();
  const nav = useNavigate();
  const [qty, setQty] = reactExports.useState(1);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto flex-1 px-4 py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "Produit introuvable." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "mt-4 inline-block text-primary hover:underline", children: "← Retour aux produits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/produits", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
        " Retour"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto grid gap-10 px-4 pb-16 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl bg-gradient-soft p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, width: 800, height: 800, className: "mx-auto max-h-[500px] w-auto object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: product.shop }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-3xl font-bold md:text-4xl", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: product.rating }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "(",
                  product.reviews,
                  " avis)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success", children: "En stock" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-primary", children: formatFCFA(product.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-sm font-semibold", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: product.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-1 gap-2 text-sm sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "✓" }),
              " 256 Go de stockage"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "✓" }),
              " Batterie longue durée"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "✓" }),
              " Garantie 12 mois"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "✓" }),
              " Livraison 24h à Douala"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Quantité" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-xl border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "flex h-9 w-9 items-center justify-center hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm font-semibold", children: qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "flex h-9 w-9 items-center justify-center hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => add(product.id, qty), className: "inline-flex h-12 items-center justify-center rounded-xl border border-primary bg-primary/5 text-sm font-semibold text-primary hover:bg-primary/10", children: "Ajouter au panier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                add(product.id, qty);
                nav({
                  to: "/panier"
                });
              }, className: "inline-flex h-12 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Commander maintenant" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 text-xs", children: [{
            icon: Truck,
            t: "Livraison rapide"
          }, {
            icon: ShieldCheck,
            t: "Vendeur vérifié"
          }, {
            icon: RotateCcw,
            t: "Retour facile"
          }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-xl border border-border bg-card p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: b.t })
          ] }, b.t)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProductDetail as component
};
