import { motion } from "framer-motion";
import { Code2, Palette, Zap, Smartphone, Database, Brain } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "Applications React/TypeScript modernes, performantes et scalables avec architecture propre et bonnes pratiques.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Interfaces créatives et intuitives utilisant Tailwind CSS et des animations Framer Motion pour une expérience fluide.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description: "Sites adaptatifs et optimisés pour tous les appareils, du mobile au desktop, avec performance maximale.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Zap,
    title: "Optimisation Performance",
    description: "Code optimisé, lazy loading, bundle splitting et cache stratégique pour des temps de chargement minimaux.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Intégration de bases de données, APIs RESTful robustes et gestion d'authentification sécurisée.",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: Brain,
    title: "Stratégie Digital",
    description: "Conseil en architecture web, bonnes pratiques DevOps et stratégie de déploiement pour vos projets.",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-primary">MES SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expertise & Compétences
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Je propose des solutions complètes pour transformer vos idées en réalité digitale, du concept à la mise en production.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-50 blur transition-opacity duration-500" />

                {/* Card Content */}
                <div className="relative p-8 rounded-xl border border-primary/10 bg-card/50 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-4 inline-flex">
                    <motion.div
                      className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-4 pt-4 border-t border-primary/5 group-hover:border-primary/20 transition-colors duration-300">
                    <motion.div
                      className="flex items-center text-primary text-sm font-semibold"
                      whileHover={{ x: 4 }}
                    >
                      En savoir plus
                      <span className="ml-2 text-lg">→</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 mb-6">
            Besoin d'une expertise particulière ? N'hésitez pas à me contacter.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300"
          >
            Démarrer un projet
            <span className="ml-2">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
