import { motion } from "framer-motion";
import { Check, Apple } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="relative bg-mato-cream py-20 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-mato-dark-green mb-4">
            SIMPLE PRICING
          </h2>
          <p className="text-xl sm:text-2xl text-mato-red">
            one price, endless discoveries
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 shadow-2xl border-4 border-mato-red/20 text-center">
            {/* Price */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="mb-6"
            >
              <span className="font-heading text-6xl sm:text-7xl md:text-8xl text-mato-red">
                $9
              </span>
              <span className="text-xl sm:text-2xl text-mato-dark-green/60 ml-2">
                / trip
              </span>
            </motion.div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-mato-dark-green mb-8">
              For your entire trip in Thailand
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              {[
                "Unlimited restaurant recommendations",
                "Human-confirmed availability",
                "Instant booking confirmation",
                "24/7 concierge support",
                "Local insider tips",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-mato-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-mato-dark-green">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-mato-red text-white rounded-full font-semibold border-2 border-mato-red-dark hover:bg-mato-red-dark transition-colors shadow-lg"
            >
              <Apple className="w-6 h-6" />
              <span className="text-base">Download on the App Store</span>
            </motion.button>

            {/* Note */}
            <p className="mt-6 text-sm text-mato-dark-green/50">
              *Not including any deposits that may be required by restaurants
            </p>
          </div>

          {/* Decorative Mato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -right-8 sm:-right-16 top-1/2 transform -translate-y-1/2 w-24 sm:w-40 hidden lg:block"
          >
            <img
              src="/images/mato/char_holding_card.png"
              alt="Mato with card"
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
