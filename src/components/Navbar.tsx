"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

const navLinks = siteConfig.ui.navLinks;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-[#00f5ff22] shadow-[0_4px_30px_#00f5ff11]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="font-display text-sm md:text-base font-black tracking-widest text-white hover:text-[#00f5ff] transition-colors duration-200"
          >
            <span className="text-[#00f5ff]">RH</span>
            <span className="text-white/40 mx-1">//</span>
            <span>SECURITY</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-5">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className={cn(
                    "font-mono text-[10px] tracking-widest uppercase transition-all duration-200 relative group",
                    activeSection === href.replace("#", "")
                      ? "text-[#00f5ff]"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-[#00f5ff] transition-all duration-200",
                      activeSection === href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#050505] transition-all duration-200 clip-angled-sm"
            >
              <FileText size={12} />
              {siteConfig.ui.viewResume}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#00f5ff] p-1"
              aria-label="Buka menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-[#00f5ff22] flex flex-col pt-20 pb-8 px-6"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(href)}
                    className={cn(
                      "w-full text-left font-mono text-sm tracking-widest uppercase py-3 px-4 border-l-2 transition-all duration-200",
                      activeSection === href.replace("#", "")
                        ? "border-[#00f5ff] text-[#00f5ff] bg-[#00f5ff0a]"
                        : "border-transparent text-gray-400 hover:text-white hover:border-[#00f5ff44]"
                    )}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="flex items-center justify-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-3 border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#050505] transition-all duration-200 w-full"
              >
                <FileText size={13} />
                {siteConfig.ui.viewResume}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
