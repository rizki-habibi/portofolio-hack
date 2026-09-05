"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ComicIntro from "@/components/sections/ComicIntro";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import SecurityWorkflow from "@/components/sections/SecurityWorkflow";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Innovations from "@/components/sections/Innovations";
import Timeline from "@/components/sections/Timeline";
import TrainingResources from "@/components/sections/TrainingResources";
import SecurityLab from "@/components/sections/SecurityLab";
import Principles from "@/components/sections/Principles";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const [konamiBuffer, setKonamiBuffer] = useState<string[]>([]);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Easter egg: type "RIZKI" anywhere on the page
  useEffect(() => {
    if (loading) return;
    const TARGET = ["R", "I", "Z", "K", "I"];

    const handleKey = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      setKonamiBuffer((prev) => {
        const next = [...prev, key].slice(-TARGET.length);
        if (next.join("") === TARGET.join("")) {
          setEasterEggOpen(true);
          return [];
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [loading, konamiBuffer]);

  // Animated cursor custom
  useEffect(() => {
    if (loading) return;
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.style.cssText = `
      position: fixed; width: 20px; height: 20px; pointer-events: none; z-index: 9999;
      border: 1px solid #00f5ff66; border-radius: 50%; transform: translate(-50%, -50%);
      transition: transform 0.1s ease, opacity 0.3s ease; mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);

    const dot = document.createElement("div");
    dot.style.cssText = `
      position: fixed; width: 4px; height: 4px; pointer-events: none; z-index: 9999;
      background: #00f5ff; border-radius: 50%; transform: translate(-50%, -50%);
    `;
    document.body.appendChild(dot);

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
      dot.remove();
    };
  }, [loading]);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <ComicIntro />
              <About />
              <Skills />
              <SecurityWorkflow />
              <Projects />
              <Certificates />
              <Innovations />
              <Timeline />
              <TrainingResources />
              <SecurityLab />
              <Principles />
              <Contact />
            </main>
            <Footer />
            <EasterEgg open={easterEggOpen} onClose={() => setEasterEggOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
