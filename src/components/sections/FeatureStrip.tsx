"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "Every material is ethically procured. FSC-certified woods, vegetable-tanned leathers, and recycled metals ensure beauty without compromise.",
  },
  {
    icon: Shield,
    title: "25-Year Guarantee",
    description:
      "We stand behind every piece with a quarter-century guarantee. Because furniture built to last shouldn't need replacing — ever.",
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    description:
      "Our dedicated installation team delivers and assembles each piece in your home with the same care our artisans poured into creating it.",
  },
];

export default function FeatureStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 bg-warm-50 border-y border-warm-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="text-gold" size={20} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-espresso mb-1">
                  {feature.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
