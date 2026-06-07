"use client";

import { Box, Grid, Typography, Button, TextField, Stack } from "@mui/material";
import { motion, useTransform } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import ScrollReveal from "@/components/ScrollReveal";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const contactInfo = [
  { icon: EmailIcon, label: "E-mail", value: "contato@luzzer.com.br" },
  { icon: PhoneIcon, label: "Telefone", value: "+55 (11) 99999-0000" },
  { icon: LocationOnIcon, label: "Localização", value: "São Paulo, Brasil" },
];

export default function Contact() {
  const { ref, scrollYProgress } = useParallax();
  const orbY = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const leftY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const formY = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const formRotate = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 0, -1]);

  return (
    <Box
      id="contact"
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
      {/* Parallax orbs */}
      <Box
        component={motion.div}
        style={{ y: orbY }}
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,207,71,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        style={{ y: orbY2 }}
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,189,219,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box component={motion.div} style={{ y: leftY }}>
          <ScrollReveal direction="left" distance={50}>
          <Box>
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: 4,
                textTransform: "uppercase",
                fontSize: "0.75rem",
                display: "block",
                mb: 2,
              }}
            >
              Vamos conversar
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: { xs: "2.2rem", md: "clamp(2.5rem, 4vw, 3.8rem)" },
                fontWeight: 800,
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              Pronto para
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
                elevar sua marca?
              </Box>
            </Typography>

            <Typography sx={{ color: "#8b9bb4", fontSize: "1.05rem", lineHeight: 1.7, mb: 5, maxWidth: 420 }}>
              Conte-nos sobre seu projeto. Respondemos em até 24 horas com um plano personalizado.
            </Typography>

            <Stack spacing={3}>
              {contactInfo.map((item) => (
                <Box key={item.label} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,207,71,0.1)",
                      border: "1px solid rgba(255,207,71,0.2)",
                    }}
                  >
                    <item.icon sx={{ color: "primary.main", fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.75rem", color: "#8b9bb4", fontFamily: "'Orbitron', sans-serif", letterSpacing: 1 }}>
                      {item.label.toUpperCase()}
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{item.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
          </ScrollReveal>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component={motion.form}
            style={{ y: formY, rotate: formRotate }}
            onSubmit={(e) => e.preventDefault()}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(16px)",
            }}
          >
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  sx={fieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Empresa"
                  variant="outlined"
                  sx={fieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="E-mail"
                  type="email"
                  variant="outlined"
                  sx={fieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Telefone"
                  variant="outlined"
                  sx={fieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Conte sobre seu projeto"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={fieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  endIcon={<SendIcon />}
                  fullWidth
                  sx={{
                    py: 2,
                    mt: 1,
                    background: "primary.main",
                    /* color: "#02040a", */
                    fontWeight: 700,
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "0.9rem",
                    borderRadius: 0,
                    clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                    "&:hover": {
                      background: "primary.dark",
                      boxShadow: "0 10px 30px rgba(255,207,71,0.3)",
                    },
                  }}
                >
                  Enviar mensagem
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: 2,
    "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
    "&:hover fieldset": { borderColor: "rgba(255,207,71,0.4)" },
    "&.Mui-focused fieldset": { borderColor: "primary.main" },
  },
  "& .MuiInputLabel-root": {
    color: "#8b9bb4",
    "&.Mui-focused": { color: "primary.main" },
  },
};
