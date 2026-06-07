"use client";

import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { float, StatCard } from "./styles";

import Typewriter from "typewriter-effect";

export default function AscensionHero() {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        bgcolor: "#00020B",
        color: "#fff",
        height: "100vh",
        maxHeight: "100dvh",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "8%",
        flexDirection: { xs: "column", md: "row" },
        pt: { xs: "100px", md: 0 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Marca d'água */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
          bottom: 10,
          left: 10,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "12vw", md: "8vw" },
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            userSelect: "none",
            letterSpacing: "0.2em",
            fontFamily: 'Impact, "Arial Black", sans-serif',
          }}
        >
          <Typewriter
            options={{
              strings: ["LUZZER"],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </Typography>
      </Box>

      {/* Texto */}
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" }, zIndex: 2, mb: { xs: 8, md: 0 } }}>
        <Typography
          component="span"
          sx={{
            color: "primary.main",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontSize: "0.9rem",
            display: "block",
            mb: 2,
          }}
        >
          TECNOLOGIA & ESTRATÉGIA
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(3rem, 3vw, 6rem)",
            lineHeight: 1.1,
            mb: 3,
            color: "#FFF",
          }}
        >
          MARCAS QUE
          <br />
          <Box
            component="span"
            sx={{
              color: "#FFD957",
              display: "inline-block",
              minWidth: 260,
            }}
          >
            <Typewriter
              options={{
                strings: ["respirem futuro", "dominam o mercado", "criam legado"],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#8b9bb4",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            mb: 5,
            maxWidth: { xs: "100%", md: "90%" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          Estratégia, design e storytelling para marcas que querem ser referência.
          Da identidade à experiência do cliente, entregamos resultados mensuráveis.
        </Typography>

        <Stack
          direction="row"
          spacing={2.5}
          sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
        >
          <Button
            sx={{
              px: "40px",
              py: "16px",
              background: theme.palette.primary.main,
              color: "#02040a",
              fontWeight: 700,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.85rem",
              borderRadius: 0,
              clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                background: theme.palette.primary.dark,
                transform: "translateY(-2px)",
                boxShadow: `0 10px 30px ${theme.palette.primary.light}`,
              },
            }}
          >
            Quero TRANSFORMAR minha marca
          </Button>

          <Button
            startIcon={<PlayArrowIcon />}
            href="#portfolio"
            sx={{
              px: "40px",
              py: "16px",
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 0,
              fontWeight: 600,
              fontSize: "0.85rem",
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "#fff",
                background: "rgba(255,255,255,0.05)",
              },
            }}
          >
            VER CASES
          </Button>
        </Stack>
      </Box>

      {/* Visual */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "45%" },
          height: { xs: 360, md: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center", 
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src="/images/buzzer_megsone3.png"
          alt="MEGSONE Branding"
          sx={{
            objectFit: "contain",
            width: { xs: "100%", md: "130%" }, 
            transform: { md: "translateX(8%)" },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 0, md: "8%" },
            left: { xs: 0, md: "-20px" },
            width: "100%",
            display: "flex",
            gap: 2,
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <StatCard sx={{ animation: `${float} 7s ease-in-out infinite` }}>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#8b9bb4",
                display: "block",
                mb: 0.5,
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              PROJETOS ENTREGUES
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "primary.main",
                fontWeight: "bold",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              150+
            </Typography>
          </StatCard>

          <StatCard sx={{ animation: `${float} 7s ease-in-out infinite` }}>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#8b9bb4",
                display: "block",
                mb: 0.5,
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              CLIENTES ATENDIDOS
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "text.primary",
                fontWeight: "bold",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              50+
            </Typography>
          </StatCard>

          <StatCard sx={{ animation: `${float} 7s ease-in-out infinite` }}>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#8b9bb4",
                display: "block",
                mb: 0.5,
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              ANOS DE EXPERIÊNCIA
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "primary.main",
                fontWeight: "bold",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              8+
            </Typography>
          </StatCard>
        </Box>
      </Box>
    </Box>
  );
}
