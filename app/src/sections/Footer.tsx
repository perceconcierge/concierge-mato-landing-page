import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-maggie-green overflow-hidden">
      {/* Yellow Circle Background */}
      <div className="absolute inset-x-0 top-0 h-full flex justify-center">
        <div className="w-[150%] sm:w-[120%] aspect-square bg-maggie-yellow rounded-full transform -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 sm:pt-32 pb-8">
        {/* Maggie Face */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="flex gap-4 sm:gap-6">
              <motion.div
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                className="w-6 h-6 sm:w-10 sm:h-10 bg-maggie-emerald rounded-full"
              />
              <motion.div
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                className="w-6 h-6 sm:w-10 sm:h-10 bg-maggie-emerald rounded-full"
              />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-8 h-4 sm:w-12 sm:h-6 bg-maggie-emerald rounded-b-full mx-auto mt-1"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-maggie-emerald text-center leading-tight mb-8 sm:mb-12 px-4"
        >
          TURN CHAOS
          <br />
          INTO CHUCKLES
          <br />
          WITH MAGGIE!
        </motion.h2>

        {/* App Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-24 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-maggie-button-yellow text-maggie-emerald rounded-full font-semibold border-2 border-maggie-emerald/20 hover:shadow-lg transition-shadow"
          >
            <Apple className="w-5 h-5" />
            <span className="text-sm">Download on the App Store</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 px-6 py-3 bg-white text-maggie-emerald rounded-full font-semibold border-2 border-maggie-emerald/20 hover:shadow-lg transition-shadow"
          >
            <Play className="w-5 h-5 fill-current" />
            <span className="text-sm">Google Play</span>
            {/* Request Badge */}
            <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-maggie-green text-maggie-emerald text-[10px] font-bold uppercase rounded transform rotate-12 border border-maggie-emerald/20">
              Request
            </span>
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-maggie-emerald/10 pt-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-maggie-pink rounded-full flex items-center justify-center border-2 border-maggie-emerald/20"
              >
                <svg className="w-5 h-5 text-maggie-emerald" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-maggie-blue rounded-full flex items-center justify-center border-2 border-maggie-emerald/20"
              >
                <svg className="w-5 h-5 text-maggie-emerald" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
            </div>

            {/* Copyright */}
            <p className="font-script text-lg text-maggie-emerald/70">
              © 2025 Maggie
            </p>

            {/* Policies Link */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-maggie-orange text-maggie-emerald rounded-full text-sm font-semibold border-2 border-maggie-emerald/20"
            >
              POLICIES
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
