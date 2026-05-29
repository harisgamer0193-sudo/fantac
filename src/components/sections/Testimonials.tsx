"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Isabella Marchetti",
    title: "Interior Architect",
    location: "Milano, Italy",
    text: "Fantac is the only brand I specify for my residential projects without hesitation. Their pieces possess an uncommon integrity — structurally flawless and aesthetically timeless. Every client has been moved by the experience of living with their furniture.",
    rating: 5,
  },
  {
    name: "Henrik Sørensen",
    title: "Private Collector",
    location: "Copenhagen, Denmark",
    text: "I discovered Fantac during a trip to Milan seven years ago. The sofa I purchased then looks as if it arrived yesterday — the leather has aged beautifully, the cushions have held their form perfectly. This is furniture that rewards you for living with it.",
    rating: 5,
  },
  {
    name: "Camille Dubois",
    title: "Hotel Director",
    location: "Paris, France",
    text: "We furnished our entire boutique hotel with Fantac pieces. Three years and thousands of guests later, every item remains impeccable. The combination of Italian sensuality and Scandinavian durability is unmatched in the luxury market.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            Voices of Distinction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-espresso mb-5"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-gold mx-auto"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="bg-background p-8 lg:p-10 group hover:shadow-xl transition-shadow duration-500"
            >
              {/* Quote icon */}
              <Quote
                className="text-gold/30 mb-6"
                size={32}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-600 text-sm leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-warm-200 pt-5">
                <p className="font-[family-name:var(--font-playfair)] text-espresso font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-charcoal-500 text-xs mt-1">
                  {testimonial.title} &middot; {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
