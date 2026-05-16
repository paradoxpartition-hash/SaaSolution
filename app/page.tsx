import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InteractiveScrollingStory } from "@/components/ui/interactive-scrolling-story-component";

const projects = [
  { name: "Mithaq", tone: "from-[#f5f7fb] to-[#ebeff8]", tag: "Digital Islamic Prenup & Will" },
  { name: "PriorityPlanR", tone: "from-[#fff7ed] to-[#fdeed8]", tag: "Smart Planning & Scheduling" },
  { name: "Viyra", tone: "from-[#eef7f4] to-[#dff0ea]", tag: "Luxury Real Estate Automation" },
  { name: "First Line AI", tone: "from-[#f4f0ff] to-[#e8e0ff]", tag: "AI Agent Support Automation" },
  { name: "Smart NFC Guest Pass", tone: "from-[#edf7ff] to-[#d9eeff]", tag: "Digital Guest Access" },
  { name: "Delicious Fitness", tone: "from-[#fff3f3] to-[#ffe3e3]", tag: "Social Food & Meal Prep" }
];

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="flex flex-col">
        <ContainerScroll
          titleComponent={
            <div>
                            <h1 className="text-4xl md:text-[6rem] font-bold text-black">SaaSolution SL</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl text-black/70">Software that moves the needle.</p>
            </div>
          }
        >
          <div className="relative h-full bg-gradient-to-b from-white to-neutral-100 p-4 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.08),transparent_42%)]" />
            <div className="relative h-full rounded-2xl border border-neutral-300 bg-white p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold md:text-base">SaaSolution SL Project Showcase</h3><span className="rounded-full border border-black/15 bg-neutral-100 px-3 py-1 text-xs text-black/70">Live Product Ecosystem</span></div>
              <div className="relative h-[58%] rounded-xl border border-neutral-300 bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 shadow-sm"><div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/50">Featured Platform</div><div className="mb-2 text-xl font-semibold">Viyra</div><div className="grid grid-cols-3 gap-2 text-xs"><div className="rounded-lg bg-white p-2 shadow-sm">Property Intake AI</div><div className="rounded-lg bg-white p-2 shadow-sm">Automation Workflows</div><div className="rounded-lg bg-white p-2 shadow-sm">Owner Dashboard</div></div></div>
              <div className="relative mt-4 h-[34%] overflow-hidden"><div className="project-marquee absolute left-0 top-1/2 flex -translate-y-1/2 gap-3">{[...projects, ...projects].map((project, idx) => <div key={`${project.name}-${idx}`} className={`w-[190px] shrink-0 rounded-xl border border-neutral-300 bg-gradient-to-br ${project.tone} p-3 shadow-sm`} style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}><div className="mb-5 h-10 rounded-md bg-white/85" /><div className="text-xs font-semibold">{project.name}</div><div className="text-[11px] text-black/60">{project.tag}</div></div>)}</div></div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <InteractiveScrollingStory />
    </main>
  );
}
