export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  oneLiner: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  url?: string;
  /**
   * Year and stack are Kevin's own unconfirmed recollection. The patch bay
   * draws these lines at half weight and dashed, so the page never asserts
   * what has not been verified. Clear the flag once the facts are checked.
   */
  unverified?: boolean;
  /**
   * Order-of-magnitude scale, only where there is evidence for it. Never
   * invent one: an absent reading renders as an absent reading.
   */
  scale?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "londonfoster",
    name: "LondonFoster",
    year: "2021 — present",
    role: "Featured · Full ownership",
    oneLiner:
      "Transaction, property-listing, and back-office systems for a Miami real-estate brokerage.",
    description:
      "A production platform translating real-estate workflows into reliable public and internal tools for agents, administrators, and operations.",
    image: "/projects/londonfoster-dashboard.png",
    imageAlt: "LondonFoster dashboard",
    stack: ["Laravel", "MySQL", "JavaScript", "AWS"],
    url: "https://office.londonfoster.org",
    scale: { value: "1,300+", label: "agents on the platform" },
  },
  {
    slug: "racketa",
    name: "Racketa",
    year: "2024 — present",
    role: "Co-founder · Contributor",
    oneLiner:
      "All-in-one racket sports management for clubs, tournaments, courts, and coaching.",
    description:
      "A platform for the racket sports community, connecting player discovery with the daily workflows of club administrators.",
    image: "/projects/racketa-dashboard.png",
    imageAlt: "Racketa home screen",
    stack: ["SvelteKit", "Laravel", "PostgreSQL", "Tailwind CSS"],
    url: "https://racketa.app",
  },
  {
    slug: "quansys",
    name: "Quansys",
    year: "2019 — present",
    role: "Featured · Built solo",
    oneLiner:
      "Accounting and purchase-order software running a full-service gasoline station.",
    description:
      "A single source of truth for purchase orders, receivables, reconciliation, and daily operations at a family-operated station in Cagayan de Oro.",
    image: "/projects/apex-dashboard.png",
    imageAlt: "Quansys sales dashboard",
    stack: ["Laravel", "PHP", "MariaDB", "NGINX"],
    url: "https://quansys.apexfuelstation.com",
  },
  {
    slug: "grantable",
    name: "Grantable",
    year: "2024 — 2025",
    role: "Contributor",
    oneLiner:
      "AI-powered grant writing with resilient billing and model integrations.",
    description:
      "Connected Stripe webhooks with idempotency and contributed to Claude and OpenAI integrations for core product features.",
    image: "/projects/grantable-dashboard.png",
    imageAlt: "Grantable project preview",
    stack: ["Node.js", "Stripe", "Claude API", "OpenAI"],
  },
  {
    slug: "basc-eportal",
    name: "BaSC ePortal",
    year: "2023 — present",
    role: "Contributor",
    oneLiner:
      "Enrollment system for a college — online admissions, student records, and the staff screens that process each applicant.",
    description:
      "Contributed to the college's enrollment system: freshman and transferee applications, student accounts, and the internal screens staff use to review and enroll each applicant.",
    image: "/projects/enrollment-dashboard.png",
    imageAlt: "BaSC ePortal enrollment system",
    stack: ["Laravel", "PHP", "MySQL"],
    url: "https://bsc.iclique.online",
  },
  {
    slug: "landers",
    name: "Landers Superstore",
    year: "2026 — present",
    role: "Contributor",
    oneLiner:
      "Ecommerce storefront and online grocery ordering for a membership superstore chain.",
    description:
      "Contributed to the ecommerce experience for a membership warehouse retailer — product browsing, cart and checkout flows, and the integrations behind online ordering.",
    image: "/projects/landers-dashboard.png",
    imageAlt: "Landers Superstore online store",
    stack: ["JavaScript", "REST APIs", "Microservices", "AWS CDK"],
    url: "https://www.landers.ph",
  },
  {
    slug: "zenmarinecharter",
    name: "Zen Marine Charter",
    year: "2026",
    role: "Project Lead",
    oneLiner:
      "Booking and charter management for a private luxury yacht operating out of Destin, Florida.",
    description:
      "Charter owners run a booking end to end — dates synced to the calendars on both sides, contracts handled in the same flow, and enquiries carried through to GoHighLevel for follow-up.",
    image: "/projects/zenmarine-dashboard.png",
    imageAlt: "Zen Marine Charter booking site",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "GoHighLevel"],
    url: "https://www.zenmarinecharter.com",
  },
  {
    slug: "zenintent",
    name: "Zen Intent",
    year: "2026",
    role: "Project Lead",
    oneLiner:
      "B2B lead generation built on prospect pain points instead of cold lists.",
    description:
      "Clients get their leads without scraping sites by hand — AI does the gathering and verifies each prospect before it reaches the list.",
    image: "/projects/zenintent-dashboard.png",
    imageAlt: "Zen Intent lead targeting screen",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    url: "https://www.zenintent.io",
  },
];

export const industries = [
  "real estate",
  "SaaS",
  "accounting",
  "education",
  "ecommerce",
  "hospitality",
];

export const skills = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "SvelteKit",
  "Python",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
  "Stripe",
  "AI integrations",
  "AWS CDK (Cloud Development Kit)",
  "Docker",
  "DevOps",
];

export const featuredProject = projects[0];

/** A jack's id has to survive being put in an SVG id and a CSS selector. */
export function jackId(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * The service row of the bay, in the order the ports are wired. Derived from
 * the projects themselves so a jack can never exist without a system behind
 * it — the bay is the real graph, not a decorative one.
 */
export const services: { id: string; label: string; systems: string[] }[] =
  (() => {
    const order: string[] = [];
    const bySystem = new Map<string, string[]>();
    for (const project of projects) {
      for (const item of project.stack) {
        if (!bySystem.has(item)) {
          bySystem.set(item, []);
          order.push(item);
        }
        bySystem.get(item)!.push(project.slug);
      }
    }
    return order.map((label) => ({
      id: jackId(label),
      label,
      systems: bySystem.get(label)!,
    }));
  })();

/**
 * Elapsed years a system has been running, for the IN SERVICE meter. Counted
 * as a difference, not inclusively: 2019 to 2026 is seven years, and calling
 * it eight would be the kind of rounding-up this site exists not to do.
 */
export function yearsInService(year: string) {
  const start = Number(year.slice(0, 4));
  if (!Number.isFinite(start)) return null;
  const end = /present/i.test(year)
    ? new Date().getFullYear()
    : Number(year.slice(-4));
  if (!Number.isFinite(end)) return null;
  return Math.max(1, end - start);
}
