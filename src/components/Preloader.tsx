import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center">
      <div className="loader text-center">
        <div className="logo mb-4 text-4xl font-bold text-white text-gradient">Albert</div>
        <div className="loader-bar w-40 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="loader-fill h-full bg-primary/80 animate-slide" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
