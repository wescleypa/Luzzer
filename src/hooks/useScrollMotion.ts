"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

type Range = [number, number];

export function useSectionScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
}

export function useParallaxY(
  scrollYProgress: MotionValue<number>,
  speed = 1,
  range: Range = [0, 1]
) {
  const amount = 120 * speed;
  return useTransform(scrollYProgress, range, [amount, -amount]);
}
