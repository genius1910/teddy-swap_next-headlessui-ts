"use client";
import React from "react";
import dynamic from 'next/dynamic';

import "./globals.css";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hook/useWindowSize";
import { calculateZoom } from "@/utils/calculateZoom";
import { observer } from "mobx-react-lite";

const Navbar = dynamic(() => import("@/components/partials/Navbar"), { ssr: false });

const montserrat = Montserrat({ subsets: ["latin"] });

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const size = useWindowSize();

  const zoom = (size?.width && calculateZoom(size.width)) || 100;

  return (
    <html lang="en">
      <head>
        <title>Teddyswap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="TeddySwap is a decentralized exchange and automated liquidity protocol for stablecoins."
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/logo/small-primary.png"
        />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <div
          className={`mx-auto my-8  ${
            pathname == "/" ? "lg:max-w-full 2xl:max-w-full" : "max-w-[1420px]"
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

export default observer(RootLayout);
