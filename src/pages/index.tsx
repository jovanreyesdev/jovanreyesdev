import React from "react";
import Head from "next/head";

import PageHeader from "@/sections/PageHeader";
import About from '@/sections/About';
import WhyMe from '@/sections/WhyMe';
import Resume from '@/sections/Resume';
import Portfolios from '@/sections/Portfolios';
import Recommendations from '@/sections/Recommendations';
import CompaniesHelped from '@/sections/CompaniesHelped';
import Gallery from '@/sections/Gallery';
import Footer from '@/sections/Footer';

function Home() {
  return (
    <main>
      <PageHeader />
      <About />
      <WhyMe />
      <Resume />
      <Recommendations />
      <Portfolios />
      <CompaniesHelped />
      <Gallery />
      <Footer />
    </main>
  );
}

export default Home;
