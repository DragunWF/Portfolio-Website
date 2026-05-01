import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ArcaneBackground from "./_components/layout/ArcaneBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc Plarisan | Software Engineer",
  description: "Interactive Developer Portfolio showcasing enterprise-level backend expertise and game development achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-slate-950`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200">
        <ArcaneBackground />
        <main className="relative z-10 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
