"use client";

import { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      style={{ opacity, y }}
      sx={{
        position: "relative",
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Box
        component={motion.div}
        style={{ scaleX }}
        sx={{
          width: { xs: "60%", md: "40%" },
          height: 2,
          background: "linear-gradient(90deg, transparent, #FFCF47, #00BDDB, transparent)",
          transformOrigin: "center",
        }}
      />
    </Box>
  );
}
