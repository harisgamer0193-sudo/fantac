"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const testimonials = [
  {
    name: "Isabella Marchetti",
    title: "Interior Architect",
    location: "Milano, Italy",
    text: "Fantac is the only brand I specify for my residential projects without hesitation. Their pieces possess an uncommon integrity — structurally flawless and aesthetically timeless.",
  },
  {
    name: "Henrik Sørensen",
    title: "Private Collector",
    location: "Copenhagen, Denmark",
    text: "I discovered Fantac during a trip to Milan seven years ago. The sofa I purchased then looks as if it arrived yesterday — the leather has aged beautifully, the cushions have held their form perfectly.",
  },
  {
    name: "Camille Dubois",
    title: "Hotel Director",
    location: "Paris, France",
    text: "We furnished our entire boutique hotel with Fantac pieces. Three years and thousands of guests later, every item remains impeccable. The combination of Italian sensuality and Scandinavian durability is unmatched.",
  },
];

// Pick 3 featured products
const featuredProducts = products.slice(0, 3);

export default function Home() {
  const collectionsRef = useRef(null);
  const isCollectionsInView = useInView(collectionsRef, {
    once: true,
    margin: "-80px",
  });
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <main className="flex flex-col">
      {/* Hero — full viewport, negate pt-20 from layout */}
      <div className="-mt-20">
        <Hero />
      </div>

      {/* Feature Strip */}
      <FeatureStrip />

      {/* Collections Preview */}
      <section className="py-24 lg:py-32 bg-card">
        <div ref={collectionsRef} className="max-w-7xl mx-auto px-8 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCollectionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              Curated for You
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isCollectionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
            >
              Our Collections
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isCollectionsInView ? { width: "4rem" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[1px] bg-accent mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isCollectionsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              Each collection is a dialogue between heritage and innovation —
              European craftsmanship refined through decades.
            </motion.p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                description={product.description}
                material={product.material}
                index={index}
              />
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-3 text-foreground text-sm tracking-[0.2em] uppercase group"
            >
              View All Collections
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-background">
        <div ref={testimonialsRef} className="max-w-7xl mx-auto px-8 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              Voices of Distinction
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isTestimonialsInView ? { width: "4rem" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[1px] bg-accent mx-auto"
            />
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="bg-card p-8 lg:p-10 rounded-2xl shadow-soft-sm hover:shadow-soft-md transition-shadow duration-500"
              >
                {/* Quote icon */}
                <div className="text-accent/20 mb-6 text-3xl font-[family-name:var(--font-playfair)]">&ldquo;</div>

                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-border pt-5">
                  <p className="font-[family-name:var(--font-playfair)] text-foreground font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {testimonial.title} &middot; {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
          >
            Begin Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
          >
            Experience the{" "}
            <span className="italic">Extraordinary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
          >
            Visit our showroom or explore our collections to discover furniture
            that transcends the ordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase font-medium rounded-lg hover:bg-gold-light transition-all duration-500 shadow-gold"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-foreground text-sm tracking-[0.2em] uppercase font-medium rounded-lg hover:bg-secondary/80 transition-all duration-500"
            >
              Book a Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
