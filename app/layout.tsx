import type { Metadata, Viewport } from "next";
import { Barlow, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const description =
  "ValleOS is a dispatch operating system for small trucking companies. Evaluate the real economics of every load, verify dispatch readiness, execute from the driver's phone, and close with proof — from one system.";

export const metadata: Metadata = {
  metadataBase: new URL("https://valleos.com"),
  title: {
    default: "ValleOS — Know the load before you take the load",
    template: "%s · ValleOS",
  },
  description,
  keywords: [
    "dispatch software",
    "trucking operating system",
    "load profitability",
    "motor carrier",
    "owner operator",
    "HOS compliance",
    "freight dispatch",
  ],
  openGraph: {
    title: "ValleOS — Know the load before you take the load",
    description,
    type: "website",
    siteName: "ValleOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValleOS — Know the load before you take the load",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080d14",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} ${plexMono.variable} antialiased`}>
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
