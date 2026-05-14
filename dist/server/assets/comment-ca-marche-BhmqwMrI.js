import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { S as SiteHeader, b as Search, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { C as ClipboardList, P as PackageCheck } from "./package-check-o9pOSm7g.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./mock-data-DGFqbj-y.js";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
function HowPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-premium py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl px-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold md:text-5xl", children: "Comment ça marche ?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/70", children: "Trois étapes simples pour acheter chez plusieurs vendeurs et recevoir tout en une seule livraison." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto grid gap-6 px-4 py-16 md:grid-cols-3", children: [{
        icon: Search,
        n: "1",
        t: "Choisissez",
        d: "Parcourez le catalogue, comparez et ajoutez vos produits préférés au panier."
      }, {
        icon: ClipboardList,
        n: "2",
        t: "Commandez",
        d: "Renseignez votre adresse à Douala et choisissez le mode de paiement."
      }, {
        icon: PackageCheck,
        n: "3",
        t: "Recevez",
        d: "Notre équipe collecte chez les vendeurs et vous livre rapidement."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-lg font-bold text-primary-foreground", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mt-4 h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-xl font-bold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
      ] }, s.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HowPage as component
};
