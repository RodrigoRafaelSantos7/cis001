import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import {
  Charm,
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Inter,
} from "next/font/google";
import { ConvexClientProvider } from "@/components/app/convex-client-provider";

import "./globals.css";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: siteConfig.template,
  },
  applicationName: siteConfig.applicationName,
  generator: siteConfig.generator,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.authors[0]?.url,
  alternates: siteConfig.alternates,
  icons: siteConfig.icons,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  manifest: siteConfig.manifest,
  robots: siteConfig.robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${geistSans.variable} ${charm.variable} ${geistMono.variable} ${instrumentSerif.variable} ${inter.variable} antialiased`}
      >
        <ConvexClientProvider>
          {children}
          <Analytics />
          <Toaster richColors />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
