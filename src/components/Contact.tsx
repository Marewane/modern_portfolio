"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    label: "Professional Email",
    value: "laamirimarwane6@gmail.com",
    href: "mailto:laamirimarwane6@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Casablanca, Morocco",
    href: "#",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section id="contact" className="section-pad relative z-10 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <AnimatedSection className="text-center mb-24">
          <span className="eyebrow mb-4 block">Get In Touch</span>
          <h2 className="display-grad text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-none tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light">
            Open to full-stack roles, AI/ML projects, internships and freelance work.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection direction="right" className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a key={info.label} href={info.href} className="flex items-center gap-6 surf-card p-6 rounded-2xl group">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-neutral-900 border border-[var(--bd-2)] text-neutral-400 group-hover:text-white group-hover:border-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-mono mb-1">{info.label}</p>
                    <p className="text-base sm:text-lg font-medium text-white break-words">{info.value}</p>
                  </div>
                </a>
              );
            })}
          </AnimatedSection>

          <AnimatedSection direction="left">
            <form onSubmit={handleSubmit} className="surf-card p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Name</label>
                  <input id="name" name="name" type="text" required placeholder="John Doe" value={form.name} onChange={handleChange}
                    className="input-field w-full px-5 py-4 rounded-xl text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Email</label>
                  <input id="email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange}
                    className="input-field w-full px-5 py-4 rounded-xl text-sm" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="Project Inquiry" value={form.subject} onChange={handleChange}
                  className="input-field w-full px-5 py-4 rounded-xl text-sm" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="Hello..." value={form.message} onChange={handleChange}
                  className="input-field w-full px-5 py-4 rounded-xl text-sm resize-none" />
              </div>

              <motion.button type="submit" disabled={formState !== "idle"}
                whileHover={{ scale: formState === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold bg-white text-black hover:bg-neutral-200 transition-colors disabled:opacity-50"
              >
                {formState === "loading" ? "Sending..." : formState === "success" ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
