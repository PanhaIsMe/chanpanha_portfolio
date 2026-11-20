"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const links = [ { name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Contact", href: "/contact" } ];

export default function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="brand" aria-label="Panha — Home"><span className="brand-mark" aria-hidden="true">p<span>.</span></span><span className="brand-label">PANHA<span>SOFTWARE DEVELOPER</span></span></Link>
    <nav aria-label="Main navigation" className="main-nav">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.name}<span className="nav-dot" aria-hidden="true" /></Link>)}</nav>
    <Link href="/contact" className="header-contact">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
  </div></header>;
}
