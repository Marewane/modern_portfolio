"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const experiences = [
  {
    type: "work",
    title: "Full Stack JS MERN Developer",
    company: "Ark-x Talent Solutions",
    companyUrl: "https://www.ark-x.tech",
    period: "2024 — 2025",
    location: "Casablanca, Morocco",
    description: "Designed and developed a modern, interactive educational web platform end-to-end. Built a robust Full Stack architecture covering front-end, back-end, databases and the full software lifecycle.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    type: "education",
    title: "Licence d'Excellence — AI",
    company: "Faculté des Sciences Ben M'sick",
    companyUrl: "#",
    period: "2023 — 2026",
    location: "Casablanca, Morocco",
    description: "Specialisation in artificial intelligence algorithms, machine learning and data science. Covers deep learning (CNNs, Transformers), NLP, computer vision and AI application development.",
    tags: ["Machine Learning", "Deep Learning", "PyTorch", "NLP", "Python"],
  },
  {
    type: "work",
    title: "Intelligent Invoice Extraction",
    company: "Final Year Project",
    companyUrl: "#",
    period: "2025 — 2026",
    location: "Casablanca, Morocco",
    description: "End-to-end system based on the Donut vision-language model to extract structured fields from invoices. Fine-tuned on the CORD v2 dataset reaching a micro F1 score of 80.23%.",
    tags: ["Donut Model", "FastAPI", "React", "Microservices"],
  },
  {
    type: "education",
    title: "Développement Web Full Stack",
    company: "OFPPT – CFPMS",
    companyUrl: "#",
    period: "2021 — 2023",
    location: "Tit Mellil, Casablanca",
    description: "Intensive formation covering front-end and back-end technologies, databases and the full software development cycle. Solid foundation in PHP, JavaScript, SQL, responsive design.",
    tags: ["PHP", "JavaScript", "MySQL", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10 bg-neutral-950">
      
      {/* Background grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, var(--bd-2) 1px, transparent 1px), linear-gradient(to bottom, var(--bd-2) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(100% 100% at 50% 0%, #000 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(100% 100% at 50% 0%, #000 20%, transparent 80%)"
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <span className="eyebrow mb-4 block">The Path</span>
          <h2 className="display-grad text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-none tracking-tight">
            Experience & Education
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical central line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--bd-2)] -translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isEven = i % 2 === 0;

              return (
                <AnimatedSection 
                  key={i} 
                  direction={isEven ? "right" : "left"}
                  delay={0.1}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}>
                    
                    {/* Ghost Number / Desktop spacer */}
                    <div className={`w-full md:w-1/2 flex justify-start ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <div className="relative">
                        <span className="text-[6rem] md:text-[8rem] font-black text-neutral-900 leading-none select-none">
                          {num}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="surf-panel h-12 w-12 rounded-full flex items-center justify-center text-white font-mono text-sm border-[var(--bd-2)] shadow-xl">
                            {num}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <div className="surf-card p-8 md:p-10 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className="chip px-3 py-1 rounded-full text-xs font-mono text-white uppercase tracking-wider">
                            {exp.type === "work" ? "Experience" : "Education"}
                          </span>
                          <span className="text-sm font-mono text-neutral-500 tracking-widest">{exp.period}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight break-words">
                          {exp.title}
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-6">
                          <a href={exp.companyUrl} className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-sm break-words">
                            {exp.company} <ExternalLink size={14} className="shrink-0"/>
                          </a>
                          <span className="hidden sm:inline text-[var(--bd-2)]">•</span>
                          <span className="text-neutral-500 text-sm break-words">{exp.location}</span>
                        </div>

                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map(tag => (
                            <span key={tag} className="chip px-3 py-1.5 rounded-full text-xs font-mono text-neutral-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
