"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/siteConfig";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", email: "", subjek: "", pesan: "" });
  const [terkirim, setTerkirim] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.nama.trim() || !form.email.trim() || !form.pesan.trim()) {
      setError("Harap isi semua kolom yang wajib diisi.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Harap masukkan alamat email yang valid.");
      return;
    }

    const mailto = `mailto:${siteConfig.social.email}?subject=${encodeURIComponent(
      form.subjek || "Kontak Portofolio"
    )}&body=${encodeURIComponent(`Nama: ${form.nama}\nEmail: ${form.email}\n\n${form.pesan}`)}`;
    window.location.href = mailto;
    setTerkirim(true);
  };

  const socials = [
    { label: "GitHub", icon: Github, href: siteConfig.social.github, color: "hover:text-white hover:border-white" },
    { label: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin, color: "hover:text-[#0077b5] hover:border-[#0077b5]" },
    { label: "Email", icon: Mail, href: `mailto:${siteConfig.social.email}`, color: "hover:text-[#00f5ff] hover:border-[#00f5ff]" },
  ];

  const inputClass =
    "w-full bg-[#080808] border border-[#ffffff11] focus:border-[#00f5ff44] text-white text-sm px-4 py-3 font-mono outline-none transition-colors duration-200 placeholder:text-gray-700";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,245,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="inline-block border border-[#00f5ff33] px-4 py-1 mb-4">
            <span className="font-mono text-xs text-[#00f5ff] tracking-[0.4em] uppercase">
              BAB TERAKHIR
            </span>
          </div>
        </motion.div>

        <SectionTitle
          title="MARI BANGUN SESUATU YANG AMAN"
          subtitle="Punya proyek, peluang pengujian keamanan, atau ide teknologi?"
          align="center"
          variant="cyan"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kiri — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="border-2 border-[#00f5ff22] bg-[#0a0a0a] p-6 shadow-[4px_4px_0_#00f5ff11]">
              <div className="font-mono text-[10px] text-[#00f5ff] tracking-widest uppercase mb-4">
                — TERBUKA UNTUK
              </div>
              {[
                "Keterlibatan pengujian keamanan & penetration testing",
                "Penilaian keamanan aplikasi web",
                "Proyek pengembangan freelance",
                "Kolaborasi riset keamanan",
                "Konsultasi teknologi",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3 text-sm text-gray-300">
                  <span className="text-[#00f5ff] mt-0.5 shrink-0">&#9658;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-4">
                — TEMUKAN SAYA DI
              </div>
              <div className="flex gap-3">
                {socials.map(({ label, icon: Icon, href, color }) => (
                  <a key={label} href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 border border-[#ffffff22] text-gray-400 px-4 py-2.5 font-mono text-xs tracking-wider uppercase transition-all duration-200 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={14} />{label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 border border-[#39ff1422] bg-[#39ff1408] px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14] animate-pulse" />
              <span className="font-mono text-xs text-[#39ff14] tracking-widest uppercase">
                TERSEDIA UNTUK KETERLIBATAN RESMI
              </span>
            </div>
          </motion.div>

          {/* Kanan — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {terkirim ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-2 border-[#39ff14] bg-[#0a0a0a] p-10 text-center shadow-[4px_4px_0_#00f5ff]"
              >
                <div className="w-16 h-16 border-2 border-[#39ff14] flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-[#39ff14]" />
                </div>
                <div className="font-display text-xl font-black text-[#39ff14] uppercase mb-2">
                  TRANSMISI TERKIRIM
                </div>
                <p className="font-mono text-sm text-gray-400">
                  Klien email Anda seharusnya terbuka. Saya akan merespons sesegera mungkin.
                </p>
                <button
                  onClick={() => { setTerkirim(false); setForm({ nama: "", email: "", subjek: "", pesan: "" }); }}
                  className="mt-6 font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[#00f5ff33] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#050505] transition-all duration-200"
                >
                  KIRIM LAGI
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nama" className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1">NAMA *</label>
                    <input id="nama" name="nama" value={form.nama} onChange={handleChange}
                      placeholder="Nama Anda" className={inputClass} required maxLength={100} />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1">EMAIL *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="email@anda.com" className={inputClass} required maxLength={200} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subjek" className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1">SUBJEK</label>
                  <input id="subjek" name="subjek" value={form.subjek} onChange={handleChange}
                    placeholder="Pengujian keamanan / proyek / lainnya" className={inputClass} maxLength={200} />
                </div>

                <div>
                  <label htmlFor="pesan" className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1">PESAN *</label>
                  <textarea id="pesan" name="pesan" value={form.pesan} onChange={handleChange}
                    placeholder="Ceritakan proyek atau keterlibatan Anda..."
                    rows={6} className={`${inputClass} resize-none`} required maxLength={2000} />
                </div>

                {error && (
                  <p className="font-mono text-xs text-[#ff0033] border border-[#ff003333] bg-[#ff003308] px-3 py-2">
                    {error}
                  </p>
                )}

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 font-mono text-sm tracking-widest uppercase px-6 py-4 bg-[#00f5ff] text-[#050505] font-bold hover:bg-[#00f5ff]/90 transition-all duration-200 clip-angled-sm shadow-[0_0_20px_#00f5ff33]"
                >
                  <Send size={15} />KIRIM TRANSMISI
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
