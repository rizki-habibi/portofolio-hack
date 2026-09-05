import { siteConfig } from "@/config/siteConfig";

export const socials = [
  {
    name: "GitHub",
    url: siteConfig.social.github,
    icon: "github",
    username: "@YOUR_GITHUB",
  },
  {
    name: "LinkedIn",
    url: siteConfig.social.linkedin,
    icon: "linkedin",
    username: "Rizki Habibi",
  },
  {
    name: "Email",
    url: `mailto:${siteConfig.social.email}`,
    icon: "mail",
    username: siteConfig.social.email,
  },
];
