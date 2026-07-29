"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const experiences = [
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    companyUrl: "#",
    period: "2022 – Present",
    location: "Remote",
    description:
      "Designed and delivered full-stack web applications for clients and personal ventures — covering React frontends, Node.js/Express APIs, PostgreSQL databases, and cloud deployments. Built several SaaS-style products from scratch.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    accent: "#6366f1",
  },
  {
    type: "education",
    title: "Licence – Artificial Intelligence",
    company: "University (Morocco)",
    companyUrl: "#",
    period: "2023 – 2024",
    location: "Morocco",
    description:
      "Completed the final licence year specialising in Artificial Intelligence. Covered machine learning fundamentals, deep learning (CNNs, RNNs, Transformers), NLP, and AI application development. Built several ML projects including a fine-tuned NLP classifier.",
    tags: ["Machine Learning", "Deep Learning", "NLP", "PyTorch", "Python"],
    accent: "#10b981",
  },
  {
    type: "work",
    title: "AI Integration Developer",
    company: "Self-Directed / Open Source",
    companyUrl: "#",
    period: "2024 – Present",
    location: "Remote",
    description:
      "Combining full-stack skills with AI knowledge to build LLM-powered applications. Integrated OpenAI, LangChain, and Hugging Face models into production web apps, including retrieval-augmented generation (RAG) pipelines and AI-assisted tools.",
    tags: ["LangChain", "OpenAI API", "Hugging Face", "FastAPI", "RAG"],
    accent: "#06b6d4",
  },
  {
    type: "education",
    title: "Bachelor's – Computer Science",
    company: "University (Morocco)",
    companyUrl: "#",
    period: "2021 – 2023",
    location: "Morocco",
    description:
      "Core CS fundamentals: algorithms, data structures, web development, databases, operating systems and software engineering. Built the strong programming foundation that underpins all subsequent work.",
    tags: ["Algorithms", "Web Dev", "Databases", "OOP", "Linux"],
    accent: "#8b5cf6",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(6,182,212,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;

              return (
                <AnimatedSection
                  key={i}
                  delay={i * 0.12}
                  direction={isLeft ? "right" : "left"}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`ml-14 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="glass border border-white/8 rounded-2xl p-6 card-lift group">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors">
                            {exp.title}
                          </h3>
                          <a
                            href={exp.companyUrl}
                            className="text-sm flex items-center gap-1 mt-0.5 hover:text-white transition-colors"
                            style={{ color: exp.accent }}
                          >
                            {exp.company}
                            <ExternalLink size={11} />
                          </a>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <p className="text-xs text-slate-400">{exp.period}</p>
                          <p className="text-xs text-slate-500">{exp.location}</p>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-xs border"
                            style={{
                              background: `${exp.accent}15`,
                              color: exp.accent,
                              borderColor: `${exp.accent}30`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        background: `${exp.accent}20`,
                        borderColor: `${exp.accent}40`,
                        boxShadow: `0 0 20px ${exp.accent}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: exp.accent }} />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
