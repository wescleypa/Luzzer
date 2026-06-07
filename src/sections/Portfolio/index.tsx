"use client";

import { useRef, useState } from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const cases = [
  {
    title: "NovaTech",
    category: "Rebranding Completo",
    description:
      "Reposicionamento de marca B2B com nova identidade, site e campanha integrada — do conceito ao mercado em 90 dias.",
    metric: "+340%",
    metricLabel: "reconhecimento de marca",
    image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
    tags: ["Branding", "Web", "Social"],
    color: "#FFCF47",
  },
  {
    title: "Velora Beauty",
    category: "Lançamento de Produto",
    description:
      "Go-to-market completo para linha premium: naming, packaging, campanha digital e ativação de influenciadoras.",
    metric: "72h",
    metricLabel: "sold out total",
    image: "https://chandigarhmetro.com/wp-content/uploads/2020/02/how-to-create-perfect-image.jpg",
    tags: ["Launch", "Ads", "Packaging"],
    color: "#00BDDB",
  },
  {
    title: "Atlas Finance",
    category: "Identidade Visual",
    description:
      "Marca fintech que transmite confiança e inovação — identidade, motion system e brand book para escala global.",
    metric: "12",
    metricLabel: "mercados ativos",
    image: "https://thenavigatorcompany.com/wp-content/uploads/2024/08/mission1.jpg",
    tags: ["Logo", "Brand Book", "Motion"],
    color: "#FFCF47",
  },
];

const CASE_COUNT = cases.length;
const SEGMENT = 1 / CASE_COUNT;

function CaseSlide({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof cases)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * SEGMENT;
  const end = (index + 1) * SEGMENT;
  const fade = SEGMENT * 0.1;
  const contentFade = SEGMENT * 0.12;

  const opacityInput =
    index === 0
      ? [0, end - fade, end]
      : index === CASE_COUNT - 1
        ? [start, start + fade, 1]
        : [start, start + fade, end - fade, end];

  const opacityOutput =
    index === 0 ? [1, 1, 0] : index === CASE_COUNT - 1 ? [0, 1, 1] : [0, 1, 1, 0];

  const contentInput =
    index === 0
      ? [0, contentFade, end - contentFade, end]
      : index === CASE_COUNT - 1
        ? [start, start + contentFade, 1]
        : [start, start + contentFade, end - contentFade, end];

  const contentOutput =
    index === 0 ? [1, 1, 1, 0] : index === CASE_COUNT - 1 ? [0, 1, 1] : [0, 1, 1, 0];

  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);
  const contentOpacity = useTransform(scrollYProgress, contentInput, contentOutput);
  const scale = useTransform(scrollYProgress, [start, end], [1.12, 1]);
  const imageY = useTransform(scrollYProgress, [start, end], ["8%", "-8%"]);
  const contentY = useTransform(
    scrollYProgress,
    [start, start + SEGMENT * 0.15, end - SEGMENT * 0.15, end],
    [60, 0, 0, -60]
  );
  const watermarkX = useTransform(scrollYProgress, [start, end], [-30, 30]);

  return (
    <Box
      component={motion.div}
      style={{ opacity }}
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: index + 1,
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Box
          component={motion.img}
          style={{ scale, y: imageY }}
          src={item.image}
          alt={item.title}
          sx={{
            width: "110%",
            height: "110%",
            objectFit: "cover",
            objectPosition: "center",
            marginLeft: "-5%",
            marginTop: "-5%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(105deg, rgba(0,2,11,0.92) 0%, rgba(0,2,11,0.55) 45%, rgba(0,2,11,0.25) 100%),
              linear-gradient(0deg, rgba(0,2,11,0.85) 0%, transparent 40%)
            `,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 70% 50%, ${item.color}18 0%, transparent 60%)`,
          }}
        />
      </Box>

      <Box
        component={motion.div}
        style={{ x: watermarkX }}
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: "-2%", md: "5%" },
          top: "50%",
          marginTop: "-0.5em",
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: { xs: "28vw", md: "22vw" },
            fontWeight: 900,
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Typography>
      </Box>

      <Box
        component={motion.div}
        style={{ y: contentY, opacity: contentOpacity }}
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          px: { xs: "6%", md: "8%" },
          pb: { xs: 12, md: 10 },
          pt: { xs: 14, md: 10 },
        }}
      >
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: 4,
              color: item.color,
              mb: 2,
            }}
          >
            {item.category.toUpperCase()}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: { xs: "2.8rem", md: "clamp(3.5rem, 7vw, 6rem)" },
              fontWeight: 900,
              lineHeight: 1,
              mb: 3,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.7,
              mb: 4,
              maxWidth: 560,
            }}
          >
            {item.description}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 5 }}
            sx={{ alignItems: { xs: "flex-start", sm: "center" }, mb: 4 }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 900,
                  color: item.color,
                  lineHeight: 1,
                }}
              >
                {item.metric}
              </Typography>
              <Typography
                sx={{
                  color: "#8b9bb4",
                  fontSize: "0.8rem",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: 1,
                  mt: 0.5,
                }}
              >
                {item.metricLabel.toUpperCase()}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {item.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: `${item.color}15`,
                    color: item.color,
                    border: `1px solid ${item.color}35`,
                    fontSize: "0.65rem",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: 1,
                  }}
                />
              ))}
            </Box>
          </Stack>

          <Button
            endIcon={<ArrowOutwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              color: "#02040a",
              bgcolor: item.color,
              fontWeight: 700,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.8rem",
              borderRadius: 0,
              clipPath:
                "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
              "&:hover": {
                bgcolor: item.color,
                filter: "brightness(1.1)",
              },
            }}
          >
            Ver case completo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function ScrollProgress({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        bgcolor: "rgba(255,255,255,0.06)",
        zIndex: 30,
      }}
    >
      <Box
        component={motion.div}
        style={{ width }}
        sx={{
          height: "100%",
          background: "linear-gradient(90deg, #FFCF47, #00BDDB)",
        }}
      />
    </Box>
  );
}

function CaseDot({
  index,
  color,
  scrollYProgress,
}: {
  index: number;
  color: string;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * SEGMENT;
  const end = (index + 1) * SEGMENT;
  const mid = (start + end) / 2;

  const dotOpacity = useTransform(scrollYProgress, [start, mid, end], [0.25, 1, 0.25]);
  const dotHeight = useTransform(scrollYProgress, [start, mid, end], [8, 36, 8]);

  return (
    <Box
      component={motion.div}
      style={{ opacity: dotOpacity, height: dotHeight }}
      sx={{
        width: 3,
        borderRadius: 2,
        bgcolor: color,
        boxShadow: `0 0 12px ${color}60`,
      }}
    />
  );
}

function ScrollHint({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <Box
      component={motion.div}
      style={{ opacity }}
      sx={{
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
        pointerEvents: "none",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: 3,
          color: "#8b9bb4",
        }}
      >
        ROLE PARA EXPLORAR
      </Typography>
      <KeyboardArrowDownIcon
        sx={{
          color: "primary.main",
          animation: "bounce 2s ease-in-out infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(6px)" },
          },
        }}
      />
    </Box>
  );
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(Math.floor(v * CASE_COUNT), CASE_COUNT - 1));
  });

  return (
    <Box
      id="portfolio"
      ref={containerRef}
      sx={{
        position: "relative",
        height: `${CASE_COUNT * 100}vh`,
        bgcolor: "#00020B",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100dvh",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component={motion.div}
          style={{ opacity: headerOpacity }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 30,
            px: { xs: "6%", md: "8%" },
            pt: { xs: 12, md: 10 },
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: 4,
              color: "primary.main",
              mb: 1,
            }}
          >
            PORTFÓLIO
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              fontWeight: 700,
            }}
          >
            Cases que{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #FFCF47, #00BDDB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              falam por si
            </Box>
          </Typography>
        </Box>

        <Box
          component={motion.div}
          style={{ opacity: headerOpacity }}
          sx={{
            position: "absolute",
            top: { xs: 96, md: 80 },
            right: { xs: "6%", md: "8%" },
            zIndex: 30,
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "0.85rem",
            color: "#8b9bb4",
            letterSpacing: 2,
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(CASE_COUNT).padStart(2, "0")}
        </Box>

        {cases.map((item, i) => (
          <CaseSlide
            key={item.title}
            item={item}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}

        <Stack
          spacing={1.5}
          sx={{
            position: "absolute",
            right: { xs: 20, md: 40 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            display: { xs: "none", sm: "flex" },
          }}
        >
          {cases.map((item, i) => (
            <CaseDot
              key={item.title}
              index={i}
              color={item.color}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </Stack>

        <ScrollProgress scrollYProgress={scrollYProgress} />
        <ScrollHint scrollYProgress={scrollYProgress} />
      </Box>
    </Box>
  );
}
