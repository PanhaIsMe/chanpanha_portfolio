// import Navbar from "../components/Navbar"
import { Calendar, Award, BookOpen, User, Briefcase, Code } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* Container: Tighter padding on mobile (px-4), wider on desktop (px-6) */}
      <section className="pt-28 pb-12 px-4 md:pt-40 md:pb-20 md:px-6 max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-4 md:mb-6">
            About Me
          </h1>
          <p className="text-base md:text-xl text-gray-500 leading-relaxed mb-10 md:mb-12">
            I'm a motivated Computer Science student at the <strong className="text-gray-900">Cambodia Academy of Digital Technology (CADT)</strong>,
            deeply interested in <span className="text-emerald-600 font-medium">Backend Development</span> and <span className="text-emerald-600 font-medium">Scalable System Design</span>. 
            I enjoy designing RESTful APIs, managing databases, and building secure and scalable server-side systems that power modern applications.
          </p>
        </div>

        {/* --- EDUCATION --- */}
        <div className="mb-12 md:mb-16 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <h2 className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-emerald-600 mb-4 md:mb-6">
                <BookOpen size={20} className="md:w-6 md:h-6" /> Education
            </h2>
            <div className="space-y-4 md:space-y-6">
                
                {/* Item 1 */}
                <div className="relative border-l-2 border-emerald-100 pl-4 md:pl-6 py-1 md:py-2 ml-1">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">Bachelor of Computer Science</h3>
                            <p className="text-sm md:text-base text-gray-600">Cambodia Academy of Digital Technology</p>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                           2024 - Present
                        </span>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative border-l-2 border-emerald-100 pl-4 md:pl-6 py-1 md:py-2 ml-1">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">GEP 11 A</h3>
                            <p className="text-sm md:text-base text-gray-600">ACE</p>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                           2024 - Present
                        </span>
                    </div>
                </div>

            </div>
        </div>

        {/* --- LANGUAGES --- */}
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-emerald-600 mb-4 md:mb-6">
            <User size={20} className="md:w-6 md:h-6" /> Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { lang: "Khmer", level: "Native" },
              { lang: "English", level: "Intermediate" },
              { lang: "Japanese", level: "Basic" }
            ].map((item, i) => (
              <div key={i} className="p-3 md:p-4 border border-gray-200 rounded-xl text-center">
                <p className="font-bold text-gray-900 text-sm md:text-base">{item.lang}</p>
                <p className="text-[10px] md:text-xs text-gray-500">{item.level}</p>
              </div>
            ))}
          </div>
        </div>


      </section>
    </main>
  );
}