import type { Variants } from "motion/react";

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const rise: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay },
  }),
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
