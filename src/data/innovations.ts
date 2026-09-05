export type InnovationStatus = "IDEA" | "PROTOTYPE" | "IN DEVELOPMENT" | "COMING SOON";

export interface Innovation {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  status: InnovationStatus;
  tags: string[];
}

export const innovations: Innovation[] = [
  {
    id: "i01",
    number: "01",
    title: "AI SECURITY SCANNER",
    description:
      "AI-assisted security analysis platform to help identify security patterns in web applications, surfacing potential vulnerabilities through intelligent analysis.",
    icon: "🤖",
    status: "IDEA",
    tags: ["AI", "Security", "Web App"],
  },
  {
    id: "i02",
    number: "02",
    title: "SMART VULNERABILITY DASHBOARD",
    description:
      "Dashboard for grouping vulnerabilities by severity, affected component, remediation status, and timeline — giving a clear picture of security posture.",
    icon: "📊",
    status: "IDEA",
    tags: ["Dashboard", "Vulnerability", "Analytics"],
  },
  {
    id: "i03",
    number: "03",
    title: "SECURITY COPILOT",
    description:
      "AI assistant to help security testers understand testing results, generate checklists, organize findings, and draft professional reports.",
    icon: "🧠",
    status: "IDEA",
    tags: ["AI", "Automation", "Reporting"],
  },
  {
    id: "i04",
    number: "04",
    title: "AUTOMATED SECURITY REPORTER",
    description:
      "System that transforms raw security testing data into structured, professional reports automatically — saving hours of manual documentation.",
    icon: "📝",
    status: "PROTOTYPE",
    tags: ["Automation", "Reporting", "Security"],
  },
  {
    id: "i05",
    number: "05",
    title: "WEB SECURITY LAB",
    description:
      "Sandbox learning platform for studying application security and vulnerability techniques legally and safely — a structured environment for security education.",
    icon: "🔬",
    status: "IN DEVELOPMENT",
    tags: ["Education", "Sandbox", "Security"],
  },
  {
    id: "i06",
    number: "06",
    title: "PHISHING AWARENESS SIMULATOR",
    description:
      "Educational simulator to help organizations understand phishing risks without collecting real credentials. Purely for awareness training and security education.",
    icon: "🎣",
    status: "IDEA",
    tags: ["Phishing", "Education", "Awareness"],
  },
  {
    id: "i07",
    number: "07",
    title: "API SECURITY MONITOR",
    description:
      "Tool for monitoring and analyzing API security — tracking authentication, authorization, input validation, and rate limiting in real time.",
    icon: "🔌",
    status: "IDEA",
    tags: ["API", "Monitoring", "Security"],
  },
  {
    id: "i08",
    number: "08",
    title: "SECURITY SCORE",
    description:
      "Scoring system that provides a clear security level overview for an application based on a comprehensive security checklist and automated testing.",
    icon: "⭐",
    status: "IDEA",
    tags: ["Scoring", "Assessment", "Security"],
  },
  {
    id: "i09",
    number: "09",
    title: "BUG BOUNTY ASSISTANT",
    description:
      "Tool to help security researchers organize findings, evidence, severity ratings, remediation suggestions, and reports in a structured workflow.",
    icon: "🐛",
    status: "PROTOTYPE",
    tags: ["Bug Bounty", "Organization", "Research"],
  },
  {
    id: "i10",
    number: "10",
    title: "DIGITAL SECURITY COMMAND CENTER",
    description:
      "Futuristic dashboard combining vulnerability tracking, security testing management, project monitoring, reports, and security metrics in one unified interface.",
    icon: "🖥️",
    status: "COMING SOON",
    tags: ["Dashboard", "Command Center", "Security"],
  },
];
