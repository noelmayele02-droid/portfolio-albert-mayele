import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden border-t border-primary/10">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.1 }}
          >
            <Mail className="w-6 h-6 text-primary" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Restez à jour
          </h3>
          <p className="text-foreground/60 mb-6">
            Abonnez-vous pour recevoir les dernières actualités, articles et projets.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">S'inscrire</span>
            </motion.button>
          </form>

          {/* Success message */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-primary font-medium"
          >
            {submitted && "Merci ! Vérifiez votre email."}
          </motion.div>

          {/* Privacy note */}
          <p className="text-xs text-foreground/40 mt-4">
            Nous respectons votre vie privée. Désinscription en 1 clic.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
