import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-white to-emerald-50 border-t border-emerald-100 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Section: Responsive Grid --- */}
        {/* Mobile: 1 Col | Tablet: 2 Col | Laptop: 4 Col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md group-hover:bg-emerald-600 transition-colors">
                <span className="font-display">P</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-900">
                Panha<span className="text-emerald-500">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              CS Student at <strong className="text-gray-700">CADT</strong>. <br />
              Developing backend services focused on business logic, API design, and reliable data processing.
            </p>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 text-emerald-700 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Opportunities
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm md:text-base">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white rounded-full text-emerald-500 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
                  <MapPin size={16} />
                </div>
                <span className="mt-1">Svay Pak, Russey Keo,<br />Phnom Penh</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white rounded-full text-emerald-500 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
                  <Phone size={16} />
                </div>
                <span>010 667 732</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm md:text-base">Connect</h3>
            <div className="flex gap-3">
              {[
                { icon: <Github size={20} />, href: "https://github.com/ChanpanhaCheng" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/your-profile" },
                { icon: <Mail size={20} />, href: "mailto:chanpanhacheng@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Feel free to reach out via email or social media.
            </p>
          </div>

        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-emerald-100/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © {currentYear} Cheng Chanpanha. All rights reserved.
          </p>
          <p className="flex items-center gap-1 opacity-80">
            Built with <span className="font-bold text-emerald-600">Next.js</span> & <span className="font-bold text-emerald-600">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
}