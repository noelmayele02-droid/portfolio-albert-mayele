import React, { useEffect, useState } from "react";

const STORAGE_KEY = "bg-enabled";

const BackgroundToggle: React.FC<{ enabled: boolean; onToggle: (v: boolean) => void }> = ({ enabled, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setIsEnabled(stored === "1");
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isEnabled ? "1" : "0");
    onToggle(isEnabled);
  }, [isEnabled, onToggle]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "b") setIsEnabled((s) => !s);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        aria-pressed={isEnabled}
        className={`px-4 py-2 rounded-full backdrop-blur-md bg-white/6 border border-white/10 text-sm font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary`}        
        onClick={() => setIsEnabled((s) => !s)}
        title="Toggle background (B)">
        {isEnabled ? "Background: ON" : "Background: OFF"}
      </button>
    </div>
  );
};

export default BackgroundToggle;
