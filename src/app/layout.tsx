import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SITE } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Geist (the real Vercel font) isn't distributed via next/font/google.
// Manrope is used here as a close-fit display fallback mapped to the
// same --font-geist CSS variable: a geometric grotesque with the same
// tight, technical character the brief's "Vercel/Linear" direction calls
// for. To use the actual Geist font instead: `npm install geist`, then
// swap this import for `import { GeistSans } from "geist/font/sans"` and
// use `GeistSans.variable` below.
const geist = Manrope({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rishavsharma.dev"),
  title: {
    default: `${SITE.name} — AI Builder & Developer`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Rishav Sharma is a Class XII Science student building software, automation systems, and AI-powered products. Explore projects, journey, and skills.",
  keywords: [
    "Rishav Sharma",
    "AI Builder",
    "Software Developer",
    "Student Developer Portfolio",
    "Python Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    title: `${SITE.name} — AI Builder & Developer`,
    description:
      "Building software, automation systems, and AI-powered products while balancing Class XII Science.",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI Builder & Developer`,
    description:
      "Building software, automation systems, and AI-powered products while balancing Class XII Science.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mono.variable} ${geist.variable} font-body antialiased bg-void text-ivory`}
      >
        <div className="noise-overlay" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
