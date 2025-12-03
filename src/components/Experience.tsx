import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  highlight?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    period: "2023 - Présent",
    title: "Développeur Full Stack Senior",
    company: "Tech Innovate",
    location: "Paris, France",
    description: "Diriger l'architecture et le développement de solutions web scalables pour des clients Fortune 500.",
    achievements: [
      "Augmenté les performances de 40% via optimisations React",
      "Mentoré une équipe de 5 développeurs juniors",
      "Délivré 12+ projets complexes en production",
    ],
    highlight: true,
  },
  {
    period: "2021 - 2023",
    title: "Développeur React",
    company: "Digital Solutions",
    location: "Lyon, France",
    description: "Développement d'applications web modernes avec React, TypeScript et Tailwind CSS.",
    achievements: [
      "Créé des interfaces pixel-perfect avec animations fluides",
      "Implémenté des systèmes de design réutilisables",
      "Réduisit le temps de chargement de 35%",
    ],
  },
  {
    period: "2020 - 2021",
    title: "Développeur Web Junior",
    company: "StartUp Digital",
    location: "Toulouse, France",
    description: "Débuts en développement web full-stack avec JavaScript et Node.js.",
    achievements: [
      "Construit 5 sites web responsifs",
      "Intégré des APIs tierces avec succès",
      "Géré le déploiement sur plusieurs serveurs",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">PARCOURS PROFESSIONNEL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expérience & Expertise
          </h2>
          <p className="text-lg text-foreground/70">
            Un parcours riche en projets innovants et en défis techniques relevés avec succès.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-primary/30 to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0">
                <motion.div
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    exp.highlight
                      ? "border-primary bg-primary/20 shadow-lg shadow-primary/30"
                      : "border-primary/30 bg-card hover:border-primary hover:bg-primary/10"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Trophy className={`w-5 h-5 ${exp.highlight ? "text-primary" : "text-primary/50"}`} />
                </motion.div>
              </div>

              {/* Content card */}
              <div className="ml-24 group">
                <motion.div
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    exp.highlight
                      ? "border-primary/40 bg-gradient-to-br from-primary/10 to-accent/5 shadow-lg"
                      : "border-primary/10 bg-card/50 hover:border-primary/30 hover:bg-card/80"
                  }`}
                  whileHover={{ y: -4 }}
                >
                  {/* Date and period */}
                  <div className="flex items-center gap-2 mb-2 text-sm text-primary font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Title and company */}
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-foreground/70 font-medium mb-1">
                    {exp.company}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-sm text-foreground/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight badge */}
                  {exp.highlight && (
                    <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                      <span className="text-xs font-semibold text-primary">Poste actuel</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
