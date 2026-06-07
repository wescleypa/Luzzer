"use client";

import { Box, Grid, Typography, Stack, IconButton, Divider } from "@mui/material";
import { motion, useTransform } from "framer-motion";
import Logo from "@/components/Logo";
import ScrollReveal from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const footerLinks = {
  Navegação: [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Cases", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ],
  Serviços: [
    { label: "Branding", href: "#services" },
    { label: "Marketing Digital", href: "#services" },
    { label: "Web Design", href: "#services" },
    { label: "Conteúdo", href: "#services" },
  ],
};

const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: YouTubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { ref, scrollYProgress } = useParallax();
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Box
      component="footer"
      ref={ref}
      sx={{
        bgcolor: "#00020B",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: 4,
        px: { xs: "5%", md: "8%" },
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        style={{ y: bgY }}
        sx={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          width: 800,
          height: 400,
          marginLeft: -400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,207,71,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={6} sx={{ mb: 6, position: "relative", zIndex: 1 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ScrollReveal direction="up" distance={40}>
          <Box>
          <Logo type="all" sx={{ mb: 3 }} />
          <Typography sx={{ color: "#8b9bb4", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 320, mb: 3 }}>
            Agência de branding e marketing que transforma marcas em referências de mercado.
          </Typography>
          <Stack direction="row" spacing={1}>
            {socials.map(({ icon: Icon, href, label }) => (
              <IconButton
                key={label}
                href={href}
                aria-label={label}
                sx={{
                  color: "#8b9bb4",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 1.5,
                  "&:hover": {
                    color: "primary.main",
                    borderColor: "primary.main",
                    background: "rgba(255,207,71,0.08)",
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>
          </Box>
          </ScrollReveal>
        </Grid>

        {Object.entries(footerLinks).map(([title, links]) => (
          <Grid key={title} size={{ xs: 6, md: 2 }}>
            <ScrollReveal direction="up" distance={50}>
            <Box>
            <Typography
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: 2,
                color: "primary.main",
                mb: 2.5,
              }}
            >
              {title.toUpperCase()}
            </Typography>
            <Stack spacing={1.5}>
              {links.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "#8b9bb4",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
            </Box>
            </ScrollReveal>
          </Grid>
        ))}

        <Grid size={{ xs: 12, md: 4 }}>
          <ScrollReveal direction="up" distance={60}>
          <Box>
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: 2,
              color: "primary.main",
              mb: 2.5,
            }}
          >
            NEWSLETTER
          </Typography>
          <Typography sx={{ color: "#8b9bb4", fontSize: "0.9rem", lineHeight: 1.6, mb: 2 }}>
            Insights de branding e marketing direto no seu e-mail.
          </Typography>
          <Box
            sx={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              component="input"
              placeholder="seu@email.com"
              sx={{
                flex: 1,
                px: 2,
                py: 1.5,
                bgcolor: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "0.9rem",
                "&::placeholder": { color: "#8b9bb4" },
              }}
            />
            <Box
              component="button"
              sx={{
                px: 2.5,
                bgcolor: "primary.main",
                color: "#02040a",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                transition: "background 0.2s",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              OK
            </Box>
          </Box>
          </Box>
          </ScrollReveal>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
        <Typography sx={{ color: "#8b9bb4", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} LUZZER — Megsone Technologies. Todos os direitos reservados.
        </Typography>

        <IconButton
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          sx={{
            color: "primary.main",
            border: "1px solid rgba(255,207,71,0.3)",
            borderRadius: 1.5,
            "&:hover": { background: "rgba(255,207,71,0.1)" },
          }}
        >
          <ArrowUpwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
