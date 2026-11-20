export const profile = {
  name: "Cheng Chanpanha",
  role: "Software Developer",
  email: "chanpanhacheng@gmail.com",
  location: "Phnom Penh, Cambodia",
  address: "Svay Pak, Russey Keo, Phnom Penh",
  phone: "010 667 732",
  github: "https://github.com/ChanpanhaCheng",
  linkedin: "https://www.linkedin.com/in/cheng-chanpanha-7a7999371/",
};

export const contactMethods = [
  { label: "Personal email", value: profile.email, href: `mailto:${profile.email}`, kind: "email" },
  { label: "School email", value: "chanpanha.cheng@student.cadt.edu.kh", href: "mailto:chanpanha.cheng@student.cadt.edu.kh", kind: "school" },
  { label: "Telegram", value: "@PanhaIsMe", href: "https://t.me/PanhaIsMe", kind: "telegram" },
  { label: "LinkedIn", value: profile.name, href: profile.linkedin, kind: "linkedin" },
  { label: "GitHub · Main", value: "ChanpanhaCheng", href: profile.github, kind: "github" },
  { label: "GitHub · Alt", value: "PanhaIsMe", href: "https://github.com/PanhaIsMe", kind: "github" },
];

// Technologies documented in the portfolio and CV.
export const skillGroups = [
  { title: "Backend & systems", description: "APIs, authentication, business logic, and server-side applications.", skills: ["Node.js", "NestJS", "Express.js", "TypeScript", "Java", "Spring Boot"] },
  { title: "Data & infrastructure", description: "Databases, data preparation, and application performance.", skills: ["PostgreSQL", "MySQL", "MongoDB", "Python", "Redis", "Nginx"] },
  { title: "Web & mobile", description: "Responsive interfaces and cross-platform applications.", skills: ["React", "Next.js", "Flutter", "Figma"] },
];

export const education = [
  { title: "Bachelor of Computer Science", institution: "Cambodia Academy of Digital Technology", date: "2024 – Present" },
  { title: "GEP 11 A", institution: "ACE", date: "2024 – Present" },
];
export const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Upper intermediate (B2)" },
  { name: "Japanese", level: "Basic" },
];
