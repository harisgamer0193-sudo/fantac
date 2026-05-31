"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── Animation Variants ── */

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

const lineExpand = (delay: number) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  /* Parallax: background image moves slower than scroll */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  /* Slow zoom on the background image — keyframe animation */
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ── Background Image with Slow Zoom + Parallax ── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/hero-cinematic.jpg"
          alt="Fantac Furnitures — luxury interior living room"
          fill
          className="object-cover"
          priority
          quality={95}
          sizes="100vw"
        />
      </motion.div>

      {/* ── Dark Soft Overlay for Readability ── */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-warm-950/50 via-warm-950/40 to-warm-950/65"
        style={{ opacity: overlayOpacity }}
      />
      {/* Subtle warm vignette at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(42,26,14,0.4)_100%)]" />

      {/* ── Center-Aligned Content ── */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center"
        style={{ y: textY }}
      >
        <div className="max-w-3xl">
          {/* Decorative gold line — top */}
          <motion.div
            variants={lineExpand(0.2)}
            initial="hidden"
            animate="visible"
            className="h-[1px] w-16 bg-accent mx-auto mb-8 origin-center"
          />

          {/* Brand Name */}
          <motion.h1
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-wide mb-4"
          >
            Fantac{" "}
            <span className="italic text-gold-light">Furnitures</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp(0.8)}
            initial="hidden"
            animate="visible"
            className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl md:text-2xl text-white/80 tracking-[0.08em] mb-10"
          >
            Crafted Elegance. Timeless Living.
          </motion.p>

          {/* Decorative gold line — bottom */}
          <motion.div
            variants={lineExpand(1.1)}
            initial="hidden"
            animate="visible"
            className="h-[1px] w-16 bg-accent mx-auto mb-12 origin-center"
          />

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp(1.4)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/collections"
              className="group inline-flex items-center justify-center px-10 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase font-medium rounded-lg hover:bg-gold-light transition-all duration-500 shadow-gold hover:shadow-soft-lg"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/8 backdrop-blur-sm text-white text-sm tracking-[0.2em] uppercase rounded-lg border border-white/10 hover:bg-white/15 hover:border-white/25 transition-all duration-500"
            >
              Discover Designs
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/30" size={14} />
        </motion.div>
      </motion.div>

      {/* ── Bottom gradient fade into page content ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
