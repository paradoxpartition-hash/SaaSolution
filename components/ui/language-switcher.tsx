import { common, languageNames, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale, tone = "light" }: { locale: Locale; tone?: "light" | "dark" }) {
  const t = common[locale];
  const base =
    tone === "dark"
      ? "border-white/14 bg-white/8 text-white/72 hover:border-white/35 hover:text-white focus:ring-white/60"
      : "border-black/12 bg-white/60 text-black/65 hover:border-black/35 hover:text-black focus:ring-black/30";
  const active = tone === "dark" ? "bg-white text-black border-white" : "bg-black text-white border-black";

  return (
    <nav aria-label={t.language} className="flex flex-wrap items-center gap-2">
      {locales.map((item) => (
        <a
          aria-current={item === locale ? "true" : undefined}
          className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] transition focus:outline-none focus:ring-2 ${
            item === locale ? active : base
          }`}
          href={`?lang=${item}`}
          key={item}
          title={languageNames[item]}
        >
          {item}
        </a>
      ))}
      <span className={tone === "dark" ? "sr-only" : "sr-only"}>{t.languageNote}</span>
    </nav>
  );
}
