export type CertCategory = "SECURITY" | "DEVELOPMENT" | "NETWORKING" | "OTHER";
export type CertStatus = "ACTIVE" | "EXPIRED" | "COMING SOON";

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  category: CertCategory;
  status: CertStatus;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: "c1",
    name: "Ethical Hacking Certificate",
    issuer: "[Organization Name]",
    date: "[Date]",
    credentialId: "[Credential ID]",
    verificationUrl: "#",
    category: "SECURITY",
    status: "COMING SOON",
    description: "Certificate details coming soon.",
  },
  {
    id: "c2",
    name: "Web Application Security",
    issuer: "[Organization Name]",
    date: "[Date]",
    credentialId: "[Credential ID]",
    verificationUrl: "#",
    category: "SECURITY",
    status: "COMING SOON",
    description: "Certificate details coming soon.",
  },
  {
    id: "c3",
    name: "Penetration Testing Fundamentals",
    issuer: "[Organization Name]",
    date: "[Date]",
    credentialId: "[Credential ID]",
    verificationUrl: "#",
    category: "SECURITY",
    status: "COMING SOON",
    description: "Certificate details coming soon.",
  },
  {
    id: "c4",
    name: "Network Security",
    issuer: "[Organization Name]",
    date: "[Date]",
    credentialId: "[Credential ID]",
    verificationUrl: "#",
    category: "NETWORKING",
    status: "COMING SOON",
    description: "Certificate details coming soon.",
  },
  {
    id: "c5",
    name: "Web Development",
    issuer: "[Organization Name]",
    date: "[Date]",
    credentialId: "[Credential ID]",
    verificationUrl: "#",
    category: "DEVELOPMENT",
    status: "COMING SOON",
    description: "Certificate details coming soon.",
  },
];
