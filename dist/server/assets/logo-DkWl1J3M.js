import { V as jsxRuntimeExports } from "./server-DEtYeLr2.js";
function Logo({
  variant = "default"
}) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 24 24",
        className: "h-5 w-5 text-white",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 7h12l-1 13H7L6 7z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 7a3 3 0 0 1 6 0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10.5", cy: "13", r: "1.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "13.5", cy: "13", r: "1.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.5 13.6c.6.6 1.8.6 2.4 0" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-display text-xl font-bold tracking-tight ${text}`, children: [
      "Shop",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Link" })
    ] })
  ] });
}
export {
  Logo as L
};
