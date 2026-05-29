import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Fantac Furnitures",
  description:
    "Get in touch with Fantac Furnitures. Book a consultation, schedule a showroom visit, or enquire about our luxury European furniture collections.",
  openGraph: {
    title: "Contact | Fantac Furnitures",
    description:
      "Get in touch with Fantac Furnitures. Book a consultation or showroom visit.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
