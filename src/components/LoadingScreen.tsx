"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "INITIALIZING RH_SECURITY_LAB...", delay: 0 },
  { text: "LOADING SYSTEM MODULES...", delay: 400 },
  { text: "ESTABLISHING SECURE CONNECTION...", delay: 800 },
  { text: "SCANNING PORTFOLIO DATA...", delay: 1200 },
  { text: "VERIFYING AUTHORIZATION...", delay: 1600 },
  { text: "ACCESS GRANTED — WELCOME", delay: 2000 },
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });

    // Progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 50);

    // Complete after ~2.8s
    const t = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => { clearInterval(interval); clearTimeout(t); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-[#00f5ff33]"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner decorations */}
          {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 border-[#00f5ff44]`}
              style={{
                borderTopWidth: i < 2 ? 2 : 0,
                borderBottomWidth: i >= 2 ? 2 : 0,
                borderLeftWidth: i % 2 === 0 ? 2 : 0,
                borderRightWidth: i % 2 !== 0 ? 2 : 0,
              }}
            />
          ))}

          <div className="relative z-10 w-full max-w-lg px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-10"
            >
              <div className="font-display text-4xl font-black tracking-widest mb-1">
                <span className="text-[#00f5ff]">RH</span>
                <span className="text-white/30 mx-2">//</span>
                <span className="text-white">SECURITY</span>
              </div>
              <div className="font-mono text-xs text-gray-500 tracking-[0.3em] uppercase">
                Rizki Habibi — Ethical Hacker & Security Tester
              </div>
            </motion.div>

            {/* Terminal boot lines */}
            <div className="font-mono text-xs space-y-1 mb-8 h-36 overflow-hidden">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={i === visibleLines - 1 && i === bootLines.length - 1
                    ? "text-[#39ff14]"
                    : i === visibleLines - 1
                    ? "text-[#00f5ff]"
                    : "text-gray-500"
                  }
                >
                  <span className="text-[#bf00ff] mr-2">{">"}</span>
                  {line.text}
                  {i === visibleLines - 1 && i < bootLines.length - 1 && (
                    <span className="typing-cursor" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#0a0a0a] border border-[#00f5ff22] h-1.5 mb-3">
              <motion.div
                className="h-full bg-[#00f5ff] shadow-[0_0_10px_#00f5ff]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-gray-600">
              <span>LOADING PORTFOLIO</span>
              <span className="text-[#00f5ff]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
