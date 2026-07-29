"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Globe, X, Download } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "React Specialist",
  "Open Source Contributor",
];

// Pre-generated stable particle data (avoids SSR/client hydration mismatch)
const PARTICLE_DATA = [
  { left: "8%", top: "12%", w: 6, h: 6, dur: 5.2, delay: 0 },
  { left: "22%", top: "35%", w: 4, h: 4, dur: 4.8, delay: 0.5 },
  { left: "45%", top: "60%", w: 7, h: 7, dur: 6.1, delay: 1 },
  { left: "70%", top: "20%", w: 3, h: 3, dur: 4.3, delay: 1.5 },
  { left: "85%", top: "75%", w: 5, h: 5, dur: 5.7, delay: 2 },
  { left: "15%", top: "80%", w: 8, h: 8, dur: 6.5, delay: 0.8 },
  { left: "55%", top: "10%", w: 4.5, h: 4.5, dur: 4.9, delay: 1.2 },
  { left: "30%", top: "55%", w: 6, h: 6, dur: 5.4, delay: 2.5 },
  { left: "90%", top: "40%", w: 3.5, h: 3.5, dur: 4.6, delay: 0.3 },
  { left: "65%", top: "90%", w: 5, h: 5, dur: 5.9, delay: 1.8 },
  { left: "5%", top: "50%", w: 7, h: 7, dur: 6.2, delay: 3 },
  { left: "40%", top: "25%", w: 4, h: 4, dur: 4.7, delay: 2.2 },
  { left: "75%", top: "65%", w: 6, h: 6, dur: 5.5, delay: 0.7 },
  { left: "50%", top: "45%", w: 3, h: 3, dur: 4.4, delay: 1.6 },
  { left: "20%", top: "90%", w: 5, h: 5, dur: 5.8, delay: 2.8 },
  { left: "95%", top: "15%", w: 4.5, h: 4.5, dur: 6.0, delay: 0.4 },
  { left: "35%", top: "70%", w: 6, h: 6, dur: 5.3, delay: 1.9 },
  { left: "60%", top: "35%", w: 3.5, h: 3.5, dur: 4.5, delay: 3.2 },
];

function Particle({ left, top, w, h, dur, delay }: typeof PARTICLE_DATA[0]) {
  return (
    <motion.div
      className="absolute rounded-full bg-indigo-500/20"
      style={{ left, top, width: w, height: h }}
      animate={{ y: [0, -80, 0], opacity: [0, 0.6, 0], scale: [1, 0.5, 0] }}
      transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const speed = isDeleting ? 50 : 80;
    timeoutRef.current = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.slice(0, displayText.length - 1)
          : currentRole.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {PARTICLE_DATA.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight"
          style={{ lineHeight: 1.05 }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text glow-text">Marwane Ahmed</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-3xl font-light text-slate-300 mb-6 h-10 flex items-center justify-center"
        >
          <span className="text-indigo-400 font-medium mr-2">&gt;</span>
          <span className="cursor">{displayText}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg mb-12 leading-relaxed"
        >
          I craft pixel-perfect, performant digital experiences — from elegant
          interfaces to scalable backend systems. Let&apos;s build something great
          together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            id="hero-view-work-btn"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1"
          >
            View My Work
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
          <button
            id="hero-resume-btn"
            onClick={() => alert("Resume download coming soon!")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/12 text-white font-semibold text-base hover:border-indigo-500/50 hover:bg-white/6 transition-all duration-200 hover:-translate-y-1"
          >
            <Download size={18} className="text-indigo-400" />
            Download CV
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Code, label: "GitHub", href: "https://github.com" },
            { icon: Globe, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: X, label: "Twitter / X", href: "https://twitter.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-600/10 transition-all duration-200 hover:-translate-y-1"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
