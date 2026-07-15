"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { Zap } from "lucide-react";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/recepty-na-365-dniv-v2";

export default function Closing() {
  const { closing } = copy;
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
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (e) {
      console.error("Closing URL error", e);
    }
  }, []);

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (closing.offerPrice) {
        const cleaned = String(closing.offerPrice).replace(/[^\d.,]/g, "").replace(",", ".");
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
            { item_id: "365_recetas_saludables_closing", item_name: "365 Healthy Recipes", price: priceNum },
          ],
        });
      }
      console.log("[Closing] begin_checkout fired");
    } catch (e) {
      console.error("[Closing] analytics error", e);
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-gradient-to-br from-[var(--color-brand-dark)] via-[#134e4a] to-[var(--color-ink)] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-[var(--color-brand)]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide">
          <Zap className="w-4 h-4" />
          {closing.kicker}
        </div>
        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          {closing.headline}
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl mx-auto">
          {closing.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center">
          <p className="text-white/60 line-through text-base">{closing.regularPrice}</p>
          <p className="text-6xl md:text-7xl font-black text-white drop-shadow-lg">{closing.offerPrice}</p>
        </div>

        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="mt-8 inline-flex w-full md:w-auto max-w-2xl items-center justify-center text-center bg-white hover:bg-slate-100 text-[var(--color-brand-dark)] font-extrabold text-base md:text-xl px-6 md:px-10 py-5 md:py-6 rounded-2xl shadow-xl border-b-4 border-slate-200 transition-all hover:translate-y-0.5 whitespace-normal leading-snug"
        >
          {closing.ctaLabel}
        </a>

        <p className="mt-6 text-xs md:text-sm text-white/70 font-medium">
          {closing.trustRow}
        </p>
      </div>
    </section>
  );
}
