import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InteractiveScrollingStory } from "@/components/ui/interactive-scrolling-story-component";

const projects = [
  { name: "Mithaq", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Digital Islamic Prenup & Will" },
  { name: "PriorityPlanR", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Smart Planning & Scheduling" },
  { name: "Viyra", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "International workflow automation" },
  { name: "First Line AI", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "AI Agent Support Automation" },
  { name: "Smart NFC Guest Pass", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Digital Guest Access" },
  { name: "Delicious Fitness", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Social Food & Meal Prep" }
];

export default function Home() {
  return (
    <main className="bg-[#F3F2EE] text-black">
      <section className="flex flex-col">
        <ContainerScroll
          titleComponent={
            <div>
                            <h1 className="text-4xl md:text-[6rem] font-bold text-black">SaaSolution SL</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl text-black/70">Software that moves the needle.</p>
            </div>
          }
        >
          <div className="relative h-full bg-[#F3F2EE] p-4 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.08),transparent_42%)]" />
            <div className="relative h-full rounded-2xl border border-black/15 bg-[#F3F2EE] p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold md:text-base">SaaSolution SL Project Showcase</h3><span className="rounded-full border border-black/15 bg-[#F3F2EE] px-3 py-1 text-xs text-black/70">Live Product Ecosystem</span></div>
              <div className="relative h-[58%] rounded-xl border border-black/15 bg-[#F3F2EE] p-4 shadow-sm"><div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/50">Featured System</div><div className="mb-2 text-xl font-semibold">Product Operating Layer</div><div className="grid grid-cols-3 gap-2 text-xs"><div className="rounded-lg bg-[#F3F2EE] p-2 shadow-sm">Workflow AI</div><div className="rounded-lg bg-[#F3F2EE] p-2 shadow-sm">Automation</div><div className="rounded-lg bg-[#F3F2EE] p-2 shadow-sm">Dashboards</div></div></div>
              <div className="relative mt-4 h-[34%] overflow-hidden"><div className="project-marquee absolute left-0 top-1/2 flex -translate-y-1/2 gap-3">{[...projects, ...projects].map((project, idx) => <div key={`${project.name}-${idx}`} className={`w-[190px] shrink-0 rounded-xl border border-black/15 bg-gradient-to-br ${project.tone} p-3 shadow-sm`} style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}><div className="mb-5 h-10 rounded-md bg-[#F3F2EE]/85" /><div className="text-xs font-semibold">{project.name}</div><div className="text-[11px] text-black/60">{project.tag}</div></div>)}</div></div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <InteractiveScrollingStory />
    </main>
  );
}
