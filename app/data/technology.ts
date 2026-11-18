/** Local Devicon v2.17.0 assets; source and notices: public/technology/SOURCES.md. */
export const technologyByName: Record<string, { asset: string }> = {
  "Node.js": { asset: "nodejs" },
  NestJS: { asset: "nestjs" },
  "Express.js": { asset: "express" },
  Java: { asset: "java" },
  "Spring Boot": { asset: "spring" },
  PostgreSQL: { asset: "postgresql" },
  MySQL: { asset: "mysql" },
  MongoDB: { asset: "mongodb" },
  Redis: { asset: "redis" },
  Nginx: { asset: "nginx" },
  React: { asset: "react" },
  "Next.js": { asset: "nextjs" },
  Flutter: { asset: "flutter" },
  Figma: { asset: "figma" },
  "Tailwind CSS": { asset: "tailwindcss" },
  TypeScript: { asset: "typescript" },
};

// Explicitly documented connections only. Never infer a stack from a project title.
export const toolEvidence = [
  { slug: "domrov-lms", tools: ["Figma"], contribution: "Contributed to database and Figma design, alongside system algorithms and payment features." },
  { slug: "school-management", tools: ["Java"], contribution: "Applied object-oriented programming in Java, designed the graphical interface, and implemented school management algorithms." },
  { slug: "mobile-app", tools: ["Flutter"], contribution: "Led the development of a Flutter mobile application and applied UI/UX principles to improve usability." },
  { slug: "quiz-fun", tools: ["MongoDB", "Redis", "Nginx"], contribution: "Worked with MongoDB, Redis, and Nginx, built CRUD features, and improved the frontend design." },
];

export const evidenceTools = ["Java", "Flutter", "Figma", "MongoDB", "Redis", "Nginx"];
export const toolsForProject = (slug: string) => toolEvidence.find(item => item.slug === slug)?.tools ?? [];
