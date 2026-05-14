import { r as reactExports, V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { D as DashboardShell } from "./dashboard-shell-CSKuqYnT.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
const ALL = [{
  ref: "SLK-2026-000125",
  client: "Jean Dupont",
  total: 45e4,
  status: "En attente"
}, {
  ref: "SLK-2026-000124",
  client: "Marie Claire",
  total: 85e3,
  status: "Confirmée"
}, {
  ref: "SLK-2026-000123",
  client: "Paul Martin",
  total: 7e4,
  status: "En livraison"
}, {
  ref: "SLK-2026-000122",
  client: "Sophie Leroy",
  total: 25e3,
  status: "Livrée"
}, {
  ref: "SLK-2026-000121",
  client: "Alain Blanc",
  total: 18e3,
  status: "Annulée"
}, {
  ref: "SLK-2026-000120",
  client: "Lucie Mbarga",
  total: 32e3,
  status: "Livrée"
}];
const TABS = ["Toutes", "En attente", "Confirmées", "En livraison", "Livrées"];
function AdminOrders() {
  const [tab, setTab] = reactExports.useState("Toutes");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Toutes les commandes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `rounded-full px-4 py-1.5 text-xs font-semibold ${tab === t ? "bg-gradient-hero text-primary-foreground" : "border border-border bg-card hover:border-primary/40"}`, children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Référence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ALL.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3 font-semibold", children: [
          "#",
          o.ref
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: o.client }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Status, { s: o.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold text-primary", children: formatFCFA(o.total) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs font-semibold text-primary hover:underline", children: "Détails" }) })
      ] }, o.ref)) })
    ] }) })
  ] }) });
}
function Status({
  s
}) {
  const map = {
    "En attente": "bg-warning/15 text-warning",
    Confirmée: "bg-primary/15 text-primary",
    "En livraison": "bg-accent/15 text-accent",
    Livrée: "bg-success/15 text-success",
    Annulée: "bg-destructive/15 text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${map[s]}`, children: s });
}
export {
  AdminOrders as component
};
