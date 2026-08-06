"use client";

import { ArrowUp } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-neutral-950 border-t border-[var(--bd-2)] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 text-white"><Logo /></div>
              <span className="font-bold text-white text-xl tracking-tight">Marwane.</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Full-Stack Developer & AI Engineer. Crafting digital experiences with precision, performance, and purpose.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-white font-mono text-xs uppercase tracking-widest mb-6">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                      className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-mono text-xs uppercase tracking-widest mb-6">Socials</p>
              <ul className="space-y-3">
                <li><a href="https://github.com/Marewane" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/marwane-laamiri/" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[var(--bd-2)] gap-4">
          <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Marwane Laamiri.
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-neutral-500 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
