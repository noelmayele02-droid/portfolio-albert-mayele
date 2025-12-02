import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import FloatingIcons from "@/components/FloatingIcons";
import Stats from "@/components/Stats";
import { useState } from "react";
import { Mail, Code2, Palette, Rocket, ArrowRight, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";


const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <main className="min-h-screen bg-background relative">
      <MouseFollower />
      <FloatingIcons />
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
