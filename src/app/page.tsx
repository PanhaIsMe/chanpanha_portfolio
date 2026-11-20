import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Database, Layers3 } from "lucide-react";
import { profile, skillGroups } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectEntry, { ProjectsJumpLink } from "@/components/projects/ProjectEntry";
import ContactBanner from "@/components/contact/ContactBanner";
import ToolBadge from "@/components/technology/ToolBadge";
import ToolEvidenceExplorer from "@/components/technology/ToolEvidenceExplorer";

export const metadata: Metadata = { title: "Cheng Chanpanha · Software Developer", description: "Software developer and fourth-year student at CADT in Phnom Penh. Explore my backend, web, mobile, and machine learning projects." };

export default function HomePage() {
  const skillIcons = [Code2, Database, Layers3];
  return <main id="main-content" tabIndex={-1}>
    <section className="hero container" data-motion="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-intro"><span className="status-dot" /> CHENG CHANPANHA <span className="hero-intro-separator">/</span> PHNOM PENH, KH</p>
        <h1>Software<br /><span className="hero-title-accent">developer<span className="hero-period">.</span><svg className="hero-underline" viewBox="0 0 500 18" fill="none" aria-hidden="true"><path d="M3 12C105 1 318 1 496 8M58 16C180 8 336 8 445 13" /></svg></span></h1>
        <p className="hero-description">Hi, I’m Panha, a fourth-year software development student at <strong>CADT</strong>. I build backend systems and web applications, and I’m exploring how machine learning can solve practical problems.</p>
        <div className="hero-actions"><Link href="/projects" className="button">Explore my work <ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/about" className="text-link">A little about me <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div className="hero-footnote"><span className="status-dot" /> Open to opportunities <span className="hero-footnote-rule" /><span>Web · Backend · Mobile</span></div>
      </div>
      <div className="hero-portrait-area">
        <Link href="/about" className="portrait-frame" aria-label="About Cheng Chanpanha"><div className="portrait-corner" aria-hidden="true">+</div><div className="portrait-photo"><Image src="/images/cheng-chanpanha.jpg" alt="Cheng Chanpanha" fill priority sizes="(max-width: 600px) 80vw, (max-width: 900px) 50vw, 380px" className="portrait-image" /></div><div className="portrait-caption"><span>THE PERSON BEHIND THE CODE</span><span aria-hidden="true">↗</span></div></Link>
        <div className="portrait-stamp" aria-hidden="true"><Code2 size={24} /><span>Always<br />building.</span></div>
        <p className="portrait-margin-note">A work in progress. Just like good software.</p>
      </div>
      <div className="hero-bottom"><ProjectsJumpLink /><span className="mono">IDEAS → LOGIC → SOFTWARE</span></div>
    </section>
    <section className="work-section section-pad" id="selected-work"><div className="container"><SectionHeader number="01" label="SELECTED WORK" title="Built with purpose."><p>A few projects, and the parts<br className="desktop-break" /> I helped bring to life.</p><Link href="/projects" className="text-link">All projects <ArrowUpRight size={17} aria-hidden="true" /></Link></SectionHeader><div className="project-list">{featuredProjects.map((project, index) => <ProjectEntry key={project.slug} project={project} index={index} />)}</div></div></section>
    <section className="section-pad container" aria-labelledby="skills-heading"><SectionHeader id="skills-heading" number="02" label="MY TOOLKIT" title="Different tools. Same curiosity."><p>From the interface to the database,<br className="desktop-break" /> connecting the pieces that make it work.</p></SectionHeader><div className="skills-grid">{skillGroups.map((group, i) => { const Icon = skillIcons[i]; return <div className="skill-group" key={group.title}><div className="skill-group-top"><Icon size={24} aria-hidden="true" /><span className="mono">0{i + 1}</span></div><h3>{group.title}</h3><p>{group.description}</p><ul className="tool-grid" data-motion="logos">{group.skills.map(skill => <li key={skill}><ToolBadge name={skill} /></li>)}</ul></div>; })}</div><p className="learning-note"><span className="status-dot" /><strong>Machine learning &amp; deep learning</strong><span>I’ve practiced data preprocessing, model training, and evaluation, and I’m building on my deep learning foundation.</span></p><ToolEvidenceExplorer /></section>
    <section className="about-strip"><div className="container about-strip-inner"><p className="eyebrow">A LITTLE CONTEXT</p><p>A student of software.<br /><span>And everything that makes it useful.</span></p><Link className="text-link" href="/about">Meet {profile.name.split(" ")[1]} <ArrowUpRight size={19} aria-hidden="true" /></Link></div></section>
    <ContactBanner />
  </main>;
}
