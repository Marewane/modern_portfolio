"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { MapPin, Calendar, BrainCircuit, Code2 } from "lucide-react";

const stats = [
  { label: "Years of Dev", value: "3+", icon: Calendar },
  { label: "Projects Built", value: "25+", icon: Code2 },
  { label: "AI & ML Focus", value: "1yr", icon: BrainCircuit },
  { label: "Location", value: "Morocco", icon: MapPin },
];

const techBadges = [
  // Full-stack
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker",
  // AI / ML
  "Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
  "LangChain", "OpenAI API", "Hugging Face",
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar / Visual */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative flex justify-center lg:justify-start">
              {/* Rotating rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-72 h-72 rounded-full border border-indigo-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-80 h-80 rounded-full border border-cyan-500/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Avatar card */}
              <div className="relative w-64 h-64 rounded-3xl glass border border-white/10 overflow-hidden border-glow shadow-[0_0_60px_rgba(99,102,241,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-cyan-600/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-extrabold shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    MA
                  </div>
                  <p className="text-white font-semibold text-lg">Marwane Ahmed</p>
                  <p className="text-indigo-400 text-sm">Full-Stack · AI Engineer</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass border border-white/10 rounded-xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs text-slate-400">Currently exploring</p>
                <p className="text-sm font-semibold text-white">LLMs & AI Agents</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  From Full-Stack Dev to{" "}
                  <span className="gradient-text">AI Engineer</span>
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                  I started my journey as a full-stack developer, building web apps
                  from the ground up — REST APIs, React frontends, databases and
                  deployments. That solid engineering foundation gave me the perfect
                  launchpad into AI.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  I&apos;ve since completed my licence year specialising in Artificial
                  Intelligence, giving me a deep understanding of machine learning
                  models, neural networks and LLM-based applications. I now bridge
                  both worlds — writing intelligent systems that are also a pleasure
                  to use.
                </p>
              </div>

              {/* Tech badges */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
                  Tech I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg glass border border-white/8 text-sm text-slate-300 hover:border-indigo-500/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                id="about-contact-btn"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
              >
                Let&apos;s Talk →
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection key={stat.label} delay={0.1 * i}>
                <div className="glass border border-white/8 rounded-2xl p-6 text-center card-lift">
                  <Icon size={22} className="text-indigo-400 mx-auto mb-3" />
                  <p className="text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
