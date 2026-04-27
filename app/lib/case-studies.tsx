import type { CaseStudy } from "./data";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "quansys",
    tag: "Featured · 2023 — Present",
    status: "Live in production",
    name: "Quansys",
    subtitle:
      "Accounting & purchase-order platform running a full-service gasoline station in Cagayan de Oro.",
    url: "quansys.apexfuelstation.com",
    href: "https://quansys.apexfuelstation.com/",
    summary: (
      <>
        Built end-to-end for <strong>Apex Fuel Station</strong>, Quansys replaced paper ledgers and
        spreadsheets with a single source of truth for purchase orders, receivables, and daily
        reconciliation. Designed, built, deployed, and maintained solo — from database schema to UI
        to ops.
      </>
    ),
    stats: [
      { v: "1", k: "Station run on it daily" },
      { v: "5+", k: "Modules in one system" },
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
    stack: ["Laravel", "PHP 8", "jQuery", "MariaDB", "Blade", "NGINX"],
    stackAccent: ["Laravel", "MariaDB"],
    ownership: ["Planning", "Architecture", "Development", "Deployment", "Ongoing support"],
  },
  {
    id: "londonfoster",
    tag: "Featured · 2021 — Present",
    status: "Live in production",
    name: "LondonFoster",
    subtitle:
      "Transaction, property-listing and back-office platform for a Miami real-estate brokerage.",
    url: "office.londonfoster.org",
    href: "https://office.londonfoster.org/",
    summary: (
      <>
        Full ownership across multiple internal and public-facing systems for a{" "}
        <strong>Miami-Dade brokerage</strong>. Translated real-estate workflows into a scalable MVC
        + service-layer architecture and shipped tooling that reduced manual coordination across
        agents and administrators.
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
    stack: ["PHP (Laravel)", "MySQL", "JavaScript", "REST APIs", "AWS", "Linux/NGINX"],
    stackAccent: ["Laravel", "AWS"],
    ownership: [
      "Architecture",
      "Delivery",
      "Integrations",
      "Back-office tooling",
      "Production support",
    ],
  },
];
