import { Box, Divider, Typography } from "@mui/material";

import Image from "../Image";

const SingleLogoMegsone = ({ ...props }) => (
  <Image
    alt="Megsone Logo"
    src="/images/logo_megsone_icon.png"
    {...props}
  />
);

const SingleLogoLuzzer = ({ ...props }) => (
  <Image
    alt="Luzzer Logo"
    src="/images/logo_luzzer_full.png"
    {...props}
  />
);

const NameMegsone = () => (
  <Box sx={{ p: 0 }}>
    <Typography
      sx={{
        color: "#fff",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1,
        pt: 1,
      }}
    >
      Megsone
    </Typography>

    <Typography
      sx={{
        color: "#11A7FF",
        fontSize: 12,
        letterSpacing: 1.5,
        whiteSpace: "nowrap",
      }}
    >
      Technologies
    </Typography>
  </Box>
);

const NameLuzzer = () => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography
      sx={{
        color: "#F3C675",
        fontWeight: 300,
        fontSize: 30,
        letterSpacing: 1,
        lineHeight: 1,
        position: "relative",
        zIndex: 2,
      }}
    >
      LUZZER
    </Typography>

    {/* Curva */}
    {/*  <Box
      component="svg"
      viewBox="0 0 220 80"
      sx={{
        position: "absolute",
        left: 35,
        top: -10,
        width: 100,
        height: 60,
        overflow: "visible",
        zIndex: 3,
        pointerEvents: "none",
      }}
    >
      <path
        d="
          M 0 38
          C 25 10, 55 30, 80 38
          S 135 66, 180 38
        "
        fill="none"
        stroke="#F3C675"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </Box> */}

    <Typography
      sx={{
        color: "#C6A96B",
        fontSize: 8,
        letterSpacing: 2.8,
        lineHeight: 1,
        whiteSpace: "nowrap",
        fontWeight: 600,
        mt: 0.7,
      }}
    >
      BRANDING & MARKETING
    </Typography>
  </Box>
);

const FullLogoMegsoneName = ({ ...props }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      flexShrink: 0,
    }}
  >
    <SingleLogoMegsone
      width={50}
      height={50}
      {...props}
    />

    <NameMegsone />
  </Box>
);

type LogoType = "megsone" | "luzzer" | "all";

type LogoProps = React.ComponentProps<typeof Image> & {
  type?: LogoType;
  returnName?: boolean;
};

export default function Logo({
  type = "megsone",
  returnName = false,
  ...props
}: LogoProps) {

  if (type === 'all') {
    return (
      <Box component="div"  {...props} sx={{ display: 'flex', alignItems: 'center', gap: 2, ...props?.sx }}>
        <FullLogoMegsoneName />

        <Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: '#F3C675', height: 30 }}
          />
        </Box>

        <SingleLogoLuzzer sx={{ width: 130 }} />
      </Box>
    );
  }

  return <SingleLogoMegsone />
}