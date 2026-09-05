"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield, Globe, Zap, Search, ClipboardList, Lock, Bug,
  Layers, Code, Code2, FileCode, Atom, Triangle, Plug, Database,
  Crosshair, Activity, GitBranch, Terminal, Box, Send,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills, type SkillCategory } from "@/data/skills";

// Peta iconName -> Lucide component
const iconMap: Record<string, React.ElementType> = {
  shield: Shield, globe: Globe, zap: Zap, search: Search,
  "clipboard-list": ClipboardList, lock: Lock, bug: Bug,
  layers: Layers, code: Code, "code-2": Code2, "file-code": FileCode,
  atom: Atom, triangle: Triangle, plug: Plug, database: Database,
  crosshair: Crosshair, radar: Activity, activity: Activity,
  "git-branch": GitBranch, terminal: Terminal, box: Box, send: Send,
};

const categories: { label: string; value: SkillCategory | "SEMUA" }[] = [
  { label: "SEMUA", value: "SEMUA" },
  { label: "KEAMANAN", value: "KEAMANAN" },
  { label: "PENGEMBANGAN", value: "PENGEMBANGAN" },
  { label: "ALAT", value: "ALAT" },
];

const levelColors: Record<string, string> = {
  Ahli: "#00f5ff", Mahir: "#00f5ff", Menengah: "#bf00ff", Pemula: "#39ff14",
};
const levelWidths: Record<string, string> = {
  Ahli: "95%", Mahir: "80%", Menengah: "60%", Pemula: "35%",
};
const categoryColors: Record<string, string> = {
  KEAMANAN: "#00f5ff", PENGEMBANGAN: "#bf00ff", ALAT: "#39ff14",
};

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | "SEMUA">("SEMUA");
  const filtered = active === "SEMUA" ? skills : skills.filter((s) => s.kategori === active);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse,rgba(0,245,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="BAB 02"
          title="POHON KEAHLIAN"
          subtitle="Arsenal teknis — semua level dapat diedit di /src/data/skills.ts"
          align="center"
          variant="cyan"
        />

        {/* Filter kategori */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 clip-angled-sm ${active === value
                  ? "border-[#00f5ff] bg-[#00f5ff] text-[#050505] font-bold"
                  : "border-[#00f5ff33] text-gray-400 hover:border-[#00f5ff66] hover:text-white"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => {
            const color = categoryColors[skill.kategori];
            const IconComp = iconMap[skill.iconName] ?? Code;
            return (
              <motion.div
                key={skill.nama}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a0a0a] border border-[#ffffff11] hover:border-[#00f5ff33] p-5 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#ffffff11] flex items-center justify-center group-hover:border-[#00f5ff33] transition-colors">
                      <IconComp size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                        {skill.nama}
                      </div>
                      <div className="font-mono text-[10px] tracking-widest uppercase" style={{ color }}>
                        {skill.kategori}
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-mono text-xs text-gray-600 mt-8 tracking-wide"
        >
          * Level keahlian mencerminkan penilaian pribadi dan dapat diedit di{" "}
          <code className="text-[#00f5ff33]">src/data/skills.ts</code>
        </motion.p>
      </div>
    </section>
  );
}
