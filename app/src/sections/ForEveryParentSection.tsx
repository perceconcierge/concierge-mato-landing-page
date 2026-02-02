import { motion } from 'framer-motion';

const ForEveryParentSection = () => {
  return (
    <section className="relative bg-maggie-pink py-20 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-maggie-emerald leading-tight mb-8"
        >
          MAGGIE IS
          <br />
          FOR EVERY
          <br />
          PARENT WHO
          <br />
          HAS EVER FELT
          <br />
          OVERWHELMED,
          <br />
          ISOLATED, OR
          <br />
          JUST OUT
          <br />
          OF IDEAS.
        </motion.h2>

        {/* Script text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-script text-xl sm:text-2xl text-maggie-emerald/70 mb-8"
        >
          learn more about our story
        </motion.p>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-maggie-button-yellow text-maggie-emerald rounded-full font-semibold border-2 border-maggie-emerald/20 hover:shadow-lg transition-shadow"
          >
            READ MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ForEveryParentSection;
