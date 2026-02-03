import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smiley rises from bottom - animation completes at end of scroll to avoid "stuck" feeling
  const smileyY = useTransform(scrollYProgress, [0.7, 1], ["85%", "0%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePosition({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const eyeOffsetX = mousePosition.x * 20;
  const eyeOffsetY = mousePosition.y * 10;

  return (
    <section ref={sectionRef} className="relative bg-mato-green">
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

      {/* Container for cards AND smiley overlay */}
      <div ref={containerRef} className="relative">
        {/* Cards - z-10 */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center">
          {steps.map((step, i) => {
            const targetScale = Math.max(
              0.85,
              1 - (steps.length - i - 1) * 0.05,
            );
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
        </div>

        {/* Smiley Face - sticky at bottom, z-30 to overlay cards */}
        <motion.div
          style={{ y: smileyY }}
          className="sticky bottom-0 left-0 right-0 z-30 pointer-events-none"
        >
          {/* Proper half circle - width: 100vw (diameter), height: 50vw (radius) */}
          <div
            className="relative bg-mato-red flex flex-col items-center justify-center mx-auto"
            style={{
              width: "100vw",
              height: "50vw",
              borderTopLeftRadius: "50vw",
              borderTopRightRadius: "50vw",
            }}
          >
            {/* Eyes Container - positioned in center of half circle */}
            <div className="flex gap-12 sm:gap-20 lg:gap-28 -mt-[8vw]">
              {/* Left Eye */}
              <motion.div
                animate={{
                  scaleY: [1, 0.1, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="w-[8vw] h-[8vw] max-w-24 max-h-24 bg-mato-dark-green rounded-full relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[3vw] h-[3vw] max-w-8 max-h-8 bg-white rounded-full"
                />
              </motion.div>

              {/* Right Eye */}
              <motion.div
                animate={{
                  scaleY: [1, 0.1, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  delay: 0.05,
                }}
                className="w-[8vw] h-[8vw] max-w-24 max-h-24 bg-mato-dark-green rounded-full relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[3vw] h-[3vw] max-w-8 max-h-8 bg-white rounded-full"
                />
              </motion.div>
            </div>

            {/* Smile */}
            <div className="mt-[2vw]">
              <div className="w-[12vw] h-[6vw] max-w-36 max-h-16 bg-mato-dark-green rounded-b-full" />
            </div>
          </div>

          {/* Red extension below half circle */}
          <div className="w-full bg-mato-red h-[20vh] -mt-px" />
        </motion.div>

        {/* Minimal scroll space for smiley animation */}
        <div className="h-[5vh] bg-mato-red" />
      </div>
    </section>
  );
};

export default StepsCarousel;
