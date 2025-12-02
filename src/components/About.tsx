import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "React, TypeScript, Node.js, et les dernières technologies frontend.",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Interfaces intuitives et esthétiques centrées sur l'utilisateur.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation du code pour des applications rapides et fluides.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail en équipe agile avec communication claire et efficace.",
  },
];

const About = () => {
  return (
    <section id="apropos" className="py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4">À propos de moi</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passionné par le <span className="text-gradient">code</span> et le <span className="text-gradient">design</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Développeur créatif avec plus de 5 ans d'expérience, je transforme 
              les idées en expériences digitales mémorables. Mon approche combine 
              expertise technique et sensibilité artistique pour créer des solutions 
              qui se démarquent.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Je suis constamment à la recherche de nouveaux défis et opportunités 
              pour repousser les limites de ce qui est possible sur le web.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Figma", "Tailwind", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
