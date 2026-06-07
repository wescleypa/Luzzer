import { Stack, Toolbar } from "@mui/material";
import { NavBar, NavLink } from "./styles";
import Logo from "../Logo";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Cases", href: "#portfolio" },
  { label: "Contato", href: "#contact" },
];

export default function AppbarComponent() {
  return (
    <NavBar position="fixed" sx={{ bgcolor: "transparent", border: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: "5% !important" }}>
        <Logo type="all" />

        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Stack>
      </Toolbar>
    </NavBar>
  );
}
