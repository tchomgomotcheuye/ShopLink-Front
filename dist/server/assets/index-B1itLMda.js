import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { S as SiteHeader, b as Search, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { P as ProductCard } from "./product-card-BxZWgBEf.js";
import { c as categories, p as products } from "./mock-data-DGFqbj-y.js";
import { c as createLucideIcon } from "./shopping-bag-8FlRHQHp.js";
import { T as Truck, S as ShieldCheck } from "./truck-jcOOdKLf.js";
import { C as ClipboardList, P as PackageCheck } from "./package-check-o9pOSm7g.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
import "./star-1yo9RYTJ.js";
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode);
const heroImg = "/assets/hero-shopper-Dltv-i4y.png";
const scooterImg = "/assets/delivery-scooter-DtpDjd_4.png";
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_20%_10%,oklch(0.85_0.08_290/.5),transparent_45%),radial-gradient(circle_at_80%_30%,oklch(0.85_0.08_265/.5),transparent_50%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
              " Nouveau à Douala"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold leading-tight md:text-6xl", children: [
              "Tout acheter.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-hero", children: "Une seule livraison." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-lg text-base text-muted-foreground md:text-lg", children: "Commandez vos produits préférés chez plusieurs vendeurs et faites-vous livrer en toute simplicité à Douala." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 px-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Rechercher un produit, une catégorie…", className: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "m-1.5 inline-flex items-center justify-center rounded-xl bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-elegant", children: "Rechercher" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/produits", className: "inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-hero px-6 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95", children: [
                "Commander maintenant ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/237600000000", className: "inline-flex h-12 items-center gap-2 rounded-xl border border-success/40 bg-success/10 px-6 text-sm font-semibold text-success transition hover:bg-success/20", children: "Commander via WhatsApp" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 -z-10 rounded-[3rem] bg-gradient-hero opacity-20 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Cliente ShopLink à Douala", width: 1024, height: 1024, className: "mx-auto max-h-[520px] w-auto" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto grid gap-4 px-4 pb-16 md:grid-cols-4", children: [{
          icon: Truck,
          t: "Paiement à la livraison",
          d: "Payez en espèces à la réception"
        }, {
          icon: ShieldCheck,
          t: "Produits vérifiés",
          d: "Des vendeurs de confiance"
        }, {
          icon: Clock,
          t: "Livraison rapide",
          d: "À Douala et environs"
        }, {
          icon: Headphones,
          t: "Support 7/7",
          d: "Nous sommes là pour vous"
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 shadow-card backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: f.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: f.d })
          ] })
        ] }, f.t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "Catégories populaires" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Trouvez ce qu'il vous faut, par univers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "text-sm font-semibold text-primary hover:underline", children: "Voir tout →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 md:grid-cols-6", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/produits", className: "group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-soft text-2xl font-bold text-primary transition group-hover:bg-gradient-hero group-hover:text-primary-foreground", children: c.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: c.name })
        ] }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "Produits populaires" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sélection mise à jour chaque semaine" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "text-sm font-semibold text-primary hover:underline", children: "Voir tout →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: products.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-premium py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-3xl font-bold text-white md:text-4xl", children: "Comment ça marche ?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-center text-sm text-white/70", children: "En trois étapes simples, vos achats arrivent chez vous." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [{
          icon: Search,
          n: "1",
          t: "Choisissez",
          d: "Parcourez et ajoutez vos produits au panier"
        }, {
          icon: ClipboardList,
          n: "2",
          t: "Commandez",
          d: "Entrez vos informations et passez commande"
        }, {
          icon: PackageCheck,
          n: "3",
          t: "Recevez",
          d: "Nous livrons rapidement à votre adresse"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-lg font-bold text-gold-foreground", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-white/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold text-white", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/70", children: s.d })
        ] }, s.n)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 bottom-0 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: scooterImg, alt: "Livraison", loading: "lazy", width: 1024, height: 768, className: "w-[420px]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold md:text-4xl", children: "Prêt à commander ?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/80", children: "Faites-vous livrer vos produits partout à Douala, rapidement et en toute sécurité." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/produits", className: "mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-primary shadow-glow", children: [
            "Commander maintenant ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Home as component
};
