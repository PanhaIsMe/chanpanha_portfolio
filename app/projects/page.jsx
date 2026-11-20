import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, featuredProjects } from "../data/projects";
import ProjectEntry, { ProjectArchiveEntry } from "../components/ProjectEntry";
import SectionHeader from "../components/SectionHeader";
import ContactBanner from "../components/ContactBanner";

export const metadata = { title: "Projects", description: "Explore Cheng Chanpanha’s projects in backend development, web and mobile applications, databases, games, and machine learning." };
export default function Projects() {
  const archive = projects.filter(project => !featuredProjects.some(featured => featured.slug === project.slug));
  return <main id="main-content" tabIndex={-1}>
    <section className="page-intro container"><p className="eyebrow"><span>THE PROJECT NOTEBOOK</span> / {String(projects.length).padStart(2, "0")} ENTRIES</p><h1>Ideas, built<br />into <em>software.</em></h1><div className="intro-bottom"><p>A collection of things I’ve helped build, improve, and bring to life. Open a project to explore my contribution.</p><a className="text-link" href="#featured-projects">Start exploring <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    <section className="work-section section-pad" id="featured-projects"><div className="container"><SectionHeader number="01" label="IN FOCUS" title="A closer look." /><div className="project-list">{featuredProjects.map((project, index) => <ProjectEntry key={project.slug} project={project} index={index} expanded />)}</div></div></section>
    <section className="section-pad container"><SectionHeader number="02" label="MORE EXPLORATIONS" title="The rest of the notebook."><p>Different formats.<br />More opportunities to learn.</p></SectionHeader><div className="project-archive">{archive.map((project, index) => <ProjectArchiveEntry key={project.slug} project={project} index={index + featuredProjects.length + 1} />)}</div><div className="project-endnote"><p>Looking for more about my work and volunteering?</p><Link href="/about#experience" className="text-link">Experience & education <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    <ContactBanner />
  </main>;
}
