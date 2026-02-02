import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  images: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'FIND ACTIVITIES',
    description: 'IN YOUR LOCAL AREA',
    bgColor: 'bg-maggie-pink',
    images: ['/images/phones/phone-map.png', '/images/kids/kid-1.jpg', '/images/kids/kid-2.jpg'],
  },
  {
    id: 2,
    title: 'SELECT ADVENTURES',
    description: 'BASED ON AGE',
    bgColor: 'bg-maggie-orange',
    images: ['/images/phones/phone-filter.png', '/images/kids/kid-3.jpg', '/images/kids/kid-1.jpg'],
  },
  {
    id: 3,
    title: 'SAVE AND SHARE',
    description: 'YOUR FAVOURITES',
    bgColor: 'bg-maggie-yellow',
    images: ['/images/phones/phone-favorites.png', '/images/kids/kid-2.jpg', '/images/kids/kid-3.jpg'],
  },
];

const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  };

  return (
    <section className="relative bg-maggie-green py-16 sm:py-24 overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-maggie-emerald">
          WITH MAGGIE
          <br />
          YOU CAN:
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-maggie-yellow rounded-full flex items-center justify-center border-2 border-maggie-emerald shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronLeft className="w-6 h-6 text-maggie-emerald" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-maggie-yellow rounded-full flex items-center justify-center border-2 border-maggie-emerald shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronRight className="w-6 h-6 text-maggie-emerald" />
        </motion.button>

        {/* Slide Content */}
        <div className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-[32px] sm:rounded-[48px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className={`absolute inset-0 ${slides[currentSlide].bgColor} rounded-[32px] sm:rounded-[48px] p-6 sm:p-12`}
            >
              {/* Images */}
              <div className="relative h-[60%] flex items-center justify-center">
                {/* Background Images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: -8 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute left-[5%] top-[10%] w-24 sm:w-32 lg:w-40"
                >
                  <img
                    src={slides[currentSlide].images[1]}
                    alt="Activity"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 8 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute right-[5%] top-[10%] w-24 sm:w-32 lg:w-40"
                >
                  <img
                    src={slides[currentSlide].images[2]}
                    alt="Activity"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </motion.div>

                {/* Main Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="relative z-10 w-40 sm:w-52 lg:w-64"
                >
                  <img
                    src={slides[currentSlide].images[0]}
                    alt="App feature"
                    className="w-full h-auto rounded-[24px] sm:rounded-[32px] shadow-2xl border-4 sm:border-8 border-white"
                  />
                </motion.div>
              </div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center mt-6 sm:mt-8"
              >
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-maggie-emerald">
                  {slides[currentSlide].title}
                </h3>
                <p className="font-heading text-xl sm:text-2xl md:text-3xl text-maggie-emerald">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-maggie-emerald w-8'
                  : 'bg-maggie-emerald/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
