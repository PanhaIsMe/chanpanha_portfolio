import { ArrowUpRight, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { contactMethods, profile } from "../data/profile";
import CopyEmail from "../components/CopyEmail";
import ContactForm from "../components/ContactForm";

export const metadata = { title: "Contact", description: "Send Cheng Chanpanha a message about software development opportunities or collaboration." };
const icons = { email: Mail, school: GraduationCap, telegram: Send, linkedin: Linkedin, github: Github };
export default function Contact() {
  return <main id="main-content" tabIndex={-1}>
    <section className="page-intro container"><p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p><h1>Good things start<br />with a <em>hello.</em></h1><div className="intro-bottom"><p>A role, a project, or a shared interest in building software. I’d like to hear about it.</p><span className="mono">LET’S CONNECT ↗</span></div></section>
    <section className="container contact-main" aria-labelledby="message-heading">
      <ContactForm />
      <div className="contact-primary">
        <h2>Prefer email?</h2>
        <a href={`mailto:${profile.email}`} className="primary-email">{profile.email}<ArrowUpRight size={30} aria-hidden="true" /></a>
        <CopyEmail email={profile.email} />
        <div className="contact-location"><MapPin size={17} aria-hidden="true" /><span>{profile.address}</span></div>
        <a className="contact-phone" href="tel:+85510667732"><Phone size={17} aria-hidden="true" />{profile.phone}</a>
      </div>
    </section>
    <section className="container contact-channels" aria-labelledby="channels-heading"><h2 id="channels-heading" className="eyebrow">ELSEWHERE ON THE INTERNET</h2><div className="contact-grid">{contactMethods.map(contact => { const Icon = icons[contact.kind]; return <a key={contact.label} href={contact.href} target={contact.href.startsWith("https:") ? "_blank" : undefined} rel={contact.href.startsWith("https:") ? "noopener noreferrer" : undefined} className="contact-link"><Icon size={23} aria-hidden="true" /><span><span className="contact-label">{contact.label}</span><span className="contact-value">{contact.value}</span></span><ArrowUpRight size={19} className="contact-arrow" aria-hidden="true" /></a>; })}</div></section>
  </main>;
}
