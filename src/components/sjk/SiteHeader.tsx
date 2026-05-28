import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "./data";
import Logo from "@/assets/logo-sjk-group.svg";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-8 md:py-7">
        <a href="/" className="relative z-50 flex items-center">
          <img
            src={Logo}
            alt="SJK Group"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[13px] font-medium text-white/95 transition hover:text-[var(--brand-orange)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] md:inline-block"
        >
          Liên hệ hợp tác
        </a>

        <button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-[var(--brand-orange)] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#050505]/96 text-white backdrop-blur-xl transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-8 pt-28">
          <nav className="border-t border-white/10">
            {NAV.map((n, index) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-6"
              >
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-orange)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mt-2 text-[32px] font-light leading-none tracking-tight text-white">
                    {n.label}
                  </div>
                </div>

                <span className="text-2xl text-white/30 transition group-hover:translate-x-1 group-hover:text-[var(--brand-orange)]">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-red)] px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--brand-orange)]"
            >
              Liên hệ hợp tác
            </a>

            <div className="mt-6 grid grid-cols-2 gap-4 text-[12px] text-white/60">
              <a href="tel:0933159988" className="hover:text-[var(--brand-orange)]">
                0933 15 99 88
              </a>
              <a
                href="mailto:info@sjkgroup.vn"
                className="text-right hover:text-[var(--brand-orange)]"
              >
                info@sjkgroup.vn
              </a>
            </div>

            <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-white/35">
              Corporate OOH Ecosystem
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}