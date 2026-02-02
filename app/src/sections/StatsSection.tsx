import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp(5000, 2500, isInView);

  return (
    <section ref={ref} className="relative bg-maggie-cream py-20 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-maggie-emerald">
            MORE
            <br />
            THAN
          </h2>
          <div className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-maggie-emerald my-2">
            {count.toLocaleString()}
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-heading text-lg sm:text-xl md:text-2xl text-maggie-emerald mb-4"
        >
          FREE ACTIVITIES AND
          <br />
          KID-FRIENDLY PARKS
          <br />
          ACROSS AUSTRALIA.
        </motion.p>

        {/* Script text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-script text-xl sm:text-2xl text-maggie-emerald/70"
        >
          maggie has you covered
        </motion.p>
      </div>
    </section>
  );
};

export default StatsSection;
