import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./mock-data-DGFqbj-y.js";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-3xl px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold md:text-5xl", children: "À propos de ShopLink" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "ShopLink est la marketplace locale de Douala qui connecte les acheteurs aux meilleurs vendeurs de la ville. Nous centralisons les commandes, validons avec les fournisseurs et nous occupons de la livraison — pour que vous puissiez tout acheter en une seule commande." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "50+", t: "Fournisseurs partenaires" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "2 500+", t: "Produits disponibles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "24h", t: "Livraison à Douala" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Notre mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/80", children: "Construire un pont moderne et premium entre les fournisseurs locaux et les clients, avec une expérience d'achat fluide et une livraison fiable." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Stat({
  n,
  t
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gradient-hero", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t })
  ] });
}
export {
  AboutPage as component
};
