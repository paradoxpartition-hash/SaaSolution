import { Sparkles } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const projects = [
  { name: "Mithaq", tone: "from-[#f5f7fb] to-[#ebeff8]", tag: "Legal AI" },
  { name: "PriorityPlanR", tone: "from-[#fff7ed] to-[#fdeed8]", tag: "Smart Planning" },
  { name: "Viyra", tone: "from-[#eef7f4] to-[#dff0ea]", tag: "Luxury Real Estate" },
  { name: "First Line AI", tone: "from-[#f4f0ff] to-[#e8e0ff]", tag: "Support Automation" },
  { name: "Smart NFC Guest Pass", tone: "from-[#edf7ff] to-[#d9eeff]", tag: "Hospitality Access" },
  { name: "Delicious Fitness", tone: "from-[#fff3f3] to-[#ffe3e3]", tag: "Food & Wellness" }
];

export default function Home() {
  return (
    <main className="bg-[#f8f6f2] text-[#2f343f]">
      <section className="flex flex-col">
        <ContainerScroll
          titleComponent={
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b89c6a]/40 bg-white px-4 py-1 text-sm font-medium text-[#2f343f]/80">
                <Sparkles className="h-4 w-4 text-[#b89c6a]" /> SaaSolution SL
              </p>
              <h1 className="text-4xl md:text-[6rem] font-bold text-black">
                Building intelligent SaaS infrastructure for modern global businesses.
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl text-[#2f343f]/75">
                SaaSolution SL is a Paradox FZCO company developing AI-first platforms, automation systems and scalable digital products for international markets.
              </p>
            </div>
          }
        >
          <div className="relative h-full bg-gradient-to-b from-[#ffffff] to-[#f2f4f8] p-4 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(184,156,106,0.12),transparent_42%)]" />
            <div className="relative h-full rounded-2xl border border-[#d8dbe2]/80 bg-white/90 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#2f343f] md:text-base">SaaSolution SL Project Showcase</h3>
                <span className="rounded-full border border-[#b89c6a]/30 bg-[#fffaf0] px-3 py-1 text-xs text-[#7b6438]">Live Product Ecosystem</span>
              </div>

              <div className="relative h-[58%] rounded-xl border border-[#d8dbe2] bg-gradient-to-br from-[#f6f8fc] to-[#eef2f8] p-4 shadow-sm">
                <div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#7e8595]">Featured Platform</div>
                <div className="mb-2 text-xl font-semibold">Viyra</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-lg bg-white p-2 shadow-sm">Property Intake AI</div>
                  <div className="rounded-lg bg-white p-2 shadow-sm">Automation Workflows</div>
                  <div className="rounded-lg bg-white p-2 shadow-sm">Owner Dashboard</div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-lg bg-white/90 p-2 text-[11px]">Listing Ops Timeline</div>
                  <div className="h-16 rounded-lg bg-white/90 p-2 text-[11px]">International Market Signals</div>
                </div>
              </div>

              <div className="relative mt-4 h-[34%] overflow-hidden">
                <div className="project-marquee absolute left-0 top-1/2 flex -translate-y-1/2 gap-3">
                  {[...projects, ...projects].map((project, idx) => (
                    <div
                      key={`${project.name}-${idx}`}
                      className={`w-[180px] shrink-0 rounded-xl border border-[#d8dbe2] bg-gradient-to-br ${project.tone} p-3 shadow-sm`}
                      style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}
                    >
                      <div className="mb-5 h-10 rounded-md bg-white/85" />
                      <div className="text-xs font-semibold">{project.name}</div>
                      <div className="text-[11px] text-[#5b6478]">{project.tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>
    </main>
  );
}
