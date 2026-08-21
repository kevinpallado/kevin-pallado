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
    year: "2025", // TODO: confirm
    role: "Contributor",
    oneLiner:
      "Online admissions and student information portal for a college enrollment workflow.",
    description:
      "Contributed to the portal handling freshman and transferee applications, student accounts, and the internal screens staff use to process enrollment.",
    image: "/projects/enrollment-dashboard.png",
    imageAlt: "BaSC ePortal enrollment system",
    stack: ["Laravel", "PHP", "MySQL"], // TODO: confirm
    url: "https://bsc.iclique.online",
  },
  {
    slug: "landers",
    name: "Landers Superstore",
    year: "2025", // TODO: confirm
    role: "Contributor",
    oneLiner:
      "Ecommerce storefront and online grocery ordering for a membership superstore chain.",
    description:
      "Contributed to the ecommerce experience for a membership warehouse retailer — product browsing, cart and checkout flows, and the integrations behind online ordering.",
    image: "/projects/landers-dashboard.png",
    imageAlt: "Landers Superstore online store",
    stack: [
      "JavaScript",
      "REST APIs",
      "MicroService",
      "Cloud Development Kit (CDK)",
    ], // TODO: confirm
    url: "https://www.landers.ph",
  },
];

export const industries = [
  "real estate",
  "SaaS",
  "accounting",
  "education",
  "ecommerce",
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
