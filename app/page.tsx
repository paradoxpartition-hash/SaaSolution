import {
  ArrowRight,
  Bot,
  Building2,
  Cable,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Server,
  Sparkles
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const products = [
  "Mithaq",
  "PriorityPlanR",
  "Viyra",
  "First Line AI",
  "Smart NFC Guest Pass",
  "Delicious Fitness"
];

const tech = ["Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL", "AWS", "OpenAI APIs", "Docker"];

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#f9f7f3] to-[#f3f4f7]">
        <ContainerScroll
          titleComponent={
            <>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-muted-gold/40 bg-white px-4 py-1 text-sm text-graphite/80">
                <Sparkles className="h-4 w-4 text-muted-gold" /> SaaSolution SL
              </p>
              <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                Building intelligent SaaS infrastructure for modern global businesses.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base text-graphite/75 md:text-lg">
                SaaSolution SL is a Paradox FZCO company developing AI-first platforms, automation systems and scalable digital products for international markets.
              </p>
            </>
          }
        >
          <div className="grid h-full grid-cols-1 gap-4 bg-[radial-gradient(circle_at_top,_#fff,_#f5f6f8)] p-4 md:grid-cols-12 md:p-8">
            <div className="rounded-2xl border border-soft-gray bg-white p-4 md:col-span-7">
              <h3 className="mb-3 flex items-center gap-2 font-medium"><Layers3 className="h-4 w-4 text-muted-gold" /> Product Portfolio</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {products.map((p) => (
                  <div key={p} className="rounded-xl border border-soft-gray/80 bg-[#fbfbfc] p-3 text-sm">{p}</div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-soft-gray bg-white p-4 md:col-span-5">
              <h3 className="mb-3 flex items-center gap-2 font-medium"><Bot className="h-4 w-4 text-muted-gold" /> AI Workflows</h3>
              <div className="space-y-2 text-sm">
                <p className="rounded-lg border border-soft-gray/80 bg-[#fbfbfc] p-2">Lead Intake → Qualification Agent → CRM Routing</p>
                <p className="rounded-lg border border-soft-gray/80 bg-[#fbfbfc] p-2">Support Ticket → AI Triage → Human Escalation</p>
                <p className="rounded-lg border border-soft-gray/80 bg-[#fbfbfc] p-2">Data Sync → Insight Engine → Executive Dashboard</p>
              </div>
            </div>
            <div className="rounded-2xl border border-soft-gray bg-white p-4 md:col-span-8">
              <h3 className="mb-3 flex items-center gap-2 font-medium"><Code2 className="h-4 w-4 text-muted-gold" /> Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span key={item} className="rounded-full border border-soft-gray bg-[#fbfbfc] px-3 py-1 text-xs">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-soft-gray bg-white p-4 md:col-span-4">
              <h3 className="mb-3 flex items-center gap-2 font-medium"><Globe2 className="h-4 w-4 text-muted-gold" /> Global Infrastructure</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-center gap-2"><Cloud className="h-4 w-4" /> Multi-region cloud deployment</li>
                <li className="flex items-center gap-2"><Server className="h-4 w-4" /> Scalable microservices</li>
                <li className="flex items-center gap-2"><Cable className="h-4 w-4" /> Secure API integrations</li>
              </ul>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <section className="mx-auto max-w-6xl space-y-20 px-6 py-20">
        <Section title="About SaaSolution SL" text="SaaSolution SL architects enterprise-grade SaaS products with an AI-first engineering mindset, supporting global businesses through robust automation and digital acceleration." />
        <ListSection title="Product portfolio" items={products} />
        <ListSection title="What we build" items={["AI-native software platforms", "Business process automation systems", "Workflow orchestration tools", "Scalable multi-tenant SaaS products"]} />
        <ListSection title="Industries served" items={["Legal & compliance", "Real estate", "Hospitality & rentals", "Consumer wellness", "Professional services"]} />
        <ListSection title="Technology stack" items={tech} />

        <section className="rounded-3xl border border-soft-gray bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold">Partnership CTA</h2>
          <p className="mt-2 text-graphite/75">Let’s collaborate to design intelligent digital infrastructure that strengthens your global business operations.</p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-graphite px-5 py-3 text-sm font-medium text-white transition hover:bg-graphite/90">
            Start a Partnership Conversation <ArrowRight className="h-4 w-4" />
          </button>
        </section>

        <section className="rounded-3xl border border-soft-gray bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold">Contact form</h2>
          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-soft-gray p-3" placeholder="Full name" />
            <input className="rounded-xl border border-soft-gray p-3" placeholder="Company" />
            <input className="rounded-xl border border-soft-gray p-3 md:col-span-2" placeholder="Email address" type="email" />
            <textarea className="min-h-32 rounded-xl border border-soft-gray p-3 md:col-span-2" placeholder="Tell us about your goals" />
            <button className="rounded-xl bg-muted-gold px-4 py-3 text-sm font-medium text-white md:col-span-2">Send Inquiry</button>
          </form>
          <div className="mt-6 grid gap-2 text-sm text-graphite/70 md:grid-cols-3">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@saasolution.example</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Global operations</p>
            <p className="flex items-center gap-2"><Building2 className="h-4 w-4" /> SaaSolution SL</p>
          </div>
        </section>
      </section>

      <footer className="border-t border-soft-gray bg-white py-8 text-center text-sm text-graphite/70">
        © 2026 SaaSolution SL. A Paradox FZCO company. All rights reserved.
      </footer>
    </main>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 max-w-3xl text-graphite/75">{text}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-soft-gray bg-white p-4">{item}</div>
        ))}
      </div>
    </section>
  );
}
