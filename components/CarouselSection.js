"use client";

import { useRef } from "react";
import { copy } from "@/lib/copy";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselSection() {
  const { carouselSection } = copy;
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.85 * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-[var(--color-brand-light)]/25">
      <div className="max-w-6xl mx-auto relative">
        <div className="relative">
          <button
            aria-label={carouselSection.prevLabel}
            onClick={() => scrollBy("prev")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center hover:bg-slate-50"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            aria-label={carouselSection.nextLabel}
            onClick={() => scrollBy("next")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center hover:bg-slate-50"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar py-2 scroll-smooth"
          >
            {carouselSection.images.map((img, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white"
              >
                <img loading="lazy" decoding="async"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
