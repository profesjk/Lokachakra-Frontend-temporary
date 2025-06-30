import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokachakra | Decentralized Innovation Ecosystem",
  description:
    "Lokachakra is a pioneering decentralized ecosystem fostering collaborative innovation, transparency, and distributed rewards. Join a trustless framework uniting students, entrepreneurs, academia, and organizations.",
  keywords: [
    "Lokachakra",
    "decentralized innovation",
    "open collaboration",
    "web3 ecosystem",
    "innovation network",
    "collaborative platform",
    "distributed rewards",
    "trustless collaboration",
    "open innovation",
    "decentralized community",
  ],
  authors: [{ name: "Lokachakra Team" }],
  creator: "Lokachakra",
  openGraph: {
    title: "Lokachakra | Decentralized Innovation Ecosystem",
    description:
      "Breaking down silos with trustless collaboration and incentivized participation. Join Lokachakra and shape the future of decentralized innovation.",
    url: "https://lokachakra.com", // Replace with your actual domain
    siteName: "Lokachakra",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <main className="min-h-screen pt-0">{children}</main>
      </body>
    </html>
  );
}
