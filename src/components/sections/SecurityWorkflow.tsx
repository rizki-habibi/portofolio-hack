"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "RECON",
    description: "Understand the attack surface. Map the target scope within authorized boundaries.",
    icon: "🗺️",
    color: "#00f5ff",
  },
  {
    number: "02",
    title: "ENUMERATION",
    description: "Map exposed services, endpoints, and functionality to build a complete picture.",
    icon: "📡",
    color: "#bf00ff",
  },
  {
    number: "03",
    title: "TESTING",
    description: "Test security controls in an authorized environment using structured methodology.",
    icon: "⚡",
    color: "#00f5ff",
  },
  {
    number: "04",
    title: "VALIDATION",
    description: "Verify whether the finding is actually exploitable and assess its real impact.",
    icon: "✅",
    color: "#39ff14",
  },
  {
    number: "05",
    title: "REPORTING",
    description: "Document impact, evidence, and remediation recommendations clearly.",
    icon: "📋",
    color: "#bf00ff",
  },
  {
    number: "06",
    title: "HARDENING",
    description: "Help improve the system. Security testing should lead to better, safer builds.",
    icon: "🛡️",
    color: "#39ff14",
  },
];

export default function SecurityWorkflow() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="// METHODOLOGY"
          title="HOW I TEST A SYSTEM"
          subtitle="A structured, authorization-first approach to security testing."
          align="center"
          variant="lime"
        />

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-[#0a0a0a] border border-[#ffffff11] p-6 group hover:border-[#00f5ff33] transition-all duration-200 overflow-hidden"
            >
              {/* Step number bg */}
              <div
                className="absolute -right-3 -bottom-3 font-display text-8xl font-black opacity-[0.04] pointer-events-none leading-none"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              {/* Number badge */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 border-2 font-display text-sm font-black mb-4"
                style={{ borderColor: step.color, color: step.color }}
              >
                {step.number}
              </div>

              <div className="text-2xl mb-3">{step.icon}</div>

              <h3
                className="font-display text-lg font-black uppercase tracking-wide mb-2 group-hover:text-[#00f5ff] transition-colors"
                style={{ color: step.color === "#00f5ff" ? step.color : "white" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[#00f5ff22] to-transparent translate-x-3" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Flow arrows on mobile/tablet */}
        <div className="flex justify-center mb-8 lg:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-gray-600">
            {steps.map((s, i) => (
              <span key={s.number} className="flex items-center gap-2">
                <span className="text-[#00f5ff]">{s.number}</span>
                {i < steps.length - 1 && <span className="text-gray-700">→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-[#ff003333] bg-[#ff003308] p-4 max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-xs text-[#ff003399] tracking-wide leading-relaxed">
            ⚠ AUTHORIZATION REQUIRED — All security testing shown on this portfolio is performed{" "}
            <span className="text-[#ff0033]">only on systems where authorization has been granted.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
