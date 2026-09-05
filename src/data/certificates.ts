export type CertCategory = "KEAMANAN" | "PENGEMBANGAN" | "JARINGAN" | "LAINNYA";
export type CertStatus = "AKTIF" | "KADALUARSA" | "SEGERA HADIR";

export interface Certificate {
  id: string;
  nama: string;
  penerbit: string;
  tanggal: string;
  idKredensial: string;
  urlVerifikasi: string;
  kategori: CertCategory;
  status: CertStatus;
  deskripsi?: string;
}

export const certificates: Certificate[] = [
  {
    id: "c1",
    nama: "Sertifikat Ethical Hacking",
    penerbit: "[Nama Organisasi]",
    tanggal: "[Tanggal]",
    idKredensial: "[ID Kredensial]",
    urlVerifikasi: "#",
    kategori: "KEAMANAN",
    status: "SEGERA HADIR",
    deskripsi: "Detail sertifikat akan segera ditambahkan.",
  },
  {
    id: "c2",
    nama: "Keamanan Aplikasi Web",
    penerbit: "[Nama Organisasi]",
    tanggal: "[Tanggal]",
    idKredensial: "[ID Kredensial]",
    urlVerifikasi: "#",
    kategori: "KEAMANAN",
    status: "SEGERA HADIR",
    deskripsi: "Detail sertifikat akan segera ditambahkan.",
  },
  {
    id: "c3",
    nama: "Dasar-dasar Penetration Testing",
    penerbit: "[Nama Organisasi]",
    tanggal: "[Tanggal]",
    idKredensial: "[ID Kredensial]",
    urlVerifikasi: "#",
    kategori: "KEAMANAN",
    status: "SEGERA HADIR",
    deskripsi: "Detail sertifikat akan segera ditambahkan.",
  },
  {
    id: "c4",
    nama: "Keamanan Jaringan",
    penerbit: "[Nama Organisasi]",
    tanggal: "[Tanggal]",
    idKredensial: "[ID Kredensial]",
    urlVerifikasi: "#",
    kategori: "JARINGAN",
    status: "SEGERA HADIR",
    deskripsi: "Detail sertifikat akan segera ditambahkan.",
  },
  {
    id: "c5",
    nama: "Pengembangan Web",
    penerbit: "[Nama Organisasi]",
    tanggal: "[Tanggal]",
    idKredensial: "[ID Kredensial]",
    urlVerifikasi: "#",
    kategori: "PENGEMBANGAN",
    status: "SEGERA HADIR",
    deskripsi: "Detail sertifikat akan segera ditambahkan.",
  },
];
