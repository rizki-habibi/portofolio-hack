import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.nama} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.nama}`,
  },
  description: siteConfig.deskripsi,
  keywords: [
    "Rizki Habibi",
    "Ethical Hacker",
    "Security Tester",
    "Penetration Testing",
    "Web Security",
    "Keamanan Siber",
    "Bug Hunting",
    "OWASP",
    "Portofolio",
  ],
  authors: [{ name: siteConfig.nama, url: siteConfig.url }],
  creator: siteConfig.nama,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: `${siteConfig.nama} — ${siteConfig.role}`,
    description: siteConfig.deskripsi,
    siteName: siteConfig.nama,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.nama} — ${siteConfig.role}`,
    description: siteConfig.deskripsi,
    creator: "@rizki_habibi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Bangers&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
