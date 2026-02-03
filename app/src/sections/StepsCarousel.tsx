import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    step: "STEP 1",
    title: "TELL MATO WHAT YOU CRAVE",
    description: "Cuisine, vibe, budget, or a specific spot.",
    image: "/images/mato/char_peeking.png",
    color: "#FF6347",
  },
  {
    id: 2,
    step: "STEP 2",
    title: "MATO FINDS THE BEST OPTIONS",
    description: "Human-confirmed recommendations matching your preferences.",
    image: "/images/mato/mato_searching.png",
    color: "#4CAF50",
  },
  {
    id: 3,
    step: "STEP 3",
    title: "LET MATO HANDLE THE REST",
    description: "Confirm. Mato Books. Show up.",
    image: "/images/mato/mato_booking.png",
    color: "#FFD54F",
  },
];

interface StepCardProps {
  i: number;
  step: Step;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StepCard = ({ i, step, progress, range, targetScale }: StepCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(${i * 40}px)`,
        }}
        className="relative flex h-[500px] w-[340px] origin-top flex-col items-center overflow-hidden rounded-[32px] bg-white p-8 shadow-2xl sm:h-[550px] sm:w-[720px] sm:p-10"
      >
        {/* Step Number */}
        <span
          className="font-script text-xl sm:text-2xl mb-4"
          style={{ color: step.color }}
        >
          {step.step}
        </span>

        {/* Mato Character */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mb-6">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="text-center flex-1 flex flex-col justify-start">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-mato-dark-green mb-3 leading-tight">
            {step.title}
          </h3>
          <p className="text-base sm:text-lg text-mato-dark-green/70 max-w-sm mx-auto">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const StepsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-mato-green">
      {/* Section Title */}
      <div className="h-[20vh] flex flex-col justify-end items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl md:text-7xl text-white"
        >
          HOW IT WORKS
        </motion.h2>
      </div>

      {/* Sticky Card Stack Container */}
      <main
        ref={containerRef}
        className="relative flex w-full flex-col items-center justify-center pb-[30vh]"
      >
        {steps.map((step, i) => {
          const targetScale = Math.max(0.85, 1 - (steps.length - i - 1) * 0.05);
          return (
            <StepCard
              key={step.id}
              i={i}
              step={step}
              progress={scrollYProgress}
              range={[i * (1 / steps.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default StepsCarousel;
