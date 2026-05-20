import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InteractiveScrollingStory } from "@/components/ui/interactive-scrolling-story-component";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { homeContent } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";

const projects = [
  { name: "Mithaq", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Digital Islamic Prenup & Will" },
  { name: "PriorityPlanR", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Smart Planning & Scheduling" },
  { name: "Viyra", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "International workflow automation" },
  { name: "First Line AI", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "AI Agent Support Automation" },
  { name: "Smart NFC Guest Pass", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Digital Guest Access" },
  { name: "Delicious Fitness", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Social Food & Meal Prep" }
] as const;

export default async function Home() {
  const locale = await getLocale();
  const t = homeContent[locale];
  const translatedProjects = projects.map((project) => ({ ...project, tag: t.projectTags[project.name] ?? project.tag }));

  return (
    <main className="bg-[#F3F2EE] text-black">
      <div className="fixed right-4 top-4 z-50">
        <LanguageSwitcher locale={locale} />
      </div>
      <section className="flex flex-col">
        <ContainerScroll
          titleComponent={
            <div>
              <h1 className="text-4xl md:text-[6rem] font-bold text-black">SaaSolution SL</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl text-black/70">{t.heroSubtitle}</p>
            </div>
          }
        >
          <div className="relative h-full bg-[#F3F2EE] p-4 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.08),transparent_42%)]" />
            <div className="relative h-full rounded-2xl border border-black/15 bg-[#F3F2EE] p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold md:text-base">{t.showcaseTitle}</h3><span className="rounded-full border border-black/15 bg-[#F3F2EE] px-3 py-1 text-xs text-black/70">{t.ecosystem}</span></div>
              <div className="relative h-[58%] rounded-xl border border-black/15 bg-[#F3F2EE] p-4 shadow-sm"><div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/50">{t.featuredSystem}</div><div className="mb-2 text-xl font-semibold">{t.productLayer}</div><div className="grid grid-cols-3 gap-2 text-xs">{t.chips.map((chip) => <div className="rounded-lg bg-[#F3F2EE] p-2 shadow-sm" key={chip}>{chip}</div>)}</div></div>
              <div className="relative mt-4 h-[34%] overflow-hidden"><div className="project-marquee absolute left-0 top-1/2 flex -translate-y-1/2 gap-3">{[...translatedProjects, ...translatedProjects].map((project, idx) => <div key={`${project.name}-${idx}`} className={`w-[190px] shrink-0 rounded-xl border border-black/15 bg-gradient-to-br ${project.tone} p-3 shadow-sm`} style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}><div className="mb-5 h-10 rounded-md bg-[#F3F2EE]/85" /><div className="text-xs font-semibold">{project.name}</div><div className="text-[11px] text-black/60">{project.tag}</div></div>)}</div></div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <InteractiveScrollingStory locale={locale} />
    </main>
  );
}
