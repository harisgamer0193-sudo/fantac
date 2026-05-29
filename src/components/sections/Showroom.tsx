"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Showroom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    /* dark-section: overrides semantic tokens locally so this section
       always appears dark regardless of the active theme */
    <section id="showroom" className="dark-section py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(184,155,118,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(184,155,118,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-8 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
          >
            Experience in Person
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
          >
            Visit Our Showroom
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-accent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Step inside our 3,000 square meter flagship showroom in Milan, where
            every collection is presented in immersive, lifestyle-curated
            settings. Feel the leather, trace the grain, experience the
            proportions — no photograph can replace the real thing.
          </motion.p>
        </div>

        {/* Showroom Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-12 shadow-soft-xl"
        >
          <Image
            src="/showroom.png"
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
                    Via Montenapoleone 28
                  </p>
                  <p className="text-muted-foreground text-xs">20121 Milano, Italy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Clock className="text-accent" size={16} />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">
                    Mon – Sat: 10:00 – 19:00
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
                  <p className="text-foreground text-sm font-medium">+39 02 8901 2345</p>
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">
            Also in
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Paris", "London", "Copenhagen", "Munich", "Zurich", "New York", "Dubai"].map(
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
      </div>
    </section>
  );
}
