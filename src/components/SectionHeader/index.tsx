"use client";

import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isCenter = align === "center";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.45"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const labelX = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      style={{ opacity, y }}
      sx={{
        mb: { xs: 6, md: 8 },
        textAlign: isCenter ? "center" : "left",
        maxWidth: isCenter ? 720 : "100%",
        mx: isCenter ? "auto" : 0,
      }}
    >
      <Box component={motion.div} style={{ x: labelX }}>
        <Typography
          component="span"
          sx={{
            color: light ? "rgba(255,255,255,0.6)" : "primary.main",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontSize: "0.75rem",
            display: "block",
            mb: 2,
          }}
        >
          {label}
        </Typography>
      </Box>

      <Box component={motion.div} style={{ scale: titleScale }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: { xs: "2rem", md: "clamp(2.2rem, 4vw, 3.5rem)" },
            lineHeight: 1.15,
            fontWeight: 800,
            color: light ? "#fff" : "text.primary",
            mb: description ? 2.5 : 0,
          }}
        >
          {title}
          {highlight && (
            <>
              <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #FFCF47 0%, #00BDDB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {highlight}
              </Box>
            </>
          )}
        </Typography>
      </Box>

      {description && (
        <Typography
          sx={{
            color: light ? "rgba(255,255,255,0.65)" : "#8b9bb4",
            fontSize: { xs: "1rem", md: "1.15rem" },
            lineHeight: 1.7,
            maxWidth: isCenter ? 560 : 520,
            mx: isCenter ? "auto" : 0,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
