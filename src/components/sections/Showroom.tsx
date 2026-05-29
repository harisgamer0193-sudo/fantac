"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Showroom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showroom" className="py-24 lg:py-32 bg-espresso relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(201,169,110,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,169,110,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            Experience in Person
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-ivory mb-5"
          >
            Visit Our Showroom
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-charcoal-300 max-w-xl mx-auto leading-relaxed"
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
          className="relative aspect-[21/9] overflow-hidden mb-12"
        >
          <Image
            src="/showroom.png"
            alt="Fantac Furnitures flagship showroom in Milan"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
          {/* Floating info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="flex flex-wrap gap-8 lg:gap-16">
              <div className="flex items-center gap-3">
                <MapPin className="text-gold" size={18} />
                <div>
                  <p className="text-ivory text-sm font-medium">
                    Via Montenapoleone 28
                  </p>
                  <p className="text-charcoal-400 text-xs">20121 Milano, Italy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-gold" size={18} />
                <div>
                  <p className="text-ivory text-sm font-medium">
                    Mon – Sat: 10:00 – 19:00
                  </p>
                  <p className="text-charcoal-400 text-xs">
                    Sunday: By appointment
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold" size={18} />
                <div>
                  <p className="text-ivory text-sm font-medium">+39 02 8901 2345</p>
                  <p className="text-charcoal-400 text-xs">
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
          <p className="text-charcoal-400 text-xs tracking-[0.3em] uppercase mb-4">
            Also in
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Paris", "London", "Copenhagen", "Munich", "Zurich", "New York", "Dubai"].map(
              (city) => (
                <span
                  key={city}
                  className="font-[family-name:var(--font-playfair)] text-ivory/70 text-lg hover:text-gold transition-colors duration-300 cursor-default"
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
