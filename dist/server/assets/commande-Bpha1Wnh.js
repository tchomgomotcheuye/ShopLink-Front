import { r as reactExports, V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { u as useNavigate, L as Link } from "./router-D-PMddka.js";
import { u as useCart, S as SiteHeader, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { c as createLucideIcon } from "./shopping-bag-8FlRHQHp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
const __iconNode$1 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const DELIVERY = 2e3;
function CheckoutPage() {
  const {
    items,
    subtotal,
    clear
  } = useCart();
  const total = subtotal + (items.length > 0 ? DELIVERY : 0);
  const nav = useNavigate();
  const [pay, setPay] = reactExports.useState("cash");
  function submit(e) {
    e.preventDefault();
    const ref = "SLK-2026-" + Math.floor(1e5 + Math.random() * 9e5);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("shoplink-last-order", JSON.stringify({
        ref,
        total,
        pay
      }));
    }
    clear();
    nav({
      to: "/confirmation"
    });
  }
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto flex-1 px-4 py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "Votre panier est vide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "mt-4 inline-block text-primary hover:underline", children: "Retour aux produits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold md:text-4xl", children: "Finaliser la commande" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Renseignez vos informations pour la livraison." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-8 grid gap-8 lg:grid-cols-[1fr_360px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-lg font-bold", children: "Informations de livraison" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom complet", placeholder: "Jean Dupont", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", placeholder: "6 99 99 99 99", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Quartier / Adresse", placeholder: "Bonamoussadi, Rue des Palmiers", required: true, className: "md:col-span-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Instructions (optionnel)", placeholder: "Note pour le livreur…", className: "md:col-span-2" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-lg font-bold", children: "Mode de paiement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PayOption, { icon: Banknote, active: pay === "cash", onClick: () => setPay("cash"), title: "Paiement à la livraison", desc: "Payez en espèces à la réception" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PayOption, { icon: Smartphone, active: pay === "momo", onClick: () => setPay("momo"), title: "Mobile Money", desc: "Orange Money, MTN MoMo" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "Résumé de commande" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-clamp-1 text-muted-foreground", children: [
              it.product.name,
              " × ",
              it.qty
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatFCFA(it.product.price * it.qty) })
          ] }, it.productId)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border-t border-border pt-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Sous-total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFCFA(subtotal) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Livraison" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFCFA(DELIVERY) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-primary", children: formatFCFA(total) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Confirmer la commande" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  className = "",
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
  ] });
}
function PayOption({
  icon: Icon,
  active,
  onClick,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, className: `flex items-center gap-3 rounded-xl border p-4 text-left transition ${active ? "border-primary bg-primary/5 shadow-card" : "border-border hover:border-primary/40"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-10 w-10 items-center justify-center rounded-xl ${active ? "bg-gradient-hero text-primary-foreground" : "bg-muted text-foreground/70"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  CheckoutPage as component
};
