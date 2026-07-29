"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@email.com",
    href: "mailto:john.doe@email.com",
    color: "#6366f1",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "#06b6d4",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, USA",
    href: "#",
    color: "#10b981",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate a network request
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section id="contact" className="section-pad relative">
      {/* Top divider */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 50%, transparent 100%)",
        }}
      />
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Full-stack developer with solid AI foundations — open to roles,
          freelance projects, and research collaborations. Drop me a message
          and I&apos;ll reply within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <AnimatedSection direction="right" className="lg:col-span-2 space-y-5">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 glass border border-white/8 rounded-2xl p-5 card-lift group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${info.color}18`,
                      border: `1px solid ${info.color}35`,
                    }}
                  >
                    <Icon size={20} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Availability callout */}
            <div className="glass border border-indigo-500/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-emerald-400 text-sm font-semibold">
                  Currently Available
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to full-stack roles, AI/ML projects, internships and
                freelance work. Response time: &lt;24h.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass border border-white/8 rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="input-field w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="input-field w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry / Collaboration / Say Hi"
                  value={form.subject}
                  onChange={handleChange}
                  className="input-field w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={handleChange}
                  className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                id="contact-submit-btn"
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                whileHover={{ scale: formState === "idle" ? 1.01 : 1 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  formState === "success"
                    ? "bg-emerald-600 text-white"
                    : formState === "error"
                    ? "bg-red-600 text-white"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)]"
                }`}
              >
                {formState === "loading" && (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                )}
                {formState === "success" && (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                )}
                {formState === "error" && (
                  <>
                    <AlertCircle size={18} /> Failed — Try Again
                  </>
                )}
                {formState === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
