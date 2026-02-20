"use client";

import { useEffect, useRef } from "react";

// Attaches an IntersectionObserver to the returned ref.
// When the element scrolls into view, the class "in-view" is added.
// Combined with the .reveal / .reveal-stagger CSS utility classes in
// globals.css, this produces smooth fade-in-up entrance animations.
// prefers-reduced-motion is handled purely in CSS.

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Once visible, no need to keep observing.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
