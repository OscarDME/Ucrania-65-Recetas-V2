"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { Check, ChevronDown } from "lucide-react";

function getTimeLeft() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  const days = 0;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Hero() {
  const { hero } = copy;
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-white to-[#fff1f2] pb-16">
      <div className="w-full bg-[var(--color-accent)] text-white text-center py-2 px-4 text-sm md:text-base font-semibold tracking-wide flex flex-wrap items-center justify-center gap-2 md:gap-6">
        <span>{hero.banner}</span>
        {mounted && (
          <span className="flex items-center gap-2 font-mono text-white/95">
            <span className="bg-white/20 rounded px-2 py-0.5">{pad(time.hours)}<span className="text-[10px] ml-1 font-sans opacity-80">{hero.timerLabels.hours}</span></span>
            <span className="bg-white/20 rounded px-2 py-0.5">{pad(time.minutes)}<span className="text-[10px] ml-1 font-sans opacity-80">{hero.timerLabels.minutes}</span></span>
            <span className="bg-white/20 rounded px-2 py-0.5">{pad(time.seconds)}<span className="text-[10px] ml-1 font-sans opacity-80">{hero.timerLabels.seconds}</span></span>
          </span>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
            {hero.kicker}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight leading-[1.1] text-[var(--color-ink)]">
            {hero.headline}
          </h1>

          <ul className="mt-7 space-y-3">
            {hero.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <span className={i === 0 ? "text-base md:text-lg text-slate-700" : "text-base md:text-lg font-bold text-[var(--color-ink)]"}>
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="group mt-8 inline-flex w-full md:w-auto items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-lg md:text-xl px-8 py-5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,148,136,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            {hero.cta}
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-7 flex flex-wrap gap-3">
            {hero.trustChips.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-700 shadow-sm">
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[var(--color-brand-light)] blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-rose-100 blur-3xl opacity-70" />
          </div>
          <div className="relative animate-float-slow">
            <img loading="eager" decoding="async" fetchPriority="high"
              src="/hero-mockup.webp"
              alt={hero.imageAlt}
              className="w-full max-w-[300px] mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
