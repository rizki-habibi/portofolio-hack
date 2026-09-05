"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const footerLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Inovasi", href: "#innovations" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak", href: "#contact" },
];

const socials = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.social.email}`, label: "Email" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#00f5ff11] bg-[#050505] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff33] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Merek */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-black tracking-widest">
              <span className="text-[#00f5ff]">RH</span>
              <span className="text-white/30 mx-1">//</span>
              <span className="text-white">SECURITY</span>
            </div>
            <div className="font-display text-sm text-white uppercase tracking-wide">
              {siteConfig.nama}
            </div>
            <div className="font-mono text-xs text-gray-500">{siteConfig.role}</div>
            <div className="border border-[#00f5ff22] bg-[#00f5ff08] px-3 py-2 inline-block">
              <p className="font-comic text-lg text-[#00f5ff]">
                &ldquo;{siteConfig.taglineEn}&rdquo;
              </p>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <div className="font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase mb-5">
              NAVIGASI
            </div>
            <ul className="space-y-2">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="font-mono text-xs text-gray-500 hover:text-[#00f5ff] transition-colors tracking-wider uppercase flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#00f5ff00] group-hover:bg-[#00f5ff] transition-all duration-200" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi */}
          <div>
            <div className="font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase mb-5">
              HUBUNGI
            </div>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-[#00f5ff] transition-colors group"
                  aria-label={label}
                >
                  <Icon size={14} className="group-hover:text-[#00f5ff]" />
                  <span className="font-mono text-xs tracking-wider">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 border border-[#39ff1422] bg-[#39ff1408] px-3 py-2 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="font-mono text-[9px] text-[#39ff14] tracking-widest uppercase">
                PENGUJIAN KEAMANAN RESMI SAJA
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#00f5ff22] to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-gray-700 tracking-wider">
            &copy; 2026 {siteConfig.nama}. Seluruh hak dilindungi.
          </p>
          <div className="flex items-center gap-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bg-[#00f5ff22]"
                style={{ width: i % 3 === 0 ? 2 : 1, height: i % 4 === 0 ? 12 : 8 }} />
            ))}
          </div>
          <p className="font-mono text-[10px] text-gray-700 tracking-wider">
            DIBANGUN DENGAN NEXT.JS + TAILWIND CSS
          </p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00f5ff44, transparent)" }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  );
}
