"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A single settle on entry. Content is visible by default when JavaScript or
 * IntersectionObserver is unavailable (see the noscript rule in layout), and
 * reduced motion drops the transform in CSS rather than here.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      // A fixed inset, never a percentage: a percentage scales with the
      // viewport, and on a tall window the dead band can swallow the last
      // section of the document so it never reveals at all.
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal${shown ? " is-in" : ""}`}
      style={delay && !shown ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
