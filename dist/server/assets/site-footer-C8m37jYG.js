import { r as reactExports, V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { p as products } from "./mock-data-DGFqbj-y.js";
import { L as Logo } from "./logo-DkWl1J3M.js";
import { c as createLucideIcon, S as ShoppingBag } from "./shopping-bag-8FlRHQHp.js";
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const KEY = "shoplink-cart";
const listeners = /* @__PURE__ */ new Set();
function read() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}
function write(items) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
  listeners.forEach((l) => l());
}
function useCart() {
  const [items, setItems] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setItems(read());
    const l = () => setItems(read());
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  const detailed = items.map((i) => {
    const p = products.find((x) => x.id === i.productId);
    return p ? { ...i, product: p } : null;
  }).filter((x) => x !== null);
  const subtotal = detailed.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = detailed.reduce((s, i) => s + i.qty, 0);
  return {
    items: detailed,
    count,
    subtotal,
    add: (productId, qty = 1) => {
      const cur = read();
      const found = cur.find((i) => i.productId === productId);
      if (found) found.qty += qty;
      else cur.push({ productId, qty });
      write(cur);
    },
    update: (productId, qty) => {
      const cur = read().map(
        (i) => i.productId === productId ? { ...i, qty } : i
      );
      write(cur.filter((i) => i.qty > 0));
    },
    remove: (productId) => {
      write(read().filter((i) => i.productId !== productId));
    },
    clear: () => write([])
  };
}
function SiteHeader() {
  const { count } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between gap-4 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 text-sm font-medium md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          activeOptions: { exact: true },
          className: "text-foreground/80 hover:text-foreground",
          activeProps: { className: "text-primary" },
          children: "Accueil"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/produits",
          className: "text-foreground/80 hover:text-foreground",
          activeProps: { className: "text-primary" },
          children: "Catégories"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/comment-ca-marche",
          className: "text-foreground/80 hover:text-foreground",
          activeProps: { className: "text-primary" },
          children: "Comment ça marche"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/a-propos",
          className: "text-foreground/80 hover:text-foreground",
          activeProps: { className: "text-primary" },
          children: "À propos"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/produits",
          "aria-label": "Rechercher",
          className: "hidden h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-muted md:inline-flex",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/partenaire/connexion",
          "aria-label": "Compte",
          className: "hidden h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-muted md:inline-flex",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/panier",
          "aria-label": "Panier",
          className: "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-muted",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
            count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-bold text-accent-foreground", children: count })
          ]
        }
      )
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-gradient-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Achetez · Connectez · Recevez. La marketplace locale de Douala." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 text-sm font-semibold", children: "Liens utiles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Accueil" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/produits", className: "hover:text-foreground", children: "Catégories" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/comment-ca-marche", className: "hover:text-foreground", children: "Comment ça marche" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/a-propos", className: "hover:text-foreground", children: "À propos" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 text-sm font-semibold", children: "Aide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Livraison" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Paiement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Retours" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 text-sm font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+237 6 00 00 00 00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "contact@shoplink.cm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Douala, Cameroun" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border py-5 text-center text-xs text-muted-foreground", children: "© 2026 ShopLink. Tous droits réservés." })
  ] });
}
export {
  SiteHeader as S,
  SiteFooter as a,
  Search as b,
  useCart as u
};
