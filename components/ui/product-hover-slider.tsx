"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Product = { name: string; image: string };

type HoverSliderContextValue = {
  activeSlide: number;
  changeSlide: (index: number) => void;
};

const HoverSliderContext = createContext<HoverSliderContextValue | null>(null);

const splitText = (text: string) => text.split("");

const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }
  }
};

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
        <div className={cn("mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start", className)}>{children}</div>
      </HoverSliderContext.Provider>
    </MotionConfig>
  );
}

export function TextStaggerHover({ text, index, className }: { text: string; index: number; className?: string }) {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const isActive = activeSlide === index;
  const chars = splitText(text);

  return (
    <button
      type="button"
      onMouseEnter={() => changeSlide(index)}
      onFocus={() => changeSlide(index)}
      className={cn("relative block overflow-hidden text-left text-3xl font-semibold leading-tight tracking-tight md:text-5xl", isActive ? "opacity-100" : "opacity-20", className)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="relative block h-[1.2em]">
        <span className="absolute inset-0">
          {chars.map((char, charIndex) => (
            <motion.span key={`top-${index}-${charIndex}`} className="inline-block whitespace-pre" animate={{ y: isActive ? "-110%" : "0%" }} transition={{ delay: charIndex * 0.025, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
              {char}
            </motion.span>
          ))}
        </span>
        <span className="absolute inset-0">
          {chars.map((char, charIndex) => (
            <motion.span key={`bottom-${index}-${charIndex}`} className="inline-block whitespace-pre" animate={{ y: isActive ? "0%" : "110%" }} transition={{ delay: charIndex * 0.025, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
              {char}
            </motion.span>
          ))}
        </span>
      </span>
    </button>
  );
}

export function HoverSliderImageWrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("relative h-[260px] overflow-hidden rounded-2xl border border-black/10 md:h-[360px]", className)}>{children}</div>;
}

export function HoverSliderImage({ index, src, alt }: { index: number; src: string; alt: string }) {
  const { activeSlide } = useHoverSliderContext();
  return <motion.img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" initial="hidden" animate={activeSlide === index ? "visible" : "hidden"} variants={clipPathVariants} />;
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
  return (
    <HoverSlider>
      <div className="relative z-20 flex flex-col items-start gap-1">
        {products.map((product, index) => (
          <TextStaggerHover key={product.name} text={product.name} index={index} className="text-black" />
        ))}
      </div>
      <HoverSliderImageWrap className="relative z-10">
        {products.map((product, index) => (
          <HoverSliderImage key={product.name} index={index} src={product.image} alt={product.name} />
        ))}
      </HoverSliderImageWrap>
    </HoverSlider>
  );
}
