"use client";

import { copy } from "@/lib/copy";
import { Check, ChevronDown } from "lucide-react";

export default function Features() {
  const { features } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-[var(--color-cream)]/60 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {features.headline}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            {features.subheadline}
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.categories.map((c, i) => (
            <article key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img loading="lazy" decoding="async"
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-extrabold text-[var(--color-ink)]">{c.title}</h3>
                <p className="mt-2 text-slate-600 text-[14.5px] leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,148,136,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            {features.ctaMid}
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-20 text-center">
          <p className="text-base md:text-lg text-slate-600 mb-5">{features.badgesHeadline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {features.badges.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-white border-2 border-[var(--color-brand)]/20 text-[var(--color-brand-dark)] font-extrabold text-sm md:text-base px-4 py-2 rounded-full shadow-sm">
                <Check className="w-4 h-4" strokeWidth={3} />
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-center text-2xl md:text-4xl font-extrabold text-[var(--color-ink)]">
            {features.audienceHeadline}
          </h3>
          <ul className="mt-8 space-y-4">
            {features.audience.map((a, i) => (
              <li key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] flex items-center justify-center mt-0.5">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <div>
                  <h4 className="text-base md:text-lg font-extrabold text-[var(--color-ink)]">{a.title}</h4>
                  <p className="mt-1 text-slate-600 text-[14.5px] md:text-[15px] leading-relaxed">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
