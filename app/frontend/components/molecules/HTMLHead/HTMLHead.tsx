import React from "react";
import Head from "next/head";

type HTMLHeadProps = {};

const HTMLHead: React.FC<HTMLHeadProps> = () => {
  return (
    <Head>
      <title>Pendemic</title>

      <meta
        name="description"
        content="Plan your stories and write your novel, all in one place!"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default HTMLHead;
