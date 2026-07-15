import { copy } from "@/lib/copy";
import { Gift } from "lucide-react";

export default function Bonuses() {
  const { bonuses } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-[var(--color-cream)]/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Gift className="w-4 h-4" />
            {bonuses.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {bonuses.headline}
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bonuses.items.map((b, i) => (
            <article key={i} className="relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden">
              <div className="absolute top-3 right-3 z-10 bg-[var(--color-brand)] text-white text-[10px] md:text-xs font-extrabold px-2.5 py-1 rounded-full shadow">
                {bonuses.freeLabel}
              </div>
              <div className="bg-gradient-to-br from-[var(--color-brand-light)]/60 to-white aspect-square flex items-center justify-center p-5">
                <img loading="lazy" decoding="async" src={b.image} alt={b.title} className="w-full h-full object-contain drop-shadow-xl" />
              </div>
              <div className="p-5 border-t border-slate-100">
                <span className="inline-block text-[11px] font-black tracking-wider text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded mb-2">
                  {b.tag}
                </span>
                <h3 className="text-[15px] font-extrabold text-[var(--color-ink)] leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  <span className="text-slate-400 line-through">{b.value}</span>{" "}
                  <span className="text-[var(--color-brand-dark)]">GRATIS</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white rounded-3xl p-8 md:p-10 shadow-xl">
          <p className="text-xl md:text-3xl font-extrabold leading-tight">
            {bonuses.totalLabel}
          </p>
          <p className="mt-3 text-base md:text-lg text-white/90">
            {bonuses.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
