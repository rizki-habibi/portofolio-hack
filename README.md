# Rizki Habibi — Portfolio

**Ethical Hacker & Security Tester | Developer**

> "Break It. Test It. Secure It."

A cybersecurity comic book-themed portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## ⚙️ Configuration

All personal data is centralized in `/src/config/siteConfig.ts`:

```ts
export const siteConfig = {
  name: "Rizki Habibi",
  domain: "YOUR-DOMAIN.COM",
  url: "https://YOUR-DOMAIN.COM",
  social: {
    github: "https://github.com/YOUR_GITHUB",
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
    email: "your@email.com",
  },
  // ...
};
```

## 📁 Data Files

Edit these files to update content without touching UI:

| File | Content |
|------|---------|
| `src/config/siteConfig.ts` | Name, domain, bio, stats, socials |
| `src/data/projects.ts` | Portfolio projects |
| `src/data/skills.ts` | Skills & levels |
| `src/data/innovations.ts` | 10 innovation ideas |
| `src/data/certificates.ts` | Certificates |
| `src/data/trainingResources.ts` | 100 free training links |

## 🎮 Easter Egg

Type **`RIZKI`** anywhere on the page to unlock the secret terminal.

## 🛡️ Security

This website implements:
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security
- Referrer-Policy
- Permissions-Policy

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Deploy — zero config needed

---

*All security testing referenced on this portfolio is performed only on authorized systems.*
