import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";

export function SiteHeader({ back }: { back?: { href: string; label: string } }) {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label={`${site.name}, home`}>
        KP
        <i aria-hidden="true" />
      </Link>
      {back ? (
        <Link href={back.href} className="back-link">
          <ArrowLeft size={14} aria-hidden="true" />
          {back.label}
        </Link>
      ) : (
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </header>
  );
}
