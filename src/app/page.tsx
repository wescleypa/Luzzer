'use client';

import AppbarComponent from "@/components/Appbar";
import AmbientScroll from "@/components/AmbientScroll";
import About from "@/sections/About";
import AscensionHero from "@/sections/Hero";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Portfolio from "@/sections/Portfolio";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#00020B", width: "100%", maxWidth: "100vw", position: "relative" }}>
      <AmbientScroll />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <AppbarComponent />
        <AscensionHero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}
