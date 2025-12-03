import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, percentage, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-foreground">{label}</label>
        <span className="text-xs font-medium text-primary">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-card rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
