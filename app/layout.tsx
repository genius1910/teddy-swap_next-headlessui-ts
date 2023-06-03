"use client";
import Navbar from "@/components/partials/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teddyswap",
  description: "Use 100% Brains",
  icons: {
    icon: "/images/logo/small-primary.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <div className=" max-w-[1400px] mx-auto my-10">{children}</div>
      </body>
    </html>
  );
}
