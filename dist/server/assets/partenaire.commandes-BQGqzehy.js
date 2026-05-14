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
  date: "Aujourd'hui 10:30",
  total: 45e4,
  status: "En attente"
}, {
  ref: "SLK-2026-000124",
  client: "Marie Claire",
  date: "Aujourd'hui 09:15",
  total: 85e3,
  status: "Confirmée"
}, {
  ref: "SLK-2026-000123",
  client: "Paul Martin",
  date: "Hier 16:45",
  total: 7e4,
  status: "Livrée"
}, {
  ref: "SLK-2026-000122",
  client: "Sophie Leroy",
  date: "Hier 11:20",
  total: 25e3,
  status: "Confirmée"
}, {
  ref: "SLK-2026-000121",
  client: "Alain Blanc",
  date: "23 Mai",
  total: 18e3,
  status: "Livrée"
}];
const TABS = ["Toutes", "En attente", "Confirmées", "Livrées"];
function PartnerOrders() {
  const [tab, setTab] = reactExports.useState("Toutes");
  const list = ALL.filter((o) => tab === "Toutes" ? true : tab === "En attente" ? o.status === "En attente" : tab === "Confirmées" ? o.status === "Confirmée" : o.status === "Livrée");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "partner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Commandes reçues" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t), className: `rounded-full px-4 py-1.5 text-xs font-semibold ${tab === t ? "bg-gradient-hero text-primary-foreground shadow-card" : "border border-border bg-card hover:border-primary/40"}`, children: [
      t,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 opacity-60", children: [
        "(",
        t === "Toutes" ? ALL.length : ALL.filter((o) => t === "En attente" ? o.status === "En attente" : t === "Confirmées" ? o.status === "Confirmée" : o.status === "Livrée").length,
        ")"
      ] })
    ] }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Référence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3 font-semibold", children: [
          "#",
          o.ref
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: o.client }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: o.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold text-primary", children: formatFCFA(o.total) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Status, { s: o.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: o.status === "En attente" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-success/15 px-3 py-1.5 text-xs font-semibold text-success", children: "Confirmer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-destructive/15 px-3 py-1.5 text-xs font-semibold text-destructive", children: "Refuser" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs font-semibold text-primary hover:underline", children: "Voir" }) })
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
    Livrée: "bg-success/15 text-success"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${map[s]}`, children: s });
}
export {
  PartnerOrders as component
};
