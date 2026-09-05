"use client";
import { motion } from "framer-motion";
import { ArrowDown, Shield, Terminal, Zap, Code } from "lucide-react";
import Badge from "@/components/ui/Badge";
import TerminalWindow from "@/components/ui/TerminalWindow";

const terminalLines = [
  { text: "initializing_security_lab...", type: "command" as const, delay: 200 },
  { text: "loading_tools... OK", type: "success" as const, delay: 700 },
  { text: "scanning_projects...", type: "command" as const, delay: 1200 },
  { text: "projects_loaded: 4", type: "output" as const, delay: 1700 },
  { text: "vulnerability_scan: CLEAN", type: "success" as const, delay: 2200 },
  { text: "system_status: SECURE ✓", type: "success" as const, delay: 2700 },
];

const badges = [
  { label: "ETHICAL HACKER", icon: Shield, variant: "cyan" as const },
  { label: "SECURITY TESTER", icon: Zap, variant: "purple" as const },
  { label: "WEB SECURITY", icon: Terminal, variant: "lime" as const },
  { label: "DEVELOPER", icon: Code, variant: "outline" as const },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,245,255,0.05)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(191,0,255,0.04)_0%,transparent_50%)]" />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff33] to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner brackets */}
      <div className="absolute top-24 left-6 w-12 h-12 border-t-2 border-l-2 border-[#00f5ff44]" />
      <div className="absolute top-24 right-6 w-12 h-12 border-t-2 border-r-2 border-[#00f5ff44]" />
      <div className="absolute bottom-12 left-6 w-12 h-12 border-b-2 border-l-2 border-[#00f5ff22]" />
      <div className="absolute bottom-12 right-6 w-12 h-12 border-b-2 border-r-2 border-[#00f5ff22]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div>
            {/* Status label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14] animate-pulse" />
              <span className="font-mono text-xs text-gray-400 tracking-[0.3em] uppercase">
                AUTHORIZED SECURITY TESTING ONLY
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight mb-6"
            >
              <span className="block text-white">I BREAK</span>
              <span className="block text-white">SYSTEMS</span>
              <span className="block">
                <span className="text-[#00f5ff] neon-text">SO THEY</span>
              </span>
              <span className="block">
                <span className="text-[#00f5ff] neon-text">CAN BE</span>
              </span>
              <span className="block text-white">BUILT</span>
              <span className="block text-[#bf00ff]" style={{ textShadow: "0 0 20px #bf00ff88" }}>
                STRONGER.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Finding vulnerabilities. Testing defenses.{" "}
              <span className="text-white">Building safer digital experiences.</span>
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {badges.map(({ label, variant }) => (
                <Badge key={label} variant={variant}>
                  {label}
                </Badge>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="font-mono text-sm tracking-widest uppercase px-6 py-3 bg-[#00f5ff] text-[#050505] font-bold hover:bg-[#00f5ff]/90 transition-all duration-200 clip-angled-sm shadow-[0_0_20px_#00f5ff44]"
              >
                EXPLORE MY WORK
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="font-mono text-sm tracking-widest uppercase px-6 py-3 border border-[#00f5ff33] text-[#00f5ff] hover:border-[#00f5ff] hover:bg-[#00f5ff0a] transition-all duration-200 clip-angled-sm"
              >
                CONTACT ME
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Character frame — comic style */}
            <div className="relative">
              {/* Halftone background */}
              <div className="absolute inset-0 halftone-bg opacity-40 rounded-none" />

              {/* Comic hero visual */}
              <div className="relative border-2 border-[#00f5ff] bg-[#0a0a0a] p-8 shadow-[6px_6px_0_#bf00ff]">
                {/* Panel label */}
                <div className="absolute -top-3 left-4 font-mono text-[10px] text-[#00f5ff] bg-[#050505] px-2 tracking-widest uppercase">
                  OPERATOR PROFILE
                </div>

                {/* Avatar visual */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Radar rings */}
                    {[1, 2, 3].map((ring) => (
                      <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border border-[#00f5ff22]"
                        style={{ margin: `-${ring * 20}px` }}
                        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: ring * 0.4 }}
                      />
                    ))}

                    {/* Central avatar */}
                    <div className="relative w-32 h-32 border-2 border-[#00f5ff] bg-[#050505] flex items-center justify-center shadow-[0_0_30px_#00f5ff33]">
                      <span className="font-display text-5xl font-black text-[#00f5ff]">RH</span>
                      {/* Scan overlay */}
                      <motion.div
                        className="absolute left-0 right-0 h-0.5 bg-[#00f5ff66]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Identity block */}
                <div className="text-center space-y-1 mb-6">
                  <div className="font-display text-xl font-black tracking-wide text-white">
                    RIZKI HABIBI
                  </div>
                  <div className="font-mono text-xs text-[#00f5ff] tracking-widest uppercase">
                    Ethical Hacker & Security Tester
                  </div>
                  <div className="font-mono text-[10px] text-gray-500 tracking-widest">
                    OPERATOR ID: RH-SEC-2024
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: "3+", label: "YRS" },
                    { val: "20+", label: "PROJECTS" },
                    { val: "50+", label: "TESTS" },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center border border-[#00f5ff22] py-2 px-1">
                      <div className="font-display text-lg font-black text-[#00f5ff]">{val}</div>
                      <div className="font-mono text-[9px] text-gray-500 tracking-widest">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal mini */}
            <TerminalWindow
              title="SECURITY_LAB.sh"
              lines={terminalLines}
              autoPlay={true}
            />

            {/* Disclaimer */}
            <div className="border border-[#39ff1422] bg-[#39ff1408] p-3">
              <p className="font-mono text-[10px] text-[#39ff14] tracking-wider leading-relaxed">
                ⚠ ALL SECURITY TESTING IS PERFORMED ONLY ON AUTHORIZED SYSTEMS.
                THIS IS A VISUAL DEMO — NO ACTUAL SCANS ARE EXECUTED.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("#about")}
        >
          <span className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-[#00f5ff]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
