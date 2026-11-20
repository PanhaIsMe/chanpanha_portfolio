import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { ToolMark } from "@/components/technology/ToolBadge";

export default function SiteFooter() {
  return <footer className="site-footer" data-motion="footer"><div className="container">
    <div className="footer-top"><div><Link href="/" className="footer-wordmark">Panha<span>.</span></Link><p>Software developer. Always learning.</p></div><div className="footer-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {profile.name}</p><p className="footer-built-with">Built with <ToolMark name="Next.js" size={14} /> Next.js & <ToolMark name="Tailwind CSS" size={14} /> Tailwind CSS</p><span className="footer-location"><span className="status-dot" /> {profile.location}</span></div>
  </div></footer>;
}
