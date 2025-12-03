import { motion } from "framer-motion";
import { Code2, Zap, Database, Cloud, Smartphone, Brain } from "lucide-react";

interface Tech {
  name: string;
  icon: React.ReactNode;
  category: string;
  proficiency: number;
}

const technologies: Tech[] = [
  { name: "React", icon: <Code2 className="w-6 h-6" />, category: "Frontend", proficiency: 95 },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" />, category: "Language", proficiency: 90 },
  { name: "Next.js", icon: <Zap className="w-6 h-6" />, category: "Framework", proficiency: 88 },
  { name: "Tailwind CSS", icon: <Zap className="w-6 h-6" />, category: "Styling", proficiency: 92 },
  { name: "Node.js", icon: <Database className="w-6 h-6" />, category: "Backend", proficiency: 85 },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, category: "Database", proficiency: 82 },
  { name: "Docker", icon: <Cloud className="w-6 h-6" />, category: "DevOps", proficiency: 80 },
  { name: "AWS", icon: <Cloud className="w-6 h-6" />, category: "Cloud", proficiency: 78 },
  { name: "React Native", icon: <Smartphone className="w-6 h-6" />, category: "Mobile", proficiency: 80 },
  { name: "GraphQL", icon: <Brain className="w-6 h-6" />, category: "API", proficiency: 85 },
  { name: "Framer Motion", icon: <Zap className="w-6 h-6" />, category: "Animation", proficiency: 90 },
  { name: "Git", icon: <Code2 className="w-6 h-6" />, category: "Tools", proficiency: 95 },
];

const categories = ["Frontend", "Backend", "Database", "DevOps", "Cloud", "Mobile", "Language", "Styling", "API", "Animation", "Framework", "Tools"];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-96 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-96 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-primary">STACK TECHNOLOGIQUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technologies & Outils
          </h2>
          <p className="text-lg text-foreground/70">
            Maîtrise des technologies modernes et outils de développement les plus demandés.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="p-4 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                {/* Icon */}
                <motion.div
                  className="text-primary mb-3 text-opacity-70 group-hover:text-opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {tech.icon}
                </motion.div>

                {/* Name */}
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </p>

                {/* Proficiency dot */}
                <div className="mt-2 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat, idx) => {
            const catTechs = technologies.filter((t) => t.category === cat);
            const avgProficiency =
              catTechs.length > 0
                ? Math.round(
                    catTechs.reduce((sum, t) => sum + t.proficiency, 0) /
                      catTechs.length
                  )
                : 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-sm text-foreground">{cat}</p>
                  <span className="text-xs font-bold text-primary">{avgProficiency}%</span>
                </div>
                <div className="w-full h-2 bg-card rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${avgProficiency}%` }}
                    transition={{ duration: 1, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
