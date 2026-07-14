import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const siteUrl = "https://minotaurg.github.io";

export const metadata: Metadata = {
  title: {
    default: "MinotaurG | Aditya Shubham - Software Engineer",
    template: "%s | MinotaurG",
  },
  description:
    "Software engineer building across TypeScript, Rust, Go, Python, and Java. Published open-source packages, shipped e-commerce platforms, and built ML pipelines. Open to engineering roles.",
  keywords: [
    "Aditya Shubham",
    "MinotaurG",
    "software engineer",
    "full stack developer",
    "TypeScript",
    "Rust",
    "Go",
    "Python",
    "Java",
    "React",
    "Next.js",
    "open source",
  ],
  authors: [{ name: "Aditya Shubham", url: siteUrl }],
  creator: "Aditya Shubham",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MinotaurG",
    title: "MinotaurG | Aditya Shubham - Software Engineer",
    description:
      "Software engineer building across TypeScript, Rust, Go, Python, and Java. Published open-source packages, shipped e-commerce platforms, and built ML pipelines.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MinotaurG - Aditya Shubham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MinotaurG | Aditya Shubham - Software Engineer",
    description:
      "Software engineer building across TypeScript, Rust, Go, Python, and Java. Open-source contributor, systems thinker, product builder.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
