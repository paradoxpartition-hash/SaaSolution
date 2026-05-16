"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = { title: string; description: string; image: string };

const slides: Slide[] = [
  {
    title: "SaaSolution SL",
    description:
      "SaaSolution SL is a Paradox FZCO company building SaaS platforms, AI workflows and scalable digital products for international markets.",
    image: "/projects/mithaq.png"
  },
  {
    title: "AI-First Platforms",
    description: "We create software that combines automation, modern cloud architecture and AI-driven workflows.",
    image: "/projects/first-line-ai.png"
  },
  {
    title: "Product Portfolio",
    description:
      "Our portfolio includes Mithaq, PriorityPlanR, Viyra, First Line AI, Smart NFC Guest Pass and Delicious Fitness.",
    image: "/projects/viyra.png"
  },
  {
    title: "Built for Different Markets",
    description:
      "From legal-tech and real estate to hospitality, fitness, planning and support automation, SaaSolution SL builds platforms in different styles for different industries.",
    image: "/projects/smart-nfc.png"
  },
  {
    title: "Partner With Us",
    description:
      "We are open to partnerships, pilots and international deployment opportunities with enterprises, governments, legal firms, real estate partners, hospitality operators and technology partners.",
    image: "/projects/priorityplanr.png"
  }
];

export function InteractiveScrollingStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let best = { idx: 0, ratio: 0 };
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index || 0);
          if (entry.intersectionRatio > best.ratio) best = { idx, ratio: entry.intersectionRatio };
        });
        if (best.ratio > 0.4) setActive(best.idx);
      },
      { threshold: [0.35, 0.5, 0.7], rootMargin: "-10% 0px -10% 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stack = useMemo(() => slides.map((_, i) => (i - active) * 56), [active]);

  return (
    <section className="relative bg-[#F6E548] text-black">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-4 py-0 md:grid-cols-2 md:p-16">
        <div className="relative flex min-h-screen flex-col justify-center pr-0 md:pr-7">
          <div className="absolute left-0 top-16 flex w-[50%] space-x-2">
            {slides.map((_, i) => (
              <div key={i} className="h-1 w-full rounded-full bg-black/20">
                <div className={`h-full rounded-full bg-black transition-all duration-500 ${i <= active ? "w-full" : "w-0"}`} />
              </div>
            ))}
          </div>

          {slides.map((slide, i) => (
            <article
              key={slide.title}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex min-h-screen items-center"
            >
              <div className={`max-w-md transition-all duration-500 ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h2 className="text-5xl font-bold leading-tight tracking-tighter md:text-6xl">{slide.title}</h2>
                <p className="mt-6 text-lg md:text-xl">{slide.description}</p>
              </div>
            </article>
          ))}

          <button className="fixed bottom-16 left-4 rounded-full bg-black px-10 py-4 text-sm font-semibold tracking-wider text-white uppercase hover:bg-gray-800 md:left-16">
            Partner with us
          </button>
        </div>

        <div className="pointer-events-none sticky top-0 hidden h-screen items-center justify-center overflow-hidden border-r border-black/10 md:flex">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative h-[80vh] w-full max-w-[200px]">
            {slides.map((slide, idx) => {
              const top = 50 + stack[idx];
              const isActive = idx === active;
              return (
                <div
                  key={slide.title}
                  className="absolute left-1/2 h-64 w-48 -translate-x-1/2 overflow-hidden rounded-2xl border-4 border-black/5 bg-white shadow-2xl transition-all duration-700 ease-in-out"
                  style={{ top: `${top}%`, transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.92})`, opacity: idx < active - 1 ? 0 : 1, zIndex: slides.length - idx }}
                >
                  {failedImages[idx] ? (
                    <div className="flex h-full items-center justify-center bg-white p-8 text-center text-sm font-semibold">{slide.title}</div>
                  ) : (
                    <Image src={slide.image} alt={slide.title} fill className="object-cover" onError={() => setFailedImages((p) => ({ ...p, [idx]: true }))} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="border-t border-black/10 bg-[#F6E548] py-8 text-center text-sm text-black/80">© 2026 SaaSolution SL. A Paradox FZCO company. All rights reserved.</footer>
    </section>
  );
}
