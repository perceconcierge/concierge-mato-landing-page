import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    step: 'STEP 1',
    title: 'TELL MATO WHAT YOU CRAVE',
    description: 'Cuisine, vibe, budget, or a specific spot.',
    image: '/images/mato/char_peeking.png',
    color: '#FF6347',
  },
  {
    id: 2,
    step: 'STEP 2',
    title: 'MATO FINDS THE BEST OPTIONS',
    description: 'Human-confirmed recommendations matching your preferences.',
    image: '/images/mato/mato_searching.png',
    color: '#4CAF50',
  },
  {
    id: 3,
    step: 'STEP 3',
    title: 'LET MATO HANDLE THE REST',
    description: 'Confirm. Mato Books. Show up.',
    image: '/images/mato/mato_booking.png',
    color: '#FFD54F',
  },
];

const ITEM_WIDTH = 400;
const ITEM_WIDTH_MOBILE = 280;
const GAP = 30;
const GAP_MOBILE = 15;

const StepsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalDistance = (steps.length - 1) * (ITEM_WIDTH + GAP);
  const totalDistanceMobile = (steps.length - 1) * (ITEM_WIDTH_MOBILE + GAP_MOBILE);

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);
  const xMobile = useTransform(scrollYProgress, [0, 1], [0, -totalDistanceMobile]);

  return (
    <section className="steps-carousel-section">
      {/* Section Title */}
      <div className="intro-section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl text-white"
        >
          HOW IT WORKS
        </motion.h2>
      </div>

      {/* Scroll Container */}
      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          {/* Desktop Gallery */}
          <motion.div className="gallery hidden sm:flex" style={{ x }}>
            {steps.map((step) => (
              <div
                key={step.id}
                className="gallery-item"
                style={
                  {
                    '--item-color': step.color,
                  } as React.CSSProperties
                }
              >
                <div className="item-image">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
                <div className="item-content">
                  <span className="item-step">{step.step}</span>
                  <h3 className="item-title">{step.title}</h3>
                  <p className="item-description">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Gallery */}
          <motion.div className="gallery flex sm:hidden" style={{ x: xMobile }}>
            {steps.map((step) => (
              <div
                key={step.id}
                className="gallery-item-mobile"
                style={
                  {
                    '--item-color': step.color,
                  } as React.CSSProperties
                }
              >
                <div className="item-image-mobile">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
                <div className="item-content-mobile">
                  <span className="item-step-mobile">{step.step}</span>
                  <h3 className="item-title-mobile">{step.title}</h3>
                  <p className="item-description-mobile">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <StyleSheet />
    </section>
  );
};

function StyleSheet() {
  return (
    <style>{`
      .steps-carousel-section {
        background-color: #FF6347;
        overflow: visible;
      }

      .intro-section {
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        padding-bottom: 40px;
      }

      .scroll-container {
        height: 300vh;
        position: relative;
      }

      .sticky-wrapper {
        position: sticky;
        top: 0;
        height: 100vh;
        width: ${ITEM_WIDTH}px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: visible;
      }

      .gallery {
        display: flex;
        gap: ${GAP}px;
        will-change: transform;
      }

      .gallery-item {
        flex-shrink: 0;
        width: ${ITEM_WIDTH}px;
        height: 500px;
        border-radius: 32px;
        position: relative;
        overflow: hidden;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
      }

      .item-image {
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
      }

      .item-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .item-content {
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .item-step {
        font-family: 'Caveat', cursive;
        font-size: 20px;
        color: var(--item-color);
        display: block;
        margin-bottom: 12px;
      }

      .item-title {
        font-family: 'Paytone One', sans-serif;
        font-size: 24px;
        font-weight: 600;
        color: #1B5E20;
        margin: 0 0 12px 0;
        line-height: 1.2;
      }

      .item-description {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #1B5E20;
        opacity: 0.7;
        margin: 0;
        line-height: 1.5;
      }

      /* Mobile styles */
      .gallery-item-mobile {
        flex-shrink: 0;
        width: ${ITEM_WIDTH_MOBILE}px;
        height: 380px;
        border-radius: 24px;
        position: relative;
        overflow: hidden;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
      }

      .item-image-mobile {
        width: 140px;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      }

      .item-image-mobile img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .item-content-mobile {
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .item-step-mobile {
        font-family: 'Caveat', cursive;
        font-size: 16px;
        color: var(--item-color);
        display: block;
        margin-bottom: 8px;
      }

      .item-title-mobile {
        font-family: 'Paytone One', sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #1B5E20;
        margin: 0 0 8px 0;
        line-height: 1.2;
      }

      .item-description-mobile {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: #1B5E20;
        opacity: 0.7;
        margin: 0;
        line-height: 1.4;
      }

      @media (max-width: 640px) {
        .sticky-wrapper {
          width: ${ITEM_WIDTH_MOBILE}px;
        }

        .gallery {
          gap: ${GAP_MOBILE}px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .gallery {
          transform: none !important;
        }
        .scroll-container {
          height: auto;
        }
        .sticky-wrapper {
          position: relative;
          height: auto;
          width: 100%;
          overflow-x: auto;
          padding: 50px 0;
        }
      }
    `}</style>
  );
}

export default StepsCarousel;
