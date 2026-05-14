import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { D as DashboardShell } from "./dashboard-shell-CSKuqYnT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
function PartnerSettings() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "partner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Paramètres" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Gérez vos informations boutique et préférences." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Profil de la boutique" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom de la boutique", defaultValue: "Tech Store Douala" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", defaultValue: "+237 6 99 99 99 99" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", defaultValue: "contact@techstore.cm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Adresse", defaultValue: "Bonapriso, Douala" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Paiement" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Numéro Mobile Money", defaultValue: "6 99 99 99 99" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom du compte", defaultValue: "Tech Store Douala" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Notifications" }),
      [{
        t: "Nouvelles commandes",
        d: "Recevoir une notification WhatsApp"
      }, {
        t: "Promotions",
        d: "Recevoir les actualités ShopLink"
      }].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: n.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: n.d })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "h-5 w-10" })
      ] }, n.t))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Enregistrer les modifications" })
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
  PartnerSettings as component
};
