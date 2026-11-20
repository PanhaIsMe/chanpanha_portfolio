"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// CSS keeps content available without JavaScript and respects reduced motion.
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname} className="page-transition">{children}</div>;
}
