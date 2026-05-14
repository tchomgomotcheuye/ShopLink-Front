import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { D as DashboardShell } from "./dashboard-shell-CSKuqYnT.js";
import { C as ChevronLeft } from "./chevron-left-Brb6A4yt.js";
import { c as createLucideIcon } from "./shopping-bag-8FlRHQHp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
const __iconNode = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
];
const ImagePlus = createLucideIcon("image-plus", __iconNode);
function NewProduct() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "partner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/partenaire/produits", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
      " Retour"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Ajouter un nouveau produit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom du produit", placeholder: "Ex: iPhone 13 Pro Max" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold", children: "Catégorie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sélectionner une catégorie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Électronique" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Beauté" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Maison" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Prix (FCFA)", type: "number", placeholder: "450000" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Décrivez votre produit…", className: "w-full rounded-xl border border-border bg-background p-3 text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold", children: "Images du produit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-border bg-gradient-soft text-sm text-muted-foreground hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+ Ajouter des images" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Produit actif" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Visible dans la boutique" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "h-5 w-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Publier le produit" })
    ] })
  ] }) });
}
function Field({
  label,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
  ] });
}
export {
  NewProduct as component
};
