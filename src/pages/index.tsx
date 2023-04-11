import React from "react";
import Head from "next/head";

import PageHeader from "@/components/PageHeader";
import About from '@/components/About';
import WhyMe from '@/components/WhyMe';

function Home() {
  return (
    <main>
      <PageHeader />
      <About />
      <WhyMe />
    </main>
  );
}

export default Home;
