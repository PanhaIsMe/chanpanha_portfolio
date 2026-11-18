"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive decoration: no content is hidden while waiting for JS or an observer. */
export default function NotebookMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer?.unobserve(entry.target);
        }
      }, { threshold: 0.12 });
      document.querySelectorAll<HTMLElement>("[data-motion]:not([data-revealed])").forEach(element => observer!.observe(element));
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { observer?.disconnect(); preference.removeEventListener("change", setup); };
  }, [pathname]);

  return null;
}
