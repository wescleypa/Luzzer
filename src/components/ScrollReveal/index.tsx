"use client";

import { useRef } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  blur?: boolean;
  sx?: SxProps<Theme>;
};

export default function ScrollReveal({
  children,
  direction = "up",
  distance = 70,
  blur = false,
  sx,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.48"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const blurVal = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"]);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [direction === "up" ? distance : direction === "down" ? -distance : 0, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [direction === "left" ? distance : direction === "right" ? -distance : 0, 0]
  );

  return (
    <Box
      ref={ref}
      component={motion.div}
      style={{ opacity, y, x, scale, filter: blur ? blurVal : undefined }}
      sx={sx}
    >
      {children}
    </Box>
  );
}
