import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    id: 1,
    step: 'STEP 1',
    title: 'TELL MATO WHAT YOU CRAVE',
    description: 'Cuisine, vibe, budget, or a specific spot.',
    image: '/images/mato/char_peeking.png',
  },
  {
    id: 2,
    step: 'STEP 2',
    title: 'MATO FINDS THE BEST OPTIONS',
    description: 'Human-confirmed recommendations matching your preferences.',
    image: '/images/mato/mato_searching.png',
  },
  {
    id: 3,
    step: 'STEP 3',
    title: 'LET MATO HANDLE THE REST',
    description: 'Confirm. Mato Books. Show up.',
    image: '/images/mato/mato_booking.png',
  },
];

const StepsCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);
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

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentStep((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = steps.length - 1;
      if (next >= steps.length) next = 0;
      return next;
    });
  };

  return (
    <section className="relative bg-mato-red py-16 sm:py-24 overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white">
          HOW IT WORKS
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border-2 border-mato-red shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronLeft className="w-6 h-6 text-mato-red" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border-2 border-mato-red shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronRight className="w-6 h-6 text-mato-red" />
        </motion.button>

        {/* Slide Content */}
        <div className="relative h-[550px] sm:h-[650px] overflow-hidden rounded-[32px] sm:rounded-[48px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 bg-white rounded-[32px] sm:rounded-[48px] p-6 sm:p-12 flex flex-col items-center justify-center"
            >
              {/* Step Number */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-script text-xl sm:text-2xl text-mato-red mb-4"
              >
                {steps[currentStep].step}
              </motion.span>

              {/* Mato Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="w-48 sm:w-64 lg:w-72 mb-6"
              >
                <img
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-mato-dark-green mb-3">
                  {steps[currentStep].title}
                </h3>
                <p className="text-lg sm:text-xl text-mato-dark-green/70 max-w-lg mx-auto">
                  {steps[currentStep].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentStep ? 1 : -1);
                setCurrentStep(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentStep
                  ? 'bg-white w-10'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsCarousel;
