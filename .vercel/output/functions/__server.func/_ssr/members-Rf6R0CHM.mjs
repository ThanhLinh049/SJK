import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ContactFooter, S as SiteHeader } from "./ContactFooter-Cl5JFMNX.mjs";
import { E as EcosystemDeck } from "./EcosystemDeck-CoruAQzy.mjs";
import { i as identityImg } from "./sjk-identity-C0byF-2x.mjs";
function MembersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-[#faf9f6] text-[#050505]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MembersHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EcosystemDeck, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFooter, {})
  ] });
}
function MembersHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] w-full overflow-hidden bg-[#050505] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: identityImg,
        alt: "SJK Group ecosystem companies",
        className: "absolute inset-0 h-full w-full object-cover opacity-70"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85", children: "Hệ sinh thái thành viên" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[64px] font-light leading-[0.95] tracking-tight md:text-[96px]", children: [
        "Các công ty thành viên",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "SJK" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-[720px] text-2xl font-light leading-snug text-white/88 md:text-[32px]", children: "Mỗi đơn vị đảm nhiệm một lớp năng lực riêng, cùng kiến tạo hệ sinh thái truyền thông ngoài trời tích hợp." })
    ] }) })
  ] });
}
function Members() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MembersPage, {});
}
export {
  Members as component
};
