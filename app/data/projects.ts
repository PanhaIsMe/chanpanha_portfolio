// Existing portfolio content; keep personal claims grounded in these records.
export type Project = {
  title: string; date: string; role: string; bullets: string[];
  slug: string; category: string; summary: string; tags: string[];
  notes: [string, string, string];
};
const originalProjects = [
    {
        title: "Domrov LMS Automation",
        date: "Dec 2025 - Now",
        role: "Developer Member",
        bullets: [
            "Developed system algorithms and payment features.",
            "Contributed to database and Figma design.",
            "Collaborated effectively to complete tasks on time."
        ]
    },
    {
        title: "Cam Bookstore",
        date: "June 2025 - July 2025",
        role: "Backend Developer & Team lead",
        bullets: [
            "Designed and developed backend services using RESTful APIs.",
            "Implemented database operations using a SQL library to manage and retrieve data efficiently.",
            "Developed payment-related backend logic and system algorithms.",
            "Collaborated with team members on database design and UI planning to deliver project features on schedule."
        ]
    }, 
    {
        title: "Ecomind Game",
        date: "June 2025 - July 2025",
        role: "Team Member",
        bullets: [
            "Translated content between languages to support project communication and documentation.",
            "Performed QA testing to identify bugs and ensure system functionality and usability.",
            "Analyzed real-world scenarios and business logic to support system requirements and improvements."
        ]
    },
    {
        title: "Advanced Algorithms Bank Management System",
        date: "Nov 2025 - Dec 2025",
        role: "Team Member",
        bullets: [
            "Developed a bank management system as part of an advanced algorithms project.",
            "Analyzed real-world banking workflows and translated them into system logic.",
            "Applied algorithmic concepts to implement core banking operations efficiently."
        ]
    },
    {
        title: "School Management System",
        date: "Feb 2025 - Mar 2025",
        role: "Team Member",
        bullets: [
            "Applied object-oriented programming (OOP) principles in Java to develop system features.",
            "Designed and implemented the graphical user interface (GUI) for the application.",
            "Implemented algorithms to support core school management functionalities."
        ]
    },
    {
        title: "ងាយម្រា App",
        date: "Dec 2025 - Jan 2026",
        role: "Team Leader",
        bullets: [
            "Led the development of a mobile application using Flutter.",
            "Applied UI/UX design principles to improve usability and user experience.",
            "Collaborated with the team to design solutions addressing real-world problems."
        ]
    },
    {
        title: "Quiz Fun",
        date: "May 2025 - Jul 2025",
        role: "Team Member",
        bullets: [
            "Modified and improved frontend design.",
            "Worked with MongoDB, Redis, and Nginx.",
            "Built CRUD system features."
        ]
    },
    {
        title: "Game No Longer Exits ",
        date: "Oct 2025 - Dec 2025 ",
        role: "2D Designer",
        bullets: [
            "Managed 2D scenes.",
            "Directed story development.",
        ]
    },
    {
        title: "Database Administration Computer Store System ",
        date: "Sep 2025 - Nov 2025  ",
        role: "Database Design",
        bullets: [
            "Managed large data systems.",
            "Set up automatic backups.",
            "Improved search and query speed."
        ]
    },

];

const presentation = [
  { slug: "domrov-lms", category: "Learning management", summary: "Algorithms, payment features, and database design for a learning management system.", tags: ["Algorithms", "Payment features", "Database design"], notes: ["System algorithms", "Payment features", "Database & Figma"] },
  { slug: "cam-bookstore", category: "Backend development", summary: "RESTful services, database operations, and payment logic for a bookstore project.", tags: ["REST APIs", "SQL", "Team leadership"], notes: ["RESTful services", "SQL operations", "Payment logic"] },
  { slug: "ecomind-game", category: "Game collaboration", summary: "Translation, quality assurance, and business analysis for a game project.", tags: ["QA testing", "Translation", "Business logic"], notes: ["Translation", "QA testing", "Requirements"] },
  { slug: "bank-management", category: "Algorithms", summary: "Translating banking workflows into system logic through an advanced algorithms project.", tags: ["Algorithms", "System logic"], notes: ["Banking workflows", "System logic", "Core operations"] },
  { slug: "school-management", category: "Desktop software", summary: "Java application features, a graphical interface, and school management algorithms.", tags: ["Java", "OOP", "GUI"], notes: ["OOP principles", "Interface design", "Algorithms"] },
  { slug: "mobile-app", category: "Mobile development", summary: "Leading a Flutter mobile application project with a focus on usability and teamwork.", tags: ["Flutter", "UI/UX", "Team leadership"], notes: ["Team leadership", "Flutter development", "UI/UX design"] },
  { slug: "quiz-fun", category: "Web development", summary: "Frontend improvements and CRUD features, with work across MongoDB, Redis, and Nginx.", tags: ["MongoDB", "Redis", "Nginx"], notes: ["Frontend design", "CRUD features", "MongoDB · Redis · Nginx"] },
  { slug: "game-no-longer-exits", category: "Game design", summary: "2D scene management and story direction for a game project.", tags: ["2D design", "Story development"], notes: ["2D scenes", "Story direction", "Game design"] },
  { slug: "computer-store", category: "Database administration", summary: "Database design, automatic backups, and query improvements for a computer store system.", tags: ["Database design", "Backups", "Queries"], notes: ["Data management", "Automatic backups", "Query improvements"] },
] satisfies Omit<Project, "title" | "date" | "role" | "bullets">[];

const taskDurationProject: Project = {
  title: "Intelligent Task Duration Estimation",
  date: "Nov 2026 – Present",
  role: "Academic project · In progress",
  slug: "intelligent-task-duration-estimation",
  category: "Machine learning",
  summary: "Exploring whether historical software issues can help teams estimate how long tasks will take.",
  bullets: [
    "Analyzed and visualized issue-tracker data in a Python notebook to understand the fields available for estimation.",
    "Checked for duplicate records and examined which timestamps were available to measure task duration.",
    "Outlined how to compare regression models with a historical median baseline using a later period for evaluation.",
  ],
  tags: ["Python", "Data preprocessing", "Regression"],
  notes: ["Dataset analysis", "Data preprocessing", "Evaluation planning"],
};

export const projects: Project[] = [
  ...originalProjects.map((project, index) => ({ ...project, title: project.title.trim(), date: project.date.trim(), ...presentation[index] })),
  taskDurationProject,
];
export const featuredProjects = [projects[0], projects[1], projects[6]];
export const experiences = [
    {
        title: "Ministry of Public Works and Transport",
        date: "May 2026 – Jul 2026",
        role: "Backend Developer",
        description: "Built REST APIs for a project management system, designed its database, and implemented business logic.",
    },
    {
        title: "Next-Gen Engagement",
        date: "Aug 2025 - Sep 2025",
        role: "Database Trainer",
        description: "Designed the training curriculum and taught database design to first-year university students.",
    },
    {
        title: "Winning University's Life event ",
        date: "Dec 2024 - Feb 2025 ",
        role: "Front Desk Information",
        description: "Greeted and assisted visitors, students, and staff while providing accurate information about university services, answering phone calls, and handling inquiries.",
    }
];
