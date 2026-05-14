import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { D as DashboardShell } from "./dashboard-shell-CSKuqYnT.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-PMddka.js";
import "./logo-DkWl1J3M.js";
import "./shopping-bag-8FlRHQHp.js";
const CLIENTS = [{
  name: "Jean Dupont",
  phone: "+237 6 99 12 34 56",
  orders: 12,
  spent: 124e4,
  since: "Jan 2026"
}, {
  name: "Marie Claire",
  phone: "+237 6 77 88 99 00",
  orders: 8,
  spent: 48e4,
  since: "Fév 2026"
}, {
  name: "Paul Martin",
  phone: "+237 6 55 44 33 22",
  orders: 5,
  spent: 32e4,
  since: "Mar 2026"
}, {
  name: "Sophie Leroy",
  phone: "+237 6 11 22 33 44",
  orders: 3,
  spent: 95e3,
  since: "Avr 2026"
}, {
  name: "Alain Blanc",
  phone: "+237 6 99 88 77 66",
  orders: 14,
  spent: 182e4,
  since: "Déc 2025"
}];
function AdminClients() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Clients" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        CLIENTS.length,
        " clients enregistrés"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Téléphone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Commandes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Dépenses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Membre depuis" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: CLIENTS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "flex items-center gap-3 px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-primary-foreground", children: c.name.split(" ").map((n) => n[0]).join("") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: c.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: c.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: c.orders }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-semibold text-primary", children: formatFCFA(c.spent) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: c.since })
      ] }, c.name)) })
    ] }) })
  ] }) });
}
export {
  AdminClients as component
};
