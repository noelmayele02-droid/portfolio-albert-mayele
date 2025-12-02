import { motion } from "framer-motion";
import { Code2, Palette, Sparkles, Zap, Star, Heart, Rocket, Coffee } from "lucide-react";

const icons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Palette, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Sparkles, x: "15%", y: "70%", delay: 1 },
  { Icon: Zap, x: "80%", y: "65%", delay: 1.5 },
  { Icon: Star, x: "5%", y: "45%", delay: 2 },
  { Icon: Heart, x: "92%", y: "40%", delay: 2.5 },
  { Icon: Rocket, x: "20%", y: "85%", delay: 3 },
  { Icon: Coffee, x: "75%", y: "80%", delay: 3.5 },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 5,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
