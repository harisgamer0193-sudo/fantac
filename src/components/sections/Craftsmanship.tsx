"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { number: "37", label: "Years of Mastery" },
  { number: "12", label: "European Ateliers" },
  { number: "200+", label: "Master Artisans" },
  { number: "48", label: "Countries Served" },
];

const values = [
  {
    title: "Material Integrity",
    description:
      "We source only the finest natural materials — FSC-certified European oak, full-grain Italian leather, and hand-selected Carrara marble. Every surface tells a story of provenance and care.",
  },
  {
    title: "Artisan Heritage",
    description:
      "Our pieces are born in ateliers where skills pass through generations. From hand-carved joinery to hand-stitched upholstery, every detail bears the mark of human intention.",
  },
  {
    title: "Timeless Design",
    description:
      "We design against trends. Each silhouette is distilled to its purest form — elegant enough to endure decades, versatile enough to adapt to the spaces of tomorrow.",
  },
];

export default function Craftsmanship() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="craftsmanship" className="py-24 lg:py-32 bg-background">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-8 lg:px-8">
        {/* Top: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-lg"
          >
            <Image
              src="/craftsmanship.png"
              alt="Fantac artisan hand-carving wood furniture"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-950/30 to-transparent" />
            {/* Floating quote */}
            <div className="absolute bottom-8 left-8 right-8">
              <blockquote className="font-[family-name:var(--font-playfair)] text-white text-xl lg:text-2xl italic leading-snug">
                &ldquo;Every chisel mark is a signature of devotion.&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">
              The Soul of Fantac
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Crafted by Hand,
              <br />
              <span className="italic">Cherished for Life</span>
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since 1987, Fantac Furnitures has been the confluence of Italian
              artistry and Scandinavian restraint. Our ateliers across Europe are
              not factories — they are sanctuaries where master artisans
              transform raw, natural materials into heirlooms. Each piece
              undergoes over 200 hours of careful craftsmanship, from the first
              sketch to the final hand-rubbed finish.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe furniture should outlast fashion. That a dining table
              should gather generations, not just meals. That an armchair should
              welcome you home for decades, not seasons. This is the philosophy
              that guides every joint we cut, every seam we stitch, and every
              surface we perfect.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-b border-border mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <span className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground block">
                {stat.number}
              </span>
              <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-3 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="w-8 h-[1px] bg-accent mb-6 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
