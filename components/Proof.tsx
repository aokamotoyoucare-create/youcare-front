import { proof } from "@/content/site";

export default function Proof() {
  return (
    <section id="proof" className="bg-bone py-20 sm:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">{proof.lead}</p>
          <h2 className="h-serif mt-4 text-[28px] sm:text-[34px]">{proof.clinicName}</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.95] text-ink/80">{proof.body}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {proof.metrics.map((m, i) => (
            <div key={i} className="rounded-2xl border border-sage/50 bg-white p-6">
              <p className="text-[13px] font-medium text-ink/60">{m.label}</p>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[11px] text-ink/45">導入前</p>
                  <p className="font-sans text-[22px] font-bold text-ink/40">{m.before}</p>
                </div>
                <span className="mb-1 text-gold">→</span>
                <div className="text-right">
                  <p className="text-[11px] text-ever">導入後</p>
                  <p className="font-sans text-[30px] font-black text-ever">{m.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-ink/45">{proof.noteForOwner}</p>
      </div>
    </section>
  );
}
