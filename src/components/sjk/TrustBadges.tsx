import { Award, Trophy, Globe, ShieldCheck } from "lucide-react";

const BADGES = [
  {
    icon: Award,
    title: "Doanh nghiệp tiêu biểu",
    subtitle: "UBND TP.HCM 2024",
  },
  {
    icon: Trophy,
    title: "Giải Nhất Inno Culture",
    subtitle: "Sở KH&CN 2024",
  },
  {
    icon: Globe,
    title: "Hội viên toàn cầu",
    subtitle: "World OOH Org",
  },
  {
    icon: ShieldCheck,
    title: "Ban Điều Hành",
    subtitle: "Hiệp hội HAA & VAA",
  },
];

export function TrustBadges() {
  return (
    // Dải ngang màu trắng ngà, có viền mỏng ở dưới để phân cách nhẹ nhàng với section tiếp theo
    <div className="overflow-hidden border-b border-[var(--brand-black)]/10 bg-[var(--warm-white)] py-10">
      <div className="mx-auto max-w-[1320px] px-8">
        
        {/* Container dàn ngang các huy hiệu */}
        <div className="flex flex-col flex-wrap items-center justify-between gap-10 md:flex-row md:gap-4">
          
          {BADGES.map((badge, idx) => (
            <div 
              key={idx} 
              // Hiệu ứng: Mặc định xám nhẹ, hover vào thì rõ nét và icon đổi sang màu cam thương hiệu
              className="group flex cursor-default items-center gap-4 opacity-60 transition-opacity duration-500 hover:opacity-100"
            >
              {/* Vùng chứa Hình ảnh / Icon */}
              <div className="flex-shrink-0">
                {/* Thay thẻ <badge.icon> này bằng <img src="link-logo.png" className="h-10 w-auto" /> nếu có logo thật */}
                <badge.icon 
                  className="h-10 w-10 text-[var(--brand-black)] transition-colors duration-500 group-hover:text-[var(--brand-orange)]" 
                  strokeWidth={1} 
                />
              </div>

              {/* Vùng chứa Text*/}
              <div>
                <p className="text-sm leading-tight text-[var(--brand-black)] md:text-base">
                  {badge.title}
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-black)]/60">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}