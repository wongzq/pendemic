import "@styles/_app.scss";
import type { AppProps } from "next/app";
import React from "react";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Navigation from "@components/Navigation/Navigation";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div id="_app">
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
