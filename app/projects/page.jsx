// import Navbar from "../components/Navbar"
import { Award, User } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* <Navbar /> */}
      
      {/* Container: Reduced top padding for mobile (pt-28) vs laptop (pt-40) */}
      <section className="pt-28 pb-12 px-4 md:pt-40 md:pb-20 md:px-6 max-w-4xl mx-auto">

        {/* --- EXPERIENCE --- */}
        <div className="mb-12 md:mb-16 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <h2 className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold text-emerald-600 mb-4 md:mb-6">
                <Award size={20} className="md:w-6 md:h-6" /> Experience & Projects
            </h2>
            <div className="space-y-4 md:space-y-8">
                
                {/* Item 1 */}
                <div className="bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900">Domrov LMS Automation</h3>
                        <span className="text-[10px] md:text-xs text-gray-500 font-medium whitespace-nowrap">Dec 2025 - Now</span>
                    </div>
                    <p className="text-emerald-600 font-bold text-xs md:text-sm mb-3 uppercase tracking-wide">Developer Member</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs md:text-sm leading-relaxed">
                        <li>Developed system algorithms and payment features.</li>
                        <li>Contributed to database and Figma design.</li>
                        <li>Collaborated effectively to complete tasks on time.</li>
                    </ul>
                </div>

                 {/* Item 2 */}
                 <div className="bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900">Quiz Fun</h3>
                        <span className="text-[10px] md:text-xs text-gray-500 font-medium whitespace-nowrap">May 2025 - Jul 2025</span>
                    </div>
                    <p className="text-emerald-600 font-bold text-xs md:text-sm mb-3 uppercase tracking-wide">Team Member</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs md:text-sm leading-relaxed">
                        <li>Modified and improved frontend design.</li>
                        <li>Worked with MongoDB, Redis, and Nginx.</li>
                        <li>Built CRUD system features.</li>
                    </ul>
                </div>

                 {/* Item 3 */}
                 <div className="bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900">Next-Gen Engagement</h3>
                        <span className="text-[10px] md:text-xs text-gray-500 font-medium whitespace-nowrap">Aug 2025 - Sep 2025</span>
                    </div>
                    <p className="text-emerald-600 font-bold text-xs md:text-sm mb-3 uppercase tracking-wide">Database Trainer</p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Teaching freshmen students about database design.</p>
                </div>
            </div>
        </div>

       

      </section>
    </main>
  );
}