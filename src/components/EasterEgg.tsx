"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";
import TerminalWindow from "@/components/ui/TerminalWindow";

interface EasterEggProps {
  open: boolean;
  onClose: () => void;
}

const eggLines = [
  { text: "Menginisialisasi protokol akses rahasia...", type: "command" as const, delay: 0 },
  { text: "Memverifikasi identitas: RIZKI HABIBI", type: "output" as const, delay: 500 },
  { text: "Tingkat otorisasi: MAKSIMUM", type: "success" as const, delay: 1000 },
  { text: "Selamat datang di Lab Keamanan Rizki.", type: "success" as const, delay: 1500 },
  { text: "Kamu menemukan easter egg. Kerja bagus.", type: "output" as const, delay: 2000 },
  { text: "Sekarang hubungi orang ini untuk kerja sama.", type: "success" as const, delay: 2500 },
];

export default function EasterEgg({ open, onClose }: EasterEggProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 border-2 border-[#00f5ff] shadow-[0_0_40px_#00f5ff44,inset_0_0_40px_#00f5ff08]" />
              <div className="relative bg-[#050505] border-b-2 border-[#00f5ff] px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap size={16} className="text-[#00f5ff]" />
                  </motion.div>
                  <span className="font-display text-sm font-black text-[#00f5ff] tracking-widest uppercase">
                    AKSES DIBERIKAN
                  </span>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-[#00f5ff] transition-colors" aria-label="Tutup">
                  <X size={16} />
                </button>
              </div>
              <div className="relative bg-[#050505] p-5">
                <TerminalWindow title="AKSES_RAHASIA.sh" lines={eggLines} autoPlay={true} />
                <div className="mt-4 text-center">
                  <p className="font-mono text-xs text-gray-600 mb-3">
                    Kamu mengetik <span className="text-[#00f5ff]">RIZKI</span> — keahlian yang bagus.
                  </p>
                  <button
                    onClick={onClose}
                    className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[#00f5ff33] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#050505] transition-all duration-200"
                  >
                    KELUAR DARI LAB
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
