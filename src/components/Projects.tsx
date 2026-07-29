"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Star } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const FILTERS = ["All", "Full-Stack", "AI / ML", "Frontend", "API"];

const projects = [
  {
    id: 10,
    title: "EduFlow",
    category: "Full-Stack",
    description:
      "An all-in-one learning platform designed for modern classrooms. Create courses, upload video lessons, manage homework assignments, track student attendance, and offer AI study support in one place.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    stars: 156,
    color: "from-blue-600/20 to-violet-900/10",
    accentColor: "#6d28d9",
    liveUrl: "https://edu-flow-omega-blond.vercel.app/",
    githubUrl: "https://github.com/Marewane/EduFlow",
    image: "/projects/eduflow.png",
    featured: true,
  },
  {
    id: 11,
    title: "Blog API",
    category: "API",
    description:
      "A RESTful API backend for a full-featured blog platform built with Laravel 12 & PHP 8.2. Features token-based auth via Laravel Sanctum, full CRUD for posts, comments, replies, likes, categories, and user profiles.",
    tags: ["Laravel 12", "PHP 8.2", "Sanctum", "MySQL", "REST API", "PHPUnit"],
    stars: 89,
    color: "from-red-600/20 to-rose-900/10",
    accentColor: "#ef4444",
    liveUrl: "#",
    githubUrl: "https://github.com/Marewane/blog_api_laravel",
    image: "/projects/blog-api-laravel.png",
    featured: true,
  },
  {
    id: 7,
    title: "CoreTrade",
    category: "Full-Stack",
    description:
      "An enterprise-grade e-commerce hub for high-end desk gear, bio-analytic smart rings, and audiophile equipment with a clean minimalist design.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    stars: 142,
    color: "from-purple-600/20 to-purple-900/10",
    accentColor: "#a855f7",
    liveUrl: "https://core-trade-taupe.vercel.app/",
    githubUrl: "https://github.com/Marewane/CoreTrade.git",
    image: "/projects/core-trade.png",
    featured: true,
  },
  {
    id: 8,
    title: "AetherMarket",
    category: "Full-Stack",
    description:
      "A next-gen premium marketplace for buying and selling digital art, electronics, apparel, and furniture with glassmorphism UI, real-time search, and secure sandbox payments.",
    tags: ["Next.js", "React", "Tailwind CSS", "MUI", "TypeScript"],
    stars: 168,
    color: "from-violet-600/20 to-pink-900/10",
    accentColor: "#8b5cf6",
    liveUrl: "https://aether-market-two.vercel.app/",
    githubUrl: "https://github.com/Marewane/AetherMarket.git",
    image: "/projects/aether-market.png",
    featured: true,
  },
  {
    id: 9,
    title: "CineVerse",
    category: "Frontend",
    description:
      "A premium movie discovery web application developed during an internship at ArkX. Fetches real-time film details, ratings, and trailers from the TMDB API with interactive search and responsive Material UI design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "MUI", "TMDB API"],
    stars: 124,
    color: "from-sky-600/20 to-indigo-900/10",
    accentColor: "#0ea5e9",
    liveUrl: "https://movie-finder-nine-lime.vercel.app/",
    githubUrl: "https://github.com/Marewane/Movie_Finder.git",
    image: "/projects/movie-finder.png",
    featured: true,
  },
  {
    id: 1,
    title: "AI Chat Assistant",
    category: "AI / ML",
    description:
      "A production-ready chat app powered by OpenAI GPT-4 and LangChain. Features conversation memory, streaming responses, and a clean React interface.",
    tags: ["Next.js", "LangChain", "OpenAI", "TypeScript", "Vercel AI SDK"],
    stars: 184,
    color: "from-indigo-600/20 to-indigo-900/10",
    accentColor: "#6366f1",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Job Board",
    category: "Full-Stack",
    description:
      "Full-stack job platform with AI-powered resume scoring, role matching, and automated candidate ranking using ML classifiers.",
    tags: ["React", "Node.js", "PostgreSQL", "Python", "Scikit-learn"],
    stars: 137,
    color: "from-cyan-600/20 to-cyan-900/10",
    accentColor: "#06b6d4",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Sentiment Analyzer API",
    category: "AI / ML",
    description:
      "REST API for real-time text sentiment analysis using a fine-tuned BERT model. Deployed via FastAPI with Docker on a cloud VPS.",
    tags: ["Python", "FastAPI", "PyTorch", "BERT", "Docker"],
    stars: 98,
    color: "from-emerald-600/20 to-emerald-900/10",
    accentColor: "#10b981",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "DevConnect",
    category: "Full-Stack",
    description:
      "A social platform for developers to share projects, follow peers and collaborate. Built with real-time notifications and a polished feed UI.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Tailwind"],
    stars: 210,
    color: "from-violet-600/20 to-violet-900/10",
    accentColor: "#8b5cf6",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Portfolio Analytics Dashboard",
    category: "Frontend",
    description:
      "Interactive data visualisation dashboard for tracking portfolio metrics. Features animated charts, dark mode, and responsive design.",
    tags: ["React", "Recharts", "TypeScript", "Tailwind"],
    stars: 76,
    color: "from-orange-600/20 to-orange-900/10",
    accentColor: "#f97316",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "NLP Document Search",
    category: "AI / ML",
    description:
      "Semantic document search engine using sentence embeddings and vector similarity. Supports PDF ingestion and natural language queries.",
    tags: ["Python", "Hugging Face", "FAISS", "FastAPI", "React"],
    stars: 122,
    color: "from-pink-600/20 to-pink-900/10",
    accentColor: "#ec4899",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-8" />

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                id={`filter-${f.toLowerCase().replace(/[^a-z]/g, "-")}`}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "glass border border-white/8 text-slate-400 hover:text-white hover:border-indigo-500/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group glass border border-white/8 rounded-2xl overflow-hidden card-lift cursor-default"
              >
                {/* Card top image or gradient */}
                <div className="h-36 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.color}`} />
                  )}
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-sm z-10">
                      ⭐ Featured
                    </span>
                  )}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 z-10"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(6,11,24,0.9))",
                    }}
                  />
                  <div className="absolute bottom-4 left-5 z-10">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${project.accentColor}22`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}44`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500 text-xs ml-2 shrink-0">
                      <Star size={12} />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs text-slate-400 bg-white/5 border border-white/6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs transition-colors"
                    >
                      <Code2 size={14} />
                      Source
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <AnimatedSection className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="github-profile-link"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5 text-sm font-medium"
          >
            <Code2 size={16} />
            See all projects on GitHub
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
