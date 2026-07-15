"use client";

import { copy } from "@/lib/copy";
import { HeartPulse, Utensils, CalendarDays, Timer, GraduationCap, Scale, ChevronDown } from "lucide-react";

const ICONS = { HeartPulse, Utensils, CalendarDays, Timer, GraduationCap, Scale };

export default function Benefits() {
  const { benefits } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] max-w-4xl mx-auto">
          {benefits.stepsHeadline}
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {benefits.steps.map((s) => (
            <div key={s.number} className="relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-7">
              <div className="absolute -top-5 left-6 w-12 h-12 rounded-xl bg-[var(--color-brand)] text-white font-black text-xl flex items-center justify-center shadow-lg">
                {s.number}
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-[var(--color-ink)]">{s.title}</h3>
              <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,148,136,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            {benefits.ctaMid}
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-24">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
            {benefits.headline}
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.items.map((it, i) => {
              const Icon = ICONS[it.icon] || HeartPulse;
              return (
                <div key={i} className="group bg-gradient-to-br from-white to-[var(--color-brand-light)]/30 rounded-2xl border border-slate-200 p-6 hover:border-[var(--color-brand)]/40 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-light)] flex items-center justify-center text-[var(--color-brand-dark)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[var(--color-ink)]">{it.title}</h3>
                  <p className="mt-2 text-slate-600 text-[14.5px] leading-relaxed">{it.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
