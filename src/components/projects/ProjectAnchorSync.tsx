"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Open native disclosures for direct URLs, tool links, same-route anchors, and history. */
export default function ProjectAnchorSync() {
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const openTarget = (hash = window.location.hash) => {
      if (!hash || pathname !== "/projects") return;
      let id: string;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      const details = target instanceof HTMLDetailsElement ? target : target.querySelector("details");
      if (!details) return;
      details.open = true;
      target.scrollIntoView({ block: "start", behavior: "instant" });
    };
    const sync = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => openTarget()); };
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!anchor || anchor.target === "_blank") return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== pathname || !url.hash) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => openTarget(url.hash));
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);
  return null;
}
