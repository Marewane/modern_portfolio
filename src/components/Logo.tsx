"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Sleek metallic linear gradient matching tailwind colors (indigo-500, purple-500, cyan-400) */}
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>

        {/* Glow effect filter for the logo nodes */}
        <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hexagonal Outer Frame (Tech, Structure) */}
      <motion.polygon
        points="50,6 88,28 88,72 50,94 12,72 12,28"
        stroke="url(#logo-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {/* Dynamic Monogram - Combined 'M' & 'A' Vector Line Art */}
      
      {/* Left upward/downward leg (M structure) */}
      <motion.path
        d="M 26 70 L 26 32 L 50 56"
        stroke="url(#logo-grad)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      {/* Right downward/upward leg (M structure) */}
      <motion.path
        d="M 50 56 L 74 32 L 74 70"
        stroke="url(#logo-grad)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      />

      {/* Crossbar forming the letter 'A' inside the 'M' */}
      <motion.path
        d="M 38 51 L 62 51"
        stroke="url(#logo-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      />

      {/* Futuristic AI Node Points (Glow-highlighted) */}
      
      {/* Left Node */}
      <motion.circle
        cx="26"
        cy="32"
        r="4.5"
        fill="#22d3ee"
        filter="url(#node-glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
      />

      {/* Center Node */}
      <motion.circle
        cx="50"
        cy="56"
        r="5.5"
        fill="#a855f7"
        filter="url(#node-glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
      />

      {/* Right Node */}
      <motion.circle
        cx="74"
        cy="32"
        r="4.5"
        fill="#6366f1"
        filter="url(#node-glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 120 }}
      />
    </svg>
  );
}
