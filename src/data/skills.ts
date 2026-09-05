export type SkillLevel = "Pemula" | "Menengah" | "Mahir" | "Ahli";
export type SkillCategory = "KEAMANAN" | "PENGEMBANGAN" | "ALAT";

export interface Skill {
  nama: string;
  level: SkillLevel;
  kategori: SkillCategory;
  iconName: string; // Lucide icon name
}

export const skills: Skill[] = [
  // KEAMANAN
  { nama: "Ethical Hacking", level: "Mahir", kategori: "KEAMANAN", iconName: "shield" },
  { nama: "Pengujian Keamanan Web", level: "Mahir", kategori: "KEAMANAN", iconName: "globe" },
  { nama: "Penetration Testing", level: "Menengah", kategori: "KEAMANAN", iconName: "zap" },
  { nama: "Penilaian Kerentanan", level: "Menengah", kategori: "KEAMANAN", iconName: "search" },
  { nama: "Audit Keamanan", level: "Menengah", kategori: "KEAMANAN", iconName: "clipboard-list" },
  { nama: "Pengujian OWASP", level: "Mahir", kategori: "KEAMANAN", iconName: "lock" },
  { nama: "Bug Hunting", level: "Menengah", kategori: "KEAMANAN", iconName: "bug" },

  // PENGEMBANGAN
  { nama: "Laravel", level: "Mahir", kategori: "PENGEMBANGAN", iconName: "layers" },
  { nama: "PHP", level: "Mahir", kategori: "PENGEMBANGAN", iconName: "code" },
  { nama: "JavaScript", level: "Mahir", kategori: "PENGEMBANGAN", iconName: "code-2" },
  { nama: "TypeScript", level: "Menengah", kategori: "PENGEMBANGAN", iconName: "file-code" },
  { nama: "React", level: "Menengah", kategori: "PENGEMBANGAN", iconName: "atom" },
  { nama: "Next.js", level: "Menengah", kategori: "PENGEMBANGAN", iconName: "triangle" },
  { nama: "REST API", level: "Mahir", kategori: "PENGEMBANGAN", iconName: "plug" },
  { nama: "MySQL", level: "Mahir", kategori: "PENGEMBANGAN", iconName: "database" },

  // ALAT
  { nama: "Burp Suite", level: "Menengah", kategori: "ALAT", iconName: "crosshair" },
  { nama: "Nmap", level: "Menengah", kategori: "ALAT", iconName: "radar" },
  { nama: "Wireshark", level: "Pemula", kategori: "ALAT", iconName: "activity" },
  { nama: "Git", level: "Mahir", kategori: "ALAT", iconName: "git-branch" },
  { nama: "Linux", level: "Menengah", kategori: "ALAT", iconName: "terminal" },
  { nama: "Docker", level: "Pemula", kategori: "ALAT", iconName: "box" },
  { nama: "Postman", level: "Mahir", kategori: "ALAT", iconName: "send" },
];
