import { motion } from 'framer-motion';

interface FloatingItem {
  id: number;
  image: string;
  label: string;
  position: { left?: string; right?: string; top: string };
  delay: number;
}

const leftItems: FloatingItem[] = [
  { id: 1, image: '/images/floating/bottle.png', label: 'pack the drinks', position: { left: '5%', top: '25%' }, delay: 0 },
  { id: 2, image: '/images/floating/breakfast.png', label: 'breakfast', position: { left: '12%', top: '45%' }, delay: 0.2 },
  { id: 3, image: '/images/floating/dress.png', label: 'ballet class', position: { left: '3%', top: '65%' }, delay: 0.4 },
];

const rightItems: FloatingItem[] = [
  { id: 4, image: '/images/floating/banana.png', label: 'snacks', position: { right: '8%', top: '20%' }, delay: 0.1 },
  { id: 5, image: '/images/floating/dummy.png', label: 'pack the dummy', position: { right: '3%', top: '40%' }, delay: 0.3 },
  { id: 6, image: '/images/floating/apple.png', label: 'moore snacks', position: { right: '10%', top: '60%' }, delay: 0.5 },
];

const FloatingItemComponent = ({ item }: { item: FloatingItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: item.delay, duration: 0.6 }}
      className="absolute"
      style={{
        left: item.position.left,
        right: item.position.right,
        top: item.position.top,
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3 + item.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative">
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
        <span className="font-script text-sm sm:text-base text-maggie-emerald/70 mt-1 whitespace-nowrap">
          {item.label}
        </span>
      </motion.div>
    </motion.div>
  );
};

const MissionSection = () => {
  return (
    <section className="relative bg-maggie-blue py-20 sm:py-32 overflow-hidden">
      {/* Maggie Face at Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-8 sm:mb-12"
      >
        <div className="relative">
          <div className="flex gap-6 sm:gap-10">
            <motion.div
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-maggie-emerald rounded-full"
            />
            <motion.div
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-maggie-emerald rounded-full"
            />
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-12 h-6 sm:w-16 sm:h-8 lg:w-20 lg:h-10 bg-maggie-emerald rounded-b-full mx-auto mt-2"
          />
        </div>
      </motion.div>

      {/* Floating Items - Left */}
      {leftItems.map((item) => (
        <FloatingItemComponent key={item.id} item={item} />
      ))}

      {/* Floating Items - Right */}
      {rightItems.map((item) => (
        <FloatingItemComponent key={item.id} item={item} />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-maggie-emerald leading-tight mb-6"
        >
          OUR APP IS ON
          <br />
          A MISSION TO
          <br />
          HELP LIGHTEN
          <br />
          PARENTS' MENTAL
          <br />
          LOAD
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-maggie-emerald/80 max-w-xl mx-auto"
        >
          Because making memories shouldn't be another thing on your to-do list.
        </motion.p>
      </div>

      {/* App Icon Stack */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex justify-center mt-12 sm:mt-16"
      >
        <div className="relative">
          {/* Background icons */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-maggie-orange rounded-2xl rotate-[-12deg]" />
          <div className="absolute -top-2 -left-8 w-14 h-14 sm:w-16 sm:h-16 bg-maggie-pink rounded-2xl rotate-[-6deg]" />
          <div className="absolute -top-2 -right-8 w-14 h-14 sm:w-16 sm:h-16 bg-maggie-yellow rounded-2xl rotate-[6deg]" />
          
          {/* Main icon */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-maggie-blue rounded-3xl border-4 border-maggie-emerald flex items-center justify-center z-10">
            <svg viewBox="0 0 60 60" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
              <circle cx="22" cy="24" r="5" fill="#064E3B" />
              <circle cx="38" cy="24" r="5" fill="#064E3B" />
              <path
                d="M20 36 Q30 46 40 36"
                stroke="#064E3B"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <rect x="25" y="44" width="10" height="12" rx="5" fill="#064E3B" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
