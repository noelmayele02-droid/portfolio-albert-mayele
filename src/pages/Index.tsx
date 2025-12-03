import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import FloatingIcons from "@/components/FloatingIcons";
import Stats from "@/components/Stats";
import { useState } from "react";
import { Mail, Code2, Palette, Rocket, ArrowRight, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import OpenTo from "@/components/OpenTo";


const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <main className="min-h-screen bg-background relative">
      <MouseFollower />
      <FloatingIcons />
      <Navbar />
      <Hero />
      <OpenTo />
      <Stats />
      <Services />
      <Experience />
      <Portfolio />
      <Projects />
      <About />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
