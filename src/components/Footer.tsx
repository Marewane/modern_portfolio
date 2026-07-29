"use client";

import { Code, Globe, X, Heart, ArrowUp } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Code, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: X, href: "https://twitter.com", label: "Twitter" },
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
                  <Icon size={16} />
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
