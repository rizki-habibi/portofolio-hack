"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const timelineItems = [
  {
    step: "01",
    title: "LEARNING",
    description: "Started with web development, building full-stack applications with PHP and Laravel.",
    icon: "📚",
    color: "#00f5ff",
  },
  {
    step: "02",
    title: "BUILDING",
    description: "Developed real-world applications — APIs, dashboards, management systems.",
    icon: "🔨",
    color: "#bf00ff",
  },
  {
    step: "03",
    title: "BREAKING",
    description: "Discovered that knowing how to build wasn't enough. Started studying how systems fail.",
    icon: "⚡",
    color: "#00f5ff",
  },
  {
    step: "04",
    title: "TESTING",
    description: "Applied structured security testing methodology — OWASP, Burp Suite, manual testing.",
    icon: "🔍",
    color: "#39ff14",
  },
  {
    step: "05",
    title: "RESEARCHING",
    description: "Dived into security research: vulnerability assessment, bug hunting, and CTF challenges.",
    icon: "🔬",
    color: "#bf00ff",
  },
  {
    step: "06",
    title: "IMPROVING",
    description: "Translated findings into better designs. Security testing became part of the build process.",
    icon: "📈",
    color: "#39ff14",
  },
  {
    step: "07",
    title: "BUILDING AGAIN",
    description: "Back to building — but now with security-first thinking embedded in every decision.",
    icon: "🛡️",
    color: "#00f5ff",
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="// THE JOURNEY"
          title="THE JOURNEY"
          subtitle="The path from developer to security tester — and back again."
          align="center"
          variant="lime"
        />

        {/* Comic panel container */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff22] via-[#00f5ff44] to-[#00f5ff22] hidden md:block" />

          <div className="space-y-6 md:space-y-0">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`relative flex md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-0`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-[#0a0a0a] border-2 p-5 text-left"
                      style={{ borderColor: item.color, boxShadow: `3px 3px 0 ${item.color}44` }}
                    >
                      {/* Panel label */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: item.color }}>
                          STAGE {item.step}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-black text-white uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 items-center justify-center z-10">
                    <motion.div
                      className="w-10 h-10 border-2 flex items-center justify-center bg-[#050505] font-display text-xs font-black"
                      style={{ borderColor: item.color, color: item.color, boxShadow: `0 0 15px ${item.color}44` }}
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                    >
                      {item.step}
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block border-2 border-[#39ff14] px-6 py-3 shadow-[4px_4px_0_#00f5ff]">
            <span className="font-comic text-2xl text-[#39ff14] tracking-wide">
              TO BE CONTINUED...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
