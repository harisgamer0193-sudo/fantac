"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        {/* Soft warm gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-950/60 via-warm-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950/50 via-transparent to-warm-950/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-8 lg:px-8">
        <div className="max-w-2xl">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="h-[1px] bg-accent mb-8"
          />

          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-6"
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
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase font-medium rounded-lg hover:bg-gold-light transition-all duration-500 shadow-gold"
            >
              Explore Collections
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/8 backdrop-blur-sm text-white text-sm tracking-[0.2em] uppercase rounded-lg hover:bg-white/15 transition-all duration-500"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
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
    </section>
  );
}
