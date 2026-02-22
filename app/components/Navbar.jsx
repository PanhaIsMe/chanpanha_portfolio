"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-2 md:px-4 transform-gpu">
    {/* // <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 px-2 md:px-4 w-max max-w-[90vw]"> */}
      <nav className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 rounded-full px-3 py-2 md:px-6 md:py-3 w-auto max-w-full flex items-center gap-2 md:gap-6 transition-all will-change-transform">
        
        {/* 1. Logo (Icon only on mobile, Text on Tablet+) */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:bg-emerald-600 transition-colors">
            <span className="font-bold text-sm md:text-lg font-display">P</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-gray-800 hidden md:block">
            Panha<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* 2. Navigation Pill (Scaled down for mobile) */}
        <div className="flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-100 overflow-x-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-15  ${
                  isActive 
                    ? 'bg-white text-emerald-600 shadow-sm font-bold' 
                    : 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 3. Hire Me Button (Hidden on Mobile, Visible on Tablet+) */}
        {/* On mobile, users can just click 'Contact' in the pill above */}
        <div className="hidden md:block flex-shrink-0">
          <Link 
            href="/contact" 
            className="bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
          >
            Hire Me
          </Link>
        </div>

      </nav>
    </div>
  );
}