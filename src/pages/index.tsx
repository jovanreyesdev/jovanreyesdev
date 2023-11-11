import React from "react";
import Head from "next/head";

import PageHeader from "@/sections/PageHeader";
import About from '@/sections/About';
import Portfolios from '@/sections/Portfolios';
import Resume from '@/sections/Resume';
import CompaniesHelped from '@/sections/CompaniesHelped';
import Footer from '@/sections/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>Jovandev</title>
      </Head>
      <main>
        <PageHeader />
        <About />
        <Portfolios />
        <Resume />
        <CompaniesHelped />
        <Footer />
      </main>
    </>
  );
}

export default Home;
