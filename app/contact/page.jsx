import { Mail, Github, Linkedin, Send, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Contact() {

  const contactMethods = [
    {
      label: "Personal Email",
      value: "chanpanhacheng@gmail.com",
      href: "mailto:chanpanhacheng@gmail.com",
      icon: <Mail size={24} />, // Icon size handled by parent div
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "School Email",
      value: "chanpanha.cheng@student.cadt.edu.kh",
      href: "mailto:chanpanha.cheng@student.cadt.edu.kh",
      icon: <GraduationCap size={24} />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Telegram",
      value: "@PanhaIsMe",
      href: "https://t.me/PanhaIsMe",
      icon: <Send size={24} />,
      color: "bg-sky-50 text-sky-500",
    },
    {
      label: "LinkedIn",
      value: "Cheng Chanpanha",
      href: "https://www.linkedin.com/in/cheng-chanpanha",
      icon: <Linkedin size={24} />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "GitHub (Main)",
      value: "ChanpanhaCheng",
      href: "https://github.com/ChanpanhaCheng",
      icon: <Github size={24} />,
      color: "bg-gray-100 text-gray-700",
    },
    {
      label: "GitHub (Alt)",
      value: "PanhaIsMe",
      href: "https://github.com/PanhaIsMe",
      icon: <Github size={24} />,
      color: "bg-gray-100 text-gray-700",
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-gray-50">

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 md:mb-20 animate-fade-up">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
          Get in Touch
        </h1>
        <p className="text-sm md:text-lg text-gray-600 px-4">
          I'm currently open to new opportunities. Connect with me via any of the platforms below.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {contactMethods.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon Circle (Scaled down on mobile) */}
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 ${contact.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
              {/* Clone element to force size change if needed, or rely on parent sizing */}
              <div className="scale-90 md:scale-100">
                {contact.icon}
              </div>
            </div>

            {/* Text Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 md:mb-1">
                {contact.label}
              </p>
              <h3 className="text-sm md:text-md font-bold text-gray-900 group-hover:text-emerald-600 truncate transition-colors">
                {contact.value}
              </h3>
            </div>

            {/* Hover Arrow (Hidden on mobile to save space, visible on tablet+) */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hidden md:block">
              <ArrowUpRight className="text-emerald-500 w-5 h-5" />
            </div>

            {/* Subtle Background Accent */}
            <div className="absolute -top-6 -right-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          </a>
        ))}
      </div>

    </main>
  );
}