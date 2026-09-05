"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { certificates, type CertCategory } from "@/data/certificates";

const filters: { label: string; value: CertCategory | "ALL" }[] = [
  { label: "ALL", value: "ALL" },
  { label: "SECURITY", value: "SECURITY" },
  { label: "DEVELOPMENT", value: "DEVELOPMENT" },
  { label: "NETWORKING", value: "NETWORKING" },
  { label: "OTHER", value: "OTHER" },
];

const categoryVariants: Record<CertCategory, "cyan" | "purple" | "lime" | "outline"> = {
  SECURITY: "cyan",
  DEVELOPMENT: "purple",
  NETWORKING: "lime",
  OTHER: "outline",
};

const statusStyle = {
  ACTIVE: "text-[#39ff14] border-[#39ff1444]",
  EXPIRED: "text-gray-500 border-gray-700",
  "COMING SOON": "text-[#bf00ff] border-[#bf00ff44]",
};

export default function Certificates() {
  const [active, setActive] = useState<CertCategory | "ALL">("ALL");
  const filtered = active === "ALL" ? certificates : certificates.filter((c) => c.category === active);

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-15" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-[radial-gradient(ellipse,rgba(191,0,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="CHAPTER 04"
          title="CERTIFICATION WALL"
          subtitle="Credentials and achievements. Add new certificates in /src/data/certificates.ts"
          align="center"
          variant="purple"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 clip-angled-sm ${
                active === value
                  ? "border-[#bf00ff] bg-[#bf00ff] text-[#050505] font-bold"
                  : "border-[#bf00ff22] text-gray-400 hover:border-[#bf00ff55] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cert grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0a0a0a] border-2 border-[#bf00ff22] hover:border-[#bf00ff66] shadow-[3px_3px_0_#00f5ff11] hover:shadow-[4px_4px_0_#bf00ff44] transition-all duration-200 group overflow-hidden"
            >
              {/* Card top */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#ffffff08] bg-[#080808]">
                <Badge variant={categoryVariants[cert.category]} size="sm">
                  {cert.category}
                </Badge>
                <span className={`font-mono text-[10px] tracking-widest uppercase border px-2 py-0.5 ${statusStyle[cert.status]}`}>
                  {cert.status}
                </span>
              </div>

              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 border border-[#bf00ff44] flex items-center justify-center mb-4 group-hover:border-[#bf00ff] transition-colors">
                  <Award size={22} className="text-[#bf00ff]" />
                </div>

                {/* Name */}
                <h3 className="font-display text-sm font-black text-white uppercase tracking-wide mb-1 group-hover:text-[#bf00ff] transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="font-mono text-xs text-gray-500 mb-3">{cert.issuer}</p>

                {/* Meta */}
                {cert.status !== "COMING SOON" ? (
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-600">DATE</span>
                      <span className="text-gray-400">{cert.date}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-600">CREDENTIAL</span>
                      <span className="text-gray-400 truncate ml-2">{cert.credentialId}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-600 font-mono mb-4 italic">
                    {cert.description}
                  </p>
                )}

                {/* Verify link */}
                {cert.verificationUrl && cert.verificationUrl !== "#" && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-[#bf00ff] hover:text-[#bf00ff]/80 tracking-wider uppercase transition-colors"
                  >
                    <ExternalLink size={11} />
                    VERIFY CREDENTIAL
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Authorized Testing subsection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 border-2 border-[#00f5ff22] bg-[#0a0a0a] p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#00f5ff]" />
            <h3 className="font-display text-lg font-black text-[#00f5ff] uppercase tracking-widest">
              AUTHORIZED SECURITY TESTING
            </h3>
            <div className="flex-1 h-px bg-[#00f5ff22]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Web Application Security", icon: "🌐" },
              { title: "Penetration Testing", icon: "⚡" },
              { title: "Ethical Hacking", icon: "🎩" },
              { title: "Vulnerability Assessment", icon: "🔍" },
              { title: "Security Research", icon: "🔬" },
              { title: "CTF / Bug Hunting", icon: "🏆" },
            ].map(({ title, icon }) => (
              <div key={title} className="flex items-center gap-3 border border-[#ffffff08] p-3 hover:border-[#00f5ff22] transition-colors">
                <span className="text-xl">{icon}</span>
                <span className="font-mono text-xs text-gray-400 tracking-wide">{title}</span>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-gray-600 mt-6 text-center">
            All activities listed involve authorized testing only. No unauthorized access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
