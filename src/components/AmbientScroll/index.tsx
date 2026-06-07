"use client";

import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const orbs = [
  { top: "8%", left: "5%", size: 420, color: "rgba(255,207,71,0.04)", speed: 0.2 },
  { top: "35%", right: "-3%", size: 320, color: "rgba(0,189,219,0.035)", speed: 0.3 },
  { top: "62%", left: "15%", size: 260, color: "rgba(255,207,71,0.03)", speed: 0.15 },
  { top: "78%", right: "12%", size: 380, color: "rgba(0,189,219,0.03)", speed: 0.25 },
  { top: "92%", left: "40%", size: 200, color: "rgba(255,207,71,0.025)", speed: 0.18 },
];

function FloatingOrb({
  top,
  left,
  right,
  size,
  color,
  speed,
}: (typeof orbs)[0]) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * -speed);
  const x = useTransform(scrollY, (v) => Math.sin(v * 0.002) * 30 * speed);

  return (
    <Box
      component={motion.div}
      style={{ y, x }}
      sx={{
        position: "absolute",
        top,
        left,
        right,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
  );
}

export default function AmbientScroll() {
  const { scrollYProgress } = useScroll();
  const lineX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const lineX2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} {...orb} />
      ))}

      {/* Diagonal scroll lines */}
      <Box
        component={motion.div}
        style={{ x: lineX }}
        sx={{
          position: "absolute",
          top: "20%",
          left: "-20%",
          width: "140%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,207,71,0.06), transparent)",
          transform: "rotate(-8deg)",
        }}
      />
      <Box
        component={motion.div}
        style={{ x: lineX2 }}
        sx={{
          position: "absolute",
          top: "55%",
          left: "-20%",
          width: "140%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,189,219,0.05), transparent)",
          transform: "rotate(-8deg)",
        }}
      />
    </Box>
  );
}
