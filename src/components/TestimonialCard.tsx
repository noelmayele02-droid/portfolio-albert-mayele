import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-primary text-primary"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-foreground/80 mb-4 leading-relaxed italic">
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
          {avatar && (
            <img
              src={avatar}
              alt={author}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-xs text-foreground/60">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
