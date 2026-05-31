"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Sofas",
    image: "/cat-sofas.png",
    href: "/collections?cat=Seating",
  },
  {
    title: "Beds",
    image: "/cat-beds.png",
    href: "/collections?cat=Bedroom",
  },
  {
    title: "Dining Sets",
    image: "/cat-dining-sets.png",
    href: "/collections?cat=Dining",
  },
  {
    title: "Office Luxury",
    image: "/cat-office-luxury.png",
    href: "/collections?cat=Office",
  },
  {
    title: "Seating",
    image: "/collection-seating.png",
    href: "/collections?cat=Seating",
  },
  {
    title: "Outdoor",
    image: "/collection-outdoor.png",
    href: "/collections?cat=Outdoor",
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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: "easeOut" }}
      className="group"
    >
      <Link href={collection.href} className="block">
        {/* Image Card — large, portrait, with gold glow border on hover */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 shadow-soft-md transition-all duration-700 group-hover:shadow-gold group-hover:ring-1 group-hover:ring-accent/40">
          <Image
            src={collection.image}
            alt={`${collection.title} by Fantac Furnitures`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Soft dark overlay on hover for depth */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
        </div>

        {/* Minimal Title — under image */}
        <h3 className="font-[family-name:var(--font-playfair)] text-xl text-foreground text-center group-hover:text-accent transition-colors duration-500">
          {collection.title}
        </h3>
      </Link>
    </motion.div>
  );
}

export default function Collections() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="collections" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-8 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
          >
            Our Collections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
          >
            Curated Categories
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: "4rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-accent mx-auto"
          />
        </div>

        {/* Collections Grid — Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase font-medium rounded-lg hover:bg-gold-light transition-all duration-500 shadow-gold"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
