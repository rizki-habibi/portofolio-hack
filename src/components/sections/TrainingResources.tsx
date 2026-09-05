"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink, Search, Star, FlaskConical, Award, Flag,
  BookOpen, Cpu, Tv2, Shield, Zap,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { trainingResources, type ResourceCategory, type ResourceCost } from "@/data/trainingResources";

const categories: { label: string; value: ResourceCategory | "SEMUA"; Icon: React.ElementType }[] = [
  { label: "SEMUA", value: "SEMUA", Icon: Shield },
  { label: "PLATFORM LAB", value: "PLATFORM LAB", Icon: FlaskConical },
  { label: "SERTIFIKASI", value: "SERTIFIKASI", Icon: Award },
  { label: "CTF & TANTANGAN", value: "CTF & TANTANGAN", Icon: Zap },
  { label: "KURSUS GRATIS", value: "KURSUS GRATIS", Icon: BookOpen },
  { label: "ALAT & REFERENSI", value: "ALAT & REFERENSI", Icon: Cpu },
  { label: "VIDEO & KOMUNITAS", value: "VIDEO & KOMUNITAS", Icon: Tv2 },
  { label: "PEMERINTAH & RISET", value: "PEMERINTAH & RISET", Icon: Flag },
];

const categoryIcons: Record<ResourceCategory, React.ElementType> = {
  "PLATFORM LAB": FlaskConical,
  "SERTIFIKASI": Award,
  "CTF & TANTANGAN": Zap,
  "KURSUS GRATIS": BookOpen,
  "ALAT & REFERENSI": Cpu,
  "VIDEO & KOMUNITAS": Tv2,
  "PEMERINTAH & RISET": Flag,
};

const costVariant: Record<ResourceCost, "lime" | "cyan" | "outline"> = {
  GRATIS: "lime",
  "GRATIS TERBATAS": "cyan",
  "OPEN SOURCE": "outline",
};

export default function TrainingResources() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "SEMUA">("SEMUA");
  const [search, setSearch] = useState("");
  const [showHighlighted, setShowHighlighted] = useState(false);

  const filtered = useMemo(() => {
    let list = trainingResources;
    if (activeCategory !== "SEMUA") list = list.filter((r) => r.kategori === activeCategory);
    if (showHighlighted) list = list.filter((r) => r.unggulan);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.nama.toLowerCase().includes(q) ||
          r.organisasi.toLowerCase().includes(q) ||
          r.deskripsi.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, search, showHighlighted]);

  return (
    <section id="training" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(57,255,20,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="BAB BONUS — ARSENAL GRATIS"
          title="100 SUMBER PELATIHAN GRATIS"
          subtitle="Platform pelatihan keamanan siber gratis dan aktif yang terverifikasi — dari NASA hingga Google, NVIDIA hingga SANS. Klik kartu manapun untuk mulai belajar."
          align="center"
          variant="lime"
        />

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#39ff1422] bg-[#39ff1408] p-4 max-w-3xl mx-auto text-center mb-10"
        >
          <p className="font-mono text-xs text-[#39ff1488] tracking-wide leading-relaxed">
            Semua tautan membuka situs resmi. Tidak ada afiliasi. Harga bisa berubah —
            verifikasi status gratis sebelum mendaftar. GRATIS TERBATAS = konten level dasar tersedia gratis.
          </p>
        </motion.div>

        {/* Kontrol */}
        <div className="space-y-4 mb-10">
          {/* Pencarian */}
          <div className="relative max-w-md mx-auto">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari berdasarkan nama, organisasi, atau topik..."
              className="w-full bg-[#0a0a0a] border border-[#00f5ff22] focus:border-[#39ff1444] text-white text-sm pl-9 pr-4 py-2.5 font-mono outline-none transition-colors placeholder:text-gray-700"
              aria-label="Cari sumber pelatihan"
            />
          </div>

          {/* Filter kategori */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(({ label, value, Icon }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-all duration-200 clip-angled-sm ${activeCategory === value
                    ? "border-[#39ff14] bg-[#39ff14] text-[#050505] font-bold"
                    : "border-[#39ff1422] text-gray-500 hover:border-[#39ff1455] hover:text-white"
                  }`}
              >
                <Icon size={10} />
                {label}
              </button>
            ))}
          </div>

          {/* Toggle unggulan */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowHighlighted(!showHighlighted)}
              className={`flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${showHighlighted
                  ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                  : "border-[#ffffff11] text-gray-500 hover:border-yellow-500/50 hover:text-yellow-500/80"
                }`}
            >
              <Star size={12} className={showHighlighted ? "fill-yellow-400 text-yellow-400" : ""} />
              UNGGULAN SAJA
            </button>
          </div>
        </div>

        {/* Jumlah */}
        <p className="text-center font-mono text-xs text-gray-600 mb-6 tracking-widest">
          MENAMPILKAN{" "}
          <span className="text-[#39ff14]">{filtered.length}</span> /{" "}
          {trainingResources.length} SUMBER
        </p>

        {/* Grid sumber */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((resource, i) => {
            const CategoryIcon = categoryIcons[resource.kategori];
            return (
              <motion.a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.5) }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group bg-[#0a0a0a] border border-[#ffffff08] hover:border-[#39ff1433] p-4 transition-all duration-200 flex flex-col gap-3 cursor-pointer relative overflow-hidden"
                aria-label={`Buka ${resource.nama} oleh ${resource.organisasi}`}
              >
                {/* Indikator unggulan */}
                {resource.unggulan && (
                  <div className="absolute top-2 right-2">
                    <Star size={10} className="fill-yellow-500 text-yellow-500" />
                  </div>
                )}

                {/* Baris atas */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 border border-[#39ff1422] flex items-center justify-center group-hover:border-[#39ff1444] transition-colors shrink-0">
                      <CategoryIcon size={13} className="text-[#39ff14]" />
                    </div>
                    <span className="font-mono text-[9px] text-gray-600 tracking-widest uppercase">
                      #{resource.number}
                    </span>
                  </div>
                  <Badge variant={costVariant[resource.biaya]} size="sm">
                    {resource.biaya}
                  </Badge>
                </div>

                {/* Nama */}
                <h3 className="font-display text-xs font-black text-white uppercase tracking-wide leading-tight group-hover:text-[#39ff14] transition-colors line-clamp-2">
                  {resource.nama}
                </h3>

                {/* Organisasi */}
                <p className="font-mono text-[10px] text-[#00f5ff] tracking-wide">
                  {resource.organisasi}
                </p>

                {/* Deskripsi */}
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1 line-clamp-3">
                  {resource.deskripsi}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="font-mono text-[8px] text-gray-700 border border-[#ffffff08] px-1 py-0.5 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1 text-[#39ff14] text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink size={10} />
                  MULAI BELAJAR
                </div>

                {/* Glow bawah saat hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#39ff14] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-sm text-gray-600">Sumber tidak ditemukan. Coba pencarian yang berbeda.</p>
          </div>
        )}

        {/* Catatan bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center space-y-2"
        >
          <p className="font-mono text-xs text-gray-600 tracking-wide">
            Jalur yang disarankan:{" "}
            <span className="text-[#00f5ff]">TryHackMe</span>{" "}
            <span className="text-gray-700">&#8594;</span>{" "}
            <span className="text-[#bf00ff]">PortSwigger Academy</span>{" "}
            <span className="text-gray-700">&#8594;</span>{" "}
            <span className="text-[#39ff14]">Hack The Box</span>{" "}
            <span className="text-gray-700">&#8594;</span>{" "}
            <span className="text-yellow-500">eJPT / OSCP</span>
          </p>
          <p className="font-mono text-[10px] text-gray-700 tracking-wider">
            Semua sumber yang tercantum dapat diakses secara publik. Verifikasi status gratis sebelum mendaftar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
