import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { L as Logo } from "./logo-DkWl1J3M.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function PartnerLogin() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-soft p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-xs text-muted-foreground", children: "Espace Fournisseur" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-center text-2xl font-bold", children: "Bienvenue !" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-sm text-muted-foreground", children: "Connectez-vous à votre compte fournisseur." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => {
      e.preventDefault();
      window.location.href = "/partenaire";
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold", children: "Téléphone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", placeholder: "6 99 99 99 99", className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold", children: "Mot de passe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "••••••••", className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-xs text-primary hover:underline", children: "Mot de passe oublié ?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex h-12 w-full items-center justify-center rounded-xl bg-gradient-hero text-sm font-semibold text-primary-foreground shadow-elegant", children: "Se connecter" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
      "Pas encore de compte ?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "font-semibold text-primary hover:underline", children: "S'inscrire" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-muted-foreground hover:text-foreground", children: "Accès admin →" }) })
  ] }) });
}
export {
  PartnerLogin as component
};
