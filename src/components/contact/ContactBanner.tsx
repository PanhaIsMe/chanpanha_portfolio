import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

export default function ContactBanner() {
  return <section className="contact-banner" aria-labelledby="contact-heading"><div className="container contact-banner-inner">
    <div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2 id="contact-heading">Let’s make<br />something <em>work.</em></h2></div>
    <div className="contact-banner-aside"><span className="notebook-contact-stamp" data-motion="stamp" aria-hidden="true">LET’S BUILD ↗</span><p>Open to opportunities, interesting problems, and conversations about software.</p><Link className="button button-light" href="/contact">Say hello <ArrowUpRight size={18} aria-hidden="true" /></Link><a className="banner-contact-link" href={`mailto:${profile.email}`}>Email me directly <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </div></section>;
}
