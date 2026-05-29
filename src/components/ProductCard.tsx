"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
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
  index = 0,
}: ProductCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  /* ── 3D Tilt: track mouse position ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: "easeOut" }}
      style={{
        perspective: 800,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group will-change-transform"
      >
        <Link href={`/product/${id}`} className="block">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-5 shadow-soft-md transition-all duration-700 group-hover:shadow-gold-glow group-hover:scale-[1.02]">
            <Image
              src={image}
              alt={`${name} by Fantac Furnitures`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Soft golden overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Gold ring border on hover */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/0 group-hover:ring-accent/30 transition-all duration-700" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1.5 bg-background/80 backdrop-blur-sm text-foreground text-[10px] tracking-[0.2em] uppercase rounded-lg shadow-soft-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="px-1 space-y-2">
            {/* Product Name — serif, premium */}
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-foreground group-hover:text-accent transition-colors duration-500">
              {name}
            </h3>

            {/* Short Description */}
            {description && (
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            )}

            {/* Price — minimal, refined */}
            <p className="text-foreground/70 text-base font-light tracking-wide pt-1">
              {price}
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
