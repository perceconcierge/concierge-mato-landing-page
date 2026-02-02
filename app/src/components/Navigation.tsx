import { motion } from 'framer-motion';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('faq')}
            className="px-4 sm:px-5 py-2 bg-white text-mato-red-dark rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-mato-red/20 hover:bg-mato-cream transition-colors shadow-sm"
          >
            FAQs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            className="px-4 sm:px-5 py-2 bg-white text-mato-red-dark rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-mato-red/20 hover:bg-mato-cream transition-colors shadow-sm"
          >
            About
          </motion.button>
        </div>

        {/* Center Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-mato-red rounded-2xl flex items-center justify-center border-2 border-white shadow-lg cursor-pointer overflow-hidden">
            <img 
              src="/images/mato/char_peeking.png" 
              alt="Mato" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-4 sm:px-5 py-2 bg-mato-green text-white rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-mato-green-dark hover:bg-mato-green-dark transition-colors shadow-sm"
          >
            Contact
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('download')}
            className="px-4 sm:px-5 py-2 bg-mato-yellow text-mato-dark rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-mato-yellow hover:brightness-110 transition-all shadow-sm"
          >
            Download
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
