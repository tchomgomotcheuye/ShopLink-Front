import { r as reactExports, V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-C8m37jYG.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { c as createLucideIcon } from "./shopping-bag-8FlRHQHp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./logo-DkWl1J3M.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
function Confirmation() {
  const [order, setOrder] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = sessionStorage.getItem("shoplink-last-order");
    if (raw) setOrder(JSON.parse(raw));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto flex-1 px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-2xl font-bold md:text-3xl", children: "Commande reçue !" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        "Merci pour votre confiance. Votre commande a bien été reçue.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " Vous recevrez une confirmation sur WhatsApp et par email."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 rounded-2xl bg-gradient-soft p-5 text-left text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "N° de commande", value: `#${order?.ref ?? "SLK-2026-000123"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Date", value: (/* @__PURE__ */ new Date()).toLocaleString("fr-FR", {
          dateStyle: "medium",
          timeStyle: "short"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Total", value: formatFCFA(order?.total ?? 0) || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Livraison", value: "En 24h à Douala" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Paiement", value: order?.pay === "momo" ? "Mobile Money" : "À la livraison" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex h-12 items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Suivre ma commande" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "flex h-12 items-center justify-center rounded-xl border border-border text-sm font-semibold", children: "Retour à l'accueil" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-center gap-2 rounded-xl bg-success/10 p-3 text-xs text-success", children: "✓ Vous serez notifié sur WhatsApp · +237 6 99 99 99 99" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: value })
  ] });
}
export {
  Confirmation as component
};
