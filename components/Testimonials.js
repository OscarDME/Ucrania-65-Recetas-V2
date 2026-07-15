"use client";

import { copy } from "@/lib/copy";
import { ChevronDown, Check } from "lucide-react";

export default function Testimonials() {
  const { testimonials } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#f0ebe5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
          {testimonials.headline}
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {testimonials.messages.map((msg, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] ring-1 ring-black/5 select-none pointer-events-none"
            >
              {/* Chat body */}
              <div
                className="px-3 pt-3 pb-4"
                style={{
                  backgroundImage: `url(${testimonials.wallpaper})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Bubble */}
                <div
                  className="relative bg-white shadow-sm"
                  style={{ 
                    borderRadius: "0 12px 12px 12px", 
                    maxWidth: "85%",
                    fontFamily: "Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif"
                  }}
                >
                  {/* Tail */}
                  <svg 
                    className="absolute top-0 -left-[8px]" 
                    width="8" 
                    height="13" 
                    viewBox="0 0 8 13" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.53333 0.343146C0.428761 -0.761424 0 3.5 0 5.5C0 7.5 0.428761 11.7614 1.53333 10.6569L7.46667 4.72351C8.57124 3.61894 8.57124 1.8247 7.46667 0.720131L1.53333 0.343146Z" fill="white"/>
                  </svg>

                  <p className="px-3 pt-2 pb-1 text-[14.2px] text-[#111B21] leading-[1.4] tracking-tight">
                    {msg.text}
                  </p>
                  
                  {/* Time and Blue Checks */}
                  <div className="flex justify-end items-center gap-0.5 px-2 pb-1.5 mt-[-4px]">
                    <span className="text-[11px] text-[#667781] mr-0.5">{msg.time}</span>
                    <div className="flex items-center -space-x-1.5">
                      <Check className="w-[13px] h-[13px] text-[#53bdeb]" strokeWidth={3} />
                      <Check className="w-[13px] h-[13px] text-[#53bdeb]" strokeWidth={3} />
                    </div>
                  </div>
                </div>

                {/* Reactions */}
                {msg.reactions && (
                  <div className="mt-[-8px] relative z-10 ml-2 inline-flex items-center gap-0.5 bg-white border border-gray-100 rounded-full px-1.5 py-0.5 shadow-md text-[13px]">
                    {msg.reactions.join("")}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,148,136,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5 active:translate-y-1"
          >
            {testimonials.cta}
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}