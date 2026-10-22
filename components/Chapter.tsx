"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { rise, stagger } from "@/lib/motion";

type Props = {
  index: number;
  number: string;
  ghost: string;
  label: string;
  title: string;
  text: string;
};

export default function Chapter({
  index,
  number,
  ghost,
  label,
  title,
  text,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // LAZY LOADING: Only mount motion hooks when the chapter is near the viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Start loading 300px before it comes into view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 1. If not visible yet, render a completely static version (0 JS overhead)
  if (!isVisible) {
    return (
      <section ref={ref} className={`relative flex min-h-[110vh] items-center overflow-hidden px-6 py-24 md:px-[clamp(1.25rem,8vw,8rem)] ${index % 2 === 1 ? "justify-end" : ""}`} data-flip={index % 2 === 1}>
        <span className="ghost pointer-events-none absolute inset-0 grid select-none place-items-center whitespace-nowrap text-[clamp(7rem,24vw,22rem)] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(143,13,23,0.55)]" aria-hidden>{ghost}</span>
        <div className="relative max-w-[34rem]">
          <div className="chapter-line mb-6 h-[2px] w-24 origin-left bg-blood-bright" aria-hidden />
          <div>
            <p className="flex items-baseline gap-3 text-muted"><b className="text-lg text-blood-bright">{number}</b>{label}</p>
            <h2 className="mb-4 mt-1 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-tight">{title}</h2>
            <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] text-[#d4c7c4]">{text}</p>
          </div>
        </div>
      </section>
    );
  }

  // 2. Once visible, render the animated version. 
  // Since this only happens when the user scrolls down, the main thread is free.
  return <AnimatedChapter ref={ref} index={index} number={number} ghost={ghost} label={label} title={title} text={text} />;
}

// We separate the animated logic into a child component so the hooks only fire when rendered
import { forwardRef } from "react";

const AnimatedChapter = forwardRef<HTMLElement, Props & { index: number, number: string, ghost: string, label: string, title: string, text: string }>(
  ({ index, number, ghost, label, title, text }, ref) => {
    const reduce = useReducedMotion();
    const k = reduce ? 0 : 1;

    const { scrollYProgress } = useScroll({ target: ref as React.RefObject<HTMLElement>, offset: ["start end", "end start"] });
    const ghostY = useTransform(scrollYProgress, [0, 1], [200 * k, -200 * k]);
    const ghostOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
    const bodyY = useTransform(scrollYProgress, [0, 1], [70 * k, -70 * k]);
    const line = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

    return (
      <section ref={ref} className={`relative flex min-h-[110vh] items-center overflow-hidden px-6 py-24 md:px-[clamp(1.25rem,8vw,8rem)] ${index % 2 === 1 ? "justify-end" : ""}`} data-flip={index % 2 === 1}>
        <m.span className="ghost pointer-events-none absolute inset-0 grid select-none place-items-center whitespace-nowrap text-[clamp(7rem,24vw,22rem)] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(143,13,23,0.55)]" style={{ y: ghostY, opacity: ghostOpacity }} aria-hidden>{ghost}</m.span>
        
        <m.div className="relative max-w-[34rem]" style={{ y: bodyY }}>
          <m.div className="chapter-line mb-6 h-[2px] w-24 origin-left bg-blood-bright" style={{ scaleX: line }} aria-hidden />
          <m.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20% 0px" }}>
            <m.p className="flex items-baseline gap-3 text-muted" variants={rise}><b className="text-lg text-blood-bright">{number}</b>{label}</m.p>
            <m.h2 className="mb-4 mt-1 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-tight" variants={rise}>{title}</m.h2>
            <m.p className="text-[clamp(1.05rem,1.8vw,1.25rem)] text-[#d4c7c4]" variants={rise}>{text}</m.p>
          </m.div>
        </m.div>
      </section>
    );
  }
);
AnimatedChapter.displayName = "AnimatedChapter";