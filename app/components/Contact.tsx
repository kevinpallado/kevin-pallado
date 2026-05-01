"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, DownloadIcon, LinkedinIcon, MailIcon } from "../lib/icons";
import { SITE } from "../lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-eyebrow">07 · Get in touch</div>
          <h2>
            Have a system that <em>needs building</em> — or one that needs saving?
          </h2>
          <p>
            I&apos;m open to new remote roles and selective consulting engagements. If you&apos;re
            shipping something ambitious and need a developer who&apos;ll take the whole thing
            seriously, let&apos;s talk.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${SITE.email}`} className="primary">
              <MailIcon /> Email me
            </a>
            <button type="button" onClick={copy} className="ghost" aria-live="polite">
              {copied ? <CheckIcon /> : <CopyIcon />} {copied ? "Copied" : SITE.email}
            </button>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="ghost">
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href={SITE.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost"
            >
              <DownloadIcon /> Resume (PDF)
            </a>
          </div>

          <div className="contact-grid">
            <div>
              <div className="k">Email</div>
              <div className="v">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
            <div>
              <div className="k">Location</div>
              <div className="v">Cagayan de Oro, Philippines · UTC+8</div>
            </div>
            <div>
              <div className="k">Availability</div>
              <div className="v">Remote · Full-time or contract</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
