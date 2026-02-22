import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition"
import Footer from "./components/Footer"
// 1. Configure the fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

export const metadata = {
  title: "Cheng Chanpanha - Portfolio",
  description: "Computer Science Student & Full Stack Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={`${inter.variable} ${outfit.variable} font-body antialiased`}> */}
        <body className={`${inter.variable} ${outfit.variable} font-body antialiased bg-white text-gray-900 overflow-x-hidden w-screen`}>
        <Navbar /> 
        
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}