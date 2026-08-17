import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritik Rauniyar — AI Engineer & IT Head",
  description:
    "Ritik Rauniyar is an AI Engineer and IT Head building intelligent enterprise software, AI-powered platforms, and scalable cloud infrastructure.",
  keywords: [
    "Ritik Rauniyar",
    "AI Engineer",
    "IT Head",
    "Full Stack Developer",
    "KLFPRO",
    "Enterprise Software",
    "Next.js",
    "React",
    "Python",
  ],
  authors: [{ name: "Ritik Rauniyar" }],
  creator: "Ritik Rauniyar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ritik Rauniyar — AI Engineer & IT Head",
    description:
      "Building intelligent enterprise software, AI-powered platforms, and scalable cloud infrastructure.",
    siteName: "Ritik Rauniyar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Rauniyar — AI Engineer & IT Head",
    description:
      "Building intelligent enterprise software, AI-powered platforms, and scalable cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
