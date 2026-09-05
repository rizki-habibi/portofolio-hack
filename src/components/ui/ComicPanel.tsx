"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "cyan" | "purple" | "lime";
  number?: string;
  delay?: number;
  hover?: boolean;
}

export default function ComicPanel({
  children,
  className,
  variant = "cyan",
  number,
  delay = 0,
  hover = true,
}: ComicPanelProps) {
  const borders = {
    cyan: "border-[#00f5ff] shadow-[4px_4px_0_#bf00ff]",
    purple: "border-[#bf00ff] shadow-[4px_4px_0_#00f5ff]",
    lime: "border-[#39ff14] shadow-[4px_4px_0_#00f5ff]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={cn(
        "relative bg-[#0a0a0a] border-2 p-6",
        borders[variant],
        "transition-all duration-300",
        className
      )}
    >
      {number && (
        <span className="absolute -top-3 -left-3 font-comic text-2xl text-[#00f5ff] bg-[#050505] px-2 leading-none">
          {number}
        </span>
      )}
      {children}
    </motion.div>
  );
}
