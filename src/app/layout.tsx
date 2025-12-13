import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick McGuffin - Full Stack Developer Portfolio",
  description: "Professional portfolio showcasing modern web development skills, projects, and experience in full-stack development.",
  keywords: ["web developer", "full stack", "React", "Next.js", "portfolio", "TypeScript"],
  authors: [{ name: "Nick McGuffin" }],
  creator: "Nick McGuffin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // TODO: Update to url when deployed.
    title: "Nick McGuffin - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing modern web development skills, projects, and experience in full-stack development.",
    siteName: "Nick McGuffin Portfolio",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
