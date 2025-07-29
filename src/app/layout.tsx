import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const monst = Montserrat({
  variable: "--font-mon",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



const avegas = localFont({
  src: [
    {
      path: '../../fonts/AvegasRoyale-italic.ttf',
      weight:"400",
    },
    {path: "../../fonts/AvegasRoyale-regular.ttf",
     weight: "700",
    },
    {path: "../../fonts/AvegasRoyale-Bolditalic.ttf",
     weight: "700",
    },
  ],
});

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
    <html lang="en" className={`${GeistSans.variable} ${dmSans.variable} ${monst.variable} scroll-smooth snap-y snap-proximity`}>
      <body className={`antialiased ${monst.variable}`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}