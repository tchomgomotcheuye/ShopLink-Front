import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
import { L as Link } from "./router-D-PMddka.js";
import { f as formatFCFA } from "./mock-data-DGFqbj-y.js";
import { S as Star } from "./star-1yo9RYTJ.js";
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/produits/$id",
      params: { id: product.id },
      className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-elegant",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.image,
            alt: product.name,
            loading: "lazy",
            width: 400,
            height: 400,
            className: "h-full w-full object-contain p-4 transition group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-1 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-2 text-sm font-semibold text-foreground", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-primary", children: formatFCFA(product.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center gap-1 pt-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: product.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "(",
              product.reviews,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto truncate", children: product.shop })
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
