"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Seating",
    subtitle: "Sofas & Armchairs",
    description:
      "Sculpted comfort in cognac leather and bouclé — where every curve is designed for both beauty and repose.",
    image: "/collection-seating.png",
    href: "#",
  },
  {
    title: "Dining",
    subtitle: "Tables & Chairs",
    description:
      "Marble, oak, and artisan glass — tables that become the heart of every gathering, crafted for moments that matter.",
    image: "/collection-dining.png",
    href: "#",
  },
  {
    title: "Bedroom",
    subtitle: "Beds & Dressers",
    description:
      "Sanctuaries of serenity. Upholstered frames and warm woods create spaces where rest becomes an art form.",
    image: "/collection-bedroom.png",
    href: "#",
  },
  {
    title: "Storage",
    subtitle: "Shelving & Cabinets",
    description:
      "Architectural storage solutions in light oak and brushed brass — functional sculpture for modern living.",
    image: "/collection-storage.png",
    href: "#",
  },
  {
    title: "Outdoor",
    subtitle: "Terrace & Garden",
    description:
      "Weather-resistant luxury. Woven fibers and teak bring Scandinavian elegance to every outdoor space.",
    image: "/collection-outdoor.png",
    href: "#",
  },
];

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof collections)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-5">
        <Image
          src={collection.image}
          alt={`${collection.title} collection by Fantac Furnitures`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          quality={85}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-500" />
        {/* Corner accent */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/0 group-hover:border-white/40 transition-all duration-500" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/0 group-hover:border-white/40 transition-all duration-500" />
        {/* Explore link */}
        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase">
            Explore
            <ArrowRight size={12} />
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div>
        <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1">
          {collection.subtitle}
        </p>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal-900 mb-2">
          {collection.title}
        </h3>
        <p className="text-charcoal-500 text-sm leading-relaxed">
          {collection.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="collections" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            Curated for You
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-espresso mb-5"
          >
            Our Collections
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: "4rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-charcoal-500 max-w-xl mx-auto leading-relaxed"
          >
            Each collection is a dialogue between heritage and innovation —
            European craftsmanship refined through decades, designed for the way
            you live today.
          </motion.p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              collection={collection}
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
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-espresso text-sm tracking-[0.2em] uppercase group"
          >
            View All Collections
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
