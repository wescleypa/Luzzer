"use client";

import { Box, Grid, Typography } from "@mui/material";
import { motion, useTransform, MotionValue } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { useParallax } from "@/hooks/useParallax";
import PaletteIcon from "@mui/icons-material/Palette";
import CampaignIcon from "@mui/icons-material/Campaign";
import DevicesIcon from "@mui/icons-material/Devices";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const services = [
  {
    icon: PaletteIcon,
    title: "Branding & Identidade",
    description: "Naming, logo, manual de marca, tom de voz e universo visual completo para posicionar sua empresa no topo.",
    tags: ["Logo", "Brand Book", "Packaging"],
    accent: "#FFCF47",
    size: "large" as const,
  },
  {
    icon: CampaignIcon,
    title: "Marketing Digital",
    description: "Campanhas multicanal, funis de conversão e gestão de mídia paga com foco em ROI.",
    tags: ["Ads", "Social", "Email"],
    accent: "#00BDDB",
    size: "small" as const,
  },
  {
    icon: DevicesIcon,
    title: "Web & UX Design",
    description: "Sites e landing pages de alta conversão com experiência impecável em todos os dispositivos.",
    tags: ["UI/UX", "Landing", "E-commerce"],
    accent: "#00BDDB",
    size: "small" as const,
  },
  {
    icon: AnalyticsIcon,
    title: "Estratégia & Dados",
    description: "Diagnóstico de mercado, posicionamento competitivo e dashboards de performance em tempo real.",
    tags: ["KPIs", "Insights", "Growth"],
    accent: "#FFCF47",
    size: "small" as const,
  },
  {
    icon: MovieCreationIcon,
    title: "Conteúdo & Audiovisual",
    description: "Produção de vídeos, motion graphics e conteúdo que engaja, emociona e converte.",
    tags: ["Vídeo", "Motion", "Copy"],
    accent: "#00BDDB",
    size: "small" as const,
  },
  {
    icon: RocketLaunchIcon,
    title: "Lançamentos",
    description: "Go-to-market completo para produtos e marcas — do teaser ao pós-lançamento.",
    tags: ["Launch", "PR", "Eventos"],
    accent: "#FFCF47",
    size: "large" as const,
  },
];

function ServiceCard({
  service,
  index,
  scrollYProgress,
}: {
  service: (typeof services)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isLarge = service.size === "large";
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [30 + index * 12, -30 - index * 12]
  );
  const cardRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? 1.5 : -1.5, 0, index % 2 === 0 ? -1.5 : 1.5]
  );

  return (
    <Box
      component={motion.div}
      style={{ y: cardY, rotate: cardRotate }}
      sx={{
        height: "100%",
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(12px)",
        cursor: "default",
        transition: "border-color 0.4s, box-shadow 0.4s, transform 0.3s",
        "&:hover": {
          borderColor: `${service.accent}40`,
          boxShadow: `0 24px 60px ${service.accent}15`,
          transform: "translateY(-8px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          opacity: 0,
          transition: "opacity 0.4s",
        },
        "&:hover::before": { opacity: 1 },
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          background: `${service.accent}15`,
          border: `1px solid ${service.accent}30`,
        }}
      >
        <service.icon sx={{ color: service.accent, fontSize: 28 }} />
      </Box>

      <Typography
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: isLarge ? "1.35rem" : "1.15rem",
          mb: 1.5,
          color: "#fff",
        }}
      >
        {service.title}
      </Typography>

      <Typography
        sx={{
          color: "#8b9bb4",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          mb: 3,
        }}
      >
        {service.description}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {service.tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 10,
              fontSize: "0.7rem",
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: 1,
              color: service.accent,
              border: `1px solid ${service.accent}30`,
              background: `${service.accent}08`,
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function Services() {
  const { ref, scrollYProgress } = useParallax();
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const headerBgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <Box
      id="services"
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        bgcolor: "#050810",
        color: "#fff",
        py: { xs: 12, md: 16 },
        px: { xs: "5%", md: "8%" },
        overflow: "hidden", 
      }}
    >
      <Box
        component={motion.div}
        style={{ y: headerBgY }}
        sx={{
          position: "absolute",
          top: "5%",
          left: "50%",
          width: 600,
          height: 600,
          marginLeft: -300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,207,71,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay parallax */}
      <Box
        component={motion.div}
        style={{ y: gridY }}
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(255,207,71,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,207,71,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none", 
        }}
      />

      <SectionHeader
        label="O que fazemos"
        title="Serviços que"
        highlight="elevam marcas"
        description="Do conceito à execução, cobrimos todo o ecossistema de branding e marketing que sua empresa precisa para crescer."
        align="center"
      />

      {/* Animated divider */}
      <Box sx={{ maxWidth: 200, mx: "auto", mb: 8, height: 2, bgcolor: "rgba(255,255,255,0.06)", borderRadius: 1, overflow: "hidden" }}>
        <Box component={motion.div} style={{ width: lineWidth }} sx={{ height: "100%", bgcolor: "primary.main" }} />
      </Box>

      <Grid container spacing={3}>
        {services.map((service, i) => (
          <Grid
            key={service.title}
            size={{
              xs: 12,
              sm: 6,
              md: service.size === "large" ? 6 : 3,
            }}
          >
            <ServiceCard service={service} index={i} scrollYProgress={scrollYProgress} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
