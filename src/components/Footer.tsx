"use client";

import { Heart, ArrowUp } from "lucide-react";
import Logo from "./Logo";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: GitHubIcon, href: "https://github.com/Marewane", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/marwane-ahmed", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/6 pt-14 pb-8">
      {/* Top glow line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9">
                <Logo />
              </div>
              <span className="font-semibold text-white tracking-tight text-lg">
                Marwane<span className="text-indigo-400 font-bold">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer &amp; AI engineer crafting intelligent,
              beautiful digital products. Let&apos;s build something great.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-400 transition-all duration-200 overflow-hidden" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Open to Work
            </p>
            <div className="glass border border-indigo-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-emerald-400 text-xs font-semibold">Available</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Looking for exciting projects and collaborations starting{" "}
                <span className="text-white font-medium">immediately</span>.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Marwane Ahmed. Built with{" "}
            <Heart size={12} className="text-red-400 fill-red-400" /> using Next.js &amp;
            Framer Motion.
          </p>
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg glass border border-white/8 flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
