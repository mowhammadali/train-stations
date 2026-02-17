import type { Metadata } from "next";
import { type ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/color.css";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Train Station",
  description:
    "Interactive map of train stations with city filtering, real-time data visualization, and location insights.",
  keywords: [
    "train stations",
    "railway map",
    "transportation map",
    "interactive map",
    "Next.js map app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
