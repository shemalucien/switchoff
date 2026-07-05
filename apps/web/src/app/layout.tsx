import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.switchoffdrinks.com"),

  title: {
    default: "Switchoff Drinks",
    template: "%s | Switchoff Drinks",
  },

  description:
    "Experience innovative beverage branding solutions with Switchoff Drinks. Discover premium energy drinks, guarana beverages, and refreshing drink innovations.",

  keywords: [
    "Switchoff Drinks",
    "Energy Drink",
    "Nice Guarana",
    "Premium Drinks",
    "Original apple",
    "sv vodka energy mix",
    "Beverages",
    "Energy Beverage",
    "Soft Drinks",
  ],

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Switchoff Drinks",
    description: "Premium energy drinks and innovative beverage branding.",
    url: "https://www.switchoffdrinks.com",
    siteName: "Switchoff Drinks",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Switchoff Drinks",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Switchoff Drinks",
    description: "Premium energy drinks and innovative beverage branding.",
    images: ["/icon.png"],
    creator: "@Switchoffdrinks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
