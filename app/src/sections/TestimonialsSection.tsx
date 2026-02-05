import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Bangkok",
    text: "Mato found us the most amazing street food spot in Chinatown that we never would have discovered on our own. The tom yum was incredible!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "Chiang Mai",
    text: "I was skeptical at first, but Mato booked us a table at a rooftop restaurant with the best view of the city. Saved us hours of research!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Phuket",
    text: "As a vegetarian traveling in Thailand, I was worried about finding good food. Mato understood exactly what I needed and found perfect spots!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-mato-red min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* 5-Star Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 fill-mato-yellow text-mato-yellow"
              />
            ))}
          </motion.div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-2">
            LOVED BY FOODIES
          </h2>
          <p className="text-xl sm:text-2xl text-white/80">
            5-star average rating
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-xl"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-mato-yellow text-mato-yellow"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-mato-dark-green text-base sm:text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-mato-red/20">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-mato-dark-green">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-mato-dark-green/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
