"use client";

import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  date: string;
  hijri: string;
  title: string;
  subtitle: string;
  scroll: string;
};

const embers = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 37 + 8) % 100}%`,
  size: 2 + (i % 3),
  duration: 8 + (i % 5) * 2,
  delay: (i * 0.9) % 8,
  drift: (i % 2 ? 1 : -1) * (20 + (i % 4) * 15),
}));

export default function Hero({ date, hijri, title, subtitle, scroll }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  // DEFER HYDRATION: Wait for initial paint to finish before attaching scroll listeners
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const k = reduce || !isReady ? 0 : 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 260 * k]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.3 * k]);
  const farY = useTransform(scrollYProgress, [0, 1], [0, 150 * k]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 50 * k]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110 * k]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative grid min-h-svh place-items-center overflow-hidden isolate text-center"
    >
      <m.div
        className="absolute bottom-[14%] left-0 right-0 mx-auto aspect-square w-[min(80vw,760px)] rounded-full"
        style={{
          y: isReady ? sunY : 0,
          scale: isReady ? sunScale : 1,
          background:
            "radial-gradient(circle, rgba(215,32,46,0.55), rgba(143,13,23,0.22) 42%, transparent 70%)",
          willChange: isReady ? "transform" : "auto",
        }}
        aria-hidden
      />

      <m.svg
        className="absolute -bottom-px left-0 right-0 h-[46%] w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ y: isReady ? farY : 0, willChange: isReady ? "transform" : "auto" }}
        aria-hidden
      >
        <path
          className="fill-[#1b0406]"
          d="M0 250 C180 170 360 290 600 230 S1020 150 1440 250 V400 H0Z"
        />
      </m.svg>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {embers.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={
              {
                left: e.left,
                "--s": `${e.size}px`,
                "--d": `${e.duration}s`,
                "--delay": `${e.delay}s`,
                "--x": `${e.drift}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <m.svg
        className="absolute -bottom-px left-0 right-0 z-[3] h-[46%] w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ y: isReady ? nearY : 0, willChange: isReady ? "transform" : "auto" }}
        aria-hidden
      >
        <path
          className="fill-black"
          d="M0 320 C240 250 420 350 700 300 S1180 240 1440 320 V400 H0Z"
        />
      </m.svg>

      <m.div
        className="relative z-[2] px-6 pb-32 pt-24"
        style={{
          y: isReady ? contentY : 0,
          opacity: isReady ? contentOpacity : 1,
          willChange: isReady ? "transform, opacity" : "auto",
        }}
      >
        <p className="hero-date intro intro-1 flex flex-wrap justify-center gap-x-6 gap-y-1 font-semibold text-blood-bright">
          <span>{date}</span>
          <span>{hijri}</span>
        </p>
        <h1 className="intro intro-2 text-[clamp(4.5rem,19vw,15rem)] font-bold leading-[1.05]">
          {title}
        </h1>
        <p className="intro intro-3 mx-auto mt-4 max-w-[30rem] text-[clamp(1.05rem,2.4vw,1.4rem)] text-muted">
          {subtitle}
        </p>
      </m.div>

      <span
        className="scroll-hint absolute inset-x-0 bottom-6 z-[4] flex flex-col items-center gap-2 text-[0.85rem] text-muted"
        aria-hidden
      >
        {scroll}
        <i />
      </span>
    </section>
  );
}