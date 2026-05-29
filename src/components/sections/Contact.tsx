"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">
              Stay Inspired
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Join the
              <br />
              <span className="italic">Inner Circle</span>
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Receive exclusive previews of new collections, invitations to
              private showroom events, and design insights from our creative
              directors. Enter a world where luxury living is a shared passion.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border-input bg-card focus:border-accent focus:ring-accent/20 h-12 px-4 text-sm placeholder:text-muted-foreground/60 shadow-soft-sm"
                required
              />
              <Button
                type="submit"
                className="rounded-lg bg-accent hover:bg-gold-light text-accent-foreground h-12 px-6 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-gold"
              >
                {submitted ? "Thank you" : <Send size={16} />}
              </Button>
            </form>

            <p className="text-muted-foreground/60 text-xs mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe
              anytime.
            </p>
          </motion.div>

          {/* Right: Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Private Consultation",
                  desc: "Book a one-on-one session with our design advisors for personalized space planning.",
                  cta: "Schedule",
                },
                {
                  title: "Trade Programme",
                  desc: "Exclusive pricing and support for interior designers and architects.",
                  cta: "Apply",
                },
                {
                  title: "Custom Orders",
                  desc: "Bespoke dimensions, materials, and finishes tailored to your exact vision.",
                  cta: "Enquire",
                },
                {
                  title: "Care & Maintenance",
                  desc: "Expert guidance on preserving the beauty of your Fantac pieces for generations.",
                  cta: "Learn",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-card p-6 rounded-xl shadow-soft-sm group hover:shadow-soft-md hover:bg-secondary transition-all duration-500"
                >
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg text-foreground mb-2">
                    {card.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300"
                  >
                    {card.cta}
                    <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
