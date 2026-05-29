import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductPageClient from "./ProductPageClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Fantac Furnitures",
    };
  }

  return {
    title: `${product.name} | Fantac Furnitures`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Fantac Furnitures`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage() {
  return <ProductPageClient />;
}
