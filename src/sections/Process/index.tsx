"use client";

import { Box, Typography, Stack } from "@mui/material";
import { motion, useTransform, MotionValue } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";

const steps = [
  {
    num: "01",
    title: "Imersão",
    subtitle: "Discovery profundo",
    description: "Entendemos seu negócio, mercado, concorrência e público. Workshops, entrevistas e análise de dados formam a base de tudo.",
  },
  {
    num: "02",
    title: "Estratégia",
    subtitle: "Plano de ação",
    description: "Definimos posicionamento, arquitetura de marca, tom de voz e roadmap de marketing alinhado aos seus objetivos.",
  },
  {
    num: "03",
    title: "Criação",
    subtitle: "Design & conteúdo",
    description: "Identidade visual, peças criativas, copy e experiências digitais — tudo coeso e pronto para impactar.",
  },
  {
    num: "04",
    title: "Lançamento",
    subtitle: "Go-to-market",
    description: "Ativamos campanhas, monitoramos métricas e otimizamos continuamente para maximizar resultados.",
  },
];

function ProcessStep({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const numY = useTransform(scrollYProgress, [0, 1], [40 + index * 20, -40 - index * 20]);
  const cardX = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? -20 : 20]
  );

  return (
    <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} distance={40}>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 5 },
          pl: { xs: 6, md: 10 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: { xs: 12, md: 32 },
            top: 8,
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#00020B",
            border: "2px solid #FFCF47",
            boxShadow: "0 0 20px rgba(255,207,71,0.4)",
            zIndex: 1,
          }}
        />

        <Box
          component={motion.div}
          style={{ y: numY }}
          sx={{
            flexShrink: 0,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 900,
              color: "rgba(255,207,71,0.12)",
              lineHeight: 1,
            }}
          >
            {step.num}
          </Typography>
        </Box>

        <Box
          component={motion.div}
          style={{ x: cardX }}
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(8px)",
            transition: "border-color 0.3s",
            "&:hover": {
              borderColor: "rgba(255,207,71,0.25)",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: 3,
              color: "secondary.main",
              mb: 1,
            }}
          >
            {step.subtitle.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            {step.title}
          </Typography>
          <Typography sx={{ color: "#8b9bb4", lineHeight: 1.7, fontSize: "0.95rem" }}>
            {step.description}
          </Typography>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

export default function Process() {
  const { ref, scrollYProgress } = useParallax();
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);
  const ringY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);

  return (
    <Box
      id="process"
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        bgcolor: "#00020B",
        color: "#fff",
        py: { xs: 12, md: 16 },
        px: { xs: "5%", md: "8%" },
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        style={{ y: ringY, scale: ringScale }}
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(255,207,71,0.06)",
          pointerEvents: "none",
        }}
      />

      <SectionHeader
        label="Como trabalhamos"
        title="Processo"
        highlight="sem achismos"
        description="Metodologia proprietária que combina criatividade, estratégia e performance em cada etapa."
        align="center"
      />

      <Box sx={{ position: "relative", maxWidth: 900, mx: "auto", mt: 4 }}>
        {/* Vertical progress line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 20, md: 40 },
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: "rgba(255,255,255,0.06)",
            display: { xs: "block", md: "block" },
          }}
        >
          <Box
            component={motion.div}
            style={{ height: lineHeight }}
            sx={{
              width: "100%",
              background: "linear-gradient(180deg, #FFCF47, #00BDDB)",
              borderRadius: 1,
            }}
          />
        </Box>

        <Stack spacing={6}>
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
