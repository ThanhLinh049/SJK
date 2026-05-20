import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const ledImg = "/assets/sjk-shojiki-D7KK2KcD.jpg";
const compasstech = "/assets/sjk-compasstech-B8DtnvtU.jpg";
const wikiooh = "/assets/sjk-wikiooh-CZpJFThX.jpg";
const adjika = "/assets/sjk-adjika-D0AsFze_.jpg";
const anyscreen = "/assets/sjk-anyscreen-w5qEW23z.jpg";
const oip = "/assets/sjk-oip-BwOTaz1T.jpg";
const MEMBERS = [
  {
    id: "shojiki",
    index: "01",
    name: "Shojiki",
    tag: "OOH Media",
    role: "Khai thác & triển khai quảng cáo ngoài trời tích hợp",
    description: "Đơn vị nòng cốt của SJK Group, chuyên khai thác và triển khai quảng cáo ngoài trời tích hợp — từ billboard, LED đến các điểm chạm truyền thông thực tế trên toàn quốc.",
    image: ledImg
  },
  {
    id: "compasstech",
    index: "02",
    name: "Compass Tech",
    tag: "Technology",
    role: "Đo lường hiệu quả quảng cáo & số hóa quy trình OOH",
    description: "Đơn vị công nghệ của tập đoàn, phát triển nền tảng đo lường hiệu quả quảng cáo OOH và số hóa toàn bộ quy trình vận hành ngành truyền thông ngoài trời.",
    image: compasstech
  },
  {
    id: "wikiooh",
    index: "03",
    name: "Wiki OOH",
    tag: "OOH Data Platform",
    role: "Sàn giao dịch biển bảng ngoài trời toàn quốc",
    description: "Nền tảng dữ liệu và sàn giao dịch biển bảng quảng cáo ngoài trời toàn quốc — kết nối chủ vị trí, đại lý và thương hiệu trong một hệ thống minh bạch.",
    image: wikiooh
  },
  {
    id: "adjika",
    index: "04",
    name: "Adjika",
    tag: "Creative Tech",
    role: "Sáng tạo & quảng cáo công nghệ hiện đại",
    description: "Đơn vị sáng tạo công nghệ của SJK Group, ứng dụng Hologram, Drone Show, 3D Anamorphic và các công nghệ trình diễn mới vào chiến dịch thương hiệu.",
    image: adjika
  },
  {
    id: "anyscreen",
    index: "05",
    name: "AnyScreen",
    tag: "Digital Screen Network",
    role: "Sàn chia sẻ DOOH, mạng lưới màn hình LCD & Standee",
    description: "Sàn chia sẻ DOOH và mạng lưới màn hình LCD, Standee phủ rộng các điểm chạm thương mại, văn phòng và không gian tiêu dùng đô thị.",
    image: anyscreen
  },
  {
    id: "wi5",
    index: "06",
    name: "Wi5",
    tag: "Wifi Marketing",
    role: "Giải pháp tiếp thị qua mạng lưới Wifi diện rộng",
    description: "Đơn vị triển khai giải pháp Wifi Marketing diện rộng — biến hạ tầng kết nối thành kênh tiếp thị dữ liệu, tương tác và đo lường người dùng.",
    image: compasstech
  },
  {
    id: "innox",
    index: "07",
    name: "Inno X Event",
    tag: "Event & POSM",
    role: "Tổ chức sự kiện & POSM ứng dụng công nghệ AI",
    description: "Đơn vị tổ chức sự kiện và sản xuất POSM ứng dụng công nghệ AI, mang đến trải nghiệm thương hiệu sáng tạo, tương tác và hiệu quả truyền thông cao.",
    image: adjika
  },
  {
    id: "oip",
    index: "08",
    name: "OIP",
    tag: "OOH Investment",
    role: "Quỹ đầu tư chuyên biệt ngành quảng cáo ngoài trời",
    description: "Quỹ đầu tư chuyên biệt của SJK Group trong ngành OOH — phát triển, hợp tác và mở rộng các tài sản truyền thông ngoài trời có giá trị dài hạn.",
    image: oip
  },
  {
    id: "lookat",
    index: "09",
    name: "Lookat Media",
    tag: "DOOH Venture",
    role: "Liên doanh Việt – Hàn về hệ thống LED outdoor",
    description: "Liên doanh Việt – Hàn của SJK Group, chuyên phát triển và vận hành hệ thống LED outdoor cao cấp tại các vị trí trung tâm đô thị lớn.",
    image: ledImg
  },
  {
    id: "oem",
    index: "10",
    name: "OEM Group",
    tag: "Merchandise",
    role: "Giải pháp toàn diện về quà tặng doanh nghiệp B2B",
    description: "Đơn vị cung cấp giải pháp quà tặng doanh nghiệp B2B toàn diện — từ thiết kế, sản xuất đến triển khai cho các chiến dịch thương hiệu quy mô lớn.",
    image: anyscreen
  },
  {
    id: "batdongsan",
    index: "11",
    name: "Batdongsan Quangcao",
    tag: "OOH Real Estate",
    role: "Môi giới mặt bằng & quy hoạch điểm quảng cáo",
    description: "Đơn vị môi giới mặt bằng và quy hoạch điểm quảng cáo ngoài trời — kết nối quỹ vị trí với nhà khai thác, thương hiệu và nhà đầu tư trong hệ sinh thái OOH.",
    image: wikiooh
  }
];
const NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Thành viên", href: "/members" },
  { label: "Tin tức", href: "/blog" },
  { label: "Liên hệ", href: "/contact" }
];
const PARTNERS = [
  "Acecook",
  "Coca-Cola",
  "Nestlé",
  "Pepsi",
  "Sabeco",
  "Vinhomes",
  "Vingroup",
  "Nova Land",
  "Aeon Mall",
  "MB Bank",
  "VIB",
  "Grab",
  "Shopee",
  "Vietnam Airlines",
  "Vietjet Air",
  "Ford",
  "PNJ",
  "Thế Giới Di Động"
];
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-8 py-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl tracking-tight text-white", children: "SJK" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-white/70", children: "Group" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-9 md:flex", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: n.href,
        className: "text-[13px] font-medium text-white/95 transition hover:text-[var(--brand-red)]",
        children: n.label
      },
      n.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "/contact",
        className: "hidden rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] md:inline-block",
        children: "Liên hệ hợp tác"
      }
    )
  ] });
}
const heroImg = "/assets/sjk-hero-BDrfYY4U.jpg";
function ContactFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { id: "contact", className: "relative overflow-hidden bg-[var(--ink)] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "",
        loading: "lazy",
        width: 1920,
        height: 1080,
        className: "absolute inset-0 h-full w-full object-cover opacity-25"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1320px] px-8 pt-20 pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--brand-red)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85", children: "Hợp tác cùng SJK Group" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[44px] leading-[1.05] md:text-[56px]", children: [
          "Cùng SJK Group phát triển giá trị",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "truyền thông" }),
          " ngoài trời."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/85", children: [
          "Liên hệ Hotline ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "0933 15 99 88" }),
          " hoặc",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "info@sjkgroup.vn" }),
          " để hợp tác khai thác vị trí quảng cáo, triển khai chiến dịch thương hiệu hoặc tìm hiểu hệ sinh thái thành viên của SJK Group."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:info@sjkgroup.vn",
              className: "inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110",
              children: "Liên hệ hợp tác →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:0933159988",
              className: "inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10",
              children: "Gọi 0933 15 99 88"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid grid-cols-2 gap-10 border-t border-white/15 pt-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl", children: [
            "SJK ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[12px] leading-relaxed text-white/70", children: "Tập đoàn quảng cáo ngoài trời tích hợp hàng đầu Việt Nam." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-1.5 text-[12px] text-white/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Hotline: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "0933 15 99 88" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Email: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "info@sjkgroup.vn" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60", children: "Group" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-[13px] text-white/90", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "hover:text-[var(--brand-red)]", children: n.label }) }, n.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60", children: "Members" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid grid-cols-1 gap-2 text-[13px] text-white/90", children: MEMBERS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ecosystem", className: "hover:text-[var(--brand-red)]", children: m.name }) }, m.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60", children: "Văn phòng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-[12.5px] leading-relaxed text-white/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-[10px] uppercase tracking-[0.22em]", children: "Trụ sở chính" }),
              "Số 80, Đường 17, KP5, P. Bình Trưng, TP. HCM"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-[10px] uppercase tracking-[0.22em]", children: "Hà Nội" }),
              "Tầng 10, Số 5 Điện Biên Phủ, P. Ba Đình"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-[10px] uppercase tracking-[0.22em]", children: "Đà Nẵng" }),
              "Tầng 7, 30 Nguyễn Hữu Thọ, P. Hải Châu"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-[10px] uppercase tracking-[0.22em]", children: "Cần Thơ" }),
              "153Q Trần Hưng Đạo, P. Ninh Kiều"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-[10px] uppercase tracking-[0.22em]", children: "Hải Phòng" }),
              "292 Lê Lợi, P. Gia Viên"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-between border-t border-white/15 pt-6 text-[11px] text-white/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " SJK Group. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-[0.25em]", children: "Corporate OOH Ecosystem" })
      ] })
    ] })
  ] });
}
export {
  ContactFooter as C,
  MEMBERS as M,
  PARTNERS as P,
  SiteHeader as S,
  heroImg as h,
  ledImg as l
};
