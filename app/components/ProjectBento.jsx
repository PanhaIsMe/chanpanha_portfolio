import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "EcoTracker App",
    category: "Mobile Dev",
    desc: "A React Native app to track carbon footprint.",
    tech: ["React Native", "Firebase"],
    size: "col-span-1 md:col-span-2", // Wide card
    color: "bg-brand-50"
  },
  {
    title: "Finance Dashboard",
    category: "Web App",
    desc: "Real-time crypto tracking interface.",
    tech: ["Next.js", "Tailwind"],
    size: "col-span-1", // Square card
    color: "bg-white"
  },
  {
    title: "University Portal",
    category: "Full Stack",
    desc: "Redesigning the student login experience.",
    tech: ["Vue", "Node.js"],
    size: "col-span-1", // Square card
    color: "bg-white"
  },
];

export default function ProjectBento() {
  return (
    <section id="projects" className="py-32 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-display font-bold">Selected Work</h2>
          <span className="text-gray-400 text-sm hidden sm:block">2023 — Present</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`${p.size} group relative p-8 rounded-3xl border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300 ${p.color}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">
                  {p.category}
                </span>
                <ArrowUpRight className="text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              
              <div className="flex gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}