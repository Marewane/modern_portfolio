"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative z-10 bg-neutral-950 py-32 overflow-hidden border-y border-[var(--bd-2)]">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[40vh]">
        
        <AnimatedSection className="text-center w-full relative">
          {/* Massive Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <span className="text-[clamp(4rem,20vw,20rem)] font-black text-white leading-none whitespace-nowrap">
              CURRICULUM
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="eyebrow mb-6 block text-white">Full Profile</span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-tight text-white mb-10 text-balance">
              Let's build something <br className="hidden md:block"/> incredible together.
            </h2>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              <span className="relative z-10">Download CV</span>
              <Download size={20} className="relative z-10 group-hover:translate-y-1 transition-transform" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
