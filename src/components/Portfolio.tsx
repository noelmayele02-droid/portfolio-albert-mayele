import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  category: "web" | "mobile" | "fullstack" | "design";
  link?: string;
  github?: string;
  stats?: {
    stars?: number;
    forks?: number;
  };
}

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce moderne avec paiement Stripe",
    longDescription: "Plateforme e-commerce complète avec React, Next.js, Tailwind CSS, authentification JWT, intégration Stripe pour les paiements, gestion de panier persistante et interface administrateur.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "fullstack",
    link: "https://ecommerce-demo.com",
    github: "https://github.com",
    stats: { stars: 234, forks: 45 },
  },
  {
    id: "2",
    title: "AI Chat Assistant",
    description: "Assistant conversationnel avec IA intégrée",
    longDescription: "Application de chat temps réel utilisant OpenAI API, WebSockets pour la communication instantanée, stockage de conversations et interface élégante avec animations Framer Motion.",
    tags: ["React", "Node.js", "OpenAI", "WebSockets", "MongoDB"],
    category: "fullstack",
    link: "https://ai-chat-demo.com",
    stats: { stars: 567, forks: 123 },
  },
  {
    id: "3",
    title: "Design System",
    description: "Système de design réutilisable professionnel",
    longDescription: "Composants UI complets avec Storybook, documentation exhaustive, thème sombre/clair, accessibilité WCAG AA et production-ready pour les équipes.",
    tags: ["React", "Tailwind CSS", "Storybook", "TypeScript"],
    category: "design",
    github: "https://github.com",
    stats: { stars: 890, forks: 234 },
  },
  {
    id: "4",
    title: "Mobile Weather App",
    description: "Application météo cross-platform",
    longDescription: "Application météo avec React Native, géolocalisation, prévisions en temps réel, widget personnalisable et synchronisation cloud avec Firebase.",
    tags: ["React Native", "Firebase", "Expo", "Redux"],
    category: "mobile",
  },
  {
    id: "5",
    title: "Analytics Dashboard",
    description: "Tableau de bord d'analyse en temps réel",
    longDescription: "Dashboard interactif avec recharts, données en temps réel, filtres avancés, export PDF/CSV et performance optimisée pour 50k+ points de données.",
    tags: ["React", "Recharts", "Socket.io", "Express"],
    category: "web",
    link: "https://analytics-demo.com",
  },
  {
    id: "6",
    title: "SaaS Management",
    description: "Plateforme SaaS multi-tenant",
    longDescription: "Plateforme SaaS complète avec multi-tenancy, gestion d'équipes, facturation automatique, SSO, API REST et intégrations tierces.",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL", "Docker"],
    category: "fullstack",
    github: "https://github.com",
  },
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "fullstack", label: "Full Stack" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-96 -right-96 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projets & Réalisations
          </h2>
          <p className="text-lg text-foreground/70">
            Une sélection de mes meilleurs projets, du concept à la production.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                  : "bg-card/50 border border-primary/20 text-foreground hover:border-primary/50"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group h-full"
            >
              <div className="h-full p-6 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 flex flex-col">
                {/* Image placeholder */}
                <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center text-primary/40">
                    <span className="text-sm">Projet showcase</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="flex gap-4 mb-4 text-sm text-foreground/60 py-3 border-y border-primary/10">
                    {project.stats.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{project.stats.stars}</span>
                      </div>
                    )}
                    {project.stats.forks && (
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4 text-primary" />
                        <span>{project.stats.forks}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 font-semibold transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5 font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
