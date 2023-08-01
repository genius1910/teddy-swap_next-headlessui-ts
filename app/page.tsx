import "../app/globals.css";
import Dash_Section1 from "@/components/dashboard/Dash_Section1";
import Navbar from "@/components/partials/Navbar";
import React from "react";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const LandingPage = () => {
  return (
    <main>
      <Dash_Section1 />
    </main>
  );
};

export default LandingPage;
