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
    image: "/product-milano-sofa.png",
    images: ["/product-milano-sofa.png", "/cat-sofas.png", "/gallery-1-living.png", "/gallery-3-detail.png"],
    description:
      "Hand-tufted leather sofa with solid walnut base. The Milano embodies the essence of refined living — generous proportions, supple full-grain leather, and a silhouette that commands any room.",
    material: "Full-grain leather, Walnut",
  },
  {
    id: "copenhagen-armchair",
    name: "Copenhagen Armchair",
    category: "Seating",
    image: "/product-copenhagen-armchair.png",
    images: ["/product-copenhagen-armchair.png", "/cat-sofas.png", "/gallery-1-living.png", "/gallery-5-office.png"],
    description:
      "Bouclé upholstered armchair with brushed brass legs. Comfort meets elegance in a piece that invites you to linger.",
    material: "Bouclé, Brass",
  },
  {
    id: "toscana-table",
    name: "Toscana Dining Table",
    category: "Dining",
    image: "/product-toscana-table.png",
    images: ["/product-toscana-table.png", "/cat-dining-sets.png", "/gallery-2-dining.png", "/gallery-3-detail.png"],
    description:
      "Solid oak dining table with marble inlay. A centerpiece for gatherings that matter, where the warmth of oak meets the cool elegance of marble.",
    material: "Oak, Marble",
  },
  {
    id: "paris-chair",
    name: "Paris Dining Chair",
    category: "Dining",
    image: "/product-paris-chair.png",
    images: ["/product-paris-chair.png", "/cat-dining-sets.png", "/gallery-2-dining.png", "/gallery-3-detail.png"],
    description:
      "Upholstered dining chair with curved beechwood frame. The gentle curve of the backrest cradles you through long, laughter-filled evenings.",
    material: "Beechwood, Velvet",
  },
  {
    id: "firenze-bed",
    name: "Firenze King Bed",
    category: "Bedroom",
    image: "/product-firenze-bed.png",
    images: ["/product-firenze-bed.png", "/cat-beds.png", "/gallery-4-bedroom.png", "/gallery-3-detail.png"],
    description:
      "Upholstered platform bed with channel-tufted headboard. Transform your bedroom into a sanctuary of serenity with this statement piece.",
    material: "Linen, Oak",
  },
  {
    id: "stockholm-dresser",
    name: "Stockholm Dresser",
    category: "Bedroom",
    image: "/product-stockholm-dresser.png",
    images: ["/product-stockholm-dresser.png", "/cat-beds.png", "/gallery-4-bedroom.png", "/about-workshop.png"],
    description:
      "Six-drawer dresser in ash wood with soft-close mechanisms. Precision in every joint, sensuality in every curve.",
    material: "Ash Wood",
  },
  {
    id: "vienna-desk",
    name: "Vienna Executive Desk",
    category: "Office",
    image: "/product-vienna-desk.png",
    images: ["/product-vienna-desk.png", "/cat-office-luxury.png", "/gallery-5-office.png", "/gallery-3-detail.png"],
    description:
      "Walnut executive desk with leather-inlaid top and brushed brass hardware. Command your workspace with a piece that exudes authority and refinement in equal measure.",
    material: "Walnut, Leather, Brass",
  },
  {
    id: "munich-chair",
    name: "Munich Office Chair",
    category: "Office",
    image: "/product-munich-chair.png",
    images: ["/product-munich-chair.png", "/cat-office-luxury.png", "/gallery-5-office.png", "/craftsmanship.png"],
    description:
      "Tufted leather office chair with ergonomic design and swivel base. Where the tradition of leatherwork meets the demands of the modern executive.",
    material: "Full-grain leather, Steel",
  },
  {
    id: "amalfi-lounge",
    name: "Amalfi Lounge Chair",
    category: "Outdoor",
    image: "/product-amalfi-lounge.png",
    images: ["/product-amalfi-lounge.png", "/gallery-6-terrace.png", "/gallery-3-detail.png", "/showroom.png"],
    description:
      "Weather-resistant woven rope lounge with teak frame. Bring the luxury of Fantac to your terrace, where marine-grade materials meet artisan craft.",
    material: "Teak, Marine Rope",
  },
  {
    id: "santorini-set",
    name: "Santorini Dining Set",
    category: "Outdoor",
    image: "/product-santorini-set.png",
    images: ["/product-santorini-set.png", "/gallery-6-terrace.png", "/showroom.png", "/gallery-3-detail.png"],
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
