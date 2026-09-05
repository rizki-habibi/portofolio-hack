"use client";
import { motion } from "framer-motion";
import { Shield, Code, Search, Cpu } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/siteConfig";

const stats = [
  { label: "YEARS LEARNING", value: siteConfig.stats.yearsLearning, icon: "📚" },
  { label: "PROJECTS", value: siteConfig.stats.projects, icon: "🗂️" },
  { label: "SECURITY TESTS", value: siteConfig.stats.securityTests, icon: "🔍" },
  { label: "TECHNOLOGIES", value: siteConfig.stats.technologies, icon: "⚙️" },
];

const focuses = [
  { icon: Shield, label: "Web Security", color: "text-[#00f5ff]" },
  { icon: Search, label: "Penetration Testing", color: "text-[#bf00ff]" },
  { icon: Cpu, label: "Security Research", color: "text-[#39ff14]" },
  { icon: Code, label: "Development", color: "text-[#00f5ff]" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-[radial-gradient(ellipse,rgba(191,0,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="// ABOUT.exe"
          title="ABOUT THE OPERATOR"
          align="center"
          variant="purple"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Bio block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* ID card */}
            <div className="border-2 border-[#bf00ff] bg-[#0a0a0a] p-6 shadow-[6px_6px_0_#00f5ff] relative">
              <div className="absolute -top-3 left-4 font-mono text-[10px] text-[#bf00ff] bg-[#050505] px-2 tracking-widest uppercase">
                OPERATOR FILE
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: "DESIGNATION", value: siteConfig.name },
                  { label: "ROLE", value: siteConfig.role },
                  { label: "STATUS", value: "ACTIVE", highlight: true },
                  { label: "CLEARANCE", value: "ETHICAL HACKING / AUTHORIZED TESTING" },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className="flex gap-4 font-mono text-sm border-b border-[#ffffff08] pb-2">
                    <span className="text-gray-500 text-xs tracking-widest uppercase w-28 shrink-0">{label}</span>
                    <span className={highlight ? "text-[#39ff14]" : "text-white"}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2">
                {focuses.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-1.5 border border-[#ffffff11] px-2 py-1">
                    <Icon size={12} className={color} />
                    <span className="font-mono text-[10px] text-gray-400 tracking-wide">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio paragraph */}
            <div className="relative pl-4 border-l-2 border-[#00f5ff44]">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {siteConfig.bio}
              </p>
            </div>

            {/* Tagline */}
            <div className="border border-[#00f5ff22] bg-[#00f5ff08] p-4">
              <p className="font-comic text-2xl text-[#00f5ff] text-center tracking-wide">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ scale: 1.03 }}
                  className="border border-[#00f5ff22] bg-[#0a0a0a] p-5 text-center hover:border-[#00f5ff66] transition-all duration-200 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.03)_0%,transparent_70%)]" />
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="font-display text-3xl font-black text-[#00f5ff] mb-1">{value}</div>
                  <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Approach block */}
            <div className="border-2 border-[#39ff14] bg-[#0a0a0a] p-6 shadow-[4px_4px_0_#00f5ff]">
              <div className="font-mono text-[10px] text-[#39ff14] tracking-widest uppercase mb-4">
                — METHODOLOGY
              </div>
              <div className="space-y-3">
                {[
                  "I test systems to understand how they can fail.",
                  "I look for weaknesses before attackers do.",
                  "Security through understanding.",
                ].map((line, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#39ff14] mt-0.5 shrink-0">▸</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative barcode */}
            <div className="flex items-center gap-3 opacity-30">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#00f5ff]"
                  style={{
                    width: i % 3 === 0 ? 3 : i % 5 === 0 ? 1 : 2,
                    height: i % 4 === 0 ? 32 : 24,
                  }}
                />
              ))}
              <span className="font-mono text-[8px] text-gray-600 tracking-[0.2em] ml-2">RH-SEC-2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
