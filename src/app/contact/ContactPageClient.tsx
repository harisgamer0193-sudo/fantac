"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const serviceCards = [
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
];

export default function ContactPageClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-accent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Whether you&apos;re seeking a specific piece, planning a complete interior,
            or simply wish to experience our collections in person — we&apos;re here
            to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Service Cards */}
      <section ref={ref} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">
                Send a Message
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                We&apos;d Love to
                <br />
                <span className="italic">Hear from You</span>
              </h2>
              <div className="w-16 h-[1px] bg-accent mb-8" />

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card p-8 rounded-2xl text-center"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-2xl text-foreground mb-3">
                    Thank You
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Name
                      </label>
                      <Input
                        placeholder="Your full name"
                        required
                        className="rounded-lg border-input bg-card focus:border-accent focus:ring-accent/20 h-12 px-4 text-sm placeholder:text-muted-foreground/60 shadow-soft-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="rounded-lg border-input bg-card focus:border-accent focus:ring-accent/20 h-12 px-4 text-sm placeholder:text-muted-foreground/60 shadow-soft-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="rounded-lg border-input bg-card focus:border-accent focus:ring-accent/20 h-12 px-4 text-sm placeholder:text-muted-foreground/60 shadow-soft-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Subject
                      </label>
                      <select
                        required
                        className="w-full rounded-lg border border-input bg-card focus:border-accent focus:ring-accent/20 h-12 px-4 text-sm text-foreground shadow-soft-sm appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        <option>Private Consultation</option>
                        <option>Trade Programme</option>
                        <option>Custom Orders</option>
                        <option>Delivery & Installation</option>
                        <option>Care & Maintenance</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                      className="rounded-lg border-input bg-card focus:border-accent focus:ring-accent/20 px-4 py-3 text-sm placeholder:text-muted-foreground/60 shadow-soft-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-lg bg-accent hover:bg-gold-light text-accent-foreground h-12 px-8 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-gold"
                  >
                    Send Message
                    <Send size={14} className="ml-2" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right: Service Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceCards.map((card) => (
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
                    <button className="inline-flex items-center gap-2 text-accent text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300">
                      {card.cta}
                      <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showroom Visit Info */}
      <section className="dark-section py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(201,169,110,0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              Visit Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-foreground mb-6"
            >
              Our Showroom
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[1px] bg-accent mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Via Montenapoleone 28<br />
                    20121 Milano, Italy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-foreground mb-1">
                    Hours
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Monday – Saturday: 10:00 – 19:00<br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    +39 02 8901 2345<br />
                    Private consultations available
                  </p>
                </div>
              </div>

              <Link
                href="/collections"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-gold-light transition-colors duration-500 shadow-gold"
              >
                Explore Collections
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-xl bg-card"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-accent mx-auto mb-4" size={40} />
                  <p className="font-[family-name:var(--font-playfair)] text-xl text-foreground mb-2">
                    Fantac Showroom
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Via Montenapoleone 28, Milano
                  </p>
                  <p className="text-muted-foreground text-xs mt-2">
                    45.4722° N, 9.1936° E
                  </p>
                </div>
              </div>
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs tracking-[0.4em] uppercase mb-4"
            >
              Stay Inspired
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-foreground mb-4"
            >
              Join the <span className="italic">Inner Circle</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-sm leading-relaxed mb-8"
            >
              Receive exclusive previews of new collections, invitations to
              private showroom events, and design insights from our creative
              directors.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleNewsletterSubmit}
              className="flex gap-3 max-w-md mx-auto"
            >
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
            </motion.form>

            <p className="text-muted-foreground/60 text-xs mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
