"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProductSlide = { title: string; image: string };

type HoverSliderContextValue = {
  activeSlide: number;
  setActiveSlide: (idx: number) => void;
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

export function ProductHoverSlider({ slides }: { slides: ProductSlide[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const value = useMemo(() => ({ activeSlide, setActiveSlide }), [activeSlide]);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <HoverSliderContext.Provider value={value}>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <HoverSlider>
            {slides.map((slide, idx) => (
              <TextStaggerHover key={slide.title} index={idx} text={slide.title} />
            ))}
          </HoverSlider>
          <HoverSliderImageWrap>
            {slides.map((slide, idx) => (
              <HoverSliderImage key={slide.title} index={idx} src={slide.image} alt={slide.title} />
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSliderContext.Provider>
    </MotionConfig>
  );
}

function useHoverSlider() {
  const context = useContext(HoverSliderContext);
  if (!context) throw new Error("Hover slider components must be used inside ProductHoverSlider");
  return context;
}

export function HoverSlider({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-start gap-1">{children}</div>;
}

export function TextStaggerHover({ text, index }: { text: string; index: number }) {
  const { activeSlide, setActiveSlide } = useHoverSlider();
  const chars = splitText(text);
  const isActive = activeSlide === index;

  return (
    <button
      type="button"
      onMouseEnter={() => setActiveSlide(index)}
      onFocus={() => setActiveSlide(index)}
      className={cn(
        "group relative overflow-hidden text-left text-3xl font-semibold leading-tight tracking-tight md:text-5xl",
        isActive ? "opacity-100" : "opacity-20"
      )}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="relative block h-[1.2em]">
        <span className="absolute inset-0">
          {chars.map((char, charIndex) => (
            <motion.span
              key={`top-${text}-${charIndex}`}
              className="inline-block whitespace-pre"
              animate={{ y: isActive ? "-110%" : "0%" }}
              transition={{ delay: charIndex * 0.025, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {char}
            </motion.span>
          ))}
        </span>
        <span className="absolute inset-0">
          {chars.map((char, charIndex) => (
            <motion.span
              key={`bottom-${text}-${charIndex}`}
              className="inline-block whitespace-pre"
              animate={{ y: isActive ? "0%" : "110%" }}
              transition={{ delay: charIndex * 0.025, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </span>
    </button>
  );
}

export function HoverSliderImageWrap({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[260px] overflow-hidden rounded-2xl border border-black/10 md:h-[360px]">{children}</div>;
}

export function HoverSliderImage({ index, src, alt }: { index: number; src: string; alt: string }) {
  const { activeSlide } = useHoverSlider();
  const isActive = activeSlide === index;

  return (
    <motion.img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={clipPathVariants}
    />
  );
}
