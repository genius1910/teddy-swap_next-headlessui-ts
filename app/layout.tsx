"use client";
import React from "react";
import Navbar from "@/components/partials/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
// import { Metadata } from "next";
import { usePathname } from "next/navigation";

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
  const calculateZoom = (width: number) => {
    const minWidth = 1920;
    const maxWidth = 3840;
    const baseZoom = 100;
    const zoomRange = 100 - 72;
    const widthRange = maxWidth - minWidth;

    // Calculate the ratio of current width within the range of minWidth and maxWidth
    const widthRatio = (width - minWidth) / widthRange;

    // Calculate the new zoom value
    const newZoom = baseZoom - widthRatio * zoomRange;

    // Return the clamped zoom value between 100 and 72
    return Math.max(72, Math.min(100, newZoom));
  };

  const zoom = (size?.width && calculateZoom(size.width)) || 100;

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <div
          style={{
            maxWidth: `${pathname == "/" ? "1620" : "1420"}px`,
          }}
          className={`mx-auto my-10 px-4`}
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

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
