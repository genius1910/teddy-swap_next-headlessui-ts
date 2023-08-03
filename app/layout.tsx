"use client";
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
  console.log({ pathname });
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
      </body>
    </html>
  );
}
