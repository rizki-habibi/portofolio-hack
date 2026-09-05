export type ProjectCategory = "Keamanan Web" | "Keamanan Siber" | "Riset Keamanan" | "Pengembangan";
export type ProjectStatus = "SELESAI" | "SEDANG BERJALAN" | "PROTOTIPE";

export interface Project {
  id: string;
  judul: string;
  kategori: ProjectCategory;
  deskripsi: string;
  teknologi: string[];
  fokusKeamanan: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  status: ProjectStatus;
  unggulan: boolean;
}

export const projects: Project[] = [
  {
    id: "p1",
    judul: "Pengujian Keamanan Aplikasi Web",
    kategori: "Keamanan Web",
    deskripsi:
      "Metodologi pengujian keamanan terstruktur untuk mengidentifikasi kerentanan umum pada aplikasi web termasuk OWASP Top 10.",
    teknologi: ["Burp Suite", "OWASP ZAP", "PHP", "MySQL"],
    fokusKeamanan: "OWASP Top 10 / SQL Injection / XSS / CSRF",
    githubUrl: "https://github.com/rizki-habibi",
    status: "SELESAI",
    unggulan: true,
  },
  {
    id: "p2",
    judul: "Dashboard Keamanan",
    kategori: "Keamanan Siber",
    deskripsi:
      "Dashboard interaktif untuk mengorganisasi dan memantau hasil pengujian keamanan. Menampilkan temuan berdasarkan tingkat keparahan, komponen, dan status remediasi.",
    teknologi: ["Next.js", "TypeScript", "Tailwind CSS"],
    fokusKeamanan: "Pelacakan Kerentanan / Metrik Keamanan",
    githubUrl: "https://github.com/rizki-habibi",
    status: "SEDANG BERJALAN",
    unggulan: true,
  },
  {
    id: "p3",
    judul: "Lab Keamanan Aplikasi Web",
    kategori: "Riset Keamanan",
    deskripsi:
      "Lingkungan terkontrol untuk mempelajari keamanan aplikasi dan teknik defensif. Dibangun untuk praktik analisis kerentanan yang legal dan aman.",
    teknologi: ["Docker", "Linux", "PHP", "Laravel"],
    fokusKeamanan: "Riset Kerentanan / Keamanan Defensif",
    githubUrl: "https://github.com/rizki-habibi",
    status: "SEDANG BERJALAN",
    unggulan: true,
  },
  {
    id: "p4",
    judul: "Penguji Keamanan REST API",
    kategori: "Keamanan Web",
    deskripsi:
      "Alat untuk menguji endpoint REST API dari miskonfigurasi keamanan umum, autentikasi yang tidak tepat, dan masalah validasi input.",
    teknologi: ["Python", "Postman", "REST API"],
    fokusKeamanan: "Keamanan API / Pengujian Autentikasi",
    githubUrl: "https://github.com/rizki-habibi",
    status: "PROTOTIPE",
    unggulan: false,
  },
];
