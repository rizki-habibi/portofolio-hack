export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
export type SkillCategory = "SECURITY" | "DEVELOPMENT" | "TOOLS";

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon: string; // emoji / CDN icon class
}

export const skills: Skill[] = [
  // SECURITY
  { name: "Ethical Hacking", level: "Advanced", category: "SECURITY", icon: "🛡️" },
  { name: "Web Security Testing", level: "Advanced", category: "SECURITY", icon: "🔍" },
  { name: "Penetration Testing", level: "Intermediate", category: "SECURITY", icon: "⚡" },
  { name: "Vulnerability Assessment", level: "Intermediate", category: "SECURITY", icon: "🎯" },
  { name: "Security Auditing", level: "Intermediate", category: "SECURITY", icon: "📋" },
  { name: "OWASP Testing", level: "Advanced", category: "SECURITY", icon: "🔐" },
  { name: "Bug Hunting", level: "Intermediate", category: "SECURITY", icon: "🐛" },

  // DEVELOPMENT
  { name: "Laravel", level: "Advanced", category: "DEVELOPMENT", icon: "🔴" },
  { name: "PHP", level: "Advanced", category: "DEVELOPMENT", icon: "🐘" },
  { name: "JavaScript", level: "Advanced", category: "DEVELOPMENT", icon: "🟨" },
  { name: "TypeScript", level: "Intermediate", category: "DEVELOPMENT", icon: "🔷" },
  { name: "React", level: "Intermediate", category: "DEVELOPMENT", icon: "⚛️" },
  { name: "Next.js", level: "Intermediate", category: "DEVELOPMENT", icon: "▲" },
  { name: "REST API", level: "Advanced", category: "DEVELOPMENT", icon: "🔌" },
  { name: "MySQL", level: "Advanced", category: "DEVELOPMENT", icon: "🗄️" },

  // TOOLS
  { name: "Burp Suite", level: "Intermediate", category: "TOOLS", icon: "🕷️" },
  { name: "Nmap", level: "Intermediate", category: "TOOLS", icon: "📡" },
  { name: "Wireshark", level: "Beginner", category: "TOOLS", icon: "🦈" },
  { name: "Git", level: "Advanced", category: "TOOLS", icon: "🌿" },
  { name: "Linux", level: "Intermediate", category: "TOOLS", icon: "🐧" },
  { name: "Docker", level: "Beginner", category: "TOOLS", icon: "🐳" },
  { name: "Postman", level: "Advanced", category: "TOOLS", icon: "📮" },
];
