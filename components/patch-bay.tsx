"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  jackId,
  projects,
  services,
  type Project,
} from "@/data/projects";

type Point = { x: number; y: number };

/** Cords hang. Control points pull straight down so the sag is gravity, not
 *  decoration — a longer run droops further, exactly like a real patch cord. */
function cordPath(a: Point, b: Point) {
  const span = Math.hypot(b.x - a.x, b.y - a.y);
  const sag = Math.min(86, Math.max(18, span * 0.3));
  return `M ${a.x} ${a.y} C ${a.x} ${a.y + sag}, ${b.x} ${b.y + sag}, ${b.x} ${b.y}`;
}

/**
 * The line the bay opens patched. Prefer a system carrying a real scale
 * reading so the first viewport holds a fact a visitor can check; fall back to
 * the oldest line when none does.
 */
const INITIAL =
  projects.find((p) => p.scale) ??
  projects.reduce((oldest, p) =>
    Number(p.year.slice(0, 4)) < Number(oldest.year.slice(0, 4)) ? p : oldest,
  );

export function PatchBay({ email }: { email: string }) {
  const [activeSlug, setActiveSlug] = useState(INITIAL.slug);
  const bayRef = useRef<HTMLDivElement>(null);
  const jacks = useRef(new Map<string, HTMLElement>());
  const [geometry, setGeometry] = useState<{
    width: number;
    height: number;
    points: Record<string, Point>;
  }>({ width: 0, height: 0, points: {} });

  const active =
    projects.find((p) => p.slug === activeSlug) ?? (INITIAL as Project);

  const measure = useCallback(() => {
    const bay = bayRef.current;
    if (!bay) return;
    const base = bay.getBoundingClientRect();
    const points: Record<string, Point> = {};
    jacks.current.forEach((el, id) => {
      const port = el.querySelector(".port") ?? el;
      const rect = port.getBoundingClientRect();
      points[id] = {
        x: rect.left - base.left + rect.width / 2,
        y: rect.top - base.top + rect.height / 2,
      };
    });
    setGeometry({ width: base.width, height: base.height, points });
  }, []);

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (bayRef.current) observer.observe(bayRef.current);
    window.addEventListener("resize", measure);
    // Web fonts land after first paint and reflow every label under a jack.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const register = (id: string) => (el: HTMLElement | null) => {
    if (el) jacks.current.set(id, el);
    else jacks.current.delete(id);
  };

  const from = geometry.points[`sys-${active.slug}`];
  const cords = from
    ? active.stack
        .map((label) => geometry.points[`svc-${jackId(label)}`])
        .filter((point): point is Point => Boolean(point))
        .map((point) => cordPath(from, point))
    : [];

  const liveServices = new Set(active.stack.map((label) => jackId(label)));

  return (
    <div className="bay panel" ref={bayRef}>
      <svg
        className="bay-cords"
        width={geometry.width || undefined}
        height={geometry.height || undefined}
        aria-hidden="true"
        focusable="false"
      >
        {cords.map((d, index) => (
          <path
            key={`${active.slug}-${index}`}
            d={d}
            className={`cord cord-draw${active.unverified ? " is-provisional" : ""}`}
            ref={(node) => {
              if (!node) return;
              const length = node.getTotalLength();
              node.style.setProperty("--len", `${length}`);
              node.style.strokeDasharray = `${length}`;
              node.style.animationDelay = `${index * 60}ms`;
            }}
          />
        ))}
      </svg>

      <div className="bay-rows">
        <div>
          <p className="strip">
            <b>Systems</b>
          </p>
          <div className="jack-row" role="group" aria-label="Systems">
            {projects.map((project) => {
              const live = project.slug === active.slug;
              return (
                <button
                  key={project.slug}
                  type="button"
                  ref={register(`sys-${project.slug}`)}
                  className={`jack is-system${live ? " is-live" : ""}`}
                  aria-pressed={live}
                  onPointerEnter={() => setActiveSlug(project.slug)}
                  onFocus={() => setActiveSlug(project.slug)}
                  onClick={() => setActiveSlug(project.slug)}
                >
                  <span className="port" />
                  <span className="tag">{project.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="strip">
            <b>Services</b>
          </p>
          <ul className="jack-row is-services" aria-label="Services">
            {services.map((service) => (
              <li
                key={service.id}
                ref={register(`svc-${service.id}`)}
                className={`jack${
                  liveServices.has(service.id) ? " is-live" : " is-idle"
                }`}
              >
                <span className="port" aria-hidden="true" />
                <span className="tag">{service.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bay-readout">
        <div>
          <p className="name">
            {active.name}
            <span className={`since${active.unverified ? " is-provisional" : ""}`}>
              {active.year}
            </span>
          </p>
          <p className="desc">
            {active.oneLiner}{" "}
            <Link href={`/projects/${active.slug}`} className="readout-link">
              Open record
              <span className="sr-only"> for {active.name}</span>
            </Link>
          </p>
          {active.scale ? (
            <p className="reading">
              <b>{active.scale.value}</b> {active.scale.label}
            </p>
          ) : null}
          {active.unverified ? (
            <p className="bay-note">
              Dashed cords mean the dates and stack on this system are from
              memory and have not been checked yet.
            </p>
          ) : null}
        </div>
        <a href={`mailto:${email}`} className="jack-cta">
          <span className="jack-cta-jack" aria-hidden="true">
            <svg className="dangle" viewBox="0 0 44 32">
              <path d="M 7 3 C 7 17, 19 14, 27 24" />
              <circle cx="28" cy="25" r="3.2" />
            </svg>
          </span>
          <span className="jack-cta-text">
            <b>Open line</b>
            <span>{email}</span>
            <em>Select projects · senior or lead roles, 2026</em>
          </span>
        </a>
      </div>
    </div>
  );
}
