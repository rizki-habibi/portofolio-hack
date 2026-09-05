import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "neon-cyan": "#00f5ff",
        "electric-purple": "#bf00ff",
        "acid-lime": "#39ff14",
        "danger-red": "#ff0033",
        "panel-bg": "#0a0a0a",
        "card-bg": "#0d0d0d",
        "border-neon": "#00f5ff33",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
        display: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        comic: ["var(--font-bangers)", "cursive"],
      },
      animation: {
        "glitch": "glitch 3s infinite",
        "scan": "scan 2s linear infinite",
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
        "flicker": "flicker 0.15s infinite",
        "float": "float 6s ease-in-out infinite",
        "radar": "radar 3s linear infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-2px, -1px)" },
          "20%": { transform: "translate(2px, 1px)" },
          "30%": { transform: "translate(-1px, 2px)" },
          "40%": { transform: "translate(1px, -2px)" },
          "50%": { transform: "translate(-2px, 1px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseNeon: {
          "0%, 100%": { boxShadow: "0 0 5px #00f5ff, 0 0 20px #00f5ff44" },
          "50%": { boxShadow: "0 0 20px #00f5ff, 0 0 60px #00f5ff66, 0 0 100px #00f5ff22" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)",
        "halftone": "radial-gradient(circle, rgba(0,245,255,0.15) 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.07) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
        "halftone": "8px 8px",
      },
    },
  },
  plugins: [],
};

export default config;
