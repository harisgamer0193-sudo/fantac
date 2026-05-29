"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description?: string;
  material?: string;
  index?: number;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
  description,
  material,
  index = 0,
}: ProductCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={`/product/${id}`} className="group block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-5 shadow-soft-sm group-hover:shadow-soft-lg transition-shadow duration-700">
          <Image
            src={image}
            alt={`${name} by Fantac Furnitures`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={85}
          />
          {/* Soft hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
          {/* Material badge */}
          {material && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-[10px] tracking-[0.2em] uppercase rounded-lg">
                {material}
              </span>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="px-1">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-1">
            {category}
          </p>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {name}
          </h3>
          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed mb-2 line-clamp-2">
              {description}
            </p>
          )}
          <p className="text-muted-foreground text-sm font-medium">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
