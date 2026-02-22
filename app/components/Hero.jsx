import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></span>
            Available for Freelance & Full-time
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Hi, I'm Panha. <br />
            <span className="text-white/90">Frontend Developer.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-dark/80 lg:text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
            I craft responsive, high-performance web applications. My mission is to bridge the gap between design and technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/projects" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition shadow-xl flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center">
              Contact Me
            </Link>
          </div>

          {/* Social Bar */}
          <div className="mt-10 flex gap-6 justify-center lg:justify-start text-white/80">
            <a href="#" className="hover:text-accent-gold transition-colors hover:scale-110 transform duration-200">
              <Github size={28} />
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={28} />
            </a>
            <a href="mailto:panha@example.com" className="hover:text-accent-gold transition-colors hover:scale-110 transform duration-200">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right: Illustration/Image */}
        <div className="hidden lg:flex justify-center relative animate-float">
          {/* Glass Card Effect behind image */}
          <div className="relative w-[450px] h-[550px] bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
               {/* Replace with your actual image path */}
               <Image 
                 src="/profile.jpg" 
                 alt="Panha - Frontend Developer"
                 fill
                 className="object-cover"
                 priority
               />
            </div>
            
            {/* Floating Skill Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-primary-light p-2 rounded-lg text-primary">
                    <code className="font-bold text-lg">&lt;/&gt;</code>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Experience</p>
                    <p className="font-bold text-text-gray">Frontend Pro</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for internal Links if used inside Hero
import Link from 'next/link';