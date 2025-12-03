import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Albert a transformé notre vision en réalité. Son expertise en React et attention aux détails sont exceptionnels. Je le recommande vivement.",
    author: "Marie Dubois",
    role: "CTO",
    company: "TechCorp",
    rating: 5,
  },
  {
    id: 2,
    quote: "Travailleur fiable, créatif et toujours prêt à aller l'extra mile. Son design system a amélioré notre productivité de 40%.",
    author: "Jean Martin",
    role: "Product Manager",
    company: "InnovateLabs",
    rating: 5,
  },
  {
    id: 3,
    quote: "Des compétences techniques solides combinées à une excellente communication. Albert s'intègre parfaitement dans une équipe.",
    author: "Sophie Laurent",
    role: "Directrice de projet",
    company: "DigitalFlow",
    rating: 5,
  },
  {
    id: 4,
    quote: "Performance exceptionnelle. Albert a livré notre projet en avance et au-dessus des attentes qualité.",
    author: "Pierre Leclerc",
    role: "CEO",
    company: "WebSolutions",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-96 -left-96 w-full h-full bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -top-96 -right-96 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-primary">TÉMOIGNAGES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que mes clients disent
          </h2>
          <p className="text-lg text-foreground/70">
            Des retours authentiques de clients satisfaits et partenaires de confiance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

              {/* Card */}
              <div className="relative p-6 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm group-hover:border-primary/30 group-hover:bg-card/80 transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 leading-relaxed flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-primary/10">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { label: "Clients", value: "50+" },
            { label: "Projets", value: "100+" },
            { label: "Satisfaits", value: "99%" },
            { label: "Années", value: "4+" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
