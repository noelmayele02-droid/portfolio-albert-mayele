import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-primary/20 blur-xl pointer-events-none z-40"
        style={{ 
          x: useSpring(cursorX, { damping: 50, stiffness: 200 }), 
          y: useSpring(cursorY, { damping: 50, stiffness: 200 }),
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
};

export default MouseFollower;
