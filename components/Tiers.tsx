import { tiers } from "@/content/site";

export default function Tiers() {
  return (
    <section id="tiers" className="bg-ever2 py-20 text-white sm:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow !text-[#FF8A5C]">プラン</p>
          <h2 className="mt-4 font-serif text-[28px] font-bold sm:text-[34px]">{tiers.lead}</h2>
          <p className="mt-4 text-[14px] text-mist/80">{tiers.note}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.items.map((t) => (
            <div
              key={t.tag}
              className={
                "flex flex-col rounded-2xl p-7 " +
                (t.featured
                  ? "bg-white text-ink ring-2 ring-gold"
                  : "border border-white/15 bg-white/[0.05] text-white")
              }
            >
              <div className="flex items-center justify-between">
                <span
                  className={
                    "text-[11px] font-bold tracking-[0.18em] " +
                    (t.featured ? "text-gold" : "text-mist/70")
                  }
                >
                  {t.tag}
                </span>
                {t.featured && (
                  <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold text-white">
                    おすすめ
                  </span>
                )}
              </div>
              <h3 className={"mt-3 font-serif text-[22px] font-bold " + (t.featured ? "text-ever" : "text-white")}>
                {t.name}
              </h3>
              <p className={"mt-1 text-[13px] " + (t.featured ? "text-ink/60" : "text-mist/70")}>
                {t.summary}
              </p>
              <div className="mt-5">
                <span className={"text-[30px] font-black " + (t.featured ? "text-ink" : "text-white")}>
                  {t.price}
                </span>
                <p className={"mt-1 text-[12px] " + (t.featured ? "text-ink/55" : "text-mist/60")}>{t.unit}</p>
              </div>
              <ul className="mt-6 space-y-2.5">
                {t.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed">
                    <span className={"mt-1 " + (t.featured ? "text-gold" : "text-[#FF8A5C]")}>✓</span>
                    <span className={t.featured ? "text-ink/80" : "text-mist/85"}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-gold/40 bg-gold/[0.08] p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-serif text-[20px] font-bold text-white">{tiers.entry.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-mist/85">{tiers.entry.body}</p>
          </div>
          <a href="#cta" className="btn-primary whitespace-nowrap">{tiers.entry.cta}</a>
        </div>
      </div>
    </section>
  );
}
