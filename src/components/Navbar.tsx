"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "py-3 glass border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "py-5"
          }`}
        style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 transition-transform duration-300 group-hover:scale-105">
              <Logo />
            </div>
            <span className="font-semibold text-white tracking-tight text-lg">
              Marwane<span className="text-indigo-400 font-bold">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/8"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              id="nav-hire-btn"
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 glass border-b border-white/8 px-6 py-4 md:hidden"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/6 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full px-4 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
