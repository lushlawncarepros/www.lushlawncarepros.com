import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Footer } from "@/components/Footer";
import { BotpressScript } from "@/components/BotpressScript";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lushlawncarepros.com"),
  title: "Boise Lawn Care & Yard Maintenance | Lush Lawn Care Pros",
  description: "Lush Lawn Care Pros delivers premier lawn maintenance and landscaping services across the Boise area. Get a pristine yard today. Call 208-906-3220 for a free quote.",
  openGraph: {
    title: "Boise Lawn Care & Yard Maintenance | Lush Lawn Care Pros",
    description: "Lush Lawn Care Pros delivers premier lawn maintenance and landscaping services across the Boise area. Get a pristine yard today. Call 208-906-3220 for a free quote.",
    url: "https://www.lushlawncarepros.com",
    siteName: "Lush Lawn Care Pros",
    images: [
      {
        url: "/lush-logo.png",
        width: 1200,
        height: 630,
        alt: "Lush Lawn Care Pros",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boise Lawn Care & Yard Maintenance | Lush Lawn Care Pros",
    description: "Lush Lawn Care Pros delivers premier lawn maintenance and landscaping services across the Boise area. Get a pristine yard today. Call 208-906-3220 for a free quote.",
    images: ["/lush-logo.png"],
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "US-ID",
    "geo.placename": "Boise, Idaho"
  }
};

export const viewport: Viewport = {
  themeColor: "#39B54A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <LocalBusinessSchema />
        <main className="flex-grow">
          <Breadcrumbs />
          {children}
        </main>
        <Footer />

        {/* ── Botpress v3.6 — two-script sovereign pattern ──────────────────
            Script 1: SDK engine (inject.js) loaded immediately for performance
            Script 2: Config file is loaded dynamically by BotpressScript to enforce delay */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
          strategy="afterInteractive"
        />

        {/* ── Botpress Initialization Logic ─────────────────────────────────
            Delays the actual .init() call to prevent blocking the hero view. */}
        <BotpressScript />
      </body>
    </html>
  );
}
