import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import profile1 from "@/assets/WhatsApp Image 2025-11-08 at 18.04.26 (1).jpeg";
import profile2 from "@/assets/WhatsApp Image 2025-11-08 at 18.04.27 (2).jpeg";
import profile3 from "@/assets/WhatsApp Image 2025-11-08 at 18.04.27 (3).jpeg";
import TypeWriter from "./TypeWriter";
import GlassCard from "./ui/GlassCard";

const profileImages = [profile1, profile2, profile3];

const FloatingParticle = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-primary rounded-full"
    initial={{ y: "100vh", x: `${x}vw`, opacity: 0 }}
    animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  />
);

const GlowOrb = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
);

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Waouh rotating conic gradient */}
      <div className="waouh-gradient" aria-hidden />
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      {/* Animated glow orbs */}
      <GlowOrb className="top-1/4 left-1/4 w-96 h-96 bg-primary/20" />
      <GlowOrb className="bottom-1/4 right-1/4 w-80 h-80 bg-primary/10" />
      <GlowOrb className="top-1/2 right-1/3 w-64 h-64 bg-accent/15" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rotating Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto mb-8 w-40 h-40 md:w-52 md:h-52"
          >
            {/* Animated ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-primary/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-4 rounded-full border border-primary/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Glow effect behind photo */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />

            {/* Photo container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 glow-effect">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={profileImages[currentImage]}
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.5 }} /*Durée d'animation de ma photo de profile*/
                />
              </AnimatePresence>
            </div>

            {/* Sparkle icons */}
            <motion.div
              className="absolute -top-2 -right-2 text-primary"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
          >
            ✨ Bonjour, je suis
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px hsl(38 92% 50% / 0)",
                  "0 0 40px hsl(38 92% 50% / 0.5)",
                  "0 0 20px hsl(38 92% 50% / 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Développeur
            </motion.span>
            <br />
            <span className="text-gradient relative">
              <TypeWriter words={["Créatif", "Passionné", "Innovant", "Full-Stack"]} />
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Je crée des expériences digitales uniques et immersives,
            en combinant design moderne et code performant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlassCard className="flex items-center gap-4">
              <motion.a
                href="#projets"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all glow-effect relative overflow-hidden group btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10">Voir mes projets</span>
              </motion.a>
              <motion.a
                href="#apropos"
                className="px-5 py-2 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all hover:border-primary/50"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                En savoir plus
              </motion.a>
            </GlassCard>
          </motion.div>
        </div>
        <br/><br/><br/><br/><br/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#projets" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
            <span className="text-sm">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 group-hover:text-primary transition-colors" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
