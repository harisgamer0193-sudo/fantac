"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = {
  Collections: [
    "Seating",
    "Dining",
    "Bedroom",
    "Storage",
    "Outdoor",
    "Lighting",
  ],
  Company: [
    "Our Story",
    "Craftsmanship",
    "Sustainability",
    "Press",
    "Careers",
  ],
  Services: [
    "Book a Consultation",
    "Trade Programme",
    "Custom Orders",
    "Delivery & Installation",
    "Care Guide",
  ],
};

const socialLinks = ["Instagram", "Pinterest", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    /* dark-section: always appears dark regardless of active theme */
    <footer className="dark-section">
      {/* Top bar with CTA */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-foreground mb-2">
              Begin Your Journey
            </h3>
            <p className="text-muted-foreground text-sm">
              Discover the piece that transforms your space.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-gold-light transition-colors duration-500 shadow-gold"
          >
            Explore Collections
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-accent">
                  F
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-lg text-foreground tracking-wide">
                  FANTAC
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block">
                  Furnitures
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Where Italian artistry meets Scandinavian restraint. Crafting
              timeless furniture since 1987, for those who understand that true
              luxury is felt, not flaunted.
            </p>
            {/* Social links */}
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground text-xs tracking-[0.1em] uppercase hover:text-accent transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground text-xs tracking-[0.2em] uppercase mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs">
            &copy; {new Date().getFullYear()} Fantac Furnitures S.r.l. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-muted-foreground/60 text-xs hover:text-muted-foreground transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
