"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { ShieldCheck, Check } from "lucide-react";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/recepty-na-365-dniv-v2";

export default function FinalCta() {
  const { finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");

        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");

        if (src || fbclid) {
          let urlObj;
          try {
            urlObj = new URL(BASE_CHECKOUT_URL);
          } catch {
            return;
          }

          if (src) {
            urlObj.searchParams.set("src", src);
            console.log("[FinalCTA] src added ->", src);
          }

          if (fbclid) {
            urlObj.searchParams.set("fbclid", fbclid);
            console.log("[FinalCTA] fbclid added ->", fbclid);
          }

          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (error) {
      console.error("[FinalCTA] URL build error:", error);
    }
  }, []);

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (finalCta.offerPrice) {
        const cleaned = String(finalCta.offerPrice)
          .replace(/[^\d.,]/g, "")
          .replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "USD",
          items: [
            {
              item_id: "365_recetas_saludables_cta",
              item_name: "365 Healthy Recipes",
              price: priceNum,
            },
          ],
        });
      }

      console.log("[FinalCTA] begin_checkout fired");
      console.log("[FinalCTA] Navigating to:", checkoutUrl);
    } catch (err) {
      console.error("[FinalCTA] analytics error:", err);
    }
  };

  return (
    <section
      id="final-cta-section"
      className="relative w-full py-20 md:py-28 px-4 md:px-6 bg-gradient-to-br from-[#f4fafb] via-white to-[var(--color-brand-light)]/40 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--color-brand-light)] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="text-sm md:text-base uppercase tracking-wide text-slate-500 font-bold">
          {finalCta.preHeadline}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-md">
          {finalCta.urgencyTop}
        </div>

        <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-[var(--color-ink)] leading-tight max-w-3xl">
          {finalCta.headline}
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl">
          {finalCta.subUrgency}
        </p>

        <div className="mt-10 w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)] p-6 md:p-8">
          <ul className="text-left space-y-2.5">
            {finalCta.bundleList.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className={i === 0 ? "text-[var(--color-accent-dark)] font-extrabold" : "text-slate-700 font-semibold"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[300px] mt-10">
          <img loading="lazy" decoding="async"
            src="/cta-mockup.webp"
            alt={finalCta.imageAlt}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="mt-2 flex items-center gap-3 bg-[var(--color-brand-light)]/70 rounded-full px-4 py-2">
          <ShieldCheck className="w-5 h-5 text-[var(--color-brand-dark)]" />
          <p className="text-sm md:text-base text-[var(--color-brand-dark)] font-semibold">
            {finalCta.guaranteeText}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <p className="text-slate-500 text-base font-medium">
            {finalCta.regularPriceLabel}{" "}
            <span className="line-through">{finalCta.regularPrice}</span>
          </p>
          <div className="mt-1 flex items-end gap-3">
            <p className="text-5xl md:text-7xl font-black text-[var(--color-brand)] tracking-tight drop-shadow-sm">
              {finalCta.offerPrice}
            </p>
            <span className="mb-2 bg-[var(--color-accent)] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-full shadow">
              {finalCta.discountBadge}
            </span>
          </div>
          <p className="mt-2 text-[var(--color-accent-dark)] font-bold text-sm md:text-base">
            {finalCta.urgencyText}
          </p>
          <p className="mt-1 text-slate-500 text-sm">{finalCta.bottomUrgency}</p>
        </div>

        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="mt-8 inline-flex w-full md:w-auto max-w-2xl items-center justify-center text-center bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-xl px-6 md:px-10 py-5 md:py-6 rounded-2xl shadow-[0_15px_40px_-15px_rgba(13,148,136,0.7)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5 whitespace-normal leading-snug"
        >
          {finalCta.button}
        </a>

        <p className="mt-5 text-xs md:text-sm text-slate-500 font-medium">
          {finalCta.trustRow}
        </p>
      </div>
    </section>
  );
}
