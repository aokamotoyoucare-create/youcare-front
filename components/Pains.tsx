import { pains } from "@/content/site";

export default function Pains() {
  return (
    <section id="pains" className="bg-bone py-20 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">{pains.lead}</p>
          <ul className="mt-7 space-y-4">
            {pains.items.map((p, i) => (
              <li key={i} className="flex gap-3 border-b border-sage/40 pb-4">
                <span className="mt-0.5 font-serif text-[15px] font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed text-ink/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-mist p-8 sm:p-10">
          <p className="eyebrow">YouCAREの答え</p>
          <h2 className="h-serif mt-4 text-[26px] sm:text-[30px]">{pains.answer.title}</h2>
          <p className="mt-5 text-[15px] leading-[1.95] text-ink/80">{pains.answer.body}</p>
        </div>
      </div>
    </section>
  );
}
