export type ProjectCategory = "Web Security" | "Cybersecurity" | "Security Research" | "Development";
export type ProjectStatus = "COMPLETED" | "IN PROGRESS" | "PROTOTYPE";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  securityFocus: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  status: ProjectStatus;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Secure Web Application Testing",
    category: "Web Security",
    description:
      "Security testing methodology for identifying common application vulnerabilities including OWASP Top 10. A structured approach to web application security assessment.",
    technologies: ["Burp Suite", "OWASP ZAP", "PHP", "MySQL"],
    securityFocus: "OWASP Top 10 / SQL Injection / XSS / CSRF",
    githubUrl: "https://github.com/YOUR_GITHUB",
    status: "COMPLETED",
    featured: true,
  },
  {
    id: "p2",
    title: "Security Dashboard",
    category: "Cybersecurity",
    description:
      "Interactive dashboard for organizing and monitoring security testing results. Visualizes findings by severity, component, and remediation status.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    securityFocus: "Vulnerability Tracking / Security Metrics",
    githubUrl: "https://github.com/YOUR_GITHUB",
    status: "IN PROGRESS",
    featured: true,
  },
  {
    id: "p3",
    title: "Web Application Security Lab",
    category: "Security Research",
    description:
      "Controlled environment for studying application security and defensive techniques. Built for legal, safe practice of vulnerability analysis.",
    technologies: ["Docker", "Linux", "PHP", "Laravel"],
    securityFocus: "Vulnerability Research / Defensive Security",
    githubUrl: "https://github.com/YOUR_GITHUB",
    status: "IN PROGRESS",
    featured: true,
  },
  {
    id: "p4",
    title: "REST API Security Tester",
    category: "Web Security",
    description:
      "Automated tool for testing REST API endpoints for common security misconfigurations, improper authentication, and input validation issues.",
    technologies: ["Python", "Postman", "REST API"],
    securityFocus: "API Security / Authentication Testing",
    githubUrl: "https://github.com/YOUR_GITHUB",
    status: "PROTOTYPE",
    featured: false,
  },
];
