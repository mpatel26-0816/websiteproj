import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mudra Patel",
  description: "Portfolio for Mudra Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}