import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-mato-green overflow-hidden pt-24 pb-0">
      {/* Mato Character Peeking from Left */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8, type: 'spring' }}
        className="absolute left-0 top-1/3 z-10 w-24 sm:w-32 lg:w-40"
      >
        <img 
          src="/images/mato/char_peeking.png" 
          alt="Mato peeking" 
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        {/* Script Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8, ease: 'easeOut' }}
          className="font-script text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-4"
        >
          meet mato
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.95, duration: 0.8, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center leading-[0.95] mb-6 sm:mb-8"
        >
          YOUR AI FOOD
          <br />
          CONCIERGE
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.8, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          Discover and book any table in Thailand.
          <br />
          Mato recommends local gems, finds seats, and confirms your reservation.
        </motion.p>

        {/* App Store Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-mato-red-dark rounded-full font-semibold border-2 border-mato-red/20 hover:shadow-xl transition-shadow shadow-lg"
          >
            <Apple className="w-6 h-6" />
            <span className="text-base">Download on the App Store</span>
          </motion.button>
        </motion.div>

        {/* Hero Mato Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <img 
            src="/images/mato/char_hero.png" 
            alt="Mato hero" 
            className="w-48 sm:w-64 lg:w-80 h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
