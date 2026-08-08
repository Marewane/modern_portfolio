"use client";

import { Code2, ExternalLink } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "EduFlow",
    category: "Full-Stack SaaS",
    description: "An all-in-one learning platform designed for modern classrooms. Create courses, upload video lessons, manage homework assignments, track student attendance, and offer AI study support in one place.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://edu-flow-omega-blond.vercel.app/",
    githubUrl: "https://github.com/Marewane/EduFlow",
    image: "/projects/eduflow.png", // Keep original images, let CSS handle grayscale
  },
  {
    id: 2,
    title: "Blog API",
    category: "Backend / API",
    description: "A robust RESTful API backend for a full-featured blog platform built with Laravel 12 & PHP 8.2. Features token-based auth via Laravel Sanctum, full CRUD operations, and user profiles.",
    tags: ["Laravel 12", "PHP 8.2", "MySQL", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Marewane/blog_api_laravel",
    image: "/projects/blog-api-laravel.png",
  },
  {
    id: 3,
    title: "CoreTrade",
    category: "E-Commerce",
    description: "An enterprise-grade e-commerce hub for high-end desk gear and audiophile equipment featuring a pristine minimalist design and fluid animations.",
    tags: ["Next.js", "React", "Framer Motion", "TypeScript"],
    liveUrl: "https://core-trade-taupe.vercel.app/",
    githubUrl: "https://github.com/Marewane/CoreTrade.git",
    image: "/projects/core-trade.png",
  },
  {
    id: 4,
    title: "Receipt Understanding Pipeline",
    category: "Machine Learning",
    description: "Developed a structured field extraction system from scanned receipts, transforming images into actionable data. Uses Donut (Hugging Face Transformers) for end-to-end processing without a separate OCR step.",
    tags: ["Machine Learning", "Donut", "Hugging Face", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/Marewane/receiptExtractor",
    image: "",
  },
  {
    id: 5,
    title: "Pollen Grain Image Classifier",
    category: "Deep Learning",
    description: "Developed a Convolutional Neural Network (CNN) to classify images of pollen grains by type. Implemented the preprocessing and training pipeline with TensorFlow, Keras, NumPy, and OpenCV.",
    tags: ["Deep Learning", "TensorFlow", "Keras", "OpenCV"],
    liveUrl: "#",
    githubUrl: "https://github.com/Marewane/Pollen_Grain",
    image: "",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <AnimatedSection className="text-center mb-24">
          <span className="eyebrow mb-4 block">Selected Work</span>
          <h2 className="display-grad text-[clamp(3rem,6vw,6rem)] font-extrabold leading-none tracking-tight">
            Projects
          </h2>
        </AnimatedSection>

        <div className="relative w-full pb-[20vh]">
          {projects.map((project, i) => {
            const num = String(i + 1).padStart(2, "0");
            
            return (
              <div 
                key={project.id} 
                className="sticky w-full transition-transform"
                style={{ top: `calc(10vh + ${i * 40}px)`, zIndex: i + 10 }}
              >
                <AnimatedSection className="w-full relative group mb-12 rounded-3xl transition-all duration-1000">
                  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 surf-card p-6 md:p-12 rounded-3xl border border-[var(--bd-2)] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]" style={{ background: '#0a0a0a' }}>
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-3/5 aspect-video relative rounded-2xl overflow-hidden bg-neutral-900 border border-[var(--bd-2)]">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 group-hover:scale-[1.15]"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                        <span className="text-neutral-700 font-mono">No Image Available</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center">
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="ghost-num text-5xl md:text-7xl">{num}</span>
                      <div className="h-px flex-1 bg-[var(--bd-2)]" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="chip px-3 py-1.5 rounded-full font-mono text-xs text-neutral-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-400 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      {project.liveUrl !== "#" && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                          Visit Project <ExternalLink size={16}/>
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 surf-panel text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors border border-[var(--bd-2)]">
                          <Code2 size={16}/> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>

        <AnimatedSection className="mt-24 text-center">
          <a href="https://github.com/Marewane" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            Explore more on GitHub →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
