"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";

type Product = { name: string; image: string };

type HoverSliderContextValue = {
  activeSlide: number;
  changeSlide: (index: number) => void;
};

const HoverSliderContext = createContext<HoverSliderContextValue | null>(null);

export function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (!context) throw new Error("useHoverSliderContext must be used inside HoverSlider");
  return context;
}

export function HoverSlider({ children, className }: { children: React.ReactNode; className?: string }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const value = useMemo(() => ({ activeSlide, changeSlide: setActiveSlide }), [activeSlide]);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <HoverSliderContext.Provider value={value}>
        <div className={cn("mt-12 w-full max-w-xl", className)}>{children}</div>
      </HoverSliderContext.Provider>
    </MotionConfig>
  );
}

const products: Product[] = [
  { name: "Mithaq", image: "/projects/placeholders/mithaq.svg" },
  { name: "PriorityPlanR", image: "/projects/placeholders/priorityplanr.svg" },
  { name: "Viyra", image: "/projects/placeholders/viyra.svg" },
  { name: "First Line AI", image: "/projects/placeholders/first-line-ai.svg" },
  { name: "Smart NFC Guest Pass", image: "/projects/placeholders/smart-nfc-guest-pass.svg" },
  { name: "Delicious Fitness", image: "/projects/placeholders/delicious-fitness.svg" }
];

export function ProductHoverSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <HoverSlider>
      <div className="space-y-2" onMouseLeave={() => setActiveSlide(0)}>
        {products.map((product, index) => {
          const isActive = activeSlide === index;
          return (
            <button
              key={product.name}
              type="button"
              onMouseEnter={() => setActiveSlide(index)}
              onFocus={() => setActiveSlide(index)}
              className="group flex w-full items-center gap-3 text-left"
              aria-label={product.name}
            >
              <span
                className={cn(
                  "text-[36px] leading-none tracking-tight md:text-[56px] transition-colors duration-300",
                  isActive ? "text-black" : "text-black/25"
                )}
              >
                {product.name}
              </span>
              <span className={cn("h-px flex-1 transition-colors duration-300", isActive ? "bg-black/20" : "bg-black/12")} />
              <span className={cn("w-8 text-right text-2xl tabular-nums transition-colors duration-300", isActive ? "text-black/70" : "text-black/30")}>{String(index + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
    </HoverSlider>
  );
}
