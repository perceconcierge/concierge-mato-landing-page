import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const SmileyFaceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Face expands from bottom as you scroll
  const faceScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const faceY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye movement
  const eyeOffsetX = mousePosition.x * 20;
  const eyeOffsetY = mousePosition.y * 10;

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mato-cream" />

      {/* Giant Smiley Face */}
      <motion.div
        style={{ 
          scale: faceScale, 
          y: faceY,
        }}
        className="absolute inset-x-0 bottom-0 flex items-end justify-center"
      >
        <div className="relative w-[150vw] h-[150vw] bg-mato-red rounded-full flex items-start justify-center pt-[10%]">
          {/* Eyes Container */}
          <div className="flex gap-16 sm:gap-24 lg:gap-32 mt-[15%]">
            {/* Left Eye */}
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
              }}
              transition={{ 
                duration: 0.3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: 'easeInOut'
              }}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-mato-dark-green rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-full"
              />
            </motion.div>

            {/* Right Eye */}
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
              }}
              transition={{ 
                duration: 0.3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: 'easeInOut',
                delay: 0.05
              }}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-mato-dark-green rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-full"
              />
            </motion.div>
          </div>

          {/* Smile */}
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-12 sm:w-36 sm:h-16 lg:w-48 lg:h-20 bg-mato-dark-green rounded-b-full" />
          </div>
        </div>
      </motion.div>

      {/* Text Content - appears as face expands */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0.3, 0.7], [0, 1]) }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-[60vh] text-center"
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-mato-dark-green leading-tight mb-6">
          RESTAURANTS ONLY
          <br />
          A LOCAL WOULD
          <br />
          RECOMMEND
        </h2>
        <p className="font-script text-xl sm:text-2xl text-mato-red mb-4">
          from hole-in-the-wall to fine dining
        </p>
        <p className="text-lg sm:text-xl text-mato-dark-green/70">
          One conversation away.
        </p>
      </motion.div>
    </section>
  );
};

export default SmileyFaceSection;
