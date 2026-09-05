"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const COMMANDS: Record<string, string[]> = {
  bantuan: [
    "Perintah yang tersedia:",
    "  bantuan      — tampilkan pesan ini",
    "  siapasaya    — identitas operator",
    "  keahlian     — modul keahlian yang dimuat",
    "  proyek       — laporan lapangan aktif",
    "  status       — status sistem",
    "  bersihkan    — bersihkan terminal",
    "",
    "Catatan: Ini adalah demo UI. Tidak ada perintah nyata yang dieksekusi.",
  ],
  siapasaya: [
    "OPERATOR: Rizki Habibi",
    "PERAN: Ethical Hacker & Security Tester",
    "OTORISASI: Pengujian Keamanan Resmi Saja",
    "STATUS: AKTIF",
  ],
  keahlian: [
    "Modul yang dimuat:",
    "  [OK] Ethical Hacking          — Mahir",
    "  [OK] Pengujian Keamanan Web   — Mahir",
    "  [OK] Penetration Testing      — Menengah",
    "  [OK] Pengujian OWASP          — Mahir",
    "  [OK] Burp Suite               — Menengah",
    "  [OK] Laravel / Next.js        — Mahir",
  ],
  proyek: [
    "Laporan lapangan aktif:",
    "  [SEDANG BERJALAN] Dashboard Keamanan",
    "  [SEDANG BERJALAN] Lab Keamanan Aplikasi Web",
    "  [SELESAI]         Pengujian Keamanan Aplikasi Web",
    "  [PROTOTIPE]       Penguji Keamanan REST API",
  ],
  status: [
    "STATUS SISTEM",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "  Modul autentikasi   ............. AKTIF",
    "  Lapisan keamanan    ............. AKTIF",
    "  Data portofolio     ............. DIMUAT",
    "  Kerentanan ditemukan ............ 0",
    "  Status keseluruhan  ............. AMAN",
  ],
};

const bootSequence = [
  { text: "> inisialisasi_lab", type: "command" as const, delay: 0 },
  { text: "Memuat RH_SECURITY_LAB v2.0...", type: "output" as const, delay: 300 },
  { text: "> muat_alat_pengujian", type: "command" as const, delay: 700 },
  { text: "Alat dimuat: Burp Suite, Nmap, Wireshark, Postman", type: "output" as const, delay: 1000 },
  { text: "> analisis_aplikasi", type: "command" as const, delay: 1400 },
  { text: "Menganalisis... selesai.", type: "output" as const, delay: 1700 },
  { text: "> buat_laporan", type: "command" as const, delay: 2100 },
  { text: "Laporan dibuat.", type: "output" as const, delay: 2400 },
  { text: "> STATUS: SIAP", type: "success" as const, delay: 2800 },
  { text: 'Ketik "bantuan" untuk melihat perintah yang tersedia.', type: "output" as const, delay: 3100 },
];

type LineType = "command" | "output" | "success" | "error";
interface Line { text: string; type: LineType; }

export default function SecurityLab() {
  const [bootVisible, setBootVisible] = useState(0);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const [booted, setBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bootSequence.forEach((line, i) => {
      setTimeout(() => {
        setBootVisible(i + 1);
        if (i === bootSequence.length - 1) setBooted(true);
      }, line.delay);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, bootVisible]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ text: `> ${cmd}`, type: "command" }];

    if (trimmed === "bersihkan") { setLines([]); return; }

    const response = COMMANDS[trimmed];
    if (response) {
      response.forEach((r) =>
        newLines.push({ text: r, type: r.startsWith("[OK]") || r.includes("AMAN") ? "success" : "output" })
      );
    } else if (trimmed === "") {
      // kosong
    } else {
      newLines.push({ text: `Perintah tidak ditemukan: "${trimmed}". Ketik "bantuan" untuk melihat perintah.`, type: "error" });
    }

    setLines((prev) => [...prev, ...newLines]);
  };

  const typeColor: Record<LineType, string> = {
    command: "text-[#00f5ff]", output: "text-gray-300",
    success: "text-[#39ff14]", error: "text-[#ff0033]",
  };

  return (
    <section id="lab" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,245,255,0.03)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="// LAB"
          title="LAB KEAMANAN"
          subtitle="Terminal interaktif — hanya demo UI. Tidak ada perintah nyata yang dieksekusi."
          align="center"
          variant="cyan"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[#00f5ff33] bg-[#050505] shadow-[0_0_40px_#00f5ff11] overflow-hidden"
        >
          {/* Bilah judul */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0a] border-b border-[#00f5ff22]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff0033]" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-[#39ff14]" />
            </div>
            <span className="font-mono text-xs text-[#00f5ff] tracking-widest uppercase">
              RH_SECURITY_LAB — TERMINAL
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="font-mono text-[9px] text-[#39ff14]">AKTIF</span>
            </div>
          </div>

          {/* Isi terminal */}
          <div
            className="p-5 h-80 overflow-y-auto font-mono text-xs space-y-1 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {bootSequence.slice(0, bootVisible).map((line, i) => (
              <div key={`boot-${i}`} className={
                line.type === "command" ? "text-[#00f5ff]"
                  : line.type === "success" ? "text-[#39ff14]"
                    : "text-gray-400"
              }>
                {line.text}
              </div>
            ))}

            {booted && lines.map((line, i) => (
              <div key={`cmd-${i}`} className={typeColor[line.type]}>{line.text}</div>
            ))}

            {booted && (
              <div className="flex items-center gap-2 text-[#00f5ff]">
                <span className="text-[#bf00ff] shrink-0">RH@LAB:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") { handleCommand(input); setInput(""); }
                  }}
                  className="flex-1 bg-transparent outline-none text-[#00f5ff] caret-[#00f5ff] font-mono text-xs"
                  autoComplete="off" spellCheck={false}
                  aria-label="Input terminal"
                  placeholder="ketik perintah..."
                />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Footer */}
          <div className="border-t border-[#00f5ff11] px-4 py-2 flex justify-between items-center bg-[#0a0a0a]">
            <span className="font-mono text-[9px] text-gray-700">DEMO UI — VISUAL SAJA</span>
            <span className="font-mono text-[9px] text-[#00f5ff44]">RH_SECURITY_LAB v2.0</span>
          </div>
        </motion.div>

        <p className="text-center font-mono text-xs text-gray-700 mt-4 tracking-wide">
          Terminal ini hanya antarmuka visual. Tidak ada perintah sistem nyata yang dieksekusi.
        </p>
      </div>
    </section>
  );
}
