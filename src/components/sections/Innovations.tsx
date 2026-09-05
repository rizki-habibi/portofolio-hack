"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { innovations } from "@/data/innovations";

const statusStyle = {
  IDEA: { text: "text-gray-400", border: "border-gray-700", bg: "bg-[#ffffff08]" },
  PROTOTYPE: { text: "text-[#bf00ff]", border: "border-[#bf00ff44]", bg: "bg-[#bf00ff08]" },
  "IN DEVELOPMENT": { text: "text-[#00f5ff]", border: "border-[#00f5ff44]", bg: "bg-[#00f5ff08]" },
  "COMING SOON": { text: "text-[#39ff14]", border: "border-[#39ff1444]", bg: "bg-[#39ff1408]" },
};

export default function Innovations() {
  return (
    <section id="innovations" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(191,0,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="CHAPTER 05"
          title="10 INNOVATIONS"
          subtitle='"Ideas I Want to Build." — These are concepts and works-in-progress, not completed products.'
          align="center"
          variant="purple"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {innovations.slice(0, 8).map((item, i) => {
            const ss = statusStyle[item.status];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-[#0a0a0a] border border-[#ffffff11] hover:border-[#bf00ff44] p-5 transition-all duration-200 group relative overflow-hidden"
              >
                {/* Number watermark */}
                <div className="absolute -right-2 -top-2 font-display text-7xl font-black text-[#bf00ff] opacity-[0.05] leading-none pointer-events-none">
                  {item.number}
                </div>

                {/* Icon + number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <span className={`font-mono text-[10px] tracking-widest uppercase border px-2 py-0.5 ${ss.text} ${ss.border} ${ss.bg}`}>
                    {item.status}
                  </span>
                </div>

                {/* Number label */}
                <div className="font-mono text-[10px] text-[#bf00ff] tracking-widest mb-1">
                  #{item.number}
                </div>

                {/* Title */}
                <h3 className="font-display text-sm font-black text-white uppercase tracking-wide mb-2 group-hover:text-[#bf00ff] transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] text-gray-600 border border-[#ffffff08] px-1.5 py-0.5 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Last 2 — featured row */}
        <div className="grid sm:grid-cols-2 gap-4">
          {innovations.slice(8).map((item, i) => {
            const ss = statusStyle[item.status];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a0a0a] border-2 border-[#bf00ff22] hover:border-[#bf00ff66] shadow-[4px_4px_0_#00f5ff11] p-6 group transition-all duration-200 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 font-display text-9xl font-black text-[#bf00ff] opacity-[0.04] leading-none pointer-events-none">
                  {item.number}
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="font-mono text-[10px] text-[#bf00ff] tracking-widest">#{item.number}</div>
                      <h3 className="font-display text-base font-black text-white uppercase group-hover:text-[#bf00ff] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`font-mono text-[10px] tracking-widest uppercase border px-2 py-0.5 shrink-0 ${ss.text} ${ss.border} ${ss.bg}`}>
                    {item.status}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>

                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] text-gray-600 border border-[#ffffff08] px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-mono text-xs text-gray-600 mt-10 tracking-wide"
        >
          * Statuses reflect current development stage. Edit in{" "}
          <code className="text-[#bf00ff33]">src/data/innovations.ts</code>
        </motion.p>
      </div>
    </section>
  );
}
