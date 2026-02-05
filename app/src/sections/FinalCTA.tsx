import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Apple } from "lucide-react";

const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Face reveals from bottom as you scroll - only shows 75% of the half circle
  const faceY = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({
          x: Math.max(-1, Math.min(1, x)),
          y: Math.max(-1, Math.min(1, y)),
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate eye movement
  const eyeOffsetX = mousePosition.x * 25;
  const eyeOffsetY = mousePosition.y * 15;

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative min-h-screen overflow-hidden bg-mato-green"
    >
      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative sm:sticky sm:top-0 z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-screen sm:h-auto flex flex-col items-center justify-center sm:block pt-0 sm:pt-28 lg:pt-36 pb-20 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          READY TO EAT
          <br />
          LIKE A LOCAL?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-handwritten text-3xl sm:text-5xl text-white/80 mb-10"
        >
          let mato be your guide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-mato-red-dark rounded-2xl font-semibold shadow-xl hover:shadow-2xl border-2 border-mato-red/20"
          >
            <Apple className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="flex flex-col items-start">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-wider opacity-70">
                Download on the
              </span>
              <span className="text-base sm:text-xl font-bold -mt-1">App Store</span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Giant Blinking Half-Circle Face */}
      <motion.div
        style={{ y: faceY }}
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none"
      >
        {/* True half circle: width = 100vw (diameter), height = 50vw (radius) */}
        <div
          className="relative bg-mato-red flex items-start justify-center pt-[8vw]"
          style={{
            width: "100vw",
            height: "50vw",
            borderRadius: "50vw 50vw 0 0",
          }}
        >
          {/* Eyes Container */}
          <div className="flex gap-[10vw]">
            {/* Left Eye */}
            <motion.div
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="w-[8vw] h-[8vw] max-w-28 max-h-28 bg-mato-dark-green rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 m-auto w-[3vw] h-[3vw] max-w-10 max-h-10 bg-white rounded-full"
              />
            </motion.div>

            {/* Right Eye */}
            <motion.div
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
                delay: 0.03,
              }}
              className="w-[8vw] h-[8vw] max-w-28 max-h-28 bg-mato-dark-green rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 m-auto w-[3vw] h-[3vw] max-w-10 max-h-10 bg-white rounded-full"
              />
            </motion.div>
          </div>

          {/* Smile */}
          <div className="absolute top-[18vw] left-1/2 transform -translate-x-1/2">
            <div className="w-[8vw] h-[4vw] max-w-28 max-h-14 bg-mato-dark-green rounded-b-full" />
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-white/60 text-sm">© 2025 Concierge</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
