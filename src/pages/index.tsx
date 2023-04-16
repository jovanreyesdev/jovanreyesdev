import React from "react";
import Head from "next/head";

import PageHeader from "@/components/PageHeader";
import About from '@/components/About';
import WhyMe from '@/components/WhyMe';
import Resume from '@/components/Resume';
import Portfolios from '@/components/Portfolios';
import CompaniesHelped from '@/components/CompaniesHelped';

function Home() {
  return (
    <main>
      <PageHeader />
      <About />
      <WhyMe />
      <Resume />
      <Portfolios />
      <CompaniesHelped />
    </main>
  );
}

export default Home;
