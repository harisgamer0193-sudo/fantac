"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                scrolled
                  ? "bg-primary shadow-soft-sm"
                  : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <span
                className={`font-[family-name:var(--font-playfair)] text-xl font-bold transition-colors duration-500 ${
                  scrolled ? "text-accent" : "text-white"
                }`}
              >
                F
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                FANTAC
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-muted-foreground" : "text-white/60"
                }`}
              >
                Furnitures
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm tracking-[0.15em] uppercase elegant-hover transition-colors duration-500 ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <ThemeToggle />

            <Button
              variant="outline"
              className={`rounded-lg px-6 text-xs tracking-[0.15em] uppercase transition-all duration-500 ${
                scrolled
                  ? "border-border text-foreground hover:bg-foreground hover:text-background"
                  : "border-white/25 text-white hover:bg-white/10 hover:border-white/40"
              }`}
            >
              Book Visit
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-foreground/98 backdrop-blur-xl md:hidden dark-section"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="font-[family-name:var(--font-playfair)] text-3xl text-background hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  className="rounded-lg px-8 py-3 text-sm tracking-[0.15em] uppercase border-accent/40 text-accent hover:bg-accent/10 hover:border-accent mt-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Visit
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
