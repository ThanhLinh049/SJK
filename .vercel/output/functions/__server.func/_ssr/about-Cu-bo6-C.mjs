import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { i as identityImg } from "./sjk-identity-C0byF-2x.mjs";
import { C as ContactFooter, S as SiteHeader, l as ledImg } from "./ContactFooter-Cl5JFMNX.mjs";
import { n as newsImg, a as airportImg, b as metroImg } from "./sjk-news-CpLMkCmw.mjs";
import { T as Touchpoints, g as golfImg } from "./Touchpoints-B4S44kHG.mjs";
import { e as MapPinned, B as BrainCircuit, D as Database, C as ChartColumn, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
const OPERATING_MODEL = [
  {
    icon: MapPinned,
    title: "Infrastructure",
    desc: "LED, billboard, sân bay, metro, mall, taxi, retail và các điểm chạm đô thị."
  },
  {
    icon: BrainCircuit,
    title: "Technology",
    desc: "AI, pDOOH, CMS, real-time triggers và tự động hóa nội dung quảng cáo."
  },
  {
    icon: Database,
    title: "Measurement",
    desc: "Đo lường hiệu quả OOH, lưu lượng tuyến đường, vị trí và báo cáo chiến dịch."
  },
  {
    icon: ChartColumn,
    title: "Performance",
    desc: "Kết nối O2O qua QR, Wifi Ads, location-based media và dữ liệu chuyển đổi."
  }
];
const ECOSYSTEM_LAYERS = [
  [
    "Media Operation",
    "Shojiki, Lookat Media",
    "Khai thác và vận hành tài sản OOH/DOOH tại các vị trí chiến lược."
  ],
  [
    "Technology & Data",
    "Compass Tech, WikiOOH, Wi5",
    "Đo lường, dữ liệu, wifi marketing, sàn biển bảng và số hóa quy trình OOH."
  ],
  [
    "Creative Experience",
    "Adjika, Inno X Event",
    "Hologram, 3D, drone, activation, event và trải nghiệm thương hiệu."
  ],
  [
    "Investment & Expansion",
    "OIP, Batdongsan Quangcao",
    "Đầu tư, phát triển điểm và mở rộng tài sản truyền thông dài hạn."
  ],
  [
    "Corporate Solutions",
    "OEM Group, AnyScreen",
    "Retail media, màn hình LCD, standee và giải pháp B2B cho doanh nghiệp."
  ]
];
const ERAS = [
  {
    year: "2017",
    label: "Foundation",
    title: "Đặt nền móng vận hành OOH",
    text: "Shojiki Ads được thành lập, hình thành năng lực triển khai quảng cáo ngoài trời thực chiến — nền tảng đầu tiên của hệ sinh thái SJK.",
    img: identityImg
  },
  {
    year: "2019",
    label: "Creative Technology",
    title: "Mở rộng sang quảng cáo công nghệ",
    text: "Liên doanh Adjika mở ra hướng đi mới với hologram, 3D, drone, trình diễn tương tác và creative technology.",
    img: newsImg
  },
  {
    year: "2021",
    label: "National Expansion",
    title: "Từ operator địa phương đến mạng lưới quốc gia",
    text: "Việc mở rộng vận hành tại Hà Nội đánh dấu bước chuyển của SJK sang mô hình triển khai truyền thông đa khu vực.",
    img: airportImg
  },
  {
    year: "2023",
    label: "Global Connection",
    title: "Tiệm cận chuẩn ngành quốc tế",
    text: "SJK kết nối với các mạng lưới, đối tác và liên doanh quốc tế, từng bước nâng chuẩn vận hành OOH tại Việt Nam.",
    img: metroImg
  },
  {
    year: "2024",
    label: "Group Transformation",
    title: "Định hình cấu trúc SJK Group",
    text: "SJK chuyển mình từ đơn vị triển khai quảng cáo thành hệ sinh thái truyền thông tích hợp với các đơn vị thành viên chuyên biệt.",
    img: ledImg
  },
  {
    year: "2025",
    label: "Investment & Scale",
    title: "Mở rộng qua đầu tư và hạ tầng",
    text: "OIP, OEM và các văn phòng mới giúp SJK mở rộng năng lực hợp tác, đầu tư và phát triển tài sản truyền thông dài hạn.",
    img: golfImg
  }
];
const TRUST_ITEMS = [
  ["Doanh nghiệp tiêu biểu", "TP.HCM 2024"],
  ["Inno Culture", "Giải thưởng đổi mới sáng tạo"],
  ["HAA / VAA / WOO", "Kết nối ngành quảng cáo"],
  ["Social Impact", "Hoạt động cộng đồng & xã hội"]
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-[#faf9f6] text-[#050505]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutEssence, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Touchpoints, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutOperatingModel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutEcosystemLogic, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutChronicle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutLeadershipVision, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutTrustImpact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFooter, {})
  ] });
}
function AboutHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: identityImg,
        alt: "SJK Group media infrastructure",
        className: "absolute inset-0 h-full w-full object-cover opacity-70"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85", children: "Giới thiệu SJK Group" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[64px] font-medium leading-[0.95] tracking-tight md:text-[96px]", children: [
        "Hệ sinh thái truyền thông",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "đô thị" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-[720px] text-2xl font-light leading-snug text-white/88 md:text-[32px]", children: "Kết nối vị trí, công nghệ và dữ liệu để kiến tạo hạ tầng OOH thế hệ mới." })
    ] }) })
  ] });
}
function AboutEssence() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#faf9f6] py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-12 px-6 md:grid-cols-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[520px] overflow-hidden bg-[#050505]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: identityImg,
          alt: "SJK urban media layer",
          className: "h-full w-full object-cover opacity-95 transition duration-700 hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55", children: "Urban Media Layer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[28px] font-light leading-[1.15] tracking-[-0.03em]", children: "Hiện diện trong từng chuyển động của đô thị." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center md:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Essence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-[900px] text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl", children: [
        "SJK không chỉ khai thác quảng cáo ngoài trời. SJK xây dựng một",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E3000F]", children: "hệ sinh thái truyền thông" }),
        " có dữ liệu."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/65", children: "Từ tài sản truyền thông, công nghệ vận hành đến đo lường hiệu quả, SJK kết nối các điểm chạm vật lý thành một hạ tầng truyền thông có thể mở rộng cho thương hiệu." })
    ] })
  ] }) });
}
function AboutOperatingModel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-[#faf9f6] py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1320px] px-6 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-[900px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Operating Model" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl", children: "Mô hình vận hành giúp OOH trở thành kênh truyền thông có dữ liệu." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-[#050505]/10 md:grid-cols-2 lg:grid-cols-4", children: OPERATING_MODEL.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-[#faf9f6] p-8 transition hover:bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-8 w-8 text-[#E3000F]", strokeWidth: 1.4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold tracking-[0.28em] text-[#050505]/35", children: [
          "0",
          index + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-12 text-[28px] font-light leading-[1.15] tracking-[-0.03em]", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] leading-[1.8] text-[#050505]/68", children: item.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 h-px w-10 bg-[#E3000F] transition-all group-hover:w-20" })
    ] }, item.title)) })
  ] }) });
}
function AboutEcosystemLogic() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Ecosystem Logic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: " max-w-[900px] text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl", children: "Không chỉ có nhiều công ty thành viên, SJK có một kiến trúc hệ sinh thái." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/65", children: "Mỗi đơn vị đảm nhiệm một lớp năng lực riêng trong chuỗi giá trị truyền thông ngoài trời." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[#050505]/10", children: ECOSYSTEM_LAYERS.map(([name, members, desc], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group grid gap-6 border-b border-[#050505]/10 py-8 md:grid-cols-[90px_1fr]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-light text-[#E3000F]", children: [
            "0",
            index + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[32px] font-light leading-[1.1] tracking-[-0.03em]", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-2 h-5 w-5 text-[#050505]/30 transition group-hover:text-[#E3000F]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E3000F]", children: members }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-[680px] text-[15px] leading-[1.8] text-[#050505]/68", children: desc })
          ] })
        ]
      },
      name
    )) }) })
  ] }) });
}
function AboutChronicle() {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-[#faf9f6] py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[900px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Strategic Evolution" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl leading-[1.04] tracking-[-0.04em] text-[#050505] lg:text-7xl", children: [
        "Hành trình chuyển mình thành",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E3000F]", children: "hệ sinh thái" }),
        " truyền thông."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 grid grid-cols-1 gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#050505]/45", children: "Strategic eras" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-full overflow-hidden shadow-2xl shadow-black/10", children: [
          ERAS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: m.img,
              alt: m.title,
              className: `absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`
            },
            m.year
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E3000F]", children: ERAS[active].label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-7xl font-light leading-none text-white md:text-[90px]", children: ERAS[active].year })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-12 pb-24 pt-12 md:col-span-6 md:space-y-[34vh] md:pb-[40vh] md:pt-[15vh]", children: ERAS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          "data-idx": i,
          ref: (el) => {
            refs.current[i] = el;
          },
          className: `transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-30"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl text-[#E3000F]", children: m.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-px w-full bg-[#050505]/15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#050505]/45", children: m.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#050505] md:text-[42px]", children: m.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/68 md:text-xl md:font-light", children: m.text })
          ]
        },
        m.year
      )) })
    ] })
  ] }) });
}
function AboutLeadershipVision() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-12 px-6 md:grid-cols-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center md:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Leadership Vision" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-[900px] text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl", children: [
        "Tầm nhìn của SJK là trở thành lớp kết nối giữa",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E3000F]", children: "thương hiệu" }),
        " và không gian đô thị."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/65", children: "Khi OOH bước vào kỷ nguyên dữ liệu, SJK tập trung phát triển hạ tầng truyền thông có khả năng đo lường, lập trình và mở rộng trên nhiều điểm chạm." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[520px] overflow-hidden bg-[#050505]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: newsImg,
          alt: "SJK leadership vision",
          className: "h-full w-full object-cover opacity-90"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6 text-white", children: [
        ["01", "Smart City Media"],
        ["02", "Programmatic OOH"],
        ["03", "Data-driven Measurement"]
      ].map(([num, text]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between border-t border-white/15 py-4 first:border-t-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.25em] text-[#E3000F]", children: num }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[24px] font-light leading-[1.15] tracking-[-0.03em]", children: text })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-white/30" })
          ]
        },
        num
      )) })
    ] }) })
  ] }) });
}
function AboutTrustImpact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-[#faf9f6] py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1320px] px-6 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-[900px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Trust & Impact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl", children: "Niềm tin doanh nghiệp được xây dựng từ năng lực triển khai và trách nhiệm xã hội." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-[#050505]/10 md:grid-cols-4", children: TRUST_ITEMS.map(([title, subtitle], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#faf9f6] p-8 transition hover:bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-semibold tracking-[0.28em] text-[#E3000F]", children: [
        "0",
        index + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-10 text-[28px] font-light leading-[1.15] tracking-[-0.03em]", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] leading-[1.8] text-[#050505]/68", children: subtitle })
    ] }, title)) })
  ] }) });
}
function SectionLabel({
  children,
  dark = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[#E3000F]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-[11px] font-semibold uppercase tracking-[0.32em] ${dark ? "text-white/65" : "text-[#050505]/50"}`,
        children
      }
    )
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {});
}
export {
  About as component
};
