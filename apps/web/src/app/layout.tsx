import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWITCHOFF",
  description: "SWITCHOFF Branding Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon.png" sizes="32x32"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
