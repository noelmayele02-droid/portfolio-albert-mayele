import { motion } from "framer-motion";
import { Briefcase, BookOpen, Zap } from "lucide-react";

const OpenTo = () => {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Travail",
      description: "CDI ou CDD en tant que développeur ou ingénieur logiciel.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Stage",
      description: "Découvrir l'industrie et appliquer mes compétences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Alternance",
      description: "Combiner formation académique et expérience professionnelle.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm">Actuellement en recherche</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Je suis ouvert à...
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Je cherche activement des opportunités pour progresser et contribuer à des projets innovants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glass card */}
                <div className="relative glass-hover rounded-2xl p-6 h-full flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${opp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    aria-hidden
                  />

                  {/* Icon */}
                  <div className="relative z-10 mb-4 p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title and description */}
                  <h3 className="relative z-10 font-display text-xl font-semibold mb-2">
                    {opp.title}
                  </h3>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                    {opp.description}
                  </p>

                  {/* Animated accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${opp.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Intéressé ? Parlons de ce que nous pouvons accomplir ensemble.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all glow-effect"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenTo;
