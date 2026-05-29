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
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Stay Inspired
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-espresso mb-5 leading-tight">
              Join the
              <br />
              <span className="italic">Inner Circle</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-6" />
            <p className="text-charcoal-600 leading-relaxed mb-8 max-w-md">
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
                className="flex-1 rounded-none border-warm-300 bg-ivory focus:border-gold focus:ring-gold/20 h-12 px-4 text-sm placeholder:text-charcoal-400"
                required
              />
              <Button
                type="submit"
                className="rounded-none bg-gold hover:bg-gold-light text-espresso h-12 px-6 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300"
              >
                {submitted ? (
                  "Thank you"
                ) : (
                  <Send size={16} />
                )}
              </Button>
            </form>

            <p className="text-charcoal-400 text-xs mt-3">
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
            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-ivory p-6 group hover:bg-warm-100 transition-colors duration-500">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-espresso mb-2">
                  Private Consultation
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                  Book a one-on-one session with our design advisors for
                  personalized space planning.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300"
                >
                  Schedule
                  <ArrowRight size={12} />
                </a>
              </div>

              <div className="bg-ivory p-6 group hover:bg-warm-100 transition-colors duration-500">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-espresso mb-2">
                  Trade Programme
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                  Exclusive pricing and support for interior designers and
                  architects.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300"
                >
                  Apply
                  <ArrowRight size={12} />
                </a>
              </div>

              <div className="bg-ivory p-6 group hover:bg-warm-100 transition-colors duration-500">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-espresso mb-2">
                  Custom Orders
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                  Bespoke dimensions, materials, and finishes tailored to your
                  exact vision.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300"
                >
                  Enquire
                  <ArrowRight size={12} />
                </a>
              </div>

              <div className="bg-ivory p-6 group hover:bg-warm-100 transition-colors duration-500">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-espresso mb-2">
                  Care & Maintenance
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                  Expert guidance on preserving the beauty of your Fantac pieces
                  for generations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300"
                >
                  Learn
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
