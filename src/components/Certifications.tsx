import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    title: "React Advanced Patterns",
    issuer: "Udacity",
    date: "Mars 2024",
    credentialUrl: "#",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Janvier 2023",
    credentialUrl: "#",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Novembre 2023",
    credentialUrl: "#",
    icon: <Award className="w-5 h-5" />,
  },
  {
    title: "TypeScript Professional",
    issuer: "Scrimba",
    date: "Juillet 2023",
    credentialUrl: "#",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "Mai 2023",
    credentialUrl: "#",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "Docker & Kubernetes",
    issuer: "Linux Academy",
    date: "Décembre 2022",
    credentialUrl: "#",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-96 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-primary">CERTIFICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & Formation
          </h2>
          <p className="text-lg text-foreground/70">
            Formation continue pour rester à la pointe de la technologie.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              {/* Card */}
              <div className="relative p-6 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 w-fit"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-primary">{cert.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 flex-grow">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-foreground/70 mb-3">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-foreground/60 pt-3 border-t border-primary/10">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 text-xs font-semibold text-primary hover:text-accent transition-colors duration-300"
                  >
                    Voir credential →
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/60 mb-4">
            En formation continue pour améliorer mes compétences et expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
