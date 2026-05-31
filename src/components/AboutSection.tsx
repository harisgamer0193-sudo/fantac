"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Subtle marble/wood grain texture background ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 30%, rgba(201,169,110,0.10) 0%, transparent 50%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(60,36,21,0.02) 2px,
              rgba(60,36,21,0.02) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(60,36,21,0.015) 3px,
              rgba(60,36,21,0.015) 6px
            )
          `,
          backgroundSize: "100% 100%, 100% 100%, 40px 40px, 60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-8 relative z-10">
        {/* ── Split-Screen Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[600px] lg:min-h-[700px]">
          {/* ── Left: Luxury Workshop Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative overflow-hidden rounded-2xl lg:rounded-r-none lg:rounded-l-2xl aspect-[4/3] lg:aspect-auto"
          >
            <Image
              src="/about-workshop.png"
              alt="Fantac Furnitures — artisan craftsmanship in our Lahore atelier"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Warm gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-warm-950/30 via-transparent to-warm-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />

            {/* Floating accent — decorative gold line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute bottom-8 left-8 right-8 h-[1px] bg-accent/40 origin-left"
            />

            {/* Floating year badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute top-8 left-8"
            >
              <div className="flex items-center gap-3 px-4 py-2 bg-background/80 backdrop-blur-md rounded-lg shadow-soft-sm">
                <div className="w-6 h-[1px] bg-accent" />
                <span className="text-foreground text-xs tracking-[0.3em] uppercase font-medium">
                  Est. 1987 · Lahore
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col justify-center bg-card rounded-2xl lg:rounded-l-none lg:rounded-r-2xl px-8 py-12 lg:px-16 lg:py-20 relative overflow-hidden"
          >
            {/* Subtle inner texture */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 1px,
                    rgba(60,36,21,0.03) 1px,
                    rgba(60,36,21,0.03) 2px
                  )
                `,
              }}
            />

            <div className="relative z-10">
              {/* Accent label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-accent text-xs tracking-[0.4em] uppercase mb-6"
              >
                Our Philosophy
              </motion.p>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6"
              >
                The Art of Living
                <br />
                <span className="italic text-accent">Elegantly</span>
              </motion.h2>

              {/* Gold line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "4rem" } : {}}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="h-[1px] bg-accent mb-8 origin-left"
              />

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                At Fantac Furnitures, craftsmanship is not a process — it is a
                covenant. Since our founding in Lahore in 1987, each piece has
                been shaped by hands that understand wood as a living material,
                leather as a second skin, and metal as a sculptor&rsquo;s medium.
                Our artisans invest over 200 hours in every creation, weaving
                centuries of South Asian tradition into forms that feel unmistakably
                contemporary.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="text-muted-foreground leading-relaxed mb-10"
              >
                We believe that true luxury whispers. It resides in the grain of
                hand-selected oak, the precision of a mortise-and-tenon joint, the
                gentle patina that deepens with years of use. Our furniture does
                not follow trends — it accumulates character, growing more
                beautiful with every passing season.
              </motion.p>

              {/* CTA Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-foreground text-sm tracking-[0.2em] uppercase group"
                >
                  <span className="relative">
                    Read Our Story
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />
                  </span>
                  <svg
                    className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
