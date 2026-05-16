"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div
      className="flex min-h-[70rem] items-center justify-center p-4 md:p-10"
      ref={containerRef}
    >
      <div className="w-full max-w-6xl py-14 md:py-20">
        <motion.div style={{ translateY: translate }} className="mx-auto max-w-3xl text-center">
          {titleComponent}
        </motion.div>
        <motion.div
          style={{ rotateX: rotate, scale }}
          className={cn(
            "relative mx-auto mt-10 h-[30rem] w-full max-w-6xl rounded-[2rem] border border-soft-gray/70 bg-white p-4 shadow-premium md:h-[42rem] md:p-8",
            "[transform-style:preserve-3d]"
          )}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white to-[#f3f4f7]" />
          <div className="relative z-10 h-full overflow-hidden rounded-[1.3rem] border border-soft-gray/70 bg-[#fcfcfd]">
            {children}
          </div>
          {!isMobile && (
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/70" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
