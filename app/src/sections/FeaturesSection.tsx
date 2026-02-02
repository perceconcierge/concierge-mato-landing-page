import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative bg-maggie-yellow rounded-t-[40px] sm:rounded-t-[60px] -mt-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
      {/* Phone Mockups */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex items-end justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-4"
      >
        {/* Phone 1 */}
        <motion.div
          variants={itemVariants}
          className="w-28 sm:w-40 lg:w-48 transform rotate-[-8deg] translate-y-4"
        >
          <img
            src="/images/phones/phone-home.png"
            alt="Maggie app home"
            className="w-full h-auto rounded-[20px] sm:rounded-[28px] shadow-xl border-4 sm:border-6 border-white"
          />
        </motion.div>

        {/* Phone 2 */}
        <motion.div
          variants={itemVariants}
          className="w-32 sm:w-44 lg:w-52 transform z-10"
        >
          <img
            src="/images/phones/phone-map.png"
            alt="Maggie app map"
            className="w-full h-auto rounded-[20px] sm:rounded-[28px] shadow-xl border-4 sm:border-6 border-white"
          />
        </motion.div>

        {/* Phone 3 */}
        <motion.div
          variants={itemVariants}
          className="w-28 sm:w-40 lg:w-48 transform rotate-[8deg] translate-y-4"
        >
          <img
            src="/images/phones/phone-detail.png"
            alt="Maggie app detail"
            className="w-full h-auto rounded-[20px] sm:rounded-[28px] shadow-xl border-4 sm:border-6 border-white"
          />
        </motion.div>
      </motion.div>

      {/* Main Text with Embedded Images */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-maggie-emerald leading-tight mb-8">
          <motion.span variants={itemVariants} className="inline-block">FIND</motion.span>{' '}
          <motion.span variants={itemVariants} className="inline-block">FREE</motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2">
            SANITY
            <motion.span 
              variants={imageVariants}
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden"
            >
              <img src="/images/kids/kid-1.jpg" alt="Happy kid" className="w-full h-full object-cover" />
            </motion.span>
            -SAVING
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2">
            <motion.span 
              variants={imageVariants}
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden"
            >
              <img src="/images/kids/kid-2.jpg" alt="Creative kid" className="w-full h-full object-cover" />
            </motion.span>
            ACTIVITIES
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-block">FASTER THAN</motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-block">YOUR TODDLER</motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2">
            CAN EMPTY
            <motion.span 
              variants={imageVariants}
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden"
            >
              <img src="/images/kids/kid-3.jpg" alt="Playful kid" className="w-full h-full object-cover" />
            </motion.span>
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-block">THE TUPPERWARE</motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2">
            DRAWER
            <motion.span 
              variants={imageVariants}
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden"
            >
              <img src="/images/kids/kid-1.jpg" alt="Happy kid" className="w-full h-full object-cover" />
            </motion.span>
          </motion.span>
        </h2>

        {/* You're welcome script */}
        <motion.p
          variants={itemVariants}
          className="font-script text-2xl sm:text-3xl text-maggie-emerald/80 mb-8"
        >
          you're welcome!
        </motion.p>

        {/* App Store Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-maggie-button-yellow text-maggie-emerald rounded-full font-semibold border-2 border-maggie-emerald/20 hover:shadow-lg transition-shadow"
          >
            <Apple className="w-5 h-5" />
            <span className="text-sm">Download on the App Store</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
