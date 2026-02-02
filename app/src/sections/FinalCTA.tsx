import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Apple } from 'lucide-react';

const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Face reveals from bottom as you scroll
  const faceY = useTransform(scrollYProgress, [0, 1], ['100%', '-30%']);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

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
  const eyeOffsetX = mousePosition.x * 25;
  const eyeOffsetY = mousePosition.y * 15;

  return (
    <section 
      ref={sectionRef} 
      id="download"
      className="relative min-h-screen overflow-hidden bg-mato-green"
    >
      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          READY TO EAT
          <br />
          LIKE A LOCAL?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-script text-xl sm:text-2xl text-white/80 mb-10"
        >
          let mato be your guide
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-mato-red-dark rounded-full font-semibold border-2 border-mato-red/20 hover:shadow-xl transition-shadow shadow-lg"
        >
          <Apple className="w-6 h-6" />
          <span className="text-base">Download on the App Store</span>
        </motion.button>
      </motion.div>

      {/* Giant Blinking Half-Circle Face */}
      <motion.div
        style={{ y: faceY }}
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-[120vw] h-[60vw] bg-mato-red rounded-t-full flex items-start justify-center pt-[8%]">
          {/* Eyes Container */}
          <div className="flex gap-12 sm:gap-20 lg:gap-28">
            {/* Left Eye */}
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
              }}
              transition={{ 
                duration: 0.25, 
                repeat: Infinity, 
                repeatDelay: 1.5,
                ease: 'easeInOut'
              }}
              className="w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-mato-dark-green rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 bg-white rounded-full"
              />
            </motion.div>

            {/* Right Eye */}
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
              }}
              transition={{ 
                duration: 0.25, 
                repeat: Infinity, 
                repeatDelay: 1.5,
                ease: 'easeInOut',
                delay: 0.03
              }}
              className="w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-mato-dark-green rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 bg-white rounded-full"
              />
            </motion.div>
          </div>

          {/* Smile */}
          <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-10 sm:w-28 sm:h-14 lg:w-36 lg:h-16 bg-mato-dark-green rounded-b-full" />
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-white/60 text-sm">© 2025 Concierge</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
