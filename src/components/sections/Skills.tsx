"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills, type SkillCategory } from "@/data/skills";

const categories: { label: string; value: SkillCategory | "ALL" }[] = [
  { label: "ALL", value: "ALL" },
  { label: "SECURITY", value: "SECURITY" },
  { label: "DEVELOPMENT", value: "DEVELOPMENT" },
  { label: "TOOLS", value: "TOOLS" },
];

const levelColors: Record<string, string> = {
  Expert: "#00f5ff",
  Advanced: "#00f5ff",
  Intermediate: "#bf00ff",
  Beginner: "#39ff14",
};

const levelWidths: Record<string, string> = {
  Expert: "95%",
  Advanced: "80%",
  Intermediate: "60%",
  Beginner: "35%",
};

const categoryColors: Record<string, string> = {
  SECURITY: "#00f5ff",
  DEVELOPMENT: "#bf00ff",
  TOOLS: "#39ff14",
};

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | "ALL">("ALL");

  const filtered = active === "ALL" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse,rgba(0,245,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="CHAPTER 02"
          title="SKILL TREE"
          subtitle="Technical arsenal — all levels are editable in /src/data/skills.ts"
          align="center"
          variant="cyan"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 clip-angled-sm ${
                active === value
                  ? "border-[#00f5ff] bg-[#00f5ff] text-[#050505] font-bold"
                  : "border-[#00f5ff33] text-gray-400 hover:border-[#00f5ff66] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill, i) => {
            const color = categoryColors[skill.category];
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a0a0a] border border-[#ffffff11] hover:border-[#00f5ff33] p-5 transition-all duration-200 group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <div className="font-display text-sm font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                        {skill.name}
                      </div>
                      <div
                        className="font-mono text-[10px] tracking-widest uppercase"
                        style={{ color }}
                      >
                        {skill.category}
                      </div>
                    </div>
                  </div>
                  <span
                    className="font-mono text-[10px] tracking-wider px-2 py-0.5 border"
                    style={{ color, borderColor: `${color}44` }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#ffffff08] h-1 rounded-none overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}88` }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: levelWidths[skill.level] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.04 + 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-mono text-xs text-gray-600 mt-8 tracking-wide"
        >
          * Skill levels reflect personal assessment and are editable in{" "}
          <code className="text-[#00f5ff33]">src/data/skills.ts</code>
        </motion.p>
      </div>
    </section>
  );
}
