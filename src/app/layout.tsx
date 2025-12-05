import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./components/Sidebar";
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
  title: "Nicholas McGuffin - Portfolio",
  description: "Software Engineer experienced in React, Next.js, integrations, and backend systems. Explore projects, experience, and contact information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex w-3/4 mx-auto h-screen">
          <Sidebar/>
          <main className="flex-1 overflow-y-auto p-8 space-y-24">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
