import { urls } from "./urls";

export const siteConfig = {
  name: "Coral Infantil de Setúbal",
  applicationName: "cis001",
  template: "%s | Coral Infantil de Setúbal",
  url: urls.website,
  generator: "Next.js",
  description:
    "Gostas de cantar? Tens entre 6 e 16 anos? Então estás à espera do quê para pertenceres a esta família?",
  keywords: ["Coral Infantil de Setúbal", "Coro Infantil", "Coro Setúbal"],
  links: {
    instagram: urls.instagram,
    facebook: urls.facebook,
    email: urls.email,
  },
  authors: [
    {
      name: "Rodrigo Santos",
      url: "https://rodrigosantos.dev",
    },
  ],
  creator: "RodrigoRafaelSantos7",
  alternates: {
    canonical: urls.website,
    languages: {
      "pt-PT": urls.website,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Coral Infantil de Setúbal",
    description:
      "Gostas de cantar? Tens entre 6 e 16 anos? Então estás à espera do quê para pertenceres a esta família?",
    url: urls.website,
    siteName: "Coral Infantil de Setúbal",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "https://cdn.coralinfantilsetubal.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Coral Infantil de Setúbal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coral Infantil de Setúbal",
    description:
      "Gostas de cantar? Tens entre 6 e 16 anos? Então estás à espera do quê para pertenceres a esta família?",
    images: ["https://cdn.coralinfantilsetubal.com/og-image.webp"],
    creator: "@RodrigoRafaelSantos7",
  },
  manifest: "https://coralinfantilsetubal.com/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export type SiteConfig = typeof siteConfig;
