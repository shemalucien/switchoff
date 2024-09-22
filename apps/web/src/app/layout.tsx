// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Switchoffdrinks",
//   description: "Switchoffdrinks Branding Website",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }): JSX.Element {
//   return (
//     <html lang="en">
//       <head>
//       <link rel="icon" href="/icon.png" sizes="32x32"/>
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    images: string[];
  };
  twitter?: {
    card: string;
    site: string;
  };
}

export const metadata: Metadata = {
  title: "Switchoffdrinks",
  description: "Experience innovative beverage branding solutions with Switchoffdrinks. Discover refreshing designs and marketing strategies tailored for your drink brand.",
  openGraph: {
    title: "Experience innovative beverage branding solutions with Switchoffdrinks",
    description: "Discover refreshing designs and marketing strategies tailored for your drink brand",
    images: ["icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Switchoffdrinks",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Best Energy Drinks, Switchoff Energy Drink, Switchoff Nice Guarana, Quality Beverages, Superior Drinks, beverage branding, innovative drinks, Switchoffdrinks" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.switchoffdrinks.com" />
        {metadata.openGraph && (
          <>
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:image" content={metadata.openGraph.images[0]} />
          </>
        )}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:site" content={metadata.twitter.site} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" sizes="32x32" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

