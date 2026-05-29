"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-living-room.png"
          alt="Fantac Furnitures luxury living room"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-espresso/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="h-[1px] bg-gold mb-8"
          />

          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-6"
          >
            Est. 1987 &middot; Milano
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Where Art
            <br />
            Meets{" "}
            <span className="italic text-gold-light">Living</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-lg mb-10"
          >
            Handcrafted European furniture that transforms spaces into
            sanctuaries of elegance. Each piece tells a story of timeless
            craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-espresso text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
            >
              Explore Collections
            </a>
            <a
              href="#craftsmanship"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-500"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/40" size={16} />
        </motion.div>
      </motion.div>

      {/* Bottom decorative strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
