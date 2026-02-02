import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lighterFill = useTransform(scrollYProgress, [0.2, 0.5], [0, 100]);

  return (
    <section ref={sectionRef} className="relative bg-maggie-cream py-16 sm:py-24 overflow-hidden">
      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8"
      >
        <p className="font-heading text-lg sm:text-xl text-maggie-emerald/80">
          MAGGIE STARTED WITH TWO MUMS,
          <br />
          A FEW WINES, AND ONE BIG IDEA:
        </p>
      </motion.div>

      {/* Main Heading with Animated Fill */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16"
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-maggie-emerald leading-tight">
          PARENTING
          <br />
          SHOULD FEEL
          <br />
          <span className="relative inline-block">
            {/* Outline text */}
            <span 
              className="text-transparent"
              style={{
                WebkitTextStroke: '2px #064E3B',
              }}
            >
              LIGHTER
            </span>
            {/* Filled text that reveals on scroll */}
            <motion.span
              className="absolute inset-0 text-maggie-green overflow-hidden"
              style={{
                clipPath: useTransform(lighterFill, (value) => `inset(0 ${100 - value}% 0 0)`),
              }}
            >
              LIGHTER
            </motion.span>
          </span>
        </h2>
      </motion.div>

      {/* Family Photo */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl border-4 border-maggie-emerald/10">
          <img
            src="/images/family-photo.jpg"
            alt="Two moms with their children having fun"
            className="w-full h-auto object-cover"
          />
          
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-maggie-cream/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default StorySection;
