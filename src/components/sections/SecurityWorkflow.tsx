"use client";
import { motion } from "framer-motion";
import { Map, Radio, Zap, CheckCircle, FileText, Shield } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01", title: "REKOGNISI",
    description: "Pahami permukaan serangan. Petakan ruang lingkup target dalam batas otorisasi.",
    Icon: Map, color: "#00f5ff",
  },
  {
    number: "02", title: "ENUMERASI",
    description: "Petakan layanan, endpoint, dan fungsionalitas yang terekspos untuk membangun gambaran lengkap.",
    Icon: Radio, color: "#bf00ff",
  },
  {
    number: "03", title: "PENGUJIAN",
    description: "Uji kontrol keamanan di lingkungan yang diotorisasi menggunakan metodologi terstruktur.",
    Icon: Zap, color: "#00f5ff",
  },
  {
    number: "04", title: "VALIDASI",
    description: "Verifikasi apakah temuan benar-benar dapat dieksploitasi dan nilai dampak nyatanya.",
    Icon: CheckCircle, color: "#39ff14",
  },
  {
    number: "05", title: "PELAPORAN",
    description: "Dokumentasikan dampak, bukti, dan rekomendasi remediasi secara jelas dan profesional.",
    Icon: FileText, color: "#bf00ff",
  },
  {
    number: "06", title: "PENGUATAN",
    description: "Bantu meningkatkan sistem. Pengujian keamanan harus menghasilkan pembangunan yang lebih baik.",
    Icon: Shield, color: "#39ff14",
  },
];

export default function SecurityWorkflow() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="// METODOLOGI"
          title="CARA SAYA MENGUJI SISTEM"
          subtitle="Pendekatan terstruktur yang mengutamakan otorisasi dalam setiap pengujian keamanan."
          align="center"
          variant="lime"
        />

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
              <div
                className="absolute -right-3 -bottom-3 font-display text-8xl font-black opacity-[0.04] pointer-events-none leading-none"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              <div
                className="inline-flex items-center justify-center w-10 h-10 border-2 font-display text-sm font-black mb-4"
                style={{ borderColor: step.color, color: step.color }}
              >
                {step.number}
              </div>

              <step.Icon size={22} className="mb-3" style={{ color: step.color }} />

              <h3
                className="font-display text-lg font-black uppercase tracking-wide mb-2 group-hover:text-[#00f5ff] transition-colors"
                style={{ color: step.color === "#00f5ff" ? step.color : "white" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-[#ff003333] bg-[#ff003308] p-4 max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-xs text-[#ff003399] tracking-wide leading-relaxed">
            OTORISASI WAJIB — Semua pengujian keamanan yang ditampilkan dalam portofolio ini dilakukan{" "}
            <span className="text-[#ff0033]">hanya pada sistem yang telah mendapat otorisasi.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
