import { AppBar, Link, styled, Typography } from "@mui/material";

export const NavBar = styled(AppBar)(({ theme }) => ({
  background: `${theme.palette.background.paper}b3`,
  backdropFilter: "blur(10px)",
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: "none",
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: 900,
  fontSize: "1.2rem",
  letterSpacing: 2,
  textTransform: "uppercase",
  "& span": { color: theme.palette.primary.main },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
  fontWeight: 600,
  transition: "color 0.3s ease",
  "&:hover": { color: theme.palette.primary.main },
}));
