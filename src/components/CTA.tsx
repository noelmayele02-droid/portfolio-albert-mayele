import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à collaborer ?
          </h2>
          <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
            Transformons vos idées en projets concrets. Contactez-moi pour discuter de votre prochaine opportunité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:albertisaacnoel.mayele@ynov.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5 font-semibold transition-all duration-300"
            >
              Me contacter par mail
            </motion.a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-primary/10">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "albertisaacnoel.mayele@ynov.com",
              },
              {
                icon: Phone,
                label: "Téléphone",
                value: "+33 6 52 86 11 59",
              },
              {
                icon: MapPin,
                label: "Localisation",
                value: "France",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-foreground/60">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
