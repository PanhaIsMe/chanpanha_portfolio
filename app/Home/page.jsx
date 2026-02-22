// // import Navbar from "../components/Navbar"
// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowRight, Database, Layout, Smartphone, Server, Cpu, Globe } from 'lucide-react';

// export default function HomeView() {
//   return (
//     <main className="min-h-screen pb-20 bg-white">
//       {/* <Navbar /> */}

//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
//         {/* Background Decor */}
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100 to-transparent rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/4" />

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Left Column: Text */}
//           <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-up">
//             <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
//               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//               CS Student at CADT
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-[1.1]">
//               Hi, I'm <br />
//               <span className="text-emerald-500">Cheng Chanpanha.</span>
//             </h1>

//             <p className="text-xl text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
//               A driven Computer Science student interested in <b>AI & Machine Learning</b>. I build full-stack solutions using Spring Boot, Next.js, and Flutter.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link href="/projects" className="px-8 py-4 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 group">
//                 View My Work 
//                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <Link href="/about" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold hover:border-emerald-500 hover:text-emerald-500 transition">
//                 Full Resume
//               </Link>
//             </div>
            
//             {/* Tech Stack Icons (From CV) */}
//             <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
//                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2 hidden md:block">Stack:</span>
//                 {/* Icons representing Java, React, DB */}
//                 <Globe size={24} title="Web" />
//                 <Database size={24} title="Database" />
//                 <Server size={24} title="Backend" />
//                 <Smartphone size={24} title="Flutter" />
//                 <Cpu size={24} title="AI/ML Interest" />
//             </div>
//           </div>

//           {/* Right Column: Image */}
//           <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{animationDelay: '0.2s'}}>
//              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-[3rem] rotate-6 scale-95 opacity-20 blur-sm"></div>
             
//              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-emerald-500/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
//                 <Image 
//                   src="/profile.jpg" 
//                   alt="Cheng Chanpanha"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//              </div>

//              {/* Floating Badge */}
//              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
//                 <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
//                    <Layout size={24} />
//                 </div>
//                 <div>
//                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current Focus</p>
//                    <p className="font-bold text-gray-900">Next.js & Spring Boot</p>
//                 </div>
//              </div>
//           </div>

//         </div>
//       </section>

//       {/* --- SKILLS / WHAT I DO --- */}
//       <section className="py-24 bg-gray-50/50">
//         <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-16">
//                 <h2 className="text-3xl font-display font-bold text-gray-900">My Expertise</h2>
//                 <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//                 {/* Skill 1 */}
//                 <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-2 transition-all duration-300 group">
//                     <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
//                         <Server size={32} />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">Backend Systems</h3>
//                     <p className="text-gray-500 leading-relaxed">
//                         Building robust APIs and CRUD systems using <b>Java (Spring Boot)</b>, <b>NestJS</b>, and managing <b>MySQL/MongoDB</b> databases.
//                     </p>
//                 </div>

//                 {/* Skill 2 */}
//                 <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-2 transition-all duration-300 group">
//                     <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
//                         <Layout size={32} />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">Full Stack Web</h3>
//                     <p className="text-gray-500 leading-relaxed">
//                         Creating responsive frontends with <b>React & Next.js</b>, integrated with performance tools like <b>Redis</b> and <b>Nginx</b>.
//                     </p>
//                 </div>

//                 {/* Skill 3 */}
//                 <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-2 transition-all duration-300 group">
//                     <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
//                         <Smartphone size={32} />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile & AI</h3>
//                     <p className="text-gray-500 leading-relaxed">
//                         Developing cross-platform apps with <b>Flutter</b> and exploring <b>AI/ML</b> solutions to solve real-life problems.
//                     </p>
//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* --- FEATURED PROJECTS (From CV) --- */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
//             <div>
//               <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm">Experience</span>
//               <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2">
//                 Featured Work
//               </h2>
//             </div>
//             <Link href="/projects" className="group flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-800 transition">
//               View All Projects
//               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//              {/* Project 1: Domrov LMS */}
//              <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300">
//                 <div className="p-8">
//                   <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-2xl font-bold text-gray-900">Domrov LMS Automation</h3>
//                       <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Developer</span>
//                   </div>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     Developed system algorithms, built payment features, and contributed to both the database architecture and Figma design.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                       <span className="text-xs font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Algorithms</span>
//                       <span className="text-xs font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Payment Gateway</span>
//                       <span className="text-xs font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Figma</span>
//                   </div>
//                 </div>
//              </div>

//              {/* Project 2: Quiz Fun */}
//              <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300">
//                 <div className="p-8">
//                   <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-2xl font-bold text-gray-900">Quiz Fun</h3>
//                       <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Full Stack</span>
//                   </div>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     Built CRUD features and improved frontend design. Optimized performance using Redis and Nginx with a MongoDB database.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                       <span className="text-xs font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">MongoDB</span>
//                       <span className="text-xs font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Redis</span>
//                       <span className="text-xs font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Nginx</span>
//                   </div>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT BANNER --- */}
//       <section className="py-24 px-6">
//         <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-white">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
            
//             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 relative z-10">
//                 Let's build something together.
//             </h2>
//             <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
//                 I am currently based in Phnom Penh and open to opportunities.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
//                 <a href="mailto:chanpanhacheng@gmail.com" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors duration-300">
//                     chanpanhacheng@gmail.com
//                 </a>

//             </div>
//         </div>
//       </section>
//     </main>
//   );
// }