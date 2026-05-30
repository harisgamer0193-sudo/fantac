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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://fantac-furnitures.netlify.app"
  ),
  title: "Fantac Furnitures | Luxury Living, Redefined",
  description:
    "Discover exquisite crafted furniture at Fantac Furnitures. Premium luxury meets timeless design — Lahore's finest for modern living.",
  keywords: [
    "luxury furniture",
    "premium furniture",
    "Lahore furniture",
    "modern living",
    "designer furniture",
    "Fantac",
    "Pakistan furniture",
  ],
  authors: [{ name: "Fantac Furnitures" }],
  icons: {
    icon: "/logo-fantac.png",
  },
  openGraph: {
    title: "Fantac Furnitures | Luxury Living, Redefined",
    description:
      "Discover exquisite crafted furniture. Premium luxury meets timeless design in Lahore.",
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
          defaultTheme="dark"
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
