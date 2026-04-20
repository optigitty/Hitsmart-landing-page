import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fight-scale-media.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fight Scale Media — Content for Combat Sports Gyms",
  description:
    "Social media content that grows combat sports gyms. Built by a fighter.",
  openGraph: {
    title: "Fight Scale Media — Content for Combat Sports Gyms",
    description:
      "Social media content that grows combat sports gyms. Built by a fighter.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Fight Scale Media",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
