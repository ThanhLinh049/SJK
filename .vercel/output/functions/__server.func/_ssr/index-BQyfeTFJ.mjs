import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as ContactFooter, h as heroImg, S as SiteHeader, M as MEMBERS, P as PARTNERS } from "./ContactFooter-Cl5JFMNX.mjs";
import { i as identityImg } from "./sjk-identity-C0byF-2x.mjs";
import { E as EcosystemDeck } from "./EcosystemDeck-CoruAQzy.mjs";
import { n as newsImg } from "./sjk-news-CpLMkCmw.mjs";
import { i as ifcImg } from "./sjk-ifc-VJL4akr2.mjs";
import { T as Touchpoints } from "./Touchpoints-B4S44kHG.mjs";
import { c as CloudSun, Q as QrCode, U as Users, a as Award, T as Trophy, G as Globe, f as ShieldCheck } from "../_libs/lucide-react.mjs";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "Cinematic city skyline with LED billboards",
        className: "absolute inset-0 h-full w-full object-cover opacity-65",
        width: 1920,
        height: 1080
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85", children: "Khởi tạo giá trị truyền thông ngoài trời" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[64px] font-medium leading-[0.95] tracking-tight md:text-[96px]", children: [
        "SJK ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " text-[var(--brand-red)]", children: "Group" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-2xl font-light leading-snug text-white/90 md:text-[32px]", children: [
        "Tập đoàn quảng cáo ngoài trời ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " text-[var(--brand-red)]", children: "tích hợp" }),
        " hàng đầu"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/85", children: "Tiên phong ứng dụng công nghệ vào OOH, DOOH và hệ sinh thái truyền thông đa điểm chạm, mang lại hiệu quả đo lường minh bạch cho thương hiệu." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110",
            children: [
              "Liên hệ hợp tác",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#ecosystem",
            className: "inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10",
            children: "Khám phá hệ sinh thái"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center gap-8 px-8 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65", children: "Member companies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-1 overflow-hidden",
            style: {
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-[memberMarquee_35s_linear_infinite] items-center", children: [...MEMBERS, ...MEMBERS].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex shrink-0 items-center text-[12px] text-white/85",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 transition hover:text-white", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[var(--brand-red)]", children: m.index }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.08em]", children: m.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-6 text-white/20", children: "/" })
                ]
              },
              `${m.id}-${i}`
            )) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
    @keyframes memberMarquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  ` })
    ] })
  ] });
}
const BADGES = [
  {
    icon: Award,
    title: "Doanh nghiệp tiêu biểu",
    subtitle: "UBND TP.HCM 2024"
  },
  {
    icon: Trophy,
    title: "Giải Nhất Inno Culture",
    subtitle: "Sở KH&CN 2024"
  },
  {
    icon: Globe,
    title: "Hội viên toàn cầu",
    subtitle: "World OOH Org"
  },
  {
    icon: ShieldCheck,
    title: "Ban Điều Hành",
    subtitle: "Hiệp hội HAA & VAA"
  }
];
function TrustBadges() {
  return (
    // Dải ngang màu trắng ngà, có viền mỏng ở dưới để phân cách nhẹ nhàng với section tiếp theo
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#faf9f6] border-b border-[#050505]/10 py-10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1320px] px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row flex-wrap items-center justify-between gap-10 md:gap-4", children: BADGES.map((badge, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-4 group cursor-default opacity-60 hover:opacity-100 transition-opacity duration-500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            badge.icon,
            {
              className: "w-10 h-10 text-[#050505] group-hover:text-[#E3000F] transition-colors duration-500",
              strokeWidth: 1
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-[#050505] leading-tight", children: badge.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-[#050505]/60 mt-1 font-semibold", children: badge.subtitle })
          ] })
        ]
      },
      idx
    )) }) }) })
  );
}
const PROOF = [
  ["120+", "Màn hình LED toàn quốc"],
  ["40+", "Tỉnh thành phủ sóng"],
  ["11", "Công ty & dự án thành viên"],
  ["100+", "Đối tác chiến lược"]
];
function Identity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "bg-[#faf9f6] py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60", children: "Về SJK Group" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[44px] leading-[1.08] text-[var(--ink)] md:text-[56px]", children: [
        "Một hệ sinh thái OOH kết nối ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " text-[var(--brand-red)]", children: "thương hiệu" }),
        ", vị trí và công nghệ."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--charcoal)]/75", children: "Sở hữu mạng lưới điểm chạm bao phủ toàn quốc, kết hợp năng lực vận hành thực chiến và nền tảng dữ liệu số." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: identityImg,
          alt: "Panoramic OOH billboards along an urban boulevard",
          loading: "lazy",
          width: 1920,
          height: 900,
          className: "h-[440px] w-full rounded-sm object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-px left-0 right-0 grid grid-cols-2 divide-x divide-white/15 border-t border-white/15 bg-[var(--ink)]/85 text-white backdrop-blur md:grid-cols-4", children: PROOF.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-light tracking-tight", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] uppercase tracking-[0.18em] text-white/65", children: v })
      ] }, k)) })
    ] })
  ] }) });
}
const ROWS = [
  ["02", "Đổi mới sáng tạo", "Inno X Event xuất sắc giành giải thưởng Inno Culture 2024 từ Sở KH&CN."],
  ["03", "Trách nhiệm xã hội", "Đồng hành cùng Công an TP.HCM lan tỏa chiến dịch “Không một mình” phòng chống tội phạm."]
];
function PartnersNews() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "partners", className: "bg-[#faf9f6] py-32 border-t border-[var(--charcoal)]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60", children: "Đối tác & thương hiệu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[36px] leading-[1.1] text-[var(--ink)] md:text-[44px]", children: "Đồng hành cùng hàng trăm thương hiệu hàng đầu." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mt-10 overflow-hidden border-y border-[var(--border)] py-2",
        style: {
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-[marquee_45s_linear_infinite] gap-12 py-6", children: [...PARTNERS, ...PARTNERS].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "shrink-0 text-xl text-[var(--charcoal)]/65 transition hover:text-[var(--ink)] md:text-2xl",
            children: p
          },
          `${p}-${i}`
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "news", className: "mt-20 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60", children: "Thành tựu & dấu ấn" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[36px] leading-[1.1] text-[var(--ink)] md:text-[44px]", children: "Thành tựu & dấu ấn truyền thông." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-[14px] leading-relaxed text-[var(--charcoal)]/75", children: "Những cột mốc khẳng định vị thế và trách nhiệm cộng đồng của SJK Group." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: newsImg,
              alt: "Featured OOH article",
              loading: "lazy",
              width: 1280,
              height: 800,
              className: "h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur", children: "Featured" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]", children: "Giải thưởng · 2024" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-light leading-snug text-[var(--ink)] md:text-[28px]", children: "SJK Group tự hào nhận danh hiệu Doanh nghiệp tiêu biểu TP.HCM 2024." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]",
            children: [
              "Đọc bài viết",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        ROWS.map(([n, tag, title]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "group flex items-start gap-6 border-t border-[var(--border)] py-6 last:border-b",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-[var(--charcoal)]/40", children: n }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-[var(--brand-red)]", children: tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xl font-light leading-snug text-[var(--ink)] transition group-hover:text-[var(--brand-red)]", children: title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[var(--charcoal)]/40 transition group-hover:translate-x-1 group-hover:text-[var(--brand-orange)]", children: "→" })
            ]
          },
          n
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "mt-6 inline-flex items-center gap-2 self-start text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]",
            children: [
              "Xem tất cả tin tức ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function SignatureAsset() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen w-full overflow-hidden bg-[#050505]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: ifcImg,
        alt: "Saigòn Marina IFC tower LED facade",
        loading: "lazy",
        className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[8s] hover:scale-105"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 z-10 pb-12 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[#E3000F]" }),
          "Biểu tượng đẳng cấp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl leading-[1.1] md:text-5xl lg:text-7xl", children: [
          "Điểm nhìn trung tâm",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E3000F]", children: "tài chính" }),
          " quốc tế."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-end gap-8 md:border-l md:border-white/30 md:pl-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-light tracking-tighter text-white lg:text-6xl", children: "39.000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-medium uppercase tracking-widest text-white/60", children: "m² Màn hình LED" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-light tracking-tighter text-white lg:text-6xl", children: "#1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-medium uppercase tracking-widest text-white/60", children: "Đông Nam Á" })
        ] })
      ] })
    ] }) }) })
  ] });
}
const MILESTONES = [
  {
    year: "2017",
    text: "Ông Nhựt rời global agency, thành lập Shojiki Ads — đặt nền móng đầu tiên cho hệ sinh thái truyền thông.",
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2019",
    text: "Thành lập Liên doanh Việt - Nga Adjika ads, mở rộng năng lực sáng tạo công nghệ.",
    img: "src/assets/history-1.webp"
  },
  {
    year: "2021",
    text: "Chính thức mở chi nhánh tại Hà Nội, đánh dấu bước phát triển mạng lưới quy mô quốc gia.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    text: "Khẳng định uy tín ngành: Nhận chức Phó Chủ Tịch HAA và đảm nhiệm vai trò Chủ nhiệm OOHClub.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2023",
    text: "Công ty đầu tiên của Việt Nam tham gia hội viên WOO toàn cầu. Thành lập liên doanh Việt - Hàn Look At Media.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2024",
    text: "Bước ngoặt thương hiệu: Hoàn thành đổi tên và ra mắt logo mới SJK Group (18/7/2024), đồng thời thành lập Inno X.",
    img: "https://images.unsplash.com/photo-1541888087640-10902bd365c1?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2025",
    text: "Thành lập văn phòng tại Đà Nẵng, Cần Thơ. Ra mắt OIP (OOH Investment Partners) và kí kết hợp tác với Quà tặng doanh nghiệp OEM Group.",
    img: "src/assets/history-1.webp"
  }
];
function Chronicle() {
  const [active, setActive] = reactExports.useState(0);
  const refs = reactExports.useRef([]);
  reactExports.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#faf9f6] border-t border-[var(--charcoal)]/10 py-16 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-5 bg-[#E3000F]" }),
        "Hành trình kiến tạo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl leading-[1.1] text-[#050505] lg:text-7xl", children: [
        "Tốc độ mở rộng và",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E3000F]", children: "vị thế" }),
        " dẫn đầu."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 grid grid-cols-1 gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--charcoal)]/45 mb-6", children: "Niên đại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[1/1] w-full max-w overflow-hidden rounded-sm shadow-2xl shadow-black/10", children: [
          MILESTONES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: m.img,
              alt: "",
              className: `absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
            },
            m.year
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "font-light leading-none text-white text-7xl md:text-[90px] drop-shadow-md",
              children: MILESTONES[active].year
            },
            MILESTONES[active].year
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "md:col-span-6 space-y-12 md:space-y-[40vh] pt-12 md:pt-[15vh] pb-24 md:pb-[50vh]", children: MILESTONES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          "data-idx": i,
          ref: (el) => {
            refs.current[i] = el;
          },
          className: `transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-30"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl text-[#E3000F] mb-4", children: m.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-[var(--charcoal)]/15 md:mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 md:mt-0 max-w-2xl text-[15px] md:text-2xl md:font-light leading-relaxed text-[var(--charcoal)]/75 md:text-[var(--charcoal)]/90", children: m.text })
          ]
        },
        m.year
      )) })
    ] })
  ] }) });
}
const FEATURES = [
  {
    icon: CloudSun,
    title: "Real-time Triggers",
    desc: "Tự động đổi thông điệp quảng cáo theo thời tiết, nhiệt độ và khung giờ thực tế."
  },
  {
    icon: QrCode,
    title: "O2O Performance",
    desc: "Kết nối Online to Offline qua QR Code, Wifi Ads và đo lường chuyển đổi."
  },
  {
    icon: Users,
    title: "AI Crowd Tracking",
    desc: "Công nghệ AI phân tích hành vi, nhân khẩu học và lưu lượng đám đông theo thời gian thực."
  }
];
function PdoohTech() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#faf9f6] py-32 text-[var(--ink)] border-t border-[var(--charcoal)]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-red)]", children: "Công nghệ & dữ liệu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[44px] leading-[1.05] text-[var(--ink)] md:text-[56px]", children: [
        "Nền tảng định hình tương lai",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " text-[var(--brand-red)]", children: "(PDOOH)" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]/75", children: "Đổi mới truyền thông ngoài trời bằng việc tự động hóa phân phối, đo lường dữ liệu và tương tác theo thời gian thực." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-px bg-[var(--charcoal)]/10 md:grid-cols-3 border border-[var(--charcoal)]/10", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative flex flex-col gap-8 bg-[#faf9f6] p-10 transition-colors hover:bg-white",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-7 w-7 text-[var(--brand-red)]", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--charcoal)]/45", children: [
              "0",
              i + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-light leading-tight text-[var(--ink)]", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13.5px] leading-relaxed text-[var(--charcoal)]/75", children: f.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto h-px w-10 bg-[var(--brand-red)] transition-all duration-500 group-hover:w-20" })
        ]
      },
      f.title
    )) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-[var(--background)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Identity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SignatureAsset, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Chronicle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EcosystemDeck, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Touchpoints, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PdoohTech, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PartnersNews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBadges, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFooter, {})
  ] });
}
export {
  Index as component
};
