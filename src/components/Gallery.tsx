"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-lg bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                i === activeIndex
                  ? "ring-2 ring-accent shadow-gold"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={60}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
