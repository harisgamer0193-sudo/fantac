import { Suspense } from "react";
import type { Metadata } from "next";
import CollectionsPageClient from "./CollectionsPageClient";

export const metadata: Metadata = {
  title: "Collections | Fantac Furnitures",
  description:
    "Browse our curated collections of luxury European furniture. Seating, dining, bedroom, storage, and outdoor pieces crafted by master artisans.",
  openGraph: {
    title: "Collections | Fantac Furnitures",
    description:
      "Browse our curated collections of luxury European furniture.",
  },
};

export default function CollectionsPage() {
  return (
    <Suspense fallback={null}>
      <CollectionsPageClient />
    </Suspense>
  );
}
