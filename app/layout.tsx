import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Bodoni_Moda, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-poster",
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Musubi.Collective",
  description: "An open circle of friends. Berlin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${bebasNeue.variable} ${spaceMono.variable} ${bodoniModa.variable} ${barlowCondensed.variable} font-body antialiased`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
