import type { ReactNode } from "react";

export const SITE = {
  name: "Kevin Pallado",
  fullName: "Kevin Ren B. Pallado",
  role: "Fullstack Developer",
  email: "kevin.pallado97@gmail.com",
  location: "Cagayan de Oro, Philippines",
  linkedin: "https://www.linkedin.com/in/kevin-pallado-94b251130",
  resumePath: "/Kevin-Pallado-Resume.pdf",
  profileImage: "/assets/profile_picture.jpeg",
  url: "https://kevinpallado.dev",
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "sites", label: "Sites" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;

export type SiteEntry = {
  id: string;
  name: string;
  url: string;
  href: string;
  desc: string;
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const SITES: SiteEntry[] = [
  {
    id: "community-green-farms",
    name: "Community Green Farms",
    url: "communitygreenfarms.org",
    href: "https://www.communitygreenfarms.org/",
    desc: "Atlanta-based 501(c)(3) fighting food insecurity through hydroponic farms in schools. Public donor site plus an admin dashboard for managing programs, donations, and volunteer events — with custom workflows that sync scheduled events into the team's Google Calendar.",
    tags: [
      "Public site + admin",
      "Donor & volunteer ops",
      "Google Calendar sync",
    ],
    image: "/assets/sites/community-green-farms.png",
    imageWidth: 201,
    imageHeight: 1200,
  },
  {
    id: "zen-marine-charter",
    name: "Marine Charter",
    url: "zenmarinecharter.com",
    href: "https://www.zenmarinecharter.com/",
    desc: "Luxury yacht-charter brand on Florida's Emerald Coast. Public site for inquiries and trip packages, plus a charter-management dashboard with custom booking workflows that push confirmed bookings straight into the operator's Google Calendar.",
    tags: ["Public site + admin", "Booking workflows", "Google Calendar sync"],
    image: "/assets/sites/zen-marine.png",
    imageWidth: 330,
    imageHeight: 1200,
  },
  {
    id: "urban-creek-development",
    name: "Urban Creek Development",
    url: "urbancreekdevelopment.com",
    href: "https://urbancreekdevelopment.com/",
    desc: "Coquitlam contractor serving Metro Vancouver. Marketing site paired with an internal dashboard for the lead-to-quote pipeline, with custom workflows that turn site-walk appointments into Google Calendar events for the field team.",
    tags: ["Public site + admin", "Lead pipeline", "Google Calendar sync"],
    image: "/assets/sites/urban-creek.png",
    imageWidth: 809,
    imageHeight: 1200,
  },
];

export type CaseStat = { v: ReactNode; k: string };

export type CaseStudy = {
  id: "quansys" | "londonfoster";
  tag: string;
  status: string;
  name: string;
  subtitle: string;
  url: string;
  href: string;
  summary: ReactNode;
  stats: CaseStat[];
  features: string[];
  stack: string[];
  stackAccent: string[];
  ownership: string[];
};

export const PREVIEW_SHOTS: Record<
  CaseStudy["id"],
  { src: string; label: string }[]
> = {
  quansys: [
    { src: "/assets/qs-02-dashboard.png", label: "Sales dashboard" },
    { src: "/assets/qs-03-clients.png", label: "Client list" },
    { src: "/assets/qs-04-daily-sales.png", label: "Daily sales record" },
    { src: "/assets/qs-01-login.png", label: "Account login" },
  ],
  londonfoster: [
    { src: "/assets/lf-05-dashboard.png", label: "Dashboard" },
    { src: "/assets/lf-02-table.png", label: "Commission requests" },
    { src: "/assets/lf-03-transaction.png", label: "Transaction details" },
    { src: "/assets/lf-04-sign.png", label: "Document signing" },
    { src: "/assets/lf-01-login.png", label: "Agent login" },
  ],
};

export type Project = {
  mark: string;
  name: string;
  year: string;
  desc: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    mark: "G",
    name: "Grantable Billing",
    year: "2024 — 25",
    desc: "Led Stripe-webhook integration for subscription renewals, failed-payment handling, and event-driven billing workflows. Also collaborated on Claude & OpenAI API integrations for core product features.",
    stack: ["Stripe", "Node.js", "Webhooks", "Claude API"],
  },
  {
    mark: "F",
    name: "Fraia RAG Lab",
    year: "2024",
    desc: "Python experimentation harness for evaluating Retrieval-Augmented Generation across parameter combinations. Automated benchmarking, dataset utilities, and prediction pipelines.",
    stack: ["Python", "RAG", "OpenAI", "Automation"],
  },
  {
    mark: "P",
    name: "PRISMS",
    year: "2019 — 21",
    desc: "Maintained and extended a multi-tenant enrollment system used by several educational institutions. Designed new modules to match evolving client requirements while keeping the legacy core stable.",
    stack: ["PHP", "MySQL", "Web", "IoT"],
  },
  {
    mark: "X",
    name: "Xavier Ag Surveys",
    year: "2018 — 19",
    desc: "Built tablet-based mobile apps for agricultural field research at Xavier University Ateneo de Cagayan, plus farmer training on tablet-based data collection workflows.",
    stack: ["Mobile", "Surveys", "Training"],
  },
  {
    mark: "S",
    name: "IoT & Embedded Work",
    year: "2019 — 21",
    desc: "Parallel track at PrinceTech building web + IoT integrations using Raspberry Pi and microcontrollers. Connected physical devices to browser dashboards.",
    stack: ["Raspberry Pi", "Node.js", "Sensors"],
  },
  {
    mark: "O",
    name: "Internal API Integrations",
    year: "ongoing",
    desc: "Recurring theme across roles — designing and maintaining service-layer integrations with third-party APIs to keep data flowing reliably between business systems.",
    stack: ["REST", "Webhooks", "Service layer"],
  },
];

export type ExperienceEntry = {
  from: string;
  to: string;
  active?: boolean;
  role: string;
  emph?: string;
  company: string;
  href?: string;
  location: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    from: "Sept 2021",
    to: "Present",
    active: true,
    role: "Fullstack Developer",
    emph: "Lead",
    company: "LondonFoster Real Estate",
    href: "https://londonfoster.com/",
    location: "Miami-Dade, FL · Remote",
    bullets: [
      "Full ownership of multiple internal and public-facing systems — planning, architecture, delivery, and support.",
      "Shipped a transaction and property-listing platform with automated notifications across agents and admins.",
      "Designed and built an internal back-office tool used daily for operations and reporting.",
      "Implemented an MVC + service-layer architecture separating business logic, data access, and presentation.",
    ],
  },
  {
    from: "Nov 2024",
    to: "Sept 2025",
    role: "Software Engineer",
    company: "Grantable",
    href: "http://grantable.co/",
    location: "Richmond, VA · Remote",
    bullets: [
      "Led Stripe-webhook integration — renewals, payment retries, and automated user notifications.",
      "Improved billing reliability with event-driven processes and edge-case handling for failed payments.",
      "Collaborated on production integration of Claude and OpenAI APIs into core product features.",
    ],
  },
  {
    from: "Feb 2024",
    to: "Aug 2024",
    role: "AI Developer",
    company: "Fraia",
    href: "https://www.fraia.ai/",
    location: "Bangkok, Thailand · Remote",
    bullets: [
      "Designed Python tooling to evaluate and optimize RAG patterns across parameter combinations.",
      "Automated AI-response evaluation and built pipelines for prediction, evaluation, and data upserts.",
      "Created reusable utilities for dataset handling, experiment execution, and result analysis.",
    ],
  },
  {
    from: "Jun 2019",
    to: "Sept 2021",
    role: "Programmer",
    company: "PrinceTechnologies Inc.",
    href: "https://www.princetech.com.ph/",
    location: "Cagayan de Oro, PH",
    bullets: [
      "Maintained PRISMS — a multi-client enrollment system — and designed new modules for evolving requirements.",
      "Contributed across web and IoT tracks, including embedded system integrations.",
    ],
  },
  {
    from: "May 2018",
    to: "Apr 2019",
    role: "Project Assistant II",
    company: "Xavier University — College of Agriculture",
    location: "Cagayan de Oro, PH",
    bullets: [
      "Developed mobile apps backed by field-survey results to support agricultural research initiatives.",
      "Trained farmers on tablet-based solutions to modernize agricultural processes.",
    ],
  },
  {
    from: "Apr 2017",
    to: "Jun 2017",
    role: "OJT — Intern",
    company: "Syntactics Inc.",
    location: "Cagayan de Oro, PH",
    bullets: [
      "Assisted in developing and maintaining web applications; bug triage and template improvements.",
    ],
  },
];

export type SkillGroup = { title: string; tags: string[] };

export const SKILLS: SkillGroup[] = [
  {
    title: "Backend & APIs",
    tags: [
      "PHP (Laravel)",
      "Python",
      "Node.js",
      "REST APIs",
      "MVC + service layer",
    ],
  },
  {
    title: "Frontend",
    tags: [
      "JavaScript",
      "React",
      "SvelteKit",
      "Next.js",
      "Inertia.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    tags: ["MySQL", "MariaDB", "PostgreSQL", "DynamoDB", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    tags: [
      "AWS Lambda",
      "SNS",
      "S3",
      "EC2",
      "DynamoDB",
      "Amplify",
      "Linux",
      "NGINX",
      "Apache",
    ],
  },
  {
    title: "Payments & Integrations",
    tags: ["Stripe subscriptions", "Webhooks", "Third-party APIs"],
  },
  {
    title: "AI in daily practice",
    tags: [
      "Claude Code",
      "Skills",
      "MCP servers",
      "Subagents",
      "OpenAI / Claude APIs",
      "RAG systems",
    ],
  },
];
