import { AppBar, Box, Button, Link, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

// ─── Keyframes ────────────────────────────────────────────────────────────────

export const float = keyframes`
  0%, 100% { transform: translateY(0px) rotateX(0deg); }
  50%       { transform: translateY(-20px) rotateX(2deg); }
`;

export const floatDelay = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-15px); }
`;

export const spin = keyframes`
  0%   { transform: rotateX(60deg) rotateZ(0deg); }
  100% { transform: rotateX(60deg) rotateZ(360deg); }
`;

export const spinReverse = keyframes`
  0%   { transform: rotateX(60deg) rotateZ(360deg); }
  100% { transform: rotateX(60deg) rotateZ(0deg); }
`;

export const shadowPulse = keyframes`
  0%, 100% { opacity: 0.5; transform: translateX(-50%) rotateX(60deg) scale(1); }
  50%       { opacity: 0.3; transform: translateX(-50%) rotateX(60deg) scale(0.8); }
`;

// ─── Styled Components ────────────────────────────────────────────────────────

export const AmbientLight = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  background: `
    radial-gradient(circle at 80% 20%, ${theme.palette.primary.main}14 0%, transparent 40%),
    radial-gradient(circle at 0% 100%, ${theme.palette.background.default} 0%, transparent 60%),
    linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)
  `,
}));

export const GridOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  backgroundImage: `
    linear-gradient(${theme.palette.divider} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
  maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
  WebkitMaskImage:
    "radial-gradient(circle at center, black 40%, transparent 80%)",
}));

export const PreOrderBtn = styled(Button)(({ theme }) => ({
  padding: "10px 24px",
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  background: "transparent",
  borderRadius: "50px",
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "0.8rem",
  textTransform: "none",
  "&:hover": {
    background: theme.palette.primary.main,
    color: theme.palette.background.default,
    boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
  },
}));

export const DeviceWrapper = styled(Box)({
  position: "relative",
  width: 400,
  height: 400,
  transformStyle: "preserve-3d",
  animation: `${float} 6s ease-in-out infinite`,
});

export const MainRing = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.main}4d`, // ~30% opacity
  boxShadow: `0 0 30px ${theme.palette.primary.main}1a, inset 0 0 30px ${theme.palette.primary.main}1a`,
  transform: "rotateX(60deg)",
}));

export const CoreOrb = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 150,
  height: 150,
  background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.background.paper})`,
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: `0 0 60px ${theme.palette.primary.main}66`,
  zIndex: 2,
}));

export const OrbitalRing = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "10%",
  left: "10%",
  width: "80%",
  height: "80%",
  borderRadius: "50%",
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  borderRight: "4px solid transparent",
  borderTop: "4px solid transparent",
  borderBottom: "4px solid transparent",
  animation: `${spin} 4s linear infinite`,
}));

export const OrbitalRing2 = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-10%",
  left: "-10%",
  width: "120%",
  height: "120%",
  borderRadius: "50%",
  border: `1px dashed ${theme.palette.text.disabled}`,
  animation: `${spinReverse} 10s linear infinite`,
}));

export const ShadowReflection = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: -100,
  left: "50%",
  transform: "translateX(-50%) rotateX(60deg)",
  width: 300,
  height: 300,
  background: `radial-gradient(${theme.palette.primary.main}33, transparent 70%)`,
  filter: "blur(20px)",
  animation: `${shadowPulse} 6s ease-in-out infinite`,
}));

export const StatCard = styled(Box)(({ theme }) => ({
  position: "relative",
  background: `${theme.palette.background.paper}cc`, // ~80% opacity
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.palette.primary.main}4d`,
  padding: "15px 25px",
  borderRadius: 10,
  color: theme.palette.text.primary,
  fontFamily: "'Orbitron', sans-serif",
  boxShadow: `0 10px 30px ${theme.palette.common.black}80`,
}));
