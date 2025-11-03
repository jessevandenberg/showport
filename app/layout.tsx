import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesse van den Berg • Portfolio",
  description: "Showcase portfolio of Jesse van den Berg – ICT student & front-end.",
  metadataBase: new URL("https://example.com"),
  authors: [{ name: "Jesse van den Berg" }],
  keywords: [
    "Portfolio",
    "Front-end",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
