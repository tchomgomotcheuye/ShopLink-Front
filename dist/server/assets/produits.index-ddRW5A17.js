import { r as reactExports, V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { S as SiteHeader, b as Search, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { P as ProductCard } from "./product-card-BxZWgBEf.js";
import { p as products, c as categories } from "./mock-data-DGFqbj-y.js";
import { c as createLucideIcon } from "./shopping-bag-8FlRHQHp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
import "./star-1yo9RYTJ.js";
const __iconNode = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function ProductsPage() {
  const [q, setQ] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState("all");
  const list = products.filter((p) => (cat === "all" || p.category === cat) && (q === "" || p.name.toLowerCase().includes(q.toLowerCase())));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold md:text-4xl", children: "Tous les produits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          list.length,
          " produit",
          list.length > 1 ? "s" : "",
          " disponible",
          list.length > 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 md:flex-row md:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 rounded-xl border border-border bg-card px-4 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher un produit…", className: "h-11 w-full bg-transparent text-sm outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
            " Filtrer"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: cat === "all", onClick: () => setCat("all"), children: "Tout" }),
          categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: cat === c.id, onClick: () => setCat(c.id), children: c.name }, c.id))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
        list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border bg-card p-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Aucun produit ne correspond à votre recherche." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground", children: "← Retour à l'accueil" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Chip({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: `rounded-full border px-4 py-1.5 text-xs font-semibold transition ${active ? "border-primary bg-gradient-hero text-primary-foreground shadow-card" : "border-border bg-card text-foreground/80 hover:border-primary/40"}`, children });
}
export {
  ProductsPage as component
};
