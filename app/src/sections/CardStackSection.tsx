import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CardStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Cards fan out as you scroll
  const card1X = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
  
  const card2X = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  
  const card3X = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[80vh] bg-mato-cream py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-mato-dark-green mb-4">
            YOUR TABLE AWAITS
          </h2>
          <p className="font-script text-xl sm:text-2xl text-mato-red">
            swipe through, tap to book
          </p>
        </motion.div>

        {/* Card Stack */}
        <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
          {/* Card 1 - Left */}
          <motion.div
            style={{ x: card1X, rotate: card1Rotate }}
            className="absolute w-56 sm:w-72 lg:w-80"
          >
            <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border-4 border-mato-red/20 transform origin-bottom">
              <img 
                src="/images/phones/phone-home.png" 
                alt="Mato app home" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Card 2 - Center (main) */}
          <motion.div
            style={{ x: card2X, rotate: card2Rotate }}
            className="absolute w-60 sm:w-76 lg:w-84 z-10"
          >
            <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border-4 border-mato-green/30 transform origin-bottom">
              <img 
                src="/images/phones/phone-map.png" 
                alt="Mato app map" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Card 3 - Right */}
          <motion.div
            style={{ x: card3X, rotate: card3Rotate }}
            className="absolute w-56 sm:w-72 lg:w-80"
          >
            <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border-4 border-mato-orange/30 transform origin-bottom">
              <img 
                src="/images/phones/phone-detail.png" 
                alt="Mato app detail" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="font-script text-lg text-mato-dark-green/60">
            scroll to see more
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CardStackSection;
