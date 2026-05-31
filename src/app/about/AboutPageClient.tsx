"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

const stats = [
  { number: "37", label: "Years of Mastery" },
  { number: "3", label: "Ateliers in Lahore" },
  { number: "200+", label: "Master Artisans" },
  { number: "15", label: "Cities Served" },
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

export default function AboutPageClient() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <Image
            src="/craftsmanship.jpg"
            alt="Fantac artisan hand-carving wood furniture"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-950/70 via-warm-950/50 to-warm-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-950/60 via-transparent to-warm-950/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-6"
          >
            Est. 1987 · Lahore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Our Story
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] bg-accent"
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 lg:py-32" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-lg"
            >
              <Image
                src="/craftsmanship.jpg"
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
                Since 1987, Fantac Furnitures has been the confluence of
                Pakistani artistry and timeless design. Our ateliers across
                Lahore are not factories — they are sanctuaries where master artisans
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
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
            >
              Our Values
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[1px] bg-accent mx-auto"
            />
          </div>

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

      {/* Showroom */}
      <section className="dark-section py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(201,169,110,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,169,110,0.2) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              Experience in Person
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
            >
              Visit Our Showroom
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
              Step inside our flagship showroom in Lahore, where
              every collection is presented in immersive, lifestyle-curated
              settings.
            </motion.p>
          </div>

          {/* Showroom Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-12 shadow-soft-xl"
          >
            <Image
              src="/showroom.jpg"
              alt="Fantac Furnitures flagship showroom in Milan"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
            {/* Floating info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="flex flex-wrap gap-8 lg:gap-16">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                    <MapPin className="text-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      Main Boulevard, Gulberg
                    </p>
                    <p className="text-muted-foreground text-xs">Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Clock className="text-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      Mon – Sat: 10:00 – 20:00
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Phone className="text-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">+92 311 1521111</p>
                    <p className="text-muted-foreground text-xs">
                      Private consultations available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">
              Also in
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["Karachi", "Islamabad", "Faisalabad", "Multan", "Peshawar", "Dubai", "London"].map(
                (city) => (
                  <span
                    key={city}
                    className="font-[family-name:var(--font-playfair)] text-foreground/60 text-lg hover:text-accent transition-colors duration-300 cursor-default"
                  >
                    {city}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-gold-light transition-colors duration-500 shadow-gold"
            >
              Book a Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
