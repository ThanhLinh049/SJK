import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ContactFooter, h as heroImg, S as SiteHeader, l as ledImg } from "./ContactFooter-Cl5JFMNX.mjs";
import { P as Phone, M as Mail, b as Building2, A as ArrowUpRight, d as MapPin } from "../_libs/lucide-react.mjs";
const QUICK_INFO = [
  {
    icon: Phone,
    label: "Hotline",
    value: "0933 15 99 88",
    href: "tel:0933159988"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sjkgroup.vn",
    href: "mailto:info@sjkgroup.vn"
  },
  {
    icon: Building2,
    label: "Head Office",
    value: "TP. Hồ Chí Minh",
    href: "#office-network"
  }
];
const OFFICES = [
  {
    type: "Head Office",
    city: "TP. Hồ Chí Minh",
    address: "Số 80, Đường 17, KP5, P. Bình Trưng, TP. HCM"
  },
  {
    type: "Branch Office",
    city: "Hà Nội",
    address: "Tầng 10, Số 5 Điện Biên Phủ, P. Ba Đình"
  },
  {
    type: "Regional Office",
    city: "Đà Nẵng",
    address: "Tầng 7, 30 Nguyễn Hữu Thọ, P. Hải Châu"
  },
  {
    type: "Regional Office",
    city: "Cần Thơ",
    address: "153Q Trần Hưng Đạo, P. Ninh Kiều"
  },
  {
    type: "Regional Office",
    city: "Hải Phòng",
    address: "292 Lê Lợi, P. Gia Viên"
  }
];
const BUSINESS_UNITS = [
  {
    title: "Media Planning & Booking",
    desc: "OOH, DOOH, LED outdoor, billboard và chiến dịch truyền thông ngoài trời."
  },
  {
    title: "Technology & Measurement",
    desc: "Compass Tech, đo lường hiệu quả, dữ liệu vị trí và báo cáo chiến dịch."
  },
  {
    title: "Retail & Screen Network",
    desc: "AnyScreen, Wifi Marketing, LCD, standee và mạng lưới điểm bán."
  },
  {
    title: "Creative Technology",
    desc: "Adjika, Inno X, hologram, 3D, drone, activation và event."
  },
  {
    title: "Investment & Partnership",
    desc: "OIP, phát triển điểm, hợp tác khai thác tài sản truyền thông dài hạn."
  }
];
const INTERESTS = [
  "OOH / Billboard",
  "LED Outdoor",
  "Airport Advertising",
  "Metro / Transport Media",
  "Retail Media",
  "Wifi Marketing",
  "Programmatic DOOH",
  "Measurement / Compass Tech",
  "Partnership / Investment"
];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-[#faf9f6] text-[#050505]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactQuickInfo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseInquiry, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OfficeNetwork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessUnits, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactMapVisual, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFooter, {})
  ] });
}
function ContactHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "SJK Group contact",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85", children: "Liên hệ SJK Group" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[64px] font-light leading-[0.95] tracking-tight md:text-[96px]", children: [
        "Kết nối cùng",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "SJK Group" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-2xl font-light leading-snug text-white/90 md:text-[32px]", children: "Cùng kiến tạo chiến dịch truyền thông ngoài trời có quy mô, dữ liệu và sức ảnh hưởng." })
    ] }) })
  ] });
}
function ContactQuickInfo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-[#faf9f6] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-[1320px] gap-px bg-[#050505]/10 px-6 md:grid-cols-3 md:px-8", children: QUICK_INFO.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: item.href,
      className: "group bg-[#faf9f6] p-8 transition hover:bg-white",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-7 w-7 text-[var(--brand-red)]", strokeWidth: 1.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-[#050505]/25 transition group-hover:text-[var(--brand-red)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#050505]/45", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[28px] font-light leading-tight text-[#050505]", children: item.value })
      ]
    },
    item.label
  )) }) });
}
function EnterpriseInquiry() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "inquiry", className: "border-t border-[#050505]/10 bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Enterprise Inquiry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[54px] leading-[0.98] tracking-tight text-[#050505] md:text-[72px]", children: "Gửi yêu cầu tư vấn chiến dịch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-[15px] leading-relaxed text-[#050505]/68", children: "Đội ngũ SJK sẽ tư vấn giải pháp phù hợp theo mục tiêu, khu vực, ngân sách, ngành hàng và thời gian triển khai." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Họ và tên", placeholder: "Nguyễn Văn A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Công ty", placeholder: "Tên doanh nghiệp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", placeholder: "email@company.com", type: "email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Số điện thoại", placeholder: "0900 000 000", type: "tel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Ngành hàng", placeholder: "FMCG, Banking, Real Estate..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Thời gian triển khai", placeholder: "Tháng / Quý dự kiến" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#050505]/50", children: "Nhu cầu quan tâm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: INTERESTS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "flex cursor-pointer items-center gap-3 border border-[#050505]/10 bg-[#faf9f6] px-4 py-3 text-[13px] text-[#050505]/75 transition hover:border-[var(--brand-red)] hover:bg-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-[var(--brand-red)]" }),
              item
            ]
          },
          item
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#050505]/50", children: "Nội dung yêu cầu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            rows: 6,
            placeholder: "Mô tả mục tiêu chiến dịch, khu vực triển khai, ngân sách dự kiến hoặc nhu cầu hợp tác...",
            className: "w-full resize-none border border-[#050505]/10 bg-[#faf9f6] px-5 py-4 text-[15px] leading-relaxed outline-none transition placeholder:text-[#050505]/35 focus:border-[var(--brand-red)] focus:bg-white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          className: "mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-red)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110",
          children: [
            "Gửi yêu cầu tư vấn",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
          ]
        }
      )
    ] }) })
  ] }) });
}
function OfficeNetwork() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "office-network",
      className: "border-t border-[#050505]/10 bg-[#faf9f6] py-24 md:py-32",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1320px] px-6 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Office Network" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[54px] leading-[0.98] tracking-tight text-[#050505] md:text-[72px]", children: "Mạng lưới văn phòng kết nối toàn quốc." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-[#050505]/10 md:grid-cols-2 lg:grid-cols-5", children: OFFICES.map((office) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-[#faf9f6] p-7 transition hover:bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]", children: office.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-[30px] font-light leading-tight text-[#050505]", children: office.city }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13.5px] leading-relaxed text-[#050505]/65", children: office.address })
        ] }, office.city)) })
      ] })
    }
  );
}
function BusinessUnits() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Contact By Need" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[54px] leading-[0.98] tracking-tight text-[#050505] md:text-[72px]", children: "Kết nối đúng nhóm năng lực." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-[15px] leading-relaxed text-[#050505]/68", children: "Tùy theo nhu cầu chiến dịch, hợp tác hoặc đầu tư, SJK sẽ điều phối bộ phận phù hợp trong hệ sinh thái." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[#050505]/10", children: BUSINESS_UNITS.map((unit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group grid gap-6 border-b border-[#050505]/10 py-8 md:grid-cols-[90px_1fr]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-light text-[var(--brand-red)]", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[32px] font-light leading-[1.1] tracking-[-0.03em]", children: unit.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-2 h-5 w-5 text-[#050505]/30 transition group-hover:text-[var(--brand-red)]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-[15px] leading-relaxed text-[#050505]/68", children: unit.desc })
          ] })
        ]
      },
      unit.title
    )) }) })
  ] }) });
}
function ContactMapVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[80vh] overflow-hidden bg-[#050505] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: ledImg,
        alt: "SJK nationwide media network",
        className: "absolute inset-0 h-full w-full object-cover opacity-80"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid min-h-[80vh] max-w-[1320px] items-end gap-12 px-6 pb-20 pt-28 md:grid-cols-12 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { dark: true, children: "Nationwide Coverage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[54px] leading-[0.98] tracking-tight md:text-[72px]", children: "Hiện diện tại các trung tâm truyền thông trọng điểm." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-[15px] leading-relaxed text-white/70", children: "Từ TP.HCM, Hà Nội đến Đà Nẵng, Cần Thơ, Hải Phòng và nhiều tỉnh thành khác, SJK phát triển mạng lưới truyền thông ngoài trời có khả năng triển khai toàn quốc." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 border border-white/15 bg-black/35 backdrop-blur", children: ["HCM", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "40+ tỉnh"].map((city) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-r border-white/15 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-[28px] font-light", children: city })
      ] }, city)) }) })
    ] })
  ] });
}
function Field({
  label,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#050505]/50", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        placeholder,
        className: "w-full border border-[#050505]/10 bg-[#faf9f6] px-5 py-4 text-[15px] outline-none transition placeholder:text-[#050505]/35 focus:border-[var(--brand-red)] focus:bg-white"
      }
    )
  ] });
}
function SectionLabel({
  children,
  dark = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-[var(--brand-red)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-[11px] font-semibold uppercase tracking-[0.3em] ${dark ? "text-white/70" : "text-[#050505]/55"}`,
        children
      }
    )
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {});
}
export {
  Contact as component
};
