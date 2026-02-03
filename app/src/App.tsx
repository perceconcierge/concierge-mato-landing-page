import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import LogoReveal from './sections/LogoReveal';
import HeroSection from './sections/HeroSection';
import CardStackSection from './sections/CardStackSection';
import StepsCarousel from './sections/StepsCarousel';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FinalCTA from './sections/FinalCTA';

function App() {
  const [showLogoReveal, setShowLogoReveal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogoReveal(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="relative overflow-x-clip bg-mato-cream">
        <AnimatePresence>
          {showLogoReveal && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50"
            >
              <LogoReveal onComplete={() => setShowLogoReveal(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        <Navigation />

        <main className="relative">
          <HeroSection />
          <CardStackSection />
          <StepsCarousel />
          <TestimonialsSection />
          <PricingSection />
          <FinalCTA />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
