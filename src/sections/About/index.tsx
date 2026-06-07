"use client";

import { Box, Grid, Typography, Stack } from "@mui/material";
import { motion, useTransform } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";

const pillars = [
  {
    icon: AutoAwesomeIcon,
    title: "Identidade com alma",
    text: "Marcas que comunicam propósito, não só estética. Criamos universos visuais memoráveis.",
  },
  {
    icon: TrendingUpIcon,
    title: "Estratégia que converte",
    text: "Campanhas orientadas a dados. Cada pixel e cada palavra pensados para gerar resultado.",
  },
  {
    icon: GroupsIcon,
    title: "Parceria de longo prazo",
    text: "Somos extensão do seu time. Acompanhamos, evoluímos e escalamos junto com você.",
  },
];

export default function About() {
  const { ref, y, scrollYProgress } = useParallax();
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.15, 0.9]);
  const orbY = useTransform(scrollYProgress, [0, 1], [-60, 120]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <Box
      id="about"
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
      {/* Parallax orbs */}
      <Box
        component={motion.div}
        style={{ y, scale: glowScale }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,207,71,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        style={{ y: orbY }}
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "-8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,189,219,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Watermark parallax */}
      <Box
        component={motion.div}
        style={{ y: watermarkY, x: watermarkX }}
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-0.5em",
          marginLeft: "-50%",
          width: "100%",
          textAlign: "center",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18vw", md: "12vw" },
            fontWeight: 900,
            color: "rgba(255,255,255,0.02)",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "0.15em",
            whiteSpace: "nowrap",
          }}
        >
          LUZZER
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionHeader
            label="Quem somos"
            title="Branding que"
            highlight="transforma negócios"
            description="A LUZZER nasceu da união entre criatividade ousada e estratégia afiada. Somos uma agência de branding e marketing que acredita que marcas extraordinárias nascem da intersecção entre design, storytelling e performance."
          />

          <Stack spacing={3}>
            {pillars.map((item, i) => (
              <ScrollReveal key={item.title} direction="left" distance={50 + i * 15}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  p: 2.5,
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(8px)",
                  transition: "border-color 0.3s, transform 0.3s",
                  "&:hover": {
                    borderColor: "rgba(255,207,71,0.3)",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, rgba(255,207,71,0.15), rgba(0,189,219,0.1))",
                    border: "1px solid rgba(255,207,71,0.2)",
                    flexShrink: 0,
                  }}
                >
                  <item.icon sx={{ color: "primary.main", fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#8b9bb4", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Box>
              </ScrollReveal>
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={motion.div}
            style={{ y: imageY }}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,207,71,0.15)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Box
                component="img"
                src="/images/brading.avif"
                alt="Branding LUZZER"
                sx={{
                  width: "100%",
                  height: { xs: 320, md: 480 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 50%, rgba(0,2,11,0.8) 100%)",
                }}
              />
            </Box>

            {/* Floating badge */}
            <Box
              component={motion.div}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                bottom: -20,
                right: { xs: 16, md: -30 },
                px: 3,
                py: 2,
                background: "rgba(18,18,18,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,207,71,0.3)",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.65rem",
                  color: "#8b9bb4",
                  letterSpacing: 2,
                  mb: 0.5,
                }}
              >
                DESDE
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "primary.main",
                }}
              >
                2017
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
