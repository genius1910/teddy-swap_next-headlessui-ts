"use client";
import React from "react";
import Navbar from "@/components/partials/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
// import { Metadata } from "next";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hook/useWindowSize";
import { calculateZoom } from "@/utils/calculateZoom";
import Head from "next/head";
const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Teddyswap",
//   description: "Use 100% Brains",
//   icons: {
//     icon: "/images/logo/small-primary.png",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const size = useWindowSize();

  const zoom = (size?.width && calculateZoom(size.width)) || 100;

  return (
    <html lang="en">
      <Head>
        <title>Teddyswap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="TeddySwap is a decentralized exchange and automated liquidity protocol for stablecoins."
        />
        <link rel="icon" href="/images/logo/small-primary.png" />
      </Head>
      <body className={montserrat.className}>
        <Navbar />
        <div
          className={`mx-auto my-10 px-4 ${
            pathname == "/"
              ? "lg:max-w-6xl 2xl:max-w-[1620px]"
              : "max-w-[1420px]"
          }`}
        >
          {children}
        </div>
        <style jsx global>
          {`
            body {
              zoom: ${zoom}%;
            }
          `}
        </style>
      </body>
    </html>
  );
}
