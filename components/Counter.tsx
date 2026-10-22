"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { numberLocale, type Locale } from "@/lib/i18n";

type Props = { to: number; from?: number; suffix?: string; lang: Locale };

export default function Counter({ to, from = 0, suffix = "", lang }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const fmt = useMemo(
    () => new Intl.NumberFormat(numberLocale(lang), { useGrouping: false }),
    [lang],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reduce) {
      node.textContent = fmt.format(to) + suffix;
      return;
    }

    const controls = animate(from, to, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = fmt.format(Math.round(v)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, to, suffix, fmt]);

  return <span ref={ref}>{fmt.format(from) + suffix}</span>;
}