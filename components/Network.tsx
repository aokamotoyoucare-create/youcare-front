import { network, trust } from "@/content/site";

export default function Network() {
  return (
    <>
      <section id="network" className="bg-mist py-20 sm:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">{network.lead}</p>
            <h2 className="h-serif mt-4 text-[28px] sm:text-[32px]">
              一院では得られない学びを、<br />グループで。
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.95] text-ink/80">{network.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {network.stats.map((s, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 text-center">
                <p className="font-serif text-[24px] font-bold text-ever">{s.value}</p>
                <p className="mt-2 text-[12px] leading-snug text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 sm:py-24">
        <div className="wrap">
          <p className="eyebrow">{trust.lead}</p>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {trust.items.map((t, i) => (
              <div key={i} className="border-t border-sage/50 pt-5">
                <h3 className="font-serif text-[18px] font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
