"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import { getProductById, getRelatedProducts } from "@/lib/products";

export default function ProductPageClient() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft size={14} />
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);
  const galleryImages = [
    { src: product.image, alt: `${product.name} - Front view` },
    { src: product.image, alt: `${product.name} - Detail view` },
    { src: product.image, alt: `${product.name} - Side view` },
    { src: product.image, alt: `${product.name} - Close-up` },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Product Detail */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
            >
              <ArrowLeft size={14} />
              Back to Collections
            </Link>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Image Gallery — 60% */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <Gallery images={galleryImages} />
            </motion.div>

            {/* Product Details — 40% */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
                {product.category}
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl text-muted-foreground font-medium mb-8">
                {product.price}
              </p>

              <div className="w-16 h-[1px] bg-accent mb-8" />

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Material */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Materials
                </p>
                <p className="text-foreground">{product.material}</p>
              </div>

              {/* Enquire Button */}
              <Link href="/contact" className="block">
                <Button className="w-full rounded-lg bg-accent hover:bg-gold-light text-accent-foreground h-14 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-gold">
                  <ShoppingBag size={16} className="mr-3" />
                  Enquire About This Piece
                </Button>
              </Link>

              <p className="text-muted-foreground/60 text-xs mt-4 text-center">
                Price includes white-glove delivery and installation
              </p>

              {/* Extra Details */}
              <div className="mt-10 pt-8 border-t border-border space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Origin</span>
                  <span className="text-foreground">Italy / Scandinavia</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Guarantee</span>
                  <span className="text-foreground">25 Years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Lead Time</span>
                  <span className="text-foreground">8–12 Weeks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Customisation</span>
                  <span className="text-foreground">Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-8 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">
                You May Also Love
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-foreground">
                Related Pieces
              </h2>
              <div className="h-[1px] bg-accent w-16 mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {relatedProducts.map((p, index) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  category={p.category}
                  price={p.price}
                  image={p.image}
                  description={p.description}
                  material={p.material}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
