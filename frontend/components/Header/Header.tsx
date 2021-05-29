import React from "react";
import Head from "next/head";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
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
export default Header;
