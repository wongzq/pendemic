import "@styles/_app.scss";
import type { AppProps } from "next/app";
import React from "react";
import Footer from "@components/molecules/Footer/Footer";
import HTMLHead from "@components/molecules/HTMLHead/HTMLHead";
import Navigation from "@components/molecules/Navigation/Navigation";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div id="_app">
      <HTMLHead />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
