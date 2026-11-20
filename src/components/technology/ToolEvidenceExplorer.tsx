"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { projects } from "@/content/projects";
import { evidenceTools, toolEvidence } from "@/content/technologies";
import ToolBadge, { ToolMark } from "./ToolBadge";

export default function ToolEvidenceExplorer() {
  const [selected, setSelected] = useState("All tools");
  const matches = toolEvidence.filter(item => selected === "All tools" || item.tools.includes(selected));

  return <div className="tool-explorer" aria-labelledby="evidence-heading">
    <div className="explorer-heading">
      <div><p className="eyebrow">CONNECTING THE DOTS</p><h3 id="evidence-heading">Where I used it.</h3></div>
      <p>Select a tool. Follow it into the work.</p>
    </div>
    <div className="tool-filters" role="group" aria-label="Find projects by documented technology">
      <button type="button" className="tool-filter" aria-pressed={selected === "All tools"} aria-controls="tool-evidence-results" onClick={() => setSelected("All tools")}>All tools</button>
      {evidenceTools.map(name => <button type="button" className="tool-filter" key={name} aria-pressed={selected === name} aria-controls="tool-evidence-results" onClick={() => setSelected(name)}><ToolMark name={name} size={19} />{name}<span className="filter-indicator" aria-hidden="true" /></button>)}
    </div>
    <div className="explorer-status-row"><p className="mono" role="status" aria-live="polite" aria-atomic="true">{selected === "All tools" ? "4 project connections" : `${selected} · ${matches.length} project connection${matches.length === 1 ? "" : "s"}`}</p><button type="button" className="explorer-reset" onClick={() => setSelected("All tools")} disabled={selected === "All tools"}><RotateCcw size={13} aria-hidden="true" />Reset</button></div>
    <div id="tool-evidence-results" className="evidence-results">
      {matches.map(item => {
        const project = projects.find(project => project.slug === item.slug)!;
        return <article key={`${selected}-${item.slug}`} className="evidence-result">
          <div className="evidence-result-top"><span className="mono">{project.category}</span><span className="evidence-tick" aria-hidden="true">↳</span></div>
          <h4>{project.title}</h4><p>{item.contribution}</p>
          <div className="evidence-logos">{item.tools.map(tool => <ToolBadge key={tool} name={tool} />)}</div>
          <Link className="text-link" href={`/projects#${item.slug}`}>Explore contribution <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </article>;
      })}
    </div>
    <p className="explorer-footnote">Connections shown here come from my project contributions. More technologies are listed in the toolkit above.</p>
  </div>;
}
