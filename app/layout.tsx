import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import NotebookMotion from "./components/NotebookMotion";
import ProjectAnchorSync from "./components/ProjectAnchorSync";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
export const metadata: Metadata = {
  title: { default: "Cheng Chanpanha · Software Developer", template: "%s · Cheng Chanpanha" },
  description: "Software developer and student at CADT in Phnom Penh. Projects, contributions, and explorations in web, backend, and mobile software.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${outfit.variable}`}><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><PageTransition>{children}</PageTransition><Footer /><NotebookMotion /><ProjectAnchorSync /></body></html>;
}
