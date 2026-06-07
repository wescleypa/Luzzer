"use client";

import { Box, Grid, Typography, Avatar } from "@mui/material";
import { motion, useTransform, MotionValue } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    quote: "A LUZZER transformou completamente nossa presença de marca. Em 4 meses, triplicamos nosso engajamento e fechamos parcerias que antes pareciam impossíveis.",
    name: "Marina Costa",
    role: "CEO, NovaTech",
    initials: "MC",
    accent: "#FFCF47",
  },
  {
    quote: "Profissionalismo impecável do briefing ao lançamento. O time entende profundamente branding e traduz isso em resultados mensuráveis.",
    name: "Rafael Mendes",
    role: "Diretor de Marketing, Velora",
    initials: "RM",
    accent: "#00BDDB",
  },
  {
    quote: "Parceiros estratégicos de verdade. Não entregam só design bonito — entregam posicionamento, narrativa e crescimento.",
    name: "Camila Ferreira",
    role: "Fundadora, Atlas Finance",
    initials: "CF",
    accent: "#FFCF47",
  },
];

function TestimonialCard({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof testimonials)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [50 + index * 25, -50 - index * 25]
  );

  return (
    <ScrollReveal direction="up" distance={60 + index * 15}>
      <Box
        component={motion.div}
        style={{ y: cardY }}
        sx={{
          height: "100%",
          p: 4,
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.06)",
          background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
          "&:hover": {
            borderColor: `${item.accent}35`,
            boxShadow: `0 20px 50px ${item.accent}10`,
            transform: "translateY(-6px)",
          },
        }}
      >
        <FormatQuoteIcon sx={{ color: item.accent, fontSize: 32, mb: 2, opacity: 0.7 }} />

        <Typography
          sx={{
            color: "#c8d4e8",
            fontSize: "1rem",
            lineHeight: 1.75,
            flex: 1,
            mb: 3,
            fontStyle: "italic",
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: `${item.accent}20`,
              color: item.accent,
              border: `1px solid ${item.accent}40`,
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
          >
            {item.initials}
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              {item.name}
            </Typography>
            <Typography sx={{ color: "#8b9bb4", fontSize: "0.8rem" }}>
              {item.role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

export default function Testimonials() {
  const { ref, scrollYProgress } = useParallax();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <Box
      id="testimonials"
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
        style={{ rotate, y: quoteY }}
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 300, color: "primary.main" }} />
      </Box>

      <SectionHeader
        label="Depoimentos"
        title="O que nossos"
        highlight="clientes dizem"
        description="A melhor prova do nosso trabalho vem de quem confia na gente todos os dias."
        align="center"
      />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {testimonials.map((item, i) => (
          <Grid key={item.name} size={{ xs: 12, md: 4 }}>
            <TestimonialCard item={item} index={i} scrollYProgress={scrollYProgress} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
