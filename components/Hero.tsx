import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ever2 text-white">
      <div className="wrap grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="rise">
          <p className="eyebrow !text-[#FF8A5C]">予防歯科経営の導入支援</p>
          <h1 className="mt-5 font-serif text-[34px] font-bold leading-[1.34] sm:text-[44px]">
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.95] text-mist/90">{hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#cta" className="btn-primary">{hero.ctaPrimary}</a>
            <a
              href="#tiers"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="rise">
          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 sm:p-9">
            <div className="flex items-end gap-3">
              <span className="font-sans text-[64px] font-black leading-none tracking-tight text-white sm:text-[80px]">
                {hero.statValue}
              </span>
              <span className="mb-2 text-[28px] font-bold text-[#FF8A5C]">{hero.statUnit}</span>
            </div>
            <p className="mt-2 text-[14px] font-medium text-mist/85">{hero.statLabel}</p>

            <svg viewBox="0 0 320 96" className="mt-6 w-full" role="img" aria-label="継続管理率の推移イメージ">
              <line x1="0" y1="78" x2="320" y2="78" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <path
                d="M0 70 C 60 64, 110 40, 160 56 C 210 72, 260 64, 320 74"
                fill="none"
                stroke="rgba(255,255,255,0.30)"
                strokeWidth="2"
                strokeDasharray="4 5"
              />
              <path
                className="draw-line"
                d="M0 64 C 60 30, 120 22, 180 20 C 240 18, 280 18, 320 16"
                fill="none"
                stroke="#FF8A5C"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="320" cy="16" r="4" fill="#FF8A5C" />
            </svg>
            <div className="mt-3 flex items-center justify-between text-[11px] text-mist/70">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-[3px] w-4 rounded" style={{ backgroundColor: "#FF8A5C" }} />YouCARE導入院（継続）
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-[3px] w-4 rounded bg-white/30" />一般的な離脱
              </span>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-mist/55">{hero.statNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
