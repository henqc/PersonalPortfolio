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

const robotoslablight = localFont({
  src: [
    {
      path: "../utils/fonts/RobotoSlab-ExtraLight.ttf",
    },
  ],
  variable: "--font-roboto-slab-light",
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
    <html
      lang="en"
      className={`${gambarino.variable} ${robotoslab.variable} ${robotoslablight.variable} scroll-smooth`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
