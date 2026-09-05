"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Globe, Zap, Shield, Search, BookOpen } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { certificates, type CertCategory } from "@/data/certificates";

const filters: { label: string; value: CertCategory | "SEMUA" }[] = [
  { label: "SEMUA", value: "SEMUA" },
  { label: "KEAMANAN", value: "KEAMANAN" },
  { label: "PENGEMBANGAN", value: "PENGEMBANGAN" },
  { label: "JARINGAN", value: "JARINGAN" },
  { label: "LAINNYA", value: "LAINNYA" },
];

const categoryVariants: Record<CertCategory, "cyan" | "purple" | "lime" | "outline"> = {
  KEAMANAN: "cyan", PENGEMBANGAN: "purple", JARINGAN: "lime", LAINNYA: "outline",
};

const statusStyle = {
  AKTIF: "text-[#39ff14] border-[#39ff1444]",
  KADALUARSA: "text-gray-500 border-gray-700",
  "SEGERA HADIR": "text-[#bf00ff] border-[#bf00ff44]",
};

export default function Certificates() {
  const [active, setActive] = useState<CertCategory | "SEMUA">("SEMUA");
  const filtered = active === "SEMUA" ? certificates : certificates.filter((c) => c.kategori === active);

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-15" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-[radial-gradient(ellipse,rgba(191,0,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="BAB 04"
          title="DINDING SERTIFIKAT"
          subtitle="Kredensial dan pencapaian. Tambahkan sertifikat baru di /src/data/certificates.ts"
          align="center"
          variant="purple"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(({ label, value }) => (
            <button key={value} onClick={() => setActive(value)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 clip-angled-sm ${active === value
                ? "border-[#bf00ff] bg-[#bf00ff] text-[#050505] font-bold"
                : "border-[#bf00ff22] text-gray-400 hover:border-[#bf00ff55] hover:text-white"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, i) => (
            <motion.div key={cert.id} layout
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.07 }} whileHover={{ scale: 1.02 }}
              className="bg-[#0a0a0a] border-2 border-[#bf00ff22] hover:border-[#bf00ff66] shadow-[3px_3px_0_#00f5ff11] hover:shadow-[4px_4px_0_#bf00ff44] transition-all duration-200 group overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#ffffff08] bg-[#080808]">
                <Badge variant={categoryVariants[cert.kategori]} size="sm">{cert.kategori}</Badge>
                <span className={`font-mono text-[10px] tracking-widest uppercase border px-2 py-0.5 ${statusStyle[cert.status]}`}>
                  {cert.status}
                </span>
              </div>

              <div className="p-5">
                <div className="w-12 h-12 border border-[#bf00ff44] flex items-center justify-center mb-4 group-hover:border-[#bf00ff] transition-colors">
                  <Award size={22} className="text-[#bf00ff]" />
                </div>
                <h3 className="font-display text-sm font-black text-white uppercase tracking-wide mb-1 group-hover:text-[#bf00ff] transition-colors">
                  {cert.nama}
                </h3>
                <p className="font-mono text-xs text-gray-500 mb-3">{cert.penerbit}</p>

                {cert.status !== "SEGERA HADIR" ? (
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-600">TANGGAL</span>
                      <span className="text-gray-400">{cert.tanggal}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-600">KREDENSIAL</span>
                      <span className="text-gray-400 truncate ml-2">{cert.idKredensial}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-600 font-mono mb-4 italic">{cert.deskripsi}</p>
                )}

                {cert.urlVerifikasi && cert.urlVerifikasi !== "#" && (
                  <a href={cert.urlVerifikasi} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-[#bf00ff] hover:text-[#bf00ff]/80 tracking-wider uppercase transition-colors">
                    <ExternalLink size={11} />VERIFIKASI KREDENSIAL
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subseksi Pengujian Resmi */}
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
              PENGUJIAN KEAMANAN RESMI
            </h3>
            <div className="flex-1 h-px bg-[#00f5ff22]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Keamanan Aplikasi Web", Icon: Globe },
              { title: "Penetration Testing", Icon: Zap },
              { title: "Ethical Hacking", Icon: Shield },
              { title: "Penilaian Kerentanan", Icon: Search },
              { title: "Riset Keamanan", Icon: BookOpen },
              { title: "CTF & Bug Hunting", Icon: Award },
            ].map(({ title, Icon }) => (
              <div key={title} className="flex items-center gap-3 border border-[#ffffff08] p-3 hover:border-[#00f5ff22] transition-colors">
                <Icon size={16} className="text-[#00f5ff] shrink-0" />
                <span className="font-mono text-xs text-gray-400 tracking-wide">{title}</span>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-gray-600 mt-6 text-center">
            Semua aktivitas yang tercantum melibatkan pengujian yang diotorisasi saja. Tidak ada akses tanpa izin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


