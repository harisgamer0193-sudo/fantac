import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About | Fantac Furnitures",
  description:
    "Discover the story behind Fantac Furnitures. Over 37 years of European craftsmanship, 12 ateliers, and 200+ master artisans creating timeless luxury furniture.",
  openGraph: {
    title: "About | Fantac Furnitures",
    description:
      "Discover the story behind Fantac Furnitures. Over 37 years of European craftsmanship.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
