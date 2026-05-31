export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  material: string;
}

export const products: Product[] = [
  {
    id: "milano-sofa",
    name: "Milano Sofa",
    category: "Seating",
    image: "/product-milano-sofa.jpg",
    images: ["/product-milano-sofa.jpg", "/cat-sofas.jpg", "/gallery-1-living.jpg", "/gallery-3-detail.jpg"],
    description:
      "Hand-tufted leather sofa with solid walnut base. The Milano embodies the essence of refined living — generous proportions, supple full-grain leather, and a silhouette that commands any room.",
    material: "Full-grain leather, Walnut",
  },
  {
    id: "copenhagen-armchair",
    name: "Copenhagen Armchair",
    category: "Seating",
    image: "/product-copenhagen-armchair.jpg",
    images: ["/product-copenhagen-armchair.jpg", "/cat-sofas.jpg", "/gallery-1-living.jpg", "/gallery-5-office.jpg"],
    description:
      "Bouclé upholstered armchair with brushed brass legs. Comfort meets elegance in a piece that invites you to linger.",
    material: "Bouclé, Brass",
  },
  {
    id: "toscana-table",
    name: "Toscana Dining Table",
    category: "Dining",
    image: "/product-toscana-table.jpg",
    images: ["/product-toscana-table.jpg", "/cat-dining-sets.jpg", "/gallery-2-dining.jpg", "/gallery-3-detail.jpg"],
    description:
      "Solid oak dining table with marble inlay. A centerpiece for gatherings that matter, where the warmth of oak meets the cool elegance of marble.",
    material: "Oak, Marble",
  },
  {
    id: "paris-chair",
    name: "Paris Dining Chair",
    category: "Dining",
    image: "/product-paris-chair.jpg",
    images: ["/product-paris-chair.jpg", "/cat-dining-sets.jpg", "/gallery-2-dining.jpg", "/gallery-3-detail.jpg"],
    description:
      "Upholstered dining chair with curved beechwood frame. The gentle curve of the backrest cradles you through long, laughter-filled evenings.",
    material: "Beechwood, Velvet",
  },
  {
    id: "firenze-bed",
    name: "Firenze King Bed",
    category: "Bedroom",
    image: "/product-firenze-bed.jpg",
    images: ["/product-firenze-bed.jpg", "/cat-beds.jpg", "/gallery-4-bedroom.jpg", "/gallery-3-detail.jpg"],
    description:
      "Upholstered platform bed with channel-tufted headboard. Transform your bedroom into a sanctuary of serenity with this statement piece.",
    material: "Linen, Oak",
  },
  {
    id: "stockholm-dresser",
    name: "Stockholm Dresser",
    category: "Bedroom",
    image: "/product-stockholm-dresser.jpg",
    images: ["/product-stockholm-dresser.jpg", "/cat-beds.jpg", "/gallery-4-bedroom.jpg", "/about-workshop.jpg"],
    description:
      "Six-drawer dresser in ash wood with soft-close mechanisms. Precision in every joint, sensuality in every curve.",
    material: "Ash Wood",
  },
  {
    id: "vienna-desk",
    name: "Vienna Executive Desk",
    category: "Office",
    image: "/product-vienna-desk.jpg",
    images: ["/product-vienna-desk.jpg", "/cat-office-luxury.jpg", "/gallery-5-office.jpg", "/gallery-3-detail.jpg"],
    description:
      "Walnut executive desk with leather-inlaid top and brushed brass hardware. Command your workspace with a piece that exudes authority and refinement in equal measure.",
    material: "Walnut, Leather, Brass",
  },
  {
    id: "munich-chair",
    name: "Munich Office Chair",
    category: "Office",
    image: "/product-munich-chair.jpg",
    images: ["/product-munich-chair.jpg", "/cat-office-luxury.jpg", "/gallery-5-office.jpg", "/craftsmanship.jpg"],
    description:
      "Tufted leather office chair with ergonomic design and swivel base. Where the tradition of leatherwork meets the demands of the modern executive.",
    material: "Full-grain leather, Steel",
  },
  {
    id: "amalfi-lounge",
    name: "Amalfi Lounge Chair",
    category: "Outdoor",
    image: "/product-amalfi-lounge.jpg",
    images: ["/product-amalfi-lounge.jpg", "/gallery-6-terrace.jpg", "/gallery-3-detail.jpg", "/showroom.jpg"],
    description:
      "Weather-resistant woven rope lounge with teak frame. Bring the luxury of Fantac to your terrace, where marine-grade materials meet artisan craft.",
    material: "Teak, Marine Rope",
  },
  {
    id: "santorini-set",
    name: "Santorini Dining Set",
    category: "Outdoor",
    image: "/product-santorini-set.jpg",
    images: ["/product-santorini-set.jpg", "/gallery-6-terrace.jpg", "/showroom.jpg", "/gallery-3-detail.jpg"],
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
  "Office",
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
