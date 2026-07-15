import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;
  return (
    <footer className="bg-[var(--color-ink)] text-white/80 py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <span className="font-extrabold tracking-tight text-white text-lg">{footer.brand}</span>
        <p className="text-xs md:text-sm text-white/70">{footer.copyright}</p>
      </div>
    </footer>
  );
}
