"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61dafb" strokeWidth="1"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61dafb" strokeWidth="1"/>
    <circle r="2" fill="#61dafb"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5">
    <rect width="100" height="100" fill="#3178c6" rx="10"/>
    <text x="85" y="85" fill="white" fontSize="40" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">TS</text>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#38bdf8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.08 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.921 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.08 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.921 12 6.001 12z"/>
  </svg>
);

const ReduxLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#764abc" strokeWidth="2"/>
    <path d="M12 6L16.2426 10.2426L12 14.4853L7.75736 10.2426L12 6Z" fill="#764abc"/>
    <path d="M12 9.5L14.5 12L12 14.5L9.5 12L12 9.5Z" fill="#a855f7"/>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933">
    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.7 14.2l-6.7 3.9-6.7-3.9V8.8l6.7-3.9 6.7 3.9v7.4z"/>
    <path d="M12 7.5L7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5z"/>
  </svg>
);

const DatabaseLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  </svg>
);

const ApiLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#e10098" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="19" cy="5" r="3"/>
    <circle cx="5" cy="19" r="3"/>
    <path d="M5 16l4.5-4.5M14.5 9.5L19 5M16.5 16.5L19 19"/>
    <circle cx="19" cy="19" r="3"/>
    <path d="M7.5 7.5L12 12"/>
    <circle cx="5" cy="5" r="3"/>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0db7ed">
    <path d="M13.983 8.878h-2.316V6.562h2.316v2.316zm3.176 0h-2.316V6.562h2.316v2.316zm-3.176-3.176h-2.316V3.385h2.316v2.317zm0 6.353h-2.316v2.316h2.316v-2.316zm3.176 0h-2.316v2.316h2.316v-2.316zm3.177-3.177h-2.316V6.562h2.316v2.316zm-9.53 3.177H8.49V8.878h2.316v2.316zm0-3.177H8.49V6.562h2.316v2.316zm-3.177 3.177H5.313V8.878h2.316v2.316zM24 13.014c-.6.2-1.2.3-1.8.3H1.8c-.6 0-1.2-.1-1.8-.3v1.5c0 2.2 4.4 4 9.9 4 5.3 0 9.7-1.7 9.9-3.8.3-.1.6-.2.9-.4 1.1-.7 2.1-1.9 2.5-3.3l.8-1.5z"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M11.92 2a5 5 0 0 0-4.8 3.42l-.12.44h4.92a1 1 0 0 1 1 1v4.92h2.64A3.48 3.48 0 0 0 19 8.3V5.5A3.5 3.5 0 0 0 15.5 2h-3.58z" fill="#3776AB"/>
    <path d="M12.08 22a5 5 0 0 0 4.8-3.42l.12-.44H12.1a1 1 0 0 1-1-1v-4.92H8.48A3.48 3.48 0 0 0 5 15.7v2.8A3.5 3.5 0 0 0 8.5 22h3.58z" fill="#FFD343"/>
    <circle cx="9.5" cy="5.5" r="0.75" fill="white"/>
    <circle cx="14.5" cy="18.5" r="0.75" fill="black"/>
  </svg>
);

const MlLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#f8981d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const AiLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="4" fill="#10b981" fillOpacity="0.2"/>
  </svg>
);

const BrainLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.12A2.5 2.5 0 0 0 14.5 2z"/>
  </svg>
);

const PhpLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#777bb4">
    <path d="M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08zm-3.25-8.7l-.9 4.57h1.35l.27-1.37h1.2c1.26 0 1.99-.63 2.13-1.73.13-.97-.45-1.47-1.58-1.47H8.75zm1.13 1.01h.82c.52 0 .75.18.68.63-.07.44-.38.62-.91.62h-.83l.24-1.25zm4.02-1.01l-.9 4.57h1.35l.27-1.37h1.2c1.26 0 1.99-.63 2.13-1.73.13-.97-.45-1.47-1.58-1.47h-2.47zm1.13 1.01h.82c.52 0 .75.18.68.63-.07.44-.38.62-.91.62h-.83l.24-1.25zm2.66 2.56h1.36l.21-1.08h.76c.44 0 .64.16.57.53l-.17.55h1.4l.19-.63c.12-.55-.04-.8-.49-.95.44-.19.72-.52.81-1 .14-.81-.36-1.24-1.44-1.24h-2.35l-.85 3.82z"/>
  </svg>
);

const LaravelLogo = () => (
  <svg viewBox="0 0 50 52" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.05-.04.076-.06.029-.022.055-.047.088-.065h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.018.059.043.088.065l.072.06c.028.028.048.06.071.093.019.024.04.045.055.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.57c0-.073.01-.142.028-.21.006-.023.02-.044.028-.068.016-.042.029-.085.051-.124.016-.026.038-.047.056-.071.023-.032.043-.065.07-.093.024-.023.051-.04.077-.06.028-.022.055-.047.088-.065l9.61-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.018.06.043.09.065.025.02.052.037.076.06.027.028.048.06.07.093.02.024.04.045.056.071.023.039.036.082.051.124.01.023.022.044.029.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.019l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.955l11.743-6.701 5.87-3.351-7.993-4.606-9.211 5.303-8.395 4.833 7.986 4.522z" fill="#FF2D20"/>
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.32-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.165zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08h-1.2v2.827c0 .708-.302 1.062-.906 1.062-.301 0-.53-.094-.686-.28-.157-.188-.235-.448-.235-.78v-2.83H5.56v2.9c0 .557.162.985.487 1.284.324.3.77.45 1.34.45.252 0 .5-.047.737-.14.238-.093.44-.23.607-.41h.01v.466h1.046V14.615zm5.88 0h-1.135l-.952 2.85h-.012l-.982-2.85h-1.18l1.527 4.022-.68 1.426h1.134l2.28-5.448zm4.093 2.19c0-.447-.133-.8-.4-1.06-.267-.26-.634-.39-1.1-.39-.416 0-.76.1-1.03.3-.27.2-.42.46-.45.78h.956c.02-.155.08-.27.18-.345.102-.075.234-.112.397-.112.166 0 .3.052.4.154.1.1.15.253.15.457v.167l-.714.04c-.437.026-.774.128-1.01.305-.236.178-.354.443-.354.795 0 .316.105.572.316.766.21.194.487.29.83.29.337 0 .618-.09.843-.27h.012c0 .057.01.11.02.16.01.053.02.1.035.15h.993c-.033-.116-.05-.275-.05-.476V16.8zm-.96.97c0 .17-.06.302-.177.397-.117.096-.275.144-.474.144-.157 0-.28-.037-.367-.11-.087-.072-.13-.177-.13-.313 0-.152.048-.266.143-.342.096-.075.258-.117.487-.126l.52-.033v.384zm5.07-3.16c.24 0 .44-.017.607-.05v-.966c-.145.044-.33.066-.554.066-.313 0-.546-.076-.7-.228-.153-.152-.23-.38-.23-.682v-2.097h1.498v-.85h-1.5v-1.338h-.99v1.338h-1.043v.85h1.044v2.19c0 .526.14.93.42 1.21.282.28.67.42 1.167.42l.28-.062zM0 19.667h24V21H0z" fill="#4479A1"/>
  </svg>
);

const BootstrapLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7952B3">
    <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.325-1.663zM24 11.39v1.218C24 18.425 19.19 24 11.39 24H0V0h12.61C19.19 0 24 5.575 24 11.39zm-7.947 1.866c0-1.005-.635-1.866-1.822-2.207v-.044c.996-.385 1.54-1.099 1.54-2.15 0-1.647-1.38-2.654-3.716-2.654H8.005v10.87h4.39c2.498 0 3.658-1.1 3.658-2.815z"/>
  </svg>
);

const MuiLogo = () => (
  <svg viewBox="0 0 36 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.343 21.976a1 1 0 0 0 .502-.864l.018-5.787a1 1 0 0 1 .502-.864l3.137-1.802a1 1 0 0 1 1.498.867v10.521a1 1 0 0 1-.502.867l-11.839 6.8a1 1 0 0 1-.994.001l-9.291-5.314a1 1 0 0 1-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 0 1-.008-.008v-5.073a1 1 0 0 0-1.498-.867L6.9 19.002a1 1 0 0 0-.502.867v16.082a1 1 0 0 1-1.498.867L.937 34.214A1 1 0 0 1 .433 33.348L.415 5.047a1 1 0 0 1 .49-.86L12.757.125a1 1 0 0 1 1.014.008l11.578 6.761a1 1 0 0 0 1.004.006l8.318-4.761a1 1 0 0 1 1.498.867v5.306a1 1 0 0 1-.502.867l-8.318 4.762a1 1 0 0 0-.502.866v5.456a1 1 0 0 0 .502.866l2.994 1.713z" fill="#007FFF"/>
  </svg>
);

const skillCategories = [
  {
    category: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "React / Next.js", Logo: ReactLogo },
      { name: "TypeScript", Logo: TypeScriptLogo },
      { name: "CSS / Tailwind CSS", Logo: TailwindLogo },
      { name: "Bootstrap", Logo: BootstrapLogo },
      { name: "MUI (Material UI)", Logo: MuiLogo },
      { name: "State Management (Zustand, Redux)", Logo: ReduxLogo },
    ],
  },
  {
    category: "Backend & DevOps",
    color: "#06b6d4",
    skills: [
      { name: "Node.js / Express", Logo: NodeLogo },
      { name: "PHP / Laravel", Logo: LaravelLogo },
      { name: "MySQL / PostgreSQL / MongoDB", Logo: MySQLLogo },
      { name: "REST APIs & GraphQL", Logo: ApiLogo },
      { name: "Docker & Deployment", Logo: DockerLogo },
    ],
  },
  {
    category: "AI & Machine Learning",
    color: "#10b981",
    skills: [
      { name: "Python / PyTorch", Logo: PythonLogo },
      { name: "Scikit-learn / Pandas", Logo: MlLogo },
      { name: "LLMs & Prompt Engineering", Logo: AiLogo },
      { name: "LangChain / Hugging Face", Logo: BrainLogo },
    ],
  },
];

// ── SVG Logos ──────────────────────────────────────────────
const VsCodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7">
    <mask id="vsc-mask">
      <path
        fill="white"
        d="M70.9 3.8L50 51.2 32.8 36.4 28 39.2l16.4 10.8L28 60.8l4.8 2.8L50 48.8l20.9 47.4 7.1-3.9V7.7z"
      />
    </mask>
    <path
      fill="#0065A9"
      d="M70.9 3.8L50 51.2 32.8 36.4 28 39.2l16.4 10.8L28 60.8l4.8 2.8L50 48.8l20.9 47.4 7.1-3.9V7.7z"
    />
    <path
      fill="#007ACC"
      d="M70.9 3.8l7.1 3.9v88.6l-7.1 3.9L50 51.2z"
    />
    <path
      fill="#1F9CF0"
      d="M28 39.2l-6 3.3v14.9l6 3.4 22-13.6z"
    />
    <path
      fill="white"
      fillOpacity="0.25"
      mask="url(#vsc-mask)"
      d="M70.9 3.8L50 51.2 32.8 36.4 28 39.2l16.4 10.8L28 60.8l4.8 2.8L50 48.8l20.9 47.4 7.1-3.9V7.7z"
    />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" className="w-6 h-6">
    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE" />
    <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19z" fill="#0ACF83" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19z" fill="#FF7262" />
  </svg>
);

const JupyterLogo = () => (
  <svg viewBox="0 0 207 232" className="w-7 h-7">
    <path
      d="M103.5 0C87.8 0 74.9 4.7 68 12.6c4.1-1.1 9.2-1.8 15.5-1.8 28.9 0 52.3 13.8 52.3 30.8S112.4 71.4 83.5 71.4c-6.3 0-11.4-.6-15.5-1.7C75 77.6 87.9 82.2 103.5 82.2c26.5 0 48-18.4 48-41.1S130 0 103.5 0z"
      fill="#F37626"
    />
    <path
      d="M103.5 149.8c-26.5 0-48 18.4-48 41.1s21.5 41.1 48 41.1c15.7 0 28.6-4.7 35.5-12.6-4.1 1.1-9.2 1.8-15.5 1.8-28.9 0-52.3-13.8-52.3-30.8s23.4-30.8 52.3-30.8c6.3 0 11.4.6 15.5 1.7-6.9-7.9-19.8-12.5-35.5-12.5z"
      fill="#F37626"
    />
    <circle cx="22" cy="115" r="19" fill="#9E9E9E" />
    <circle cx="185" cy="70" r="14" fill="#616161" />
    <circle cx="185" cy="160" r="9" fill="#757575" />
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <circle cx="16" cy="16" r="16" fill="#FF6C37" />
    <path
      d="M22.1 9.9a8.7 8.7 0 0 0-12.3 12.3l1.1-1.1a7.2 7.2 0 0 1 0-10.1l.1-.1 3.6 3.6-1.3 1.3 4.1 4.1 1.3-1.3 3.5 3.5.1-.1a7.2 7.2 0 0 0 0-10.1l-.2-.1z"
      fill="white"
    />
    <path
      d="M14.3 15l2.8-2.8 2.8 2.8-2.8 2.8z"
      fill="#FF6C37"
    />
    <path
      d="M17.1 12.2l3.6-3.6c.1.1.2.1.3.2l-3.6 3.6-.3-.2zM19.9 15l3.5-3.5.2.3-3.5 3.5-.2-.3zM14.3 15l-3.5 3.5-.2-.3 3.5-3.5.2.3zM17.1 17.8l-3.6 3.6-.3-.2 3.6-3.6.3.2z"
      fill="white"
      opacity="0.8"
    />
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 76 65" className="w-7 h-7">
    <path d="M37.5274 0L75.0548 65H0L37.5274 0z" fill="white" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 98 96" className="w-7 h-7">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill="white"
    />
  </svg>
);

const toolCards = [
  { name: "VS Code",  Logo: VsCodeLogo,  desc: "Primary IDE",     bg: "#1565C0" },
  { name: "Figma",   Logo: FigmaLogo,   desc: "UI Design",       bg: "#2c1a3e" },
  { name: "Jupyter", Logo: JupyterLogo, desc: "ML Notebooks",    bg: "#1a1208" },
  { name: "Postman", Logo: PostmanLogo, desc: "API Testing",     bg: "#4a1a08" },
  { name: "Vercel",  Logo: VercelLogo,  desc: "Deployment",      bg: "#111111" },
  { name: "GitHub",  Logo: GitHubLogo,  desc: "Version Control", bg: "#161b22" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A unique blend of full-stack engineering and applied AI — covering
            the complete spectrum from UI to intelligent model integration.
          </p>
        </AnimatedSection>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <AnimatedSection
              key={cat.category}
              delay={ci * 0.1}
              className="glass border border-white/8 rounded-2xl p-6 card-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-semibold text-white text-lg">{cat.category}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, si) => {
                  const { Logo } = skill;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                      whileHover={{ x: 4, borderColor: "rgba(255,255,255,0.15)" }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-white/6 transition-all duration-200"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-inner"
                        style={{
                          background: `${cat.color}15`,
                          border: `1px solid ${cat.color}30`
                        }}
                      >
                        <Logo />
                      </div>
                      <span className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tool cards */}
        <AnimatedSection>
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-6">
            Tools &amp; Workflow
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {toolCards.map((tool, i) => {
              const { Logo } = tool;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.06, borderColor: "rgba(99,102,241,0.45)" }}
                  className="glass border border-white/8 rounded-xl p-4 text-center cursor-default flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: tool.bg }}
                  >
                    <Logo />
                  </div>
                  <p className="text-white text-sm font-medium leading-tight">{tool.name}</p>
                  <p className="text-slate-500 text-xs">{tool.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
