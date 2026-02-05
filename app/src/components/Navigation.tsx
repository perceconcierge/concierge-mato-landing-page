import { motion } from "framer-motion";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer"
        >
          <img
            src="/images/logo/Mato Logo.png"
            alt="Mato Logo"
            className="h-18 sm:h-20 w-auto"
          />
        </motion.div>

        {/* Right Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-4 sm:px-5 py-2 bg-white/90 backdrop-blur-sm text-mato-green-dark rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-mato-green/50 hover:bg-white hover:border-mato-green transition-all shadow-md"
          >
            Contact
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("download")}
            className="px-4 sm:px-5 py-2 bg-mato-red text-white rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-mato-red-dark hover:bg-mato-red-dark transition-all shadow-md"
          >
            Download
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
