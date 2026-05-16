import { Bot, Cable, Cloud, Code2, Globe2, Layers3, Server, Sparkles } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const products = ["Mithaq", "PriorityPlanR", "Viyra", "First Line AI", "Smart NFC Guest Pass", "Delicious Fitness"];
const tech = ["Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL", "AWS", "OpenAI APIs", "Docker"];

export default function Home() {
  return (
    <main className="bg-[#f8f6f2] text-[#2f343f]">
      <section className="flex flex-col overflow-hidden">
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
          <div className="grid h-full grid-cols-12 gap-3 bg-gradient-to-b from-white to-[#f3f4f7] p-4">
            <div className="col-span-12 md:col-span-7 rounded-2xl border border-[#d8dbe2] bg-white p-4">
              <h3 className="mb-3 flex items-center gap-2 font-semibold"><Layers3 className="h-4 w-4 text-[#b89c6a]"/> Product Cards</h3>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">{products.map((p)=><div key={p} className="rounded-lg border border-[#d8dbe2] bg-[#fbfbfc] p-2">{p}</div>)}</div>
            </div>
            <div className="col-span-12 md:col-span-5 rounded-2xl border border-[#d8dbe2] bg-white p-4">
              <h3 className="mb-3 flex items-center gap-2 font-semibold"><Bot className="h-4 w-4 text-[#b89c6a]"/> AI Workflow Blocks</h3>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="rounded-lg border border-[#d8dbe2] bg-[#fbfbfc] p-2">Lead Intake → Qualification Agent → CRM Routing</div>
                <div className="rounded-lg border border-[#d8dbe2] bg-[#fbfbfc] p-2">Support Ticket → AI Triage → Human Escalation</div>
                <div className="rounded-lg border border-[#d8dbe2] bg-[#fbfbfc] p-2">Data Sync → Insight Engine → Executive Dashboard</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 rounded-2xl border border-[#d8dbe2] bg-white p-4">
              <h3 className="mb-3 flex items-center gap-2 font-semibold"><Code2 className="h-4 w-4 text-[#b89c6a]"/> Technology Stack Badges</h3>
              <div className="flex flex-wrap gap-2">{tech.map((t)=><span key={t} className="rounded-full border border-[#d8dbe2] px-3 py-1 text-xs bg-[#fbfbfc]">{t}</span>)}</div>
            </div>
            <div className="col-span-12 md:col-span-4 rounded-2xl border border-[#d8dbe2] bg-white p-4">
              <h3 className="mb-3 flex items-center gap-2 font-semibold"><Globe2 className="h-4 w-4 text-[#b89c6a]"/> Global Infrastructure</h3>
              <ul className="space-y-2 text-xs md:text-sm"><li className="flex gap-2 items-center"><Cloud className="h-4 w-4"/>Multi-region cloud deployment</li><li className="flex gap-2 items-center"><Server className="h-4 w-4"/>Scalable microservices</li><li className="flex gap-2 items-center"><Cable className="h-4 w-4"/>Secure API integrations</li></ul>
            </div>
          </div>
        </ContainerScroll>
      </section>
    </main>
  );
}
