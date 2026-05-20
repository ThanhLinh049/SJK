import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MEMBERS } from "./ContactFooter-Cl5JFMNX.mjs";
function EcosystemDeck() {
  const [active, setActive] = reactExports.useState(0);
  const m = MEMBERS[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "ecosystem", className: "bg-[#faf9f6] py-32 border-t border-[var(--charcoal)]/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1320px] px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--brand-red)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60", children: "Ecosystem Command Deck" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[44px] leading-[1.05] text-[var(--ink)] md:text-[56px]", children: [
          "Mười một đơn vị thành viên, một hệ sinh thái",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "SJK Group" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]/75", children: "Mỗi đơn vị thành viên đảm nhiệm một mắt xích chuyên biệt trong chuỗi giá trị truyền thông ngoài trời — vận hành dưới định hướng chung của tập đoàn." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 border border-[var(--border)] bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between border-b border-[var(--border)] bg-[var(--ink)] px-7 py-3 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--brand-red)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "SJK Group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-white/55", children: "/ Parent Company" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-white/55", children: "Corporate OOH Ecosystem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": true,
              className: "pointer-events-none absolute bottom-0 h-3 w-px translate-y-full bg-[var(--brand-green)] transition-all duration-500",
              style: {
                left: `calc(${(active + 0.5) * (100 / MEMBERS.length)}% )`
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 border-b border-[var(--border)] md:grid-cols-4 lg:grid-cols-6", children: [
          MEMBERS.map((mem, i) => {
            const isActive = i === active;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActive(i),
                className: `relative flex flex-col justify-center items-start gap-1 border-b border-r border-[var(--border)] px-4 h-[66px] w-full text-left transition ${isActive ? "bg-white" : "bg-[var(--warm-white)] hover:bg-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] font-semibold tracking-[0.28em] ${isActive ? "text-[var(--brand-red)]" : "text-[var(--charcoal)]/45"}`,
                      children: mem.index
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[16px] leading-tight ${isActive ? "text-[var(--brand-red)]" : "text-[var(--ink)]"}`,
                      children: mem.name
                    }
                  ),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-px left-0 right-0 h-[2px] bg-[var(--brand-green)]" })
                ]
              },
              mem.id
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "group relative flex flex-col justify-center items-start gap-1 border-b border-r border-[var(--border)] px-4 h-[66px] w-full bg-[var(--warm-white)]/30 hover:bg-white transition-colors duration-300",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-[16px] leading-tight text-[var(--charcoal)]/40 group-hover:text-[var(--brand-red)] transition-colors duration-300", children: [
                "Liên hệ hợp tác",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transform -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100", children: "→" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[58fr_42fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[420px] overflow-hidden bg-black lg:h-[560px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: m.image,
                alt: `${m.name} — ${m.tag}`,
                loading: "lazy",
                width: 1280,
                height: 896,
                className: "h-full w-full animate-[fadeIn_400ms_ease] object-cover"
              },
              m.id
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" }),
              "Connected Business Unit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 text-white/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.28em] text-white/70", children: m.tag }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-8 border-t border-[var(--border)] bg-[var(--warm-white)] p-10 lg:border-l lg:border-t-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--charcoal)]/65", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-[var(--brand-red)]" }),
                "Active company / ",
                m.index
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[56px] font-light leading-[1] tracking-tight text-[var(--ink)]", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)]", children: m.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[var(--charcoal)]/55", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-5 bg-[var(--brand-green)]" }),
                "Connected Business Unit"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] font-medium text-[var(--ink)]", children: m.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14px] leading-relaxed text-[var(--charcoal)]/75", children: m.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  className: "group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)]",
                  children: [
                    "Truy cập website",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-8 bg-[var(--ink)] transition-all group-hover:w-12 group-hover:bg-[var(--brand-orange)]" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl text-[var(--charcoal)]/25", children: [
                m.index,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "/ 11" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes fadeIn { from { opacity: 0.4; transform: scale(1.02);} to { opacity: 1; transform: scale(1);} }` })
  ] });
}
export {
  EcosystemDeck as E
};
