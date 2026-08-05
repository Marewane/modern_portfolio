"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-4">
      
      <motion.a
        href="https://github.com/Marewane"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full surf-panel flex items-center justify-center text-neutral-400 hover:text-white border border-[var(--bd-2)] shadow-2xl backdrop-blur-xl"
        title="GitHub"
        aria-label="GitHub"
      >
        <Github size={20} className="md:w-6 md:h-6" />
      </motion.a>

      <motion.a
        href="https://linkedin.com/in/marwane-ahmed"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full surf-panel flex items-center justify-center text-neutral-400 hover:text-white border border-[var(--bd-2)] shadow-2xl backdrop-blur-xl"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} className="md:w-6 md:h-6" />
      </motion.a>

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow"
        title="Resume"
        aria-label="Resume"
      >
        <FileText size={20} className="md:w-6 md:h-6" />
      </motion.a>

    </div>
  );
}
