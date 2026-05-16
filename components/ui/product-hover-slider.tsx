"use client";

import { MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProductSlide = { title: string; image: string; fallback?: string };

const splitText = (text: string) => text.split("");

export function ProductHoverSlider({ slides, activeSlide, setActiveSlide }: { slides: ProductSlide[]; activeSlide: number; setActiveSlide: (idx: number) => void }) {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <div className="mt-8 flex flex-col items-start gap-1">
        {slides.map((slide, idx) => (
          <TextStaggerHover key={slide.title} index={idx} text={slide.title} isActive={activeSlide === idx} onActivate={() => setActiveSlide(idx)} />
        ))}
      </div>
    </MotionConfig>
  );
}

function TextStaggerHover({ text, index, isActive, onActivate }: { text: string; index: number; isActive: boolean; onActivate: () => void }) {
  const chars = splitText(text);
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn("group relative overflow-hidden text-left text-3xl font-semibold leading-tight tracking-tight md:text-5xl", isActive ? "opacity-100" : "opacity-20")}
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
            <motion.span key={`bot-${index}-${charIndex}`} className="inline-block whitespace-pre" animate={{ y: isActive ? "0%" : "110%" }} transition={{ delay: charIndex * 0.025, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
              {char}
            </motion.span>
          ))}
        </span>
      </span>
    </button>
  );
}
