"use client";

import { Box, Grid, Typography } from "@mui/material";
import { motion, useTransform, MotionValue } from "framer-motion";
import CountUp from "react-countup";
import { useParallax } from "@/hooks/useParallax";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 50, suffix: "+", label: "Clientes ativos" },
  { value: 8, suffix: "+", label: "Anos de mercado" },
  { value: 97, suffix: "%", label: "Taxa de retenção" },
];

export default function Stats() {
  const { ref, scrollYProgress } = useParallax();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* Parallax background */}
      <Box
        component={motion.div}
        style={{ y: bgY }}
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(135deg, rgba(255,207,71,0.08) 0%, rgba(0,189,219,0.05) 50%, rgba(0,2,11,1) 100%),
            #00020B
          `,
        }}
      />

      <Box
        component={motion.div}
        style={{ y: orb1Y }}
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,207,71,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        style={{ y: orb2Y }}
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,189,219,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

 {/*      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,207,71,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(0,189,219,0.08) 0%, transparent 50%)
          `,
        }}
      /> */}

      <Grid
        container
        spacing={4}
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: "5%", md: "8%" },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {stats.map((stat, i) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <ScrollReveal direction="up" distance={40 + i * 10}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #FFCF47, #00BDDB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
              </Typography>
              <Typography
                sx={{
                  color: "#8b9bb4",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: 1,
                }}
              >
                {stat.label.toUpperCase()}
              </Typography>
            </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
