"use client";
import { motion } from "framer-motion";
import { Key, ClipboardCheck, Handshake, Hammer } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const principles = [
  {
    number: "01", title: "OTORISASI ADALAH YANG UTAMA",
    description: "Jangan pernah menguji apa yang tidak kamu izinkan untuk diuji. Otorisasi bukan pilihan — ini adalah fondasi.",
    Icon: Key, color: "#00f5ff", border: "border-[#00f5ff]", shadow: "shadow-[5px_5px_0_#bf00ff]",
  },
  {
    number: "02", title: "TEMUAN BUTUH BUKTI",
    description: "Klaim keamanan harus dapat direproduksi dan didokumentasikan. Temuan tanpa bukti hanyalah tebakan.",
    Icon: ClipboardCheck, color: "#bf00ff", border: "border-[#bf00ff]", shadow: "shadow-[5px_5px_0_#00f5ff]",
  },
  {
    number: "03", title: "PENGUNGKAPAN BERTANGGUNG JAWAB",
    description: "Laporkan kerentanan secara bertanggung jawab. Beri waktu kepada vendor untuk memperbaiki sebelum pengungkapan publik.",
    Icon: Handshake, color: "#39ff14", border: "border-[#39ff14]", shadow: "shadow-[5px_5px_0_#00f5ff]",
  },
  {
    number: "04", title: "BANGUN SETELAH MEMECAHKAN",
    description: "Pengujian keamanan harus menghasilkan sistem yang lebih baik — bukan hanya daftar kerentanan.",
    Icon: Hammer, color: "#00f5ff", border: "border-[#00f5ff]", shadow: "shadow-[5px_5px_0_#39ff14]",
  },
];

export default function Principles() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="// ATURAN SAYA"
          title="PRINSIP SAYA"
          subtitle="Prinsip yang memandu setiap keterlibatan keamanan."
          align="center"
          variant="lime"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`bg-[#0a0a0a] border-2 ${p.border} ${p.shadow} p-7 relative overflow-hidden group transition-all duration-200`}
            >
              <div
                className="absolute -right-4 -bottom-4 font-display text-[120px] font-black opacity-[0.04] leading-none pointer-events-none"
                style={{ color: p.color }}
              >
                {p.number}
              </div>

              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 border-2 flex items-center justify-center" style={{ borderColor: p.color }}>
                  <p.Icon size={24} style={{ color: p.color }} />
                </div>
                <span className="font-display text-4xl font-black opacity-20" style={{ color: p.color }}>
                  {p.number}
                </span>
              </div>

              <h3
                className="font-display text-xl font-black uppercase tracking-wide mb-3 group-hover:opacity-90 transition-opacity"
                style={{ color: p.color }}
              >
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: p.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
