"use client";

import { usePathname } from "next/navigation";

// CSS keeps content available without JavaScript and respects reduced motion.
export default function PageTransition({ children }) {
  const pathname = usePathname();
  return <div key={pathname} className="page-transition">{children}</div>;
}
