"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

type ParallaxRange = [number, number];

export function useParallax(
  offset: ParallaxRange = [0, 1],
  output: ParallaxRange = [150, -150]
) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, offset, output);

  return { ref, y, scrollYProgress };
}

export function useParallaxOpacity(
  ref: React.RefObject<HTMLElement | null>,
  scrollYProgress: MotionValue<number>
) {
  return useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
}
