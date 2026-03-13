// import Navbar from "../components/Navbar"
import { Award, User } from 'lucide-react';

// --- 1. DATA ARRAYS ---
const experiencesData = [
    {
        title: "Next-Gen Engagement",
        date: "Aug 2025 - Sep 2025",
        role: "Database Trainer",
        description: "Teaching freshmen students about database design.",
    },
    {
        title: "Winning University's Life event ",
        date: "Dec 2024 - Feb 2025 ",
        role: "Front Desk Information",
        description: "Greeted and assisted visitors, students, and staff while providing accurate information about university services, answering phone calls, and handling inquiries.",
    }
];

const projectsData = [
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

// --- 2. REUSABLE CARD COMPONENT ---
function InfoCard({ title, date, role, description, bullets }) {
    return (
        <div className="bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900">{title}</h3>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium whitespace-nowrap">{date}</span>
            </div>
            <p className="text-emerald-600 font-bold text-xs md:text-sm mb-3 uppercase tracking-wide">{role}</p>

            {/* Render a single paragraph if 'description' exists */}
            {description && (
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{description}</p>
            )}

            {/* Render a bulleted list if 'bullets' array exists */}
            {bullets && bullets.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs md:text-sm leading-relaxed">
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// --- 3. MAIN PAGE COMPONENT ---
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pb-20">
            {/* <Navbar /> */}

            <section className="pt-28 pb-12 px-4 md:pt-40 md:pb-20 md:px-6 max-w-4xl mx-auto">

                {/* --- EXPERIENCE --- */}
                <div className="mb-12 md:mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-emerald-600 mb-4 md:mb-6">
                        <User size={20} className="md:w-6 md:h-6" /> Experience
                    </h2>
                    <div className="space-y-4 md:space-y-8">
                        {experiencesData.map((exp, index) => (
                            <InfoCard key={index} {...exp} />
                        ))}
                    </div>
                </div>

                {/* --- PROJECTS --- */}
                <div className="mb-12 md:mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-emerald-600 mb-4 md:mb-6">
                        <Award size={20} className="md:w-6 md:h-6" /> Projects
                    </h2>
                    <div className="space-y-4 md:space-y-8">
                        {projectsData.map((project, index) => (
                            <InfoCard key={index} {...project} />
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}