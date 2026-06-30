import { brand, nav } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sage/50 bg-bone/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-[22px] font-bold tracking-tight text-ever">
            You<span className="text-gold">CARE</span>
          </span>
          <span className="hidden text-[12px] text-ink/55 sm:inline">{brand.tagline}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.slice(0, 4).map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[14px] font-medium text-ink/70 transition-colors hover:text-ever"
            >
              {n.label}
            </a>
          ))}
          <a href="#cta" className="btn-primary !px-5 !py-2 !text-[14px]">
            無料相談
          </a>
        </nav>
        <a href="#cta" className="btn-primary !px-5 !py-2 !text-[14px] md:hidden">
          無料相談
        </a>
      </div>
    </header>
  );
}
