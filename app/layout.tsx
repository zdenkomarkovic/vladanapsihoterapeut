import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Vladana Stanković | KBT Psihoterapeut",
    template: "%s | Vladana Stanković",
  },
  description:
    "Psihološka podrška — prostor za razumevanje sebe, emocija i odnosa. Online individualne seanse, zajednica mama i radionice asertivne komunikacije.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Vladana Stanković | KBT Psihoterapeut",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${cormorant.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
