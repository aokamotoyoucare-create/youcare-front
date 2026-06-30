import { cta, brand, contactForm } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export default function CTA() {
  return (
    <>
      <section id="cta" className="bg-ever py-20 text-white sm:py-24">
        <div className="wrap max-w-3xl">
          <div className="text-center">
            <h2 className="font-serif text-[28px] font-bold leading-snug sm:text-[34px]">{cta.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.95] text-mist/85">{cta.body}</p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-bone p-6 text-ink sm:p-9">
            <h3 className="font-serif text-[20px] font-bold text-ever">{contactForm.heading}</h3>
            <p className="mt-1.5 text-[13px] text-ink/60">{contactForm.intro}</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <p className="mt-6 text-center text-[13px] text-mist/70">
            またはメールで：
            <a href={`mailto:${cta.email}`} className="underline underline-offset-2">
              {cta.email}
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-ever2 py-12 text-mist/70">
        <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-serif text-[20px] font-bold text-white">
              You<span className="text-[#FF8A5C]">CARE</span>
            </span>
            <p className="mt-3 text-[13px]">運営：{brand.operator}</p>
            <p className="text-[13px]">{brand.trademark}</p>
          </div>
          <p className="max-w-md text-[11px] leading-relaxed text-mist/50">{brand.disambiguation}</p>
        </div>
      </footer>
    </>
  );
}
