"use client";

import { useEffect, useRef, useState } from "react";
import { ProductHoverSlider } from "@/components/ui/product-hover-slider";

type Slide = { title: string; description: string; image: string; fallback: string };
const slides: Slide[] = [
  { title: "About SaaSolutions", description: "We are SaaSolutions — a studio of engineers and designers shipping cinematic products for ambitious companies. From commerce to AI agents to connected hardware, we build the things your customers can't stop talking about.", image: "/projects/mithaq.png", fallback: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop" },
  { title: "AI-First Platforms", description: "We create software that combines automation, modern cloud architecture and AI-driven workflows.", image: "/projects/first-line-ai.png", fallback: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" },
  { title: "Six products.\nOne obsession with craft.", description: "Every line of code, every pixel, every interaction — engineered to make your customers feel something. Here's what we're shipping right now.", image: "/projects/viyra.png", fallback: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop" },
  { title: "Partner With Us", description: "We are open to partnerships, pilots and international deployment opportunities with enterprises, governments, legal firms, real estate partners, hospitality operators and technology partners.", image: "/projects/priorityplanr.png", fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" }
];

export function InteractiveScrollingStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [portfolioActive, setPortfolioActive] = useState(0);
  const portfolioProducts = [{ name: "Mithaq", image: "/projects/mithaq.png", fallback: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop" }, { name: "PriorityPlanR", image: "/projects/priorityplanr.png", fallback: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" }, { name: "Viyra", image: "/projects/viyra.png", fallback: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop" }, { name: "First Line AI", image: "/projects/first-line-ai.png", fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" }, { name: "Smart NFC Guest Pass", image: "/projects/smart-nfc.png", fallback: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop" }, { name: "Delicious Fitness", image: "/projects/delicious-fitness.png", fallback: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" }];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveIndex(Number((entry.target as HTMLElement).dataset.index || 0));
        }
      });
    }, { threshold: [0.5] });
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#fff100] text-black">
      <div className="mx-auto grid w-screen min-h-screen max-w-7xl grid-cols-1 md:grid-cols-2 p-8 md:p-16">
        <div className="relative">
          <div className="fixed top-16 left-4 md:left-16 flex w-[50%] max-w-[200px] space-x-2 z-10">
            {slides.map((_, i) => <div key={i} className="h-1 w-full rounded-full bg-black/20"><div className={`h-full bg-black rounded-full transition-all duration-500 ${i<=activeIndex?"w-full":"w-0"}`} /></div>)}
          </div>

          {slides.map((slide, i) => (
            <article key={slide.title} data-index={i} ref={(el) => { refs.current[i] = el; }} className="min-h-screen flex items-center">
              <div className={`max-w-md transition-all duration-500 ${activeIndex===i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter whitespace-pre-line">{slide.title}</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed md:text-xl">{slide.description}</p>
                {i === 2 && <ProductHoverSlider products={portfolioProducts} onSlideChange={setPortfolioActive} />}
              </div>
            </article>
          ))}

          <button className="fixed bottom-16 left-4 md:left-16 bg-black text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase">Partner with us</button>
        </div>

        <div className="hidden md:flex sticky top-0 h-screen border-r border-black/10 justify-center items-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative w-[50%] h-[80vh] overflow-hidden">
            <div className="transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
              {slides.map((slide, i) => (
                <div key={slide.title} className="h-[80vh] w-full rounded-2xl border-4 border-black/5 shadow-2xl overflow-hidden bg-white">
                  <img src={(i===2 && activeIndex===2) ? (failed[200+portfolioActive] ? portfolioProducts[portfolioActive].fallback : portfolioProducts[portfolioActive].image) : (failed[i] ? slide.fallback : slide.image)} alt={(i===2 && activeIndex===2) ? portfolioProducts[portfolioActive].name : slide.title} className="h-full w-full object-cover" onError={() => setFailed((p) => ({ ...p, [i===2 && activeIndex===2 ? 200+portfolioActive : i]: true }))} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">© 2026 SaaSolution SL. A Paradox FZCO company. All rights reserved.</footer>
    </section>
  );
}
