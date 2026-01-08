import type { Metadata } from "next";
import {
  Alumni_Sans,
  Inter,
  Tiro_Devanagari_Sanskrit,
  Tinos,
} from "next/font/google";
import "./globals.css";

const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  variable: "--font-tiro-devanagari-sanskrit",
  subsets: ["latin"],
  weight: "400",
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Scale Business Magazine",
  description:
    "SCALE Business Magazine is a media-tech platform dedicated to elevating the way business stories are told and consumed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alumniSans.variable} ${inter.variable} ${tiroDevanagariSanskrit.variable} ${tinos.variable} antialiased bg-platinum`}
      >
        {children}
      </body>
    </html>
  );
}
