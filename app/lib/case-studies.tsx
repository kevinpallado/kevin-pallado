import type { CaseStudy } from "./data";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "londonfoster",
    tag: "Featured · 2021 — May 2026",
    status: "Live in production",
    name: "LondonFoster",
    subtitle:
      "Transaction, property-listing and back-office platform for a Miami real-estate brokerage.",
    url: "office.londonfoster.org",
    href: "https://office.londonfoster.org/",
    summary: (
      <>
        Full ownership across multiple internal and public-facing systems for a{" "}
        <strong>Miami-Dade brokerage</strong>. Translated real-estate workflows
        into a scalable MVC + service-layer architecture and shipped tooling
        that reduced manual coordination across agents and administrators.
      </>
    ),
    stats: [
      {
        v: (
          <>
            4<em>+</em> yrs
          </>
        ),
        k: "Ownership & support",
      },
      { v: "Multi", k: "Internal + public systems" },
      { v: "MVC", k: "+ service layer" },
    ],
    features: [
      "Transaction and property-listing platform with automated notifications to admins and agents.",
      "Internal back-office tool used daily for operations, reporting, and team visibility.",
      "Third-party API integrations for reliable data exchange across external services.",
      "System diagrams and long-term technical plans derived from real-estate workflow analysis.",
      "Ongoing enhancements, reliability, and security patches in production.",
    ],
    stack: [
      "PHP (Laravel)",
      "MySQL",
      "JavaScript",
      "REST APIs",
      "AWS",
      "Linux/NGINX",
    ],
    stackAccent: ["Laravel", "AWS"],
    ownership: [
      "Architecture",
      "Delivery",
      "Integrations",
      "Back-office tooling",
      "Production support",
    ],
  },
  {
    id: "grantable",
    tag: "Contributor · 2024 — 2025",
    status: "Live in production",
    name: "Grantable",
    subtitle:
      "AI-powered grant writing and management platform for nonprofits.",
    url: "grantable.co",
    href: "https://grantable.co/",
    summary: (
      <>
        Joined <strong>Grantable</strong> as a contributor, connecting Stripe
        webhooks with idempotency to prevent duplicate event processing. Also
        collaborated on integrating Claude and OpenAI APIs and contributed to
        building new application features.
      </>
    ),
    stats: [
      { v: "Stripe", k: "webhook integration" },
      { v: "2", k: "AI APIs integrated" },
      { v: "10+", k: "months contributed" },
    ],
    features: [
      "Connected Stripe webhooks to handle subscription events from the platform side.",
      "Applied idempotency keys to prevent duplicate event processing.",
      "Contributed to building new application features alongside the core team.",
      "Claude API and OpenAI integration for core AI-powered grant writing features.",
    ],
    stack: ["Node.js", "Stripe", "Webhooks", "Claude API", "OpenAI"],
    stackAccent: ["Stripe", "Claude API"],
    ownership: [
      "Contributor",
      "Billing & payments",
      "AI integrations",
      "New features",
    ],
  },
  {
    id: "racketa",
    tag: "Co-founder & Contributor · 2024 — Present",
    status: "Live in production",
    name: "Racketa",
    subtitle:
      "All-in-one racket sports management platform — clubs, tournaments, courts, training, merchandise, and coaching in one place.",
    url: "racketa.app",
    href: "https://racketa.app/",
    summary: (
      <>
        Co-founded and contributed to <strong>Racketa</strong>, a platform built
        for the racket sports community. Players can discover clubs and join
        tournaments; club admins manage members, sessions, fees, and
        announcements — all from a single product that covers every layer of the
        sport from court booking to coach management.
      </>
    ),
    stats: [
      { v: "6+", k: "Core modules shipped" },
      { v: "Multi", k: "Sports supported" },
      { v: "Live", k: "Production app" },
    ],
    features: [
      "Club management — members, roles, fees, announcements, and join requests.",
      "Tournament discovery and registration with skill-level filtering and match types.",
      "Court scheduling with open-queueing sessions and time-slot management.",
      "Shuttlecock and merchandise tracking payable by members.",
      "Member balance ledger with credits, charges, and payment history.",
      "Session summaries and officer permission controls per club.",
    ],
    stack: ["SvelteKit", "Laravel", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    stackAccent: ["SvelteKit", "Laravel"],
    ownership: [
      "Co-founder",
      "Contributor",
      "Club & member features",
      "Tournament flows",
      "Admin tooling",
    ],
  },
  {
    id: "quansys",
    tag: "Featured · 2020 — Present",
    status: "Live in production",
    name: "Quansys",
    subtitle:
      "Accounting & purchase-order platform running a full-service gasoline station in Cagayan de Oro.",
    url: "quansys.apexfuelstation.com",
    href: "https://quansys.apexfuelstation.com/",
    summary: (
      <>
        Built end-to-end for <strong>Apex Fuel Station</strong>, Quansys
        replaced paper ledgers and spreadsheets with a single source of truth
        for purchase orders, receivables, and daily reconciliation. Designed,
        built, deployed, and maintained solo — from database schema to UI to
        ops.
      </>
    ),
    stats: [
      { v: "1", k: "Station run on it daily" },
      { v: "10+", k: "Modules in one system" },
      {
        v: (
          <>
            24<em>/</em>7
          </>
        ),
        k: "Production uptime",
      },
    ],
    features: [
      "Purchase-order lifecycle — from request and approval to supplier delivery and three-way match.",
      "Double-entry accounting with chart of accounts, journal entries, and period-close reporting.",
      "Receivables and payables aging, with credit-line tracking per customer and supplier.",
      "Role-based access for cashiers, station managers, accountants, and owner oversight.",
      "Daily sales reconciliation against pump readings, deliveries, and deposits.",
    ],
    stack: ["Laravel", "PHP 7", "jQuery", "MariaDB", "Blade", "NGINX"],
    stackAccent: ["Laravel", "MariaDB"],
    ownership: [
      "Planning",
      "Architecture",
      "Development",
      "Deployment",
      "Ongoing support",
    ],
  },
];
