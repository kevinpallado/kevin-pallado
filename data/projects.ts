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
   * Year and stack are Kevin's own unconfirmed recollection. Pages mark the
   * record as unverified so they never assert what has not been checked.
   * Clear the flag once the facts are confirmed.
   */
  unverified?: boolean;
  /**
   * Order-of-magnitude scale, only where there is evidence for it. Never
   * invent one: an absent reading renders as an absent reading.
   */
  scale?: { value: string; label: string };
  /**
   * The operating cost this system takes off a client's books, framed as
   * what it removes. Never a savings figure: no data supports one.
   */
  solution: { industry: string; cost: string; fix: string };
  /**
   * What the system took the place of, as before-and-after pairs. At least
   * three, each one traceable to the cost and fix above — no invented detail.
   */
  replaced: [Replacement, Replacement, Replacement, ...Replacement[]];
};

export type Replacement = { was: string; now: string };

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
    scale: { value: "1,500+", label: "agents on the platform" },
    solution: {
      industry: "Real estate",
      cost: "A subscription for every agent, for every tool.",
      fix: "Instead of paying per seat for separate transaction, listing, and back-office software, the brokerage runs on one platform it owns — a single office system serving 1,500+ agents.",
    },
    replaced: [
      {
        was: "A per-agent subscription for transaction software",
        now: "Transactions run in the brokerage's own office system",
      },
      {
        was: "A separate paid tool for property listings",
        now: "Listings managed on the same platform",
      },
      {
        was: "Back-office software licensed seat by seat",
        now: "One back office for agents, administrators, and operations — owned outright",
      },
    ],
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
    solution: {
      industry: "Racket sports",
      cost: "Bookings, entries, and payments spread across apps.",
      fix: "Clubs, tournaments, courts, and coaching on one platform: court owners take online and walk-in bookings, and organisers run entries, payments, and brackets in one place.",
    },
    replaced: [
      {
        was: "Games that count for nothing once they are over",
        now: "Every queue and tournament game earns rating, so players climb the ranks the way they would in a MOBA",
      },
      {
        was: "Open-play rotations called by hand",
        now: "Open-play queues kept fair by skill level or by number of games played",
      },
      {
        was: "Registrations, payments, and brackets in separate tools",
        now: "Tournaments run in one place, from registration to champion",
      },
      {
        was: "Club admin and court bookings spread across apps",
        now: "Club management, with online and walk-in bookings, on the same platform",
      },
      {
        was: "Coaching arranged outside the club's system",
        now: "Coaching sessions run alongside everything else",
      },
    ],
  },
  {
    slug: "quansys",
    name: "Quansys",
    year: "2019 — present",
    role: "Featured · Built solo",
    oneLiner:
      "Accounting, purchase-order, and inventory software running a multi-branch gasoline station.",
    description:
      "One process flow every branch follows — purchase orders, receivables, inventory, reconciliation, and daily operations — for a family-operated fuel business in Cagayan de Oro.",
    image: "/projects/apex-dashboard.png",
    imageAlt: "Quansys sales dashboard",
    stack: ["Laravel", "PHP", "MariaDB", "NGINX"],
    url: "https://quansys.apexfuelstation.com",
    solution: {
      industry: "Fuel retail · accounting",
      cost: "Every branch with its own spreadsheet.",
      fix: "One process flow every branch follows, so daily revenue, purchase-order, and inventory reports come out exact and comparable — instead of each branch running the day in its own Excel workbook and the numbers reconciled after the fact.",
    },
    replaced: [
      {
        was: "Each branch keeping its own Excel workbooks",
        now: "One system every branch enters into",
      },
      {
        was: "A different day-to-day method at every branch",
        now: "One process flow every branch follows",
      },
      {
        was: "Daily revenue totalled from branch spreadsheets",
        now: "A precise daily revenue report from the day's own entries",
      },
      {
        was: "Purchase orders tracked in separate files",
        now: "Purchase orders raised and tracked in one place",
      },
      {
        was: "Inventory counted a different way at each branch",
        now: "An inventory report built from the same records",
      },
    ],
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
    solution: {
      industry: "AI software",
      cost: "Billing that fails quietly.",
      fix: "Stripe webhooks built idempotent, so a retried event never charges or credits a customer twice — and nobody has to untangle it by hand later.",
    },
    replaced: [
      {
        was: "A retried Stripe event able to charge or credit twice",
        now: "Idempotent webhooks that apply each event once",
      },
      {
        was: "Billing mistakes untangled by hand after the fact",
        now: "Billing that stays consistent without manual cleanup",
      },
      {
        was: "Grant drafts started from a blank page",
        now: "Claude and OpenAI integrations behind the core writing features",
      },
    ],
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
    solution: {
      industry: "Education",
      cost: "Enrollment handled one paper form at a time.",
      fix: "Freshman and transferee applications taken online, with student accounts and staff screens to review and enroll each applicant in the same system.",
    },
    replaced: [
      {
        was: "Paper application forms for freshmen and transferees",
        now: "Online admissions for both",
      },
      {
        was: "Student records kept apart from the application",
        now: "Student accounts in the same system",
      },
      {
        was: "Each applicant's form processed by hand",
        now: "Staff screens to review and enroll every applicant",
      },
    ],
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
    solution: {
      industry: "Retail · ecommerce",
      cost: "Sales that only happen in the aisle.",
      fix: "Online grocery ordering for a membership superstore chain — browsing, cart, and checkout, plus the integrations that carry each order through.",
    },
    replaced: [
      {
        was: "Shopping only possible in the store",
        now: "Online grocery ordering for members",
      },
      {
        was: "Walking the aisles to see what is stocked",
        now: "Product browsing online",
      },
      {
        was: "Checkout only at the till",
        now: "Online cart and checkout, with integrations carrying each order through",
      },
    ],
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
    solution: {
      industry: "Hospitality · charter",
      cost: "Bookings chased by hand.",
      fix: "Dates sync to the calendars on both sides, contracts are handled in the same flow, and every enquiry lands in GoHighLevel for follow-up without anyone copying it across.",
    },
    replaced: [
      {
        was: "Charter dates entered into each calendar by hand",
        now: "Dates synced to the calendars on both sides",
      },
      {
        was: "Contracts sent and chased separately",
        now: "Contracts handled inside the booking flow",
      },
      {
        was: "Enquiries copied into the CRM by hand",
        now: "Every enquiry lands in GoHighLevel automatically",
      },
    ],
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
    solution: {
      industry: "B2B lead generation",
      cost: "Prospect research done by hand.",
      fix: "AI gathers prospects and verifies each one before it reaches the list, so nobody spends their week scraping sites.",
    },
    replaced: [
      {
        was: "Scraping sites for prospects by hand",
        now: "AI gathers the prospects",
      },
      {
        was: "Checking each prospect one at a time",
        now: "Every prospect verified before it reaches the list",
      },
      {
        was: "Cold lists with no reason to reach out",
        now: "Leads targeted on each prospect's pain points",
      },
    ],
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
