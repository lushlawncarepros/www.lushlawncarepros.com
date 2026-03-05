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
  title: "Lush Lawn Care Pros – Premium Lawn Care in Boise & Meridian",
  description: "Premium lawn care services in Boise and Meridian, Idaho. Expert mowing, fertilization, aeration, and more.",
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
