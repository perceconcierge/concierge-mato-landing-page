import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CardStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Card fan-out animations based on scroll - cards fully separate as user scrolls
  // Card 1 - Far left
  const card1X = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [0, -120, -280],
  );
  const card1Rotate = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [2, -10, -22],
  );
  const card1Y = useTransform(scrollYProgress, [0.05, 0.25, 0.45], [0, 15, 40]);

  // Card 2 - Left of center
  const card2X = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [0, -40, -95],
  );
  const card2Rotate = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [1, -4, -8],
  );
  const card2Y = useTransform(scrollYProgress, [0.05, 0.25, 0.45], [0, 5, 15]);

  // Card 3 - Right of center
  const card3X = useTransform(scrollYProgress, [0.05, 0.25, 0.45], [0, 40, 95]);
  const card3Rotate = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [-1, 4, 8],
  );
  const card3Y = useTransform(scrollYProgress, [0.05, 0.25, 0.45], [0, 5, 15]);

  // Card 4 - Far right
  const card4X = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [0, 120, 280],
  );
  const card4Rotate = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45],
    [-2, 10, 22],
  );
  const card4Y = useTransform(scrollYProgress, [0.05, 0.25, 0.45], [0, 15, 40]);

  const cards = [
    {
      image: "/images/phones/phone-home.png",
      x: card1X,
      rotate: card1Rotate,
      y: card1Y,
      zIndex: 40,
      initialOffset: -6,
    },
    {
      image: "/images/phones/phone-map.png",
      x: card2X,
      rotate: card2Rotate,
      y: card2Y,
      zIndex: 30,
      initialOffset: -2,
    },
    {
      image: "/images/phones/phone-detail.png",
      x: card3X,
      rotate: card3Rotate,
      y: card3Y,
      zIndex: 20,
      initialOffset: 2,
    },
    {
      image: "/images/phones/phone-favorites.png",
      x: card4X,
      rotate: card4Rotate,
      y: card4Y,
      zIndex: 10,
      initialOffset: 6,
    },
  ];

  return (
    <section ref={sectionRef} className="relative -mt-32 sm:-mt-40 lg:-mt-48">
      {/* Cards container - positioned to peek into the hero section */}
      <div className="relative z-10 flex justify-center items-end h-[280px] sm:h-[320px] lg:h-[380px] pt-24 sm:pt-32 lg:pt-40">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            style={{
              x: card.x,
              rotate: card.rotate,
              y: card.y,
              zIndex: card.zIndex,
            }}
            className="absolute"
          >
            <motion.div
              initial={{
                scale: 0,
                y: 60,
                opacity: 0,
                rotate: card.initialOffset,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                rotate: card.initialOffset,
              }}
              transition={{
                delay: 3.5 + index * 0.15,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-44 sm:w-56 lg:w-64 xl:w-72"
            >
              <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden border-[3px] border-gray-200/50">
                <img
                  src={card.image}
                  alt={`Mato app screen ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Cream/white rounded sheet background */}
      <div className="bg-mato-green px-4 sm:px-6 lg:px-12">
        <div className="bg-mato-cream rounded-[48px] sm:rounded-[64px] -mt-40 sm:-mt-48 lg:-mt-56 pt-48 sm:pt-56 lg:pt-64 pb-24 sm:pb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 mt-16 sm:mt-20 lg:mt-24"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-mato-dark-green leading-tight">
              Curated by locals.
              <br />
              For travel foodies.
              <br />
              No more long queues.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CardStackSection;
