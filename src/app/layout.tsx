import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fantac Furnitures | Luxury Living, Redefined",
  description:
    "Discover exquisite European-crafted furniture at Fantac Furnitures. Italian luxury meets Scandinavian minimalism — timeless pieces for modern living.",
  keywords: [
    "luxury furniture",
    "Italian furniture",
    "Scandinavian design",
    "modern living",
    "premium furniture",
    "Fantac",
    "European furniture",
  ],
  authors: [{ name: "Fantac Furnitures" }],
  icons: {
    icon: "/logo-fantac.png",
  },
  openGraph: {
    title: "Fantac Furnitures | Luxury Living, Redefined",
    description:
      "Discover exquisite European-crafted furniture. Italian luxury meets Scandinavian minimalism.",
    type: "website",
    siteName: "Fantac Furnitures",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-20 page-enter">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
