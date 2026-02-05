import { motion } from "framer-motion";
import { Apple } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen lg:h-screen bg-mato-green overflow-visible pt-12 pb-8 lg:pb-0">
      {/* Main Content - Side by side layout */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center gap-0 lg:gap-0">
        {/* Text Content - Left side */}
        <div className="flex-1 lg:pr-0">
          {/* Script Text */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
            className="font-handwritten text-3xl sm:text-4xl lg:text-5xl text-white text-center lg:text-left mb-4"
          >
            meet mato
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.95, duration: 0.8, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center lg:text-left leading-[0.95] mb-6 sm:mb-8"
          >
            YOUR AI FOOD
            <br />
            CONCIERGE
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.8, ease: "easeOut" }}
            className="font-subtext text-xl sm:text-2xl md:text-3xl text-white/95 font-medium tracking-wide text-center lg:text-left max-w-xl mb-6 sm:mb-8"
          >
            Discover and book any table in Thailand.
          </motion.p>

          {/* App Store Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group flex items-center gap-3 px-8 py-4 bg-mato-red text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl border-2 border-white/30"
            >
              <Apple className="w-8 h-8" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider opacity-90">
                  Download on the
                </span>
                <span className="text-xl font-bold -mt-1">App Store</span>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Hero Mato Character - Right side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 flex justify-center lg:justify-end items-end mt-4 lg:mt-0 lg:-ml-8"
        >
          <img
            src="/images/mato/char_hero.png"
            alt="Mato hero"
            className="w-64 sm:w-80 lg:w-96 xl:w-[450px] h-auto drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
