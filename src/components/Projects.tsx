import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

 const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Plateforme e-commerce moderne avec paiement intégré",
      tags: ["React", "Node.js", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      link: "#",
      stars: 125
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      category: "design",
      description: "Interface d'analyse de données en temps réel",
      tags: ["Figma", "UI/UX", "Data Viz"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      link: "#",
      stars: 89
    },
    {
      id: 3,
      title: "Mobile App",
      category: "mobile",
      description: "Application mobile pour la gestion de tâches",
      tags: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      link: "#",
      stars: 203
    },
    {
      id: 4,
      title: "AI Chat Bot",
      category: "web",
      description: "Assistant conversationnel avec IA avancée",
      tags: ["Python", "OpenAI", "Flask"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      link: "#",
      stars: 340
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "design",
      description: "Identité visuelle complète pour startup tech",
      tags: ["Illustrator", "Photoshop", "Branding"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      link: "#",
      stars: 67
    },
    {
      id: 6,
      title: "Crypto Tracker",
      category: "web",
      description: "Suivi en temps réel des crypto-monnaies",
      tags: ["Vue.js", "WebSocket", "Chart.js"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      link: "#",
      stars: 178
    }
  ];

const Projects = () => {
  return (
    <section id="projets" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4">Mon travail</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Projets <span className="text-gradient">Sélectionnés</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden card-shadow border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              
              <div className="p-6 relative">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
