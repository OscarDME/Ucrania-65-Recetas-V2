"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { ChevronDown, XCircle, CheckCircle2 } from "lucide-react";

export default function FAQ() {
  const { faq } = copy;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center bg-gradient-to-br from-[var(--color-brand-light)]/40 to-white rounded-3xl border border-slate-200 p-6 md:p-10">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-brand)]/20 rounded-full blur-2xl" />
              <img loading="lazy" decoding="async"
                src="/carolina.webp"
                alt={faq.authorImageAlt}
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
          <div>
            <span className="inline-block text-xs md:text-sm font-extrabold tracking-wide text-[var(--color-brand-dark)] bg-[var(--color-brand-light)] px-3 py-1 rounded-full">
              {faq.authorRole}
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)]">
              {faq.authorHeadline}
            </h3>
            <p className="mt-4 text-slate-600 text-[15px] md:text-base leading-relaxed">
              {faq.authorBio}
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-center text-2xl md:text-4xl font-extrabold text-[var(--color-ink)]">
            {faq.worksHeadline}
          </h3>
          <ul className="mt-8 space-y-3">
            {faq.doesntWork.map((d, i) => (
              <li key={i} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="font-extrabold text-red-700 text-[15px] md:text-base">{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-start gap-3 bg-[var(--color-brand-light)]/60 border border-[var(--color-brand)]/20 rounded-xl p-5">
            <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-dark)] shrink-0 mt-0.5" />
            <p className="text-[var(--color-brand-dark)] font-semibold text-[15px] md:text-base leading-relaxed">
              {faq.worksText}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
            {faq.headline}
          </h2>
          <p className="mt-3 text-center text-slate-600">{faq.subheadline}</p>

          <div className="mt-10 max-w-3xl mx-auto space-y-3">
            {faq.items.map((it, i) => {
              const open = openIdx === i;
              return (
                <div key={i} className={`rounded-2xl border transition-all ${open ? "border-[var(--color-brand)]/40 shadow-md bg-white" : "border-slate-200 bg-white"}`}>
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    className="w-full flex items-center justify-between text-left px-5 md:px-6 py-5 gap-4"
                    aria-expanded={open}
                  >
                    <span className="text-[15px] md:text-base font-extrabold text-[var(--color-ink)]">{it.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[var(--color-brand-dark)] transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40" : "max-h-0"}`}>
                    <div className="px-5 md:px-6 pb-5 text-slate-600 text-[15px] leading-relaxed">
                      {it.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
