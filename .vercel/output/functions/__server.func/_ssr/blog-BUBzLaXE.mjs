import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as ledImg, S as SiteHeader, C as ContactFooter, h as heroImg } from "./ContactFooter-Cl5JFMNX.mjs";
import { i as ifcImg } from "./sjk-ifc-VJL4akr2.mjs";
import { a as airportImg, b as metroImg, m as mallImg, n as newsImg } from "./sjk-news-CpLMkCmw.mjs";
import { S as Search, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
const CATEGORIES = [
  "Tất cả",
  "OOH",
  "DOOH",
  "Media Tech",
  "Case Study",
  "Retail Media",
  "Smart City"
];
const POSTS = [
  {
    title: "OOH đang chuyển mình từ kênh hiển thị sang hạ tầng truyền thông có dữ liệu.",
    category: "Media Intelligence",
    date: "2025",
    image: ifcImg,
    featured: true
  },
  {
    title: "Programmatic DOOH mở ra cách mua quảng cáo ngoài trời linh hoạt hơn.",
    category: "DOOH",
    date: "2025",
    image: ledImg
  },
  {
    title: "Sân bay vẫn là điểm chạm truyền thông cao cấp cho thương hiệu.",
    category: "Airport",
    date: "2025",
    image: airportImg
  },
  {
    title: "Metro và truyền thông đô thị tạo cơ hội mới cho chiến dịch OOH.",
    category: "Transport",
    date: "2025",
    image: metroImg
  },
  {
    title: "Retail media trong trung tâm thương mại và siêu thị đang phát triển mạnh.",
    category: "Retail Media",
    date: "2025",
    image: mallImg
  },
  {
    title: "Đo lường OOH giúp chiến dịch ngoài trời minh bạch hơn.",
    category: "Measurement",
    date: "2025",
    image: newsImg
  }
];
const TOPICS = [
  "Programmatic DOOH",
  "AI Measurement",
  "Airport Advertising",
  "Retail Media",
  "OOH Planning",
  "Smart City Media"
];
function BlogPage() {
  const [featured, ...posts] = POSTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-[#faf9f6] text-[#050505]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-30 bg-[#050505] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogMenu, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedPost, { post: featured }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogContent, { posts }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFooter, {})
  ] });
}
function BlogBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[calc(90vh-96px)] w-full overflow-hidden bg-[#050505] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "SJK Insights",
        className: "absolute inset-0 h-full w-full object-cover opacity-70"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-[var(--brand-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85", children: "Insights / Journal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[64px] font-medium leading-[0.95] tracking-tight md:text-[96px]", children: [
        "Góc nhìn về",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "OOH" }),
        " ",
        "và truyền thông đô thị."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-[720px] text-2xl font-light leading-snug text-white/88 md:text-[32px]", children: [
        "Xu hướng, dữ liệu, case study và góc nhìn chuyên sâu từ hệ sinh thái",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-red)]", children: "SJK Group" }),
        "."
      ] })
    ] }) })
  ] });
}
function BlogMenu() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-0 z-20 border-b border-[#050505]/10 bg-[#faf9f6]/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex gap-8 overflow-x-auto", children: CATEGORIES.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#",
        className: `shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${index === 0 ? "text-[var(--brand-red)]" : "text-[#050505]/55 hover:text-[var(--brand-red)]"}`,
        children: item
      },
      item
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex w-full items-center gap-3 border-b border-[#050505]/15 pb-2 md:w-[260px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-[#050505]/35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          placeholder: "Tìm bài viết...",
          className: "w-full bg-transparent text-[13px] outline-none placeholder:text-[#050505]/35"
        }
      )
    ] })
  ] }) });
}
function FeaturedPost({
  post
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#faf9f6] py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1320px] px-6 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid gap-10 md:grid-cols-12 md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Featured" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[54px] font-light leading-[0.98] tracking-tight md:text-[48px]", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-[15px] leading-relaxed text-[#050505]/68", children: "Khi DOOH, AI và dữ liệu vị trí tạo nên thế hệ truyền thông ngoài trời mới." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#",
          className: "mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#050505] transition hover:text-[var(--brand-red)]",
          children: [
            "Đọc bài viết",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#",
        className: "group relative h-[560px] overflow-hidden bg-[#050505] md:col-span-7",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.image,
            alt: post.title,
            className: "h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
          }
        )
      }
    )
  ] }) }) });
}
function BlogContent({
  posts
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-[#050505]/10 bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Latest Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-10 md:grid-cols-2", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ArticleCard,
        {
          post
        },
        post.title
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-28 border-t border-[#050505]/10 pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-[#050505]/45", children: "Chủ đề nổi bật" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: TOPICS.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          className: "rounded-full border border-[#050505]/10 px-4 py-2 text-[12px] text-[#050505]/65 transition hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]",
          children: topic
        },
        topic
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-[#050505]/10 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-[#050505]/45", children: "SJK Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-[15px] leading-relaxed text-[#050505]/65", children: "Nơi cập nhật xu hướng OOH, DOOH, Media Tech và những thay đổi trong hành vi truyền thông đô thị." })
      ] })
    ] }) })
  ] }) });
}
function ArticleCard({
  post
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[300px] overflow-hidden bg-[#050505]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: post.image,
        alt: post.title,
        className: "h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#050505]/10 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]", children: [
        post.category,
        " · ",
        post.date
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-[32px] font-light leading-[1.08] tracking-tight transition group-hover:text-[var(--brand-red)]", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#050505]/60", children: [
        "Đọc bài viết",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) });
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
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPage, {});
}
export {
  Blog as component
};
