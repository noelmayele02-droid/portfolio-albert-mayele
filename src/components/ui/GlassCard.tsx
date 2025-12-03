import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glass-hover rounded-2xl p-6 shadow-card ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
