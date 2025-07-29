import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mudra Patel",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${dmSans.variable} scroll-smooth snap-y snap-proximity`}>
      <body className="antialiased">
        <Navbar />
        {children}
        </body>
    </html>
  );
}