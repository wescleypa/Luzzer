"use client";

import { useRef, ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxLayerProps = {
  children: ReactNode;
  speed?: number;
  sx?: SxProps<Theme>;
};

export default function ParallaxLayer({
  children,
  speed = 0.5,
  sx,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80 * speed, -80 * speed]
  );

  return (
    <Box ref={ref} component={motion.div} style={{ y }} sx={sx}>
      {children}
    </Box>
  );
}
