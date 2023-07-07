import React from "react";
import Head from "next/head";

import IntroForm from "../components/IntroForm";

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Introduction</title>
        <meta name="Introduction" content="Tell me about yourself" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <IntroForm />
      </main>
    </>
  );
};

export default Introduction;
