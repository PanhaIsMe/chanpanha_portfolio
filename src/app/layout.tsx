import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import PageTransition from "@/components/layout/PageTransition";
import SiteFooter from "@/components/layout/SiteFooter";
import NotebookMotion from "@/components/layout/NotebookMotion";
import ProjectAnchorSync from "@/components/projects/ProjectAnchorSync";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
export const metadata: Metadata = {
  title: { default: "Cheng Chanpanha · Software Developer", template: "%s · Cheng Chanpanha" },
  description: "Software developer and student at CADT in Phnom Penh. Projects, contributions, and explorations in web, backend, and mobile software.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${outfit.variable}`}><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader /><PageTransition>{children}</PageTransition><SiteFooter /><NotebookMotion /><ProjectAnchorSync /></body></html>;
}
