import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteTopBar } from "../components/site-top-bar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: "Neel Maheshwari | Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering portfolio for Neel Maheshwari, focused on CAD, prototyping, thermal systems, robotics, and product development.",
  openGraph: {
    title: "Neel Maheshwari | Mechanical Engineering Portfolio",
    description:
      "CAD, prototyping, thermal systems, robotics, and product development.",
    images: ["/images/proteinpal/prototype.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable}`}>
        <SiteTopBar />
        {children}
      </body>
    </html>
  );
}
