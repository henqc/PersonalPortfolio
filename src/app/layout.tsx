import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
