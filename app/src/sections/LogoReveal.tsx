import { motion } from 'framer-motion';

interface LogoRevealProps {
  onComplete?: () => void;
}

const LogoReveal = ({ onComplete }: LogoRevealProps) => {
  const letters = ['m', 'a', 't', 'o'];

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
        type: 'spring' as const,
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
              marginRight: '-0.05em',
              textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
            }}
          >
            {letter === 'o' ? (
              <span className="relative inline-block">
                {letter}
                {/* Tomato leaf on the 'o' */}
                <span className="absolute -top-[15%] left-1/2 transform -translate-x-1/2">
                  <svg width="40" height="30" viewBox="0 0 40 30" className="w-8 h-6 sm:w-12 sm:h-8">
                    <path d="M20 30 Q10 15 5 5 Q15 10 20 15 Q25 10 35 5 Q30 15 20 30" fill="#4CAF50"/>
                  </svg>
                </span>
                {/* Face on the 'o' */}
                <span className="absolute top-[30%] left-1/2 transform -translate-x-1/2">
                  <span className="flex gap-2 sm:gap-3">
                    <motion.span 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                    <motion.span 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  </span>
                  <span className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-1 sm:h-1.5 bg-white rounded-full" />
                </span>
              </span>
            ) : (
              letter
            )}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoReveal;
