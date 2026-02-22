// import Navbar from "./components/Navbar"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Database, Layout, Smartphone, Server, Cpu, Globe } from 'lucide-react';
import myImage from '@/assets/my_image.jpg';
export default function HomeView() {
  return (
    <main className="min-h-screen pb-20 bg-white">
      {/* <Navbar /> */}

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-12 px-4 md:pt-40 md:pb-24 md:px-8 overflow-hidden">
        {/* Background Decor (Scaled down for mobile) */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-emerald-100 to-transparent rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/4" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Text */}
          {/* On Mobile: Order 2 (Bottom). On Tablet+: Order 1 (Left) */}
          <div className="order-2 md:order-1 text-center md:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              CS Student at CADT
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Hi, I'm <br />
              <span className="text-emerald-500">Cheng Chanpanha.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              A backend-focused Computer Science student with experience in developing
              <b> RESTful APIs, authentication systems, and database-driven applications</b>
              using Node.js, NestJS, Express.js, PostgreSQL, and MongoDB. Interested in building
              <b> secure and scalable server-side architectures</b>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link href="/projects" className="px-6 py-3 md:px-8 md:py-4 bg-emerald-500 text-white rounded-full font-bold text-sm md:text-base hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                View My Work 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-sm md:text-base hover:border-emerald-500 hover:text-emerald-500 transition">
                Full Resume
              </Link>
            </div>
            
            {/* Tech Stack Icons */}
            <div className="mt-8 md:mt-10 flex items-center justify-center md:justify-start gap-4 md:gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 scale-90 md:scale-100 origin-center md:origin-left">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2 hidden md:block">Stack:</span>
                <Globe size={20} className="md:w-6 md:h-6" aria-label="Web" />
                <Database size={20} className="md:w-6 md:h-6" aria-label="Database" />
                <Server size={20} className="md:w-6 md:h-6" aria-label="Backend" />
                <Smartphone size={20} className="md:w-6 md:h-6" aria-label="Flutter" />
                <Cpu size={20} className="md:w-6 md:h-6" aria-label="AI/ML Interest" />
            </div>
          </div>

          {/* Right Column: Image */}
          {/* On Mobile: Order 1 (Top). On Tablet+: Order 2 (Right) */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end animate-fade-up" style={{animationDelay: '0.2s'}}>
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-[2rem] md:rounded-[3rem] rotate-6 scale-95 opacity-20 blur-sm"></div>
             
             {/* Image Size: Smaller on mobile, Larger on Tablet/Desktop */}
             <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-emerald-500/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <Image 
                src="/my_image.jpg"
                  alt="Cheng Chanpanha"
                  fill
                  className="object-cover"
                  priority
                />
             </div>

             {/* Floating Badge (Hidden on very small screens, visible on Tablet+) */}
             <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:left-4 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce scale-90 md:scale-100 origin-bottom-left" style={{animationDuration: '4s'}}>
                <div className="bg-emerald-100 p-1.5 md:p-2 rounded-lg text-emerald-600">
                   <Layout size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                   <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Current Focus</p>
                   <p className="text-xs md:text-sm font-bold text-gray-900">Nest JS & Spring Boot</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- SKILLS / EXPERTISE --- */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">My Expertise</h2>
                <div className="w-16 md:w-24 h-1 bg-emerald-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { icon: <Server size={28} />, title: "Backend Systems", desc: "Building robust APIs and CRUD systems using Java (Spring Boot), NestJS, and managing MySQL/MongoDB." },
                  { icon: <Layout size={28} />, title: "Full Stack Web", desc: "Creating responsive frontends with React & Next.js, integrated with performance tools like Redis and Nginx." },
                  { icon: <Smartphone size={28} />, title: "Mobile & AI", desc: "Developing cross-platform apps with Flutter and exploring AI/ML solutions to solve real-life problems." }
                ].map((skill, i) => (
                  <div key={i} className="p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-2 transition-all duration-300 group text-center md:text-left">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 md:mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                          {skill.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{skill.title}</h3>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                          {skill.desc}
                      </p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-2 md:gap-4 text-center md:text-left">
            <div className="w-full md:w-auto">
              <span className="text-emerald-500 font-bold tracking-wider uppercase text-xs md:text-sm">Experience</span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mt-1 md:mt-2">
                Featured Work
              </h2>
            </div>
            <Link href="/projects" className="hidden md:flex group items-center gap-2 font-bold text-emerald-600 hover:text-emerald-800 transition">
              View All Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {/* Project 1 */}
             <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Domrov LMS</h3>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full">Developer</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                    Developed system algorithms, built payment features, and contributed to database/Figma design.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                      {['Algorithms', 'Payment Gateway', 'Figma'].map(tag => (
                        <span key={tag} className="text-[10px] md:text-xs font-medium px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-600">{tag}</span>
                      ))}
                  </div>
                </div>
             </div>

             {/* Project 2 */}
             <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Quiz Fun</h3>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full">Full Stack</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                    Built CRUD features, improved frontend, and optimized using Redis/Nginx.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                      {['MongoDB', 'Redis', 'Nginx'].map(tag => (
                        <span key={tag} className="text-[10px] md:text-xs font-medium px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-600">{tag}</span>
                      ))}
                  </div>
                </div>
             </div>
          </div>
          
          {/* Mobile "View All" Link */}
          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 font-bold text-emerald-600">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTACT BANNER --- */}
      <section className="py-16 px-4 md:py-24 md:px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-emerald-500 rounded-full blur-[60px] md:blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-emerald-500 rounded-full blur-[60px] md:blur-[80px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6 relative z-10">
                Let's build something together.
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto relative z-10">
                Based in Phnom Penh and open to opportunities.
            </p>
            <div className="flex justify-center relative z-10">
                <a href="mailto:chanpanhacheng@gmail.com" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-gray-900 transition-colors duration-300 shadow-lg break-all">
                    chanpanhacheng@gmail.com
                </a>
            </div>
        </div>
      </section>
    </main>
  );
}