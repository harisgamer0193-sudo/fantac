"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

// Pick 3 featured products for the highlight section
const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero — full viewport cinematic, negate pt-20 from layout */}
      <div className="-mt-20">
        <Hero />
      </div>

      {/* Collections Preview */}
      <Collections />

      {/* Featured Products Highlight */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              Signature Pieces
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
            >
              Featured This Season
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[1px] bg-accent mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              A curated selection of our most beloved pieces — where timeless
              design meets exceptional craftsmanship.
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
