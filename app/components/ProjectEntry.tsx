import Link from "next/link";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import type { Project } from "../data/projects";
import { toolsForProject } from "../data/technology";
import ToolBadge from "./ToolBadge";

function ProjectTopics({ project }: { project: Project }) {
  const tools = toolsForProject(project.slug);
  const labels = [...new Set([...project.tags, ...tools])];
  return <ul className="tags project-topics" aria-label="Project topics and documented technologies">{labels.map(tag => <li key={tag}>{tools.includes(tag) ? <ToolBadge name={tag} /> : tag}</li>)}</ul>;
}

export function ContributionMap({ project, index }: { project: Project; index: number }) {
  return <div className={`contribution-map map-${index % 3}`} data-motion="map">
    <div className="map-top"><span>PROJECT NOTES</span><span>FIG. {String(index + 1).padStart(2, "0")}</span></div>
    <div className="map-diagram" role="group" aria-label={`Contribution areas for ${project.title}`}>
      <span className="map-root">{project.title}</span>
      <div className="map-stem" aria-hidden="true" />
      <div className="map-branches">{project.notes.map((note, i) => <div className="map-node" key={note}><span className="map-node-number">0{i + 1}</span><span>{note}</span></div>)}</div>
    </div>
    <div className="map-bottom"><span>CONTRIBUTION MAP</span><span aria-hidden="true">↗</span></div>
  </div>;
}

export default function ProjectEntry({ project, index, expanded = false }: { project: Project; index: number; expanded?: boolean }) {
  return <article className="project-entry" id={expanded ? project.slug : undefined}>
    <ContributionMap project={project} index={index} />
    <div className="project-copy">
      <p className="eyebrow"><span>0{index + 1}</span> {project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-role">{project.role}</p>
      <ProjectTopics project={project} />
      {expanded ? <details className="project-details">
        <summary>Explore contributions <Plus size={18} aria-hidden="true" /></summary>
        <div className="project-detail-content"><p className="detail-date">{project.date}</p><h4>My contribution</h4><ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>
      </details> : <Link className="text-link" href={`/projects#${project.slug}`}>Explore project <ArrowUpRight size={18} aria-hidden="true" /></Link>}
    </div>
  </article>;
}

export function ProjectArchiveEntry({ project, index }: { project: Project; index: number }) {
  return <details className="archive-entry" id={project.slug}>
    <summary><span className="archive-number">{String(index).padStart(2, "0")}</span><span className="archive-title">{project.title}<span>{project.category}</span></span><span className="archive-date">{project.date}</span><Plus size={20} className="archive-plus" aria-hidden="true" /></summary>
    <div className="archive-content"><p className="project-role">{project.role}</p><p>{project.summary}</p><ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><ProjectTopics project={project} /></div>
  </details>;
}

export function ProjectsJumpLink() {
  return <a href="#selected-work" className="scroll-note"><ArrowDown size={16} aria-hidden="true" /> A closer look at my work</a>;
}
