"use client";

import { m } from "motion/react";
import { rise } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <m.div
      className={className}
      variants={rise}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </m.div>
  );
}