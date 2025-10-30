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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100`}
      >
        {/* Background system: vignette, dots, blobs, shapes */}
        <div aria-hidden className="site-bg">
          <div className="bg-vignette" />
          <div className="bg-dots" />
          {/* blobs */}
          <div className="blob blob-fuchsia -left-28 -top-28 h-112 w-md rounded-full" />
          <div className="blob blob-indigo right-0 top-24 h-104 w-104 rounded-full" />
          <div className="blob blob-blue left-1/3 bottom-6 h-88 w-88 rounded-full" />
          {/* shapes */}
          <div className="shape shape-circle left-16 top-48 h-12 w-12" />
          <div className="shape shape-square right-32 top-64 h-12 w-12" />
          <div className="shape shape-diamond right-1/3 bottom-48 h-8 w-8" />
          <div className="shape-hex left-1/4 top-36" />
          <div className="shape-triangle right-1/4 top-28" />
        </div>
        {children}
      </body>
    </html>
  );
}
