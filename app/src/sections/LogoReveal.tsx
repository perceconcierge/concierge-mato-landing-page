import { motion } from "framer-motion";

interface LogoRevealProps {
  onComplete?: () => void;
}

const LogoReveal = ({ onComplete }: LogoRevealProps) => {
  const letters = ["m", "a", "t", "o"];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: 300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div
      className="w-full h-screen bg-mato-red flex items-end justify-center pb-20 overflow-hidden"
      onClick={onComplete}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-end"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-[20vw] sm:text-[25vw] font-heading text-white leading-none relative"
            style={{
              marginRight: "-0.05em",
              textShadow: "4px 4px 0px rgba(0,0,0,0.1)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoReveal;
