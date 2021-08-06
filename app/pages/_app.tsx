import "@styles/_app.scss";
import type { AppProps } from "next/app";
import React from "react";
import Footer from "@components/molecules/Footer/Footer";
import HTMLHead from "@components/molecules/HTMLHead/HTMLHead";
import Navigation from "@components/molecules/Navigation/Navigation";
import useRedux from "@hooks/useRedux.hook";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useRedux.store(pageProps.initialReduxState);
  
  return (
    <Provider store={store}>
      <div id="_app">
        <HTMLHead />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
};

export default MyApp;
