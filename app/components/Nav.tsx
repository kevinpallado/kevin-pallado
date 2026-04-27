"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../lib/data";
import { ArrowIcon } from "../lib/icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"nav-wrap" + (scrolled ? " scrolled" : "")}>
      <nav className="nav" aria-label="Primary">
        {/* <a href="#top" className="nav-brand">
          <div className="nav-brand-mark" aria-hidden="true">
            KP
          </div>
          <div className="nav-brand-name">
            Kevin Pallado<small>Fullstack Developer</small>
          </div>
        </a> */}
        <div className="nav-links">
          {NAV_ITEMS.map((item, i) => (
            <a key={item.id} href={"#" + item.id} className="nav-link">
              <span className="num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <div className="nav-status">
            <span className="dot" aria-hidden="true" />
            Open to remote roles
          </div>
          <a href="#contact" className="nav-cta">
            Get in touch
            <ArrowIcon />
          </a>
        </div>
      </nav>
    </div>
  );
}
