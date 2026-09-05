"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  chapter?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  variant?: "cyan" | "purple" | "lime";
}

export default function SectionTitle({
  chapter,
  title,
  subtitle,
  className,
  align = "center",
  variant = "cyan",
}: SectionTitleProps) {
  const alignClass = { left: "text-left", center: "text-center", right: "text-right" }[align];
  const variantColor = {
    cyan: "text-[#00f5ff]",
    purple: "text-[#bf00ff]",
    lime: "text-[#39ff14]",
  }[variant];
  const variantBg = {
    cyan: "bg-[#00f5ff]",
    purple: "bg-[#bf00ff]",
    lime: "bg-[#39ff14]",
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", alignClass, className)}
    >
      {chapter && (
        <span className={cn("font-mono text-xs tracking-[0.3em] uppercase mb-3 block opacity-70", variantColor)}>
          {chapter}
        </span>
      )}
      <h2 className={cn("font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3")}>
        {title}
      </h2>
      {align === "center" && (
        <div className={cn("mx-auto w-24 h-1 my-4", variantBg)} />
      )}
      {align === "left" && (
        <div className={cn("w-24 h-1 my-4", variantBg)} />
      )}
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
