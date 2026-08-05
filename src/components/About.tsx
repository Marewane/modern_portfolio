"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Built", value: "25+" },
  { label: "AI Specialisation", value: "1yr" },
  { label: "Location", value: "Casablanca" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Intro Text */}
        <AnimatedSection className="flex flex-col items-center justify-center min-h-[50vh] text-center mb-32">
          <span className="eyebrow mb-8">Chapter 01</span>
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-white max-w-4xl [text-wrap:balance]">
            From Full-Stack Engineering to Intelligent Systems. I build software that feels effortless and alive.
          </h2>
        </AnimatedSection>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          <AnimatedSection direction="right">
            <div className="aspect-[4/5] w-full max-w-md mx-auto relative rounded-3xl overflow-hidden border border-[var(--bd-2)] bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Minimalist Avatar Placeholder - can be replaced with an actual image */}
               <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                  <div className="text-9xl font-black text-neutral-800 select-none">MA</div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/80" />
               <div className="absolute bottom-8 left-8">
                 <p className="text-white font-medium text-lg">Marwane Laamiri</p>
                 <p className="text-neutral-400 text-sm">Full-Stack · AI Engineer</p>
               </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="space-y-12 pt-8">
            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                My journey began in full-stack development, architecting web applications from the ground up — from resilient REST APIs and complex databases to responsive, interactive React frontends. 
              </p>
              <p>
                That robust engineering foundation naturally paved my way into Artificial Intelligence. Through my Licence d'Excellence in AI, I've dived deep into machine learning models, computer vision, and NLP. 
              </p>
              <p>
                Today, I bridge both disciplines. I design scalable architectures and integrate intelligent AI capabilities, ensuring the final product is not only powerful but also a joy to use. Code is my craft; detail is my obsession.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="surf-card rounded-2xl p-6 text-center overflow-hidden">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 truncate">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest truncate">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
