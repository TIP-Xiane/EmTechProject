
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 10%, rgba(33, 132, 93, 0.92) 0%, rgba(12, 80, 60, 0.68) 40%, rgba(8, 32, 35, 0.30) 70%, rgba(5, 15, 22, 0.96) 100%),
            radial-gradient(circle at 25% 30%, rgba(50, 140, 110, 0.20) 0%, rgba(8, 32, 35, 0.0) 45%),
            radial-gradient(circle at 80% 55%, rgba(35, 130, 100, 0.18) 0%, rgba(8, 32, 35, 0.0) 55%),
            linear-gradient(180deg, rgba(120, 200, 180, 0.09) 0%, rgba(8, 30, 32, 0.90) 100%)
          `,
          backgroundSize: "150% 170%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "10% 10%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(240, 255, 245, 0.07) 0%, transparent 20%),
            radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 18%),
            radial-gradient(circle at 15% 80%, rgba(189, 251, 183, 0.08) 0%, transparent 22%)`,
          backgroundSize: "200% 200%",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          backgroundPosition: ["0% 0%", "5% 5%", "0% 0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
