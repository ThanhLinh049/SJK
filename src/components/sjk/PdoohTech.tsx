import { CloudSun, QrCode, Users } from "lucide-react";

const FEATURES = [
  {
    icon: CloudSun,
    title: "Real-time Triggers",
    desc: "Tự động đổi thông điệp quảng cáo theo thời tiết, nhiệt độ và khung giờ thực tế.",
  },
  {
    icon: QrCode,
    title: "O2O Performance",
    desc: "Kết nối Online to Offline qua QR Code, Wifi Ads và đo lường chuyển đổi.",
  },
  {
    icon: Users,
    title: "AI Crowd Tracking",
    desc: "Công nghệ AI phân tích hành vi, nhân khẩu học và lưu lượng đám đông theo thời gian thực.",
  },
];

export function PdoohTech() {
  return (
    <section className="border-t border-[var(--charcoal)]/10 bg-[#faf9f6] py-20 text-[var(--ink)] md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-orange)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-orange)]">
              Công nghệ & dữ liệu
            </span>
          </div>

          <h2 className="text-[36px] leading-[1.08] text-[var(--ink)] md:text-[56px]">
            Nền tảng định hình tương lai{" "}
            <span className="text-[var(--brand-orange)]">(PDOOH)</span>.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]/75">
            Đổi mới truyền thông ngoài trời bằng việc tự động hóa phân phối,
            đo lường dữ liệu và tương tác theo thời gian thực.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--charcoal)]/10 bg-[var(--charcoal)]/10 md:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative flex flex-col gap-8 bg-[#faf9f6] p-8 transition-colors hover:bg-white md:p-10"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="h-7 w-7 text-[var(--brand-orange)]"
                    strokeWidth={1.5}
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--charcoal)]/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-light leading-tight text-[var(--ink)]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--charcoal)]/75">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-auto h-px w-10 bg-[var(--brand-orange)] transition-all duration-500 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}