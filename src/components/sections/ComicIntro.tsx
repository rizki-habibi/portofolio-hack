"use client";
import { motion } from "framer-motion";
import SpeechBubble from "@/components/ui/SpeechBubble";

const panels = [
  {
    number: "01",
    title: "THE DEVELOPER",
    icon: "💻",
    speech: "Building applications isn't enough. I want to understand how they can fail.",
    label: "ORIGIN STORY",
    color: "cyan" as const,
    border: "border-[#00f5ff]",
    shadow: "shadow-[6px_6px_0_#bf00ff]",
    labelColor: "text-[#00f5ff]",
  },
  {
    number: "02",
    title: "THE TESTER",
    icon: "🔍",
    speech: "Every system has assumptions. My job is to challenge them — with authorization.",
    label: "POWER ACQUIRED",
    color: "purple" as const,
    border: "border-[#bf00ff]",
    shadow: "shadow-[6px_6px_0_#00f5ff]",
    labelColor: "text-[#bf00ff]",
  },
  {
    number: "03",
    title: "THE BUILDER",
    icon: "🛡️",
    speech: "Find the weakness. Understand the problem. Build the solution.",
    label: "MISSION CLEAR",
    color: "lime" as const,
    border: "border-[#39ff14]",
    shadow: "shadow-[6px_6px_0_#00f5ff]",
    labelColor: "text-[#39ff14]",
  },
];

export default function ComicIntro() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Halftone bg */}
      <div className="absolute inset-0 halftone-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block border-2 border-[#00f5ff] px-6 py-2 mb-6 shadow-[4px_4px_0_#bf00ff]">
            <span className="font-mono text-xs text-[#00f5ff] tracking-[0.4em] uppercase">
              CHAPTER 01
            </span>
          </div>
          <h2 className="font-comic text-5xl md:text-7xl text-white tracking-wide">
            WHO IS{" "}
            <span className="text-[#00f5ff]" style={{ textShadow: "0 0 20px #00f5ff66" }}>
              RIZKI?
            </span>
          </h2>
          {/* Comic-style divider */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#00f5ff44]" />
            <span className="font-mono text-xs text-gray-600 tracking-widest">ORIGIN STORY</span>
            <div className="h-px w-16 bg-[#00f5ff44]" />
          </div>
        </motion.div>

        {/* Comic panels grid */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-1">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="relative"
            >
              {/* Panel */}
              <div
                className={`relative bg-[#0a0a0a] border-2 ${panel.border} ${panel.shadow} p-0 overflow-hidden h-full`}
              >
                {/* Panel number overlay */}
                <div className={`absolute top-3 left-3 font-comic text-6xl font-bold opacity-10 ${panel.labelColor} leading-none pointer-events-none`}>
                  {panel.number}
                </div>

                {/* Top label */}
                <div className={`border-b-2 ${panel.border} px-4 py-2 flex items-center justify-between`}>
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${panel.labelColor}`}>
                    {panel.label}
                  </span>
                  <span className={`font-mono text-[10px] tracking-widest text-gray-600`}>
                    #{panel.number}
                  </span>
                </div>

                {/* Main content */}
                <div className="p-6 flex flex-col items-center text-center gap-5">
                  {/* Icon */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-20 h-20 border-2 ${panel.border} flex items-center justify-center bg-[#050505]`}
                  >
                    <span className="text-4xl">{panel.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-comic text-3xl tracking-wide ${panel.labelColor}`}>
                    {panel.title}
                  </h3>

                  {/* Speech bubble */}
                  <div className="w-full">
                    <SpeechBubble variant="bottom" color={panel.color}>
                      <p className="font-medium text-sm text-white leading-relaxed">
                        &ldquo;{panel.speech}&rdquo;
                      </p>
                    </SpeechBubble>
                  </div>
                </div>

                {/* Scan line effect */}
                <motion.div
                  className={`absolute left-0 right-0 h-px opacity-20`}
                  style={{ background: panel.color === "cyan" ? "#00f5ff" : panel.color === "purple" ? "#bf00ff" : "#39ff14" }}
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block border border-[#00f5ff22] px-6 py-3">
            <span className="font-mono text-xs text-gray-500 tracking-[0.3em] uppercase">
              BUILD → BREAK → TEST → LEARN → SECURE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
