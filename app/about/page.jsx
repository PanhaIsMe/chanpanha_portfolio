import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { education, languages, profile } from "../data/profile";
import { experiences } from "../data/projects";
import SectionHeader from "../components/SectionHeader";
import ContactBanner from "../components/ContactBanner";

export const metadata = { title: "About", description: "Meet Cheng Chanpanha, a fourth-year CADT student with backend development experience and an interest in machine learning and deep learning." };
export default function About() {
  return <main id="main-content" tabIndex={-1}>
    <section className="page-intro container"><p className="eyebrow">A PERSON, THEN A DEVELOPER</p><h1>Curiosity is<br />the <em>starting point.</em></h1></section>
    <section className="container about-profile">
      <div className="about-photo"><Image src="/my_image.jpg" alt="Cheng Chanpanha" fill sizes="(max-width: 700px) 90vw, 400px" className="portrait-image" priority /><span className="about-photo-caption">CHENG CHANPANHA / SOFTWARE DEVELOPER</span></div>
      <div className="about-biography">
        <p className="eyebrow">HELLO, I’M PANHA.</p>
        <h2>A software developer,<br />still asking “how?”</h2>
        <p>I’m a fourth-year software development student at the <strong>Cambodia Academy of Digital Technology (CADT)</strong>. My main focus is backend development, including REST APIs, database design, and the business logic behind web applications.</p>
        <p>Through coursework and personal practice, I’ve gained hands-on experience preparing datasets, training machine learning models, and evaluating their performance. I’ve also built a foundation in deep learning and want to explore how it can solve practical problems.</p>
        <p>Alongside development, I’ve contributed through QA testing, design, translation, database training, and team leadership.</p>
        <div className="about-location"><MapPin size={17} aria-hidden="true" /> {profile.location}</div>
        <Link className="text-link" href="/projects#intelligent-task-duration-estimation">Explore my machine learning project <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
    <section className="section-pad container" id="education"><SectionHeader number="01" label="FOUNDATIONS" title="Education." /><div className="timeline">{education.map(item => <article className="timeline-item" data-motion="timeline" key={item.title}><p className="mono timeline-date">{item.date}</p><div><h3>{item.title}</h3><p>{item.institution}</p></div></article>)}</div></section>
    <section className="experience-section section-pad" id="experience">
      <div className="container">
        <SectionHeader number="02" label="WORK & VOLUNTEERING" title="Experience." />
        <div className="timeline">{experiences.map(item => <article className="timeline-item" data-motion="timeline" key={item.title}>
          <p className="mono timeline-date">{item.date.trim()}</p>
          <div>
            <p className="project-role">{item.role}</p>
            <h3>{item.title.trim()}</h3>
            <p>{item.description}</p>
            {item.projectSlug && <Link className="text-link" href={`/projects#${item.projectSlug}`}>Explore the internship project <ArrowUpRight size={17} aria-hidden="true" /></Link>}
          </div>
        </article>)}</div>
      </div>
    </section>
    <section className="section-pad container"><SectionHeader number="03" label="WAYS TO CONNECT" title="Languages." /><div className="language-grid">{languages.map((language, i) => <div className="language-item" key={language.name}><span className="mono">0{i + 1}</span><h3>{language.name}</h3><p>{language.level}</p></div>)}</div></section>
    <ContactBanner />
  </main>;
}
