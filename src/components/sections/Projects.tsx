"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: { label: string; value: ProjectCategory | "ALL" }[] = [
  { label: "ALL", value: "ALL" },
  { label: "WEB SECURITY", value: "Web Security" },
  { label: "CYBERSECURITY", value: "Cybersecurity" },
  { label: "SECURITY RESEARCH", value: "Security Research" },
  { label: "DEVELOPMENT", value: "Development" },
];

const statusColors = {
  COMPLETED: { text: "text-[#39ff14]", border: "border-[#39ff1444]", bg: "bg-[#39ff1411]" },
  "IN PROGRESS": { text: "text-[#00f5ff]", border: "border-[#00f5ff44]", bg: "bg-[#00f5ff11]" },
  PROTOTYPE: { text: "text-[#bf00ff]", border: "border-[#bf00ff44]", bg: "bg-[#bf00ff11]" },
};

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "ALL">("ALL");
  const filtered = active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[radial-gradient(ellipse,rgba(0,245,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          chapter="CHAPTER 03"
          title="FIELD REPORTS"
          subtitle="Projects, security research, and technical work. Add new entries in /src/data/projects.ts"
          align="center"
          variant="cyan"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 clip-angled-sm ${
                active === value
                  ? "border-[#00f5ff] bg-[#00f5ff] text-[#050505] font-bold"
                  : "border-[#00f5ff22] text-gray-400 hover:border-[#00f5ff55] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => {
            const sc = statusColors[project.status];
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.01 }}
                className="bg-[#0a0a0a] border-2 border-[#00f5ff22] hover:border-[#00f5ff66] shadow-[4px_4px_0_#00f5ff11] hover:shadow-[4px_4px_0_#bf00ff44] transition-all duration-300 overflow-hidden group"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#ffffff08] bg-[#080808]">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${sc.bg} border ${sc.border}`} />
                    <span className={`font-mono text-[10px] tracking-widest uppercase ${sc.text}`}>
                      {project.status}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-gray-600 tracking-wider">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-display text-lg font-black text-white uppercase tracking-wide mb-2 group-hover:text-[#00f5ff] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Security focus */}
                  <div className="flex items-start gap-2 mb-4 p-3 border border-[#ff003322] bg-[#ff003308]">
                    <span className="text-[#ff0033] text-xs mt-0.5">🎯</span>
                    <span className="font-mono text-[10px] text-[#ff003388] tracking-wide leading-relaxed">
                      SECURITY FOCUS: {project.securityFocus}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 flex-wrap">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase px-3 py-2 border border-[#00f5ff33] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#050505] transition-all duration-200"
                      >
                        <Github size={12} />
                        GITHUB
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase px-3 py-2 border border-[#bf00ff33] text-[#bf00ff] hover:bg-[#bf00ff] hover:text-[#050505] transition-all duration-200"
                      >
                        <ExternalLink size={12} />
                        LIVE DEMO
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase px-3 py-2 border border-[#39ff1433] text-[#39ff14] hover:bg-[#39ff14] hover:text-[#050505] transition-all duration-200"
                      >
                        <BookOpen size={12} />
                        CASE STUDY
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
