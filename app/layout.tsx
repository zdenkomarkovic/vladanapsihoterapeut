import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_AUTHOR, SITE_EMAIL } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vladana Stanković | KBT Psihoterapeut",
    template: "%s | Vladana Stanković",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "KBT psihoterapeut",
    "kognitivno-bihejvioralna terapija",
    "online psihoterapija",
    "psihoterapija Srbija",
    "anksioznost",
    "depresija",
    "PTSP",
    "panični napadi",
    "asertivna komunikacija",
    "Vladana Stanković",
    "online sesije",
    "psihoterapija za mame",
  ],
  authors: [{ name: SITE_AUTHOR }],
  creator: SITE_AUTHOR,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Vladana Stanković | KBT Psihoterapeut",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vladana Stanković | KBT Psihoterapeut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vladana Stanković | KBT Psihoterapeut",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
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
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vladana Stanković",
  jobTitle: "KBT Psihoterapeut pod supervizijom",
  description:
    "Diplomirana psiholog i KBT psihoterapeut pod supervizijom. Pruža online individualnu psihoterapiju, vodi grupu za mame i drži radionice asertivne komunikacije.",
  url: SITE_URL,
  email: SITE_EMAIL,
  sameAs: [
    "https://www.instagram.com/unutrasnjiglasmame",
    "https://www.tiktok.com/@unutrasnji.glas.m6E",
  ],
  knowsAbout: [
    "Kognitivno-bihejvioralna terapija",
    "Anksioznost",
    "Panični napadi",
    "Socijalna anksioznost",
    "Depresija",
    "PTSP",
    "Stres",
    "Asertivna komunikacija",
    "Roditeljstvo",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diploma iz psihologije",
      description: "Filozofski fakultet, Niš (2016)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Master iz psihologije",
      description: "Filozofski fakultet, Niš (2025)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "KBT psihoterapeut pod supervizijom — SRABCT (2022)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Instruktor asertivne komunikacije — SRABCT (2016)",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Individualne psihoterapijske seanse",
        description: "Online individualne seanse za odrasle zasnovane na KBT pristupu.",
        url: `${SITE_URL}/individualne-seanse`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Zajednica mama",
        description: "Stručno vođena mala online grupa za mame i trudnice.",
        url: `${SITE_URL}/zajednica-mama`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Radionice asertivne komunikacije",
        description: "Grupne i individualne radionice za razvoj veština komunikacije.",
        url: `${SITE_URL}/radionice`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Paket podrške",
        description: "4 individualne online sesije mesečno za mame i trudnice.",
        url: `${SITE_URL}/paket-podrske`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${cormorant.variable} ${lato.variable}`}>
      <body>
        <JsonLd data={personSchema} />
        {children}
      </body>
    </html>
  );
}
