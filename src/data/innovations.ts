export type InnovationStatus = "IDE" | "PROTOTIPE" | "DALAM PENGEMBANGAN" | "SEGERA HADIR";

export interface Innovation {
  id: string;
  nomor: string;
  judul: string;
  deskripsi: string;
  iconName: string; // Lucide icon name
  status: InnovationStatus;
  tags: string[];
}

export const innovations: Innovation[] = [
  {
    id: "i01", nomor: "01",
    judul: "PEMINDAI KEAMANAN AI",
    deskripsi: "Platform analisis keamanan berbasis AI untuk membantu mengidentifikasi pola keamanan pada aplikasi web dan menemukan potensi kerentanan secara cerdas.",
    iconName: "cpu",
    status: "IDE",
    tags: ["AI", "Keamanan", "Analisis Web"],
  },
  {
    id: "i02", nomor: "02",
    judul: "DASHBOARD KERENTANAN CERDAS",
    deskripsi: "Dashboard untuk mengelompokkan kerentanan berdasarkan tingkat keparahan, komponen terdampak, status remediasi, dan timeline — memberikan gambaran postur keamanan secara menyeluruh.",
    iconName: "bar-chart-2",
    status: "IDE",
    tags: ["Dashboard", "Kerentanan", "Analitik"],
  },
  {
    id: "i03", nomor: "03",
    judul: "ASISTEN KEAMANAN AI",
    deskripsi: "Asisten AI untuk membantu security tester memahami hasil pengujian, menghasilkan checklist, mengorganisir temuan, dan menyusun laporan profesional.",
    iconName: "bot",
    status: "IDE",
    tags: ["AI", "Otomasi", "Pelaporan"],
  },
  {
    id: "i04", nomor: "04",
    judul: "PELAPOR KEAMANAN OTOMATIS",
    deskripsi: "Sistem yang mengubah data pengujian keamanan mentah menjadi laporan terstruktur dan profesional secara otomatis — menghemat berjam-jam dokumentasi manual.",
    iconName: "file-text",
    status: "PROTOTIPE",
    tags: ["Otomasi", "Pelaporan", "Keamanan"],
  },
  {
    id: "i05", nomor: "05",
    judul: "LAB KEAMANAN WEB",
    deskripsi: "Platform pembelajaran berbasis sandbox untuk mempelajari keamanan aplikasi dan teknik kerentanan secara legal dan aman — lingkungan terstruktur untuk edukasi keamanan.",
    iconName: "flask-conical",
    status: "DALAM PENGEMBANGAN",
    tags: ["Edukasi", "Sandbox", "Keamanan"],
  },
  {
    id: "i06", nomor: "06",
    judul: "SIMULATOR KESADARAN PHISHING",
    deskripsi: "Simulator edukasi untuk membantu organisasi memahami risiko phishing tanpa mengumpulkan kredensial nyata. Murni untuk pelatihan kesadaran keamanan.",
    iconName: "mail-warning",
    status: "IDE",
    tags: ["Phishing", "Edukasi", "Kesadaran"],
  },
  {
    id: "i07", nomor: "07",
    judul: "MONITOR KEAMANAN API",
    deskripsi: "Alat untuk memantau dan menganalisis keamanan API — melacak autentikasi, otorisasi, validasi input, dan pembatasan kecepatan secara real time.",
    iconName: "plug",
    status: "IDE",
    tags: ["API", "Monitoring", "Keamanan"],
  },
  {
    id: "i08", nomor: "08",
    judul: "SKOR KEAMANAN",
    deskripsi: "Sistem penilaian yang memberikan gambaran tingkat keamanan aplikasi berdasarkan checklist komprehensif dan pengujian otomatis.",
    iconName: "star",
    status: "IDE",
    tags: ["Penilaian", "Skor", "Checklist"],
  },
  {
    id: "i09", nomor: "09",
    judul: "ASISTEN BUG BOUNTY",
    deskripsi: "Alat untuk membantu peneliti keamanan mengorganisir temuan, bukti, tingkat keparahan, saran remediasi, dan laporan dalam alur kerja yang terstruktur.",
    iconName: "bug",
    status: "PROTOTIPE",
    tags: ["Bug Bounty", "Organisasi", "Riset"],
  },
  {
    id: "i10", nomor: "10",
    judul: "PUSAT KOMANDO KEAMANAN DIGITAL",
    deskripsi: "Dashboard futuristik yang menggabungkan pelacakan kerentanan, manajemen pengujian keamanan, pemantauan proyek, laporan, dan metrik keamanan dalam satu antarmuka terpadu.",
    iconName: "monitor",
    status: "SEGERA HADIR",
    tags: ["Dashboard", "Komando", "Keamanan"],
  },
];
