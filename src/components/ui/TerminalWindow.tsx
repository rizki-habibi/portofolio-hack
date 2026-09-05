"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalLine {
  text: string;
  type?: "command" | "output" | "success" | "warning" | "error";
  delay?: number;
}

interface TerminalWindowProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
  autoPlay?: boolean;
}

export default function TerminalWindow({
  title = "RH_SECURITY_LAB",
  lines,
  className,
  autoPlay = true,
}: TerminalWindowProps) {
  const [visibleCount, setVisibleCount] = useState(autoPlay ? 0 : lines.length);

  useEffect(() => {
    if (!autoPlay) return;
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, idx) => {
      const delay = line.delay ?? idx * 600;
      const t = setTimeout(() => {
        setVisibleCount(idx + 1);
        i++;
      }, delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [autoPlay, lines]);

  const typeColor = {
    command: "text-[#00f5ff]",
    output: "text-gray-300",
    success: "text-[#39ff14]",
    warning: "text-yellow-400",
    error: "text-[#ff0033]",
  };

  return (
    <div
      className={cn(
        "bg-[#050505] border border-[#00f5ff33] rounded-none font-mono text-sm overflow-hidden",
        "shadow-[0_0_30px_#00f5ff11]",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border-b border-[#00f5ff22]">
        <span className="w-3 h-3 rounded-full bg-[#ff0033]" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-[#39ff14]" />
        <span className="ml-4 text-[#00f5ff] text-xs tracking-widest uppercase">{title}</span>
      </div>
      {/* Content */}
      <div className="p-4 space-y-1 min-h-[120px]">
        {lines.slice(0, visibleCount).map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "leading-relaxed",
              typeColor[line.type ?? "output"]
            )}
          >
            {line.type === "command" && (
              <span className="text-[#bf00ff] mr-2">{">"}</span>
            )}
            {line.text}
          </motion.div>
        ))}
        {visibleCount < lines.length && (
          <span className="text-[#00f5ff] typing-cursor" />
        )}
        {visibleCount >= lines.length && (
          <span className="text-[#00f5ff] typing-cursor">&nbsp;</span>
        )}
      </div>
    </div>
  );
}
