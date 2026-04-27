import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { SITE } from "./lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Kevin Pallado is a fullstack developer based in Cagayan de Oro, Philippines. Seven years shipping production systems across PHP, Python, React, and AWS — end-to-end ownership across LondonFoster, Quansys, Grantable, and Fraia.",
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  keywords: [
    "Kevin Pallado",
    "Fullstack Developer",
    "Laravel",
    "Next.js",
    "Philippines",
    "Cagayan de Oro",
    "Remote developer",
    "PHP",
    "Python",
    "React",
    "AWS",
    "Stripe",
    "Claude API",
    "MCP",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Fullstack developer building systems that run real businesses — LondonFoster, Quansys, Grantable, Fraia.",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Fullstack developer building systems that run real businesses. Seven years across PHP, Python, React and AWS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE.url },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  alternateName: SITE.name,
  jobTitle: SITE.role,
  email: `mailto:${SITE.email}`,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cagayan de Oro",
    addressCountry: "PH",
  },
  sameAs: [SITE.linkedin],
  knowsAbout: [
    "Laravel",
    "PHP",
    "Python",
    "React",
    "Next.js",
    "AWS",
    "Stripe integrations",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#top"
          style={{
            position: "absolute",
            left: -10000,
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
