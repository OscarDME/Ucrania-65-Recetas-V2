import { copy } from "@/lib/copy";
import { XCircle, Sparkles } from "lucide-react";

export default function Story() {
  const { story } = copy;
  return (
    <section className="relative bg-[var(--color-ink)] text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[var(--color-brand)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {story.headlinePre}{" "}
          <span className="text-red-400">{story.headlineHighlight}</span>
        </h2>
        <p className="mt-5 text-center text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
          {story.intro}
        </p>

        <div className="mt-14 bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 md:p-10">
          <p className="text-base md:text-lg text-slate-200 font-semibold mb-6">
            {story.problemsLead}
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {story.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 border border-white/5">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="text-[15px] md:text-base text-slate-100">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/20 text-[var(--color-brand-light)] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            {story.solutionBadge}
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[var(--color-brand-light)] leading-tight max-w-4xl mx-auto">
            {story.solutionHeadline}
          </h3>
        </div>
      </div>
    </section>
  );
}
