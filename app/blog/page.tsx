import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Radio, Sparkles, TicketCheck, UserRound } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { common } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Project Pulse | SaaSolution SL",
  description: "A client-friendly project update blog where SaaSolution teams can publish progress from FreeScout, team notes, or AI-assisted drafts."
};

const updates = [
  {
    project: "First Line AI",
    title: "Training the support handoff flow",
    source: "AI draft from FreeScout ticket notes",
    author: "Maya Torres",
    time: "Today, 14:20",
    mood: "Good momentum",
    progress: "72%",
    body: "We connected the latest support categories to the agent routing logic and tested the friendly handoff message. The next pass is focused on edge cases where a client asks for billing and technical help in the same conversation.",
    tags: ["AI agent", "Support", "Testing"]
  },
  {
    project: "Smart NFC Guest Pass",
    title: "Door access test passed in the staging flow",
    source: "Team update",
    author: "Jonas Vermeer",
    time: "Yesterday, 17:45",
    mood: "Hardware behaving",
    progress: "64%",
    body: "The NFC scan flow now writes a clean activity trail and the dashboard shows who entered, when, and through which guest pass. We are keeping one issue open around duplicate scans from impatient tapping.",
    tags: ["Hardware", "Dashboard", "Security"]
  },
  {
    project: "Mithaq",
    title: "Document review queue is calmer now",
    source: "FreeScout conversation",
    author: "Othman El Haddouti",
    time: "Monday, 09:10",
    mood: "Less friction",
    progress: "81%",
    body: "We simplified the review status labels so clients can see exactly what is waiting on them and what is already with the team. The change came directly from repeated FreeScout questions, which is exactly why this pulse exists.",
    tags: ["UX", "Process", "Client feedback"]
  }
];

const projectStats = [
  ["9", "updates this week"],
  ["3", "FreeScout-sourced posts"],
  ["6", "active project streams"]
];

export default async function BlogPage() {
  const locale = await getLocale();
  const c = common[locale];

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#111318]">
      <section className="relative overflow-hidden bg-[#111318] px-6 py-8 text-[#F7F5EF] md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#111318_0%,#173F3A_46%,#342A16_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,245,239,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,245,239,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between gap-4">
            <Link className="text-sm font-bold tracking-tight transition hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <Link className="inline-flex items-center gap-2 rounded-full border border-[#FFF100]/35 bg-[#FFF100]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF100] transition hover:bg-[#FFF100] hover:text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/contact">
                Ask for access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#5EEAD4]">- Project Pulse</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                A fun project blog clients can check without chasing anyone.
              </h1>
              <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-[#F7F5EF]/72 md:text-xl">
                Project Pulse turns FreeScout conversations, team notes, and AI-assisted summaries into clear, client-friendly updates. Clients get the feeling that work is alive, moving, and handled by real people.
              </p>
            </header>

            <aside className="border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.065] p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Radio className="h-8 w-8 text-[#FFF100]" />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F7F5EF]/56">Live-style status</p>
              </div>
              <div className="mt-7 grid gap-4">
                {projectStats.map(([value, label]) => (
                  <div className="flex items-end justify-between border-b border-[#F7F5EF]/10 pb-4" key={label}>
                    <p className="text-4xl font-bold text-[#FFF100]">{value}</p>
                    <p className="text-right text-sm font-bold uppercase tracking-[0.18em] text-[#F7F5EF]/50">{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">Public feed</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">What clients see.</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/64">
              Updates are written like short field notes: human, useful, a little playful, and careful about privacy. No internal secrets, no noisy ticket dumps.
            </p>
          </aside>

          <div className="grid gap-5">
            {updates.map((update) => (
              <article className="border border-[#111318]/10 bg-white p-6 shadow-sm md:p-8" key={update.title}>
                <div className="flex flex-col gap-4 border-b border-[#111318]/10 pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0F766E]">{update.project}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{update.title}</h3>
                  </div>
                  <div className="w-fit rounded-full bg-[#111318] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF100]">{update.progress}</div>
                </div>

                <p className="mt-5 text-base font-semibold leading-7 text-[#111318]/70">{update.body}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {update.tags.map((tag) => (
                    <span className="rounded-full border border-[#111318]/10 bg-[#F7F5EF] px-3 py-1 text-xs font-bold text-[#111318]/64" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 border-t border-[#111318]/10 pt-5 text-sm font-semibold text-[#111318]/58 md:grid-cols-3">
                  <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-[#0F766E]" />{update.author}</span>
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#0F766E]" />{update.time}</span>
                  <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#0F766E]" />{update.mood}</span>
                </div>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#111318]/42">
                  <TicketCheck className="h-4 w-4" />
                  {update.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E7EEE9] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 bg-[#FFF100] p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#111318]/54">Project joy, visible progress</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">Clients stay updated while we have fun building.</h2>
            <p className="mt-5 max-w-4xl text-base font-semibold leading-7 text-[#111318]/66">
              Project Pulse is built for quick, useful updates about what was done, improved, or shipped. We do not ask for approval on every normal progress post, but we never publish private client information, sensitive details, or identifying material without approval.
            </p>
          </div>
          <CheckCircle2 className="hidden h-24 w-24 text-[#111318] lg:block" />
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}
