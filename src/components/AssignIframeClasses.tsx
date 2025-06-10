"use client";

import { useEffect } from "react";

export default function AssignIframeClasses() {
  useEffect(() => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe, index) => {
      const uniqueClass = `auto-iframe-${index + 1}`;
      iframe.classList.add(uniqueClass);
      console.log(`iframe ${index + 1} assigned class: ${uniqueClass}`);
    });
  }, []);

  return null; // No UI, just logic
}
