"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const workExperiences = [
  {
    title: "Full Stack JS MERN Developer (Stage)",
    company: "Ark-x Talent Solutions",
    companyUrl: "#",
    period: "Jul 2025 — Nov 2025",
    location: "Casablanca, Morocco",
    description: "Contributed to the development of full-stack web applications. Designed intuitive user interfaces and built robust APIs to ensure seamless communication between the front-end and back-end architectures.",
    tags: ["React", "Node.js", "Express", "MongoDB", "API"],
  },
  {
    title: "Full Stack Laravel Developer (Stage)",
    company: "Société de Construction / Immobilier",
    companyUrl: "#",
    period: "May 2025 — Jun 2025",
    location: "Morocco",
    description: "Developed a comprehensive full-stack showcase website designed to highlight the company's construction projects and professional achievements to prospective clients.",
    tags: ["Laravel", "PHP", "Full Stack", "Web Design"],
  },
];

const educationExperiences = [
  {
    title: "Licence d'Excellence in Artificial Intelligence",
    company: "Faculté des Sciences Ben M'Sick",
    companyUrl: "#",
    period: "2025 — 2026",
    location: "Casablanca, Morocco",
    description: "Advanced degree program focused on core AI concepts including machine learning, computer vision, deep learning, and data science methodologies.",
    tags: ["Machine Learning", "Deep Learning", "AI", "Computer Vision"],
  },
  {
    title: "Full Stack Web Development (Bac+2)",
    company: "OFPPT - CFPMS",
    companyUrl: "#",
    period: "2023 — 2025",
    location: "Tit Mellil, Casablanca",
    description: "Intensive two-year training covering the entire software development lifecycle, focusing on both front-end and back-end technologies, databases, and responsive design.",
    tags: ["Web Development", "Frontend", "Backend", "Databases"],
  },
  {
    title: "Baccalauréat in Physical Sciences",
    company: "Lycée Ibn Khaldoun",
    companyUrl: "#",
    period: "2022",
    location: "Casablanca, Morocco",
    description: "High school diploma with a strong emphasis on physics, mathematics, and scientific problem-solving skills.",
    tags: ["Physical Sciences", "Mathematics"],
  }
];

// Reusable timeline component
function Timeline({ items, type }: { items: any[], type: "work" | "education" }) {
  return (
    <div className="relative">
      {/* Vertical central line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--bd-2)] -translate-x-1/2" />
      
      <div className="space-y-16 md:space-y-24">
        {items.map((exp, i) => {
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
                        {type === "work" ? "Experience" : "Education"}
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
                      {exp.tags.map((tag: string) => (
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
  );
}

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
        
        {/* Experience Section */}
        <AnimatedSection className="text-center mb-16">
          <span className="eyebrow mb-4 block">Career</span>
          <h2 className="display-grad text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-none tracking-tight">
            Professional Experience
          </h2>
        </AnimatedSection>
        
        <Timeline items={workExperiences} type="work" />

        {/* Spacer between sections */}
        <div id="education" className="h-32 md:h-48 pt-16"></div>

        {/* Education Section */}
        <AnimatedSection className="text-center mb-16">
          <span className="eyebrow mb-4 block">Academic</span>
          <h2 className="display-grad text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-none tracking-tight">
            Education
          </h2>
        </AnimatedSection>
        
        <Timeline items={educationExperiences} type="education" />

      </div>
    </section>
  );
}
