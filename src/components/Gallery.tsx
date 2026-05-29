"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

/* ── Gallery Data ── */
const galleryImages = [
  {
    src: "/gallery-1-living.png",
    alt: "Serene living room with boucle sofa and warm afternoon light",
    span: "col-span-1 row-span-2",   // tall — portrait
    aspect: "aspect-[3/4]",
  },
  {
    src: "/gallery-2-dining.png",
    alt: "Elegant dining room bathed in golden hour light",
    span: "col-span-1 row-span-1",   // standard — landscape
    aspect: "aspect-[4/3]",
  },
  {
    src: "/gallery-3-detail.png",
    alt: "Hand-stitched leather detail — the mark of the artisan",
    span: "col-span-1 row-span-2",   // tall — portrait
    aspect: "aspect-[3/4]",
  },
  {
    src: "/gallery-4-bedroom.png",
    alt: "Scandinavian bedroom sanctuary in morning light",
    span: "col-span-1 row-span-1",   // standard — landscape
    aspect: "aspect-[4/3]",
  },
  {
    src: "/gallery-5-office.png",
    alt: "Sophisticated home office with walnut and brass",
    span: "col-span-1 row-span-2",   // tall — portrait
    aspect: "aspect-[3/4]",
  },
  {
    src: "/gallery-6-terrace.png",
    alt: "Mediterranean terrace with woven rope lounge",
    span: "col-span-1 row-span-1",   // standard — landscape
    aspect: "aspect-[4/3]",
  },
];

/* ── Fullscreen Lightbox ── */
function Lightbox({
  image,
  onClose,
}: {
  image: (typeof galleryImages)[0];
  onClose: () => void;
}) {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 backdrop-blur-xl cursor-pointer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-background/20 transition-all duration-300"
        aria-label="Close preview"
      >
        <X size={20} />
      </button>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-[90vw] h-[85vh] max-w-6xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          quality={95}
          sizes="90vw"
        />
      </motion.div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.3em] uppercase max-w-lg text-center"
      >
        {image.alt}
      </motion.p>
    </motion.div>
  );
}

/* ── Single Gallery Tile ── */
function GalleryTile({
  image,
  index,
  onClick,
}: {
  image: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`${image.span} group cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`relative ${image.aspect} overflow-hidden rounded-2xl shadow-soft-md transition-all duration-700 group-hover:shadow-gold-glow group-hover:scale-[1.02]`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          quality={88}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay — soft dark + centered expand icon */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-all duration-500" />

        {/* Expand indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>
        </div>

        {/* Gold ring on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/0 group-hover:ring-accent/25 transition-all duration-700" />
      </div>
    </motion.div>
  );
}

/* ── Main Gallery Section ── */
export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  const handleClose = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, rgba(201,169,110,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 30%, rgba(201,169,110,0.15) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
          >
            Spaces That Inspire
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
          >
            Gallery of <span className="italic">Inspiration</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: "4rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-accent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            Not merely products — spaces, moods, and moments that define the art
            of living well.
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] lg:auto-rows-[220px] gap-4 lg:gap-5">
          {galleryImages.map((image, index) => (
            <GalleryTile
              key={image.src}
              image={image}
              index={index}
              onClick={() => setLightboxImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox image={lightboxImage} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
