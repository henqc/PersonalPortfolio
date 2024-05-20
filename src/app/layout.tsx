import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const gambarino = localFont({
  src: [
    {
      path: "../utils/fonts/Gambarino-Regular.otf",
    },
  ],
  variable: "--font-gambarino",
});

const robotoslab = localFont({
  src: [
    {
      path: "../utils/fonts/RobotoSlab-Regular.ttf",
    },
  ],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Henrys Portfolio",
  description: "A minimalist JS portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gambarino.variable} ${robotoslab.variable}`}>
      <body>{children}</body>
    </html>
  );
}
