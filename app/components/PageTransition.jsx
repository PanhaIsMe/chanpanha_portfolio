"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

// 1. Define the order of your pages
const routeOrder = {
  "/": 0,
  "/about": 1,
  "/projects": 2,
  "/contact": 3,
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  
  // 2. Keep track of the previous page
  const prevPath = useRef(pathname);

  // 3. Calculate Direction
  const currentIdx = routeOrder[pathname] ?? 0;
  const prevIdx = routeOrder[prevPath.current] ?? 0;

  let direction = 0; // Default: No slide (just fade)
  
  if (currentIdx > prevIdx) {
    direction = 100; // Moving Forward -> Slide in from Right
  } else if (currentIdx < prevIdx) {
    direction = -100; // Moving Backward -> Slide in from Left
  }

  // 4. Update the previous path AFTER we calculated the direction
  useEffect(() => {
    prevPath.current = pathname;
  }, [pathname]);

  return (
    <motion.div
      key={pathname} // This forces the animation to run every time path changes
      initial={{ x: direction, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -direction, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}