export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  material: string;
}

export const products: Product[] = [
  {
    id: "milano-sofa",
    name: "Milano Sofa",
    category: "Seating",
    price: "€8,900",
    image: "/collection-seating.png",
    description:
      "Hand-tufted Italian leather sofa with solid walnut base. The Milano embodies the essence of refined Italian living — generous proportions, supple full-grain leather, and a silhouette that commands any room.",
    material: "Full-grain leather, Walnut",
  },
  {
    id: "copenhagen-armchair",
    name: "Copenhagen Armchair",
    category: "Seating",
    price: "€4,200",
    image: "/collection-seating.png",
    description:
      "Bouclé upholstered armchair with brushed brass legs. Scandinavian comfort meets Italian elegance in a piece that invites you to linger.",
    material: "Bouclé, Brass",
  },
  {
    id: "toscana-table",
    name: "Toscana Dining Table",
    category: "Dining",
    price: "€12,500",
    image: "/collection-dining.png",
    description:
      "Solid oak dining table with Carrara marble inlay. A centerpiece for gatherings that matter, where the warmth of oak meets the cool elegance of marble.",
    material: "European Oak, Marble",
  },
  {
    id: "paris-chair",
    name: "Paris Dining Chair",
    category: "Dining",
    price: "€2,800",
    image: "/collection-dining.png",
    description:
      "Upholstered dining chair with curved beechwood frame. The gentle curve of the backrest cradles you through long, laughter-filled evenings.",
    material: "Beechwood, Velvet",
  },
  {
    id: "firenze-bed",
    name: "Firenze King Bed",
    category: "Bedroom",
    price: "€9,600",
    image: "/collection-bedroom.png",
    description:
      "Upholstered platform bed with channel-tufted headboard. Transform your bedroom into a sanctuary of serenity with this statement piece.",
    material: "Linen, Oak",
  },
  {
    id: "stockholm-dresser",
    name: "Stockholm Dresser",
    category: "Bedroom",
    price: "€5,400",
    image: "/collection-bedroom.png",
    description:
      "Six-drawer dresser in ash wood with soft-close mechanisms. Scandinavian precision in every joint, Italian sensuality in every curve.",
    material: "Ash Wood",
  },
  {
    id: "berlin-shelf",
    name: "Berlin Shelving System",
    category: "Storage",
    price: "€6,200",
    image: "/collection-storage.png",
    description:
      "Modular wall-mounted shelving in light oak and brushed steel. Architectural storage that transforms your wall into a gallery of living.",
    material: "Oak, Steel",
  },
  {
    id: "zurich-cabinet",
    name: "Zurich Display Cabinet",
    category: "Storage",
    price: "€7,800",
    image: "/collection-storage.png",
    description:
      "Glass-front cabinet with interior LED lighting. Showcase your most treasured possessions in a piece that's itself a work of art.",
    material: "Walnut, Glass",
  },
  {
    id: "amalfi-lounge",
    name: "Amalfi Lounge Chair",
    category: "Outdoor",
    price: "€3,600",
    image: "/collection-outdoor.png",
    description:
      "Weather-resistant woven rope lounge with teak frame. Bring the luxury of Fantac to your terrace, where marine-grade materials meet artisan craft.",
    material: "Teak, Marine Rope",
  },
  {
    id: "santorini-set",
    name: "Santorini Dining Set",
    category: "Outdoor",
    price: "€8,200",
    image: "/collection-outdoor.png",
    description:
      "Teak dining table with four woven dining chairs. Al fresco dining elevated to an art form — weather-defying elegance for every season.",
    material: "Teak, Resin Wicker",
  },
];

export const categories = [
  "All",
  "Seating",
  "Dining",
  "Bedroom",
  "Storage",
  "Outdoor",
] as const;

export type Category = (typeof categories)[number];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(
  product: Product,
  limit = 3
): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
